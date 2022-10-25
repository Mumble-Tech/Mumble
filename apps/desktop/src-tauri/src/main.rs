#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use opencv::{highgui, prelude::*, videoio, Result};
mod window;

fn main() {
     // use_camera();
    // window::create_window("Preview Window");
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![record])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// Get the camera device and record the screen.
fn use_camera() -> Result<(), opencv::Error> {  
   opencv::opencv_branch_32! {
       let mut cam = videoio::VideoCapture::new_default(0)?;
   }

   opencv::not_opencv_branch_32! {
       let mut cam = videoio::VideoCapture::new(0, videoio::CAP_ANY)?; // 0 is default camera
   }

   // temp error handle

   let opened = videoio::VideoCapture::is_opened(&cam)?;
   if !opened {
        println!("Unable to open default camera");
   }
   // for each frame in the recording start
   loop {
       let mut frame = Mat::default();
      cam.read(&mut frame)?;
       if frame.size()?.width > 0 {
            // show on the gui
           highgui::imshow("Preview Window", &mut frame)?;
       }
       let key = highgui::wait_key(10)?;
        if key > 0 && key != 255 {
            break;
        }
   }
   Ok(())
 }


#[tauri::command]
fn record() {
  use_camera(); 
}
