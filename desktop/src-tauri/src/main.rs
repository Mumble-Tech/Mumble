#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use captrs::*;
use shuteye::*;
use std::time::Duration;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn StartScreenRecording () {
    let mut capturer = Capturer::new(0).unwrap();

    let (w, h) = capturer.geometry();
    let size = w as u64 * h as u64;

    loop {
        let ps = capturer.capture_frame().unwrap();

        let (mut tot_r, mut tot_g, mut tot_b) = (0, 0, 0);

        for Bgr8 { r, g, b, .. } in ps.into_iter() {
            tot_r += r as u64;
            tot_g += g as u64;
            tot_b += b as u64;
        }

        println!("Avg: {:?}", (tot_r / size, tot_g / size, tot_b / size));

        sleep(Duration::from_millis(80));
    }
}