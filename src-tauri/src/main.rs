// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;
use window_vibrancy::apply_mica;

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();

            #[cfg(target_os = "windows")]
            apply_mica(&window, Some(true))
                .expect("Unsupported platform! 'apply_blur' is only supported on Windows");

            window
                .get_window("main")
                .unwrap()
                .set_decorations(true)
                .unwrap();

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
