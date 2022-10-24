use opencv::{highgui};

// create the opencv recording window.
pub(crate) fn create_window (window_name: &str) -> Result<(), opencv::Error> {
    let created_window_name = window_name;
    let created_window = highgui::named_window(created_window_name, highgui::WINDOW_AUTOSIZE);
    
    return created_window;
}