#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use opencv::{highgui, prelude::*, videoio, imgcodecs, Result};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    use_camera();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![record])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// get camera device
fn use_camera() -> Result<()> {  

   let window = "video capture";
   highgui::named_window(window, highgui::WINDOW_AUTOSIZE)?;
   opencv::opencv_branch_32! {
       let mut cam = videoio::VideoCapture::new_default(0)?;
   }

   opencv::not_opencv_branch_32! {
       let mut cam = videoio::VideoCapture::new(0, videoio::CAP_ANY)?; // 0 is default camera
   }

   let opened = videoio::VideoCapture::is_opened(&cam)?;
   if !opened {
        println!("Unable to open default camera");
   }
   loop {
       let mut frame = Mat::default();
      cam.read(&mut frame)?;
       if frame.size()?.width > 0 {
           highgui::imshow(window, &mut frame)?;
       }
       let key = highgui::wait_key(10)?;
        if key > 0 && key != 255 {
            break;
        }
   }
   Ok(())
 }

fn record_window() -> Result<()> {
    let image = imgcodecs::imread("lena.jpg", 0)?;
    highgui::named_window("hello opencv!", 0)?;
    highgui::imshow("hello opencv!", &image);
    highgui::wait_key(10000)?;
    Ok(())
}

#[tauri::command]
fn record() {
  use_camera(); 
}
