
use std::thread;

pub (crate) fn spawn_thread () {
    let handle = thread::spawn(move || {
        // Do some work here in the thread.
    });

    // ? Why run handle.join(); to continue the thread performance.
    return handle;
}

// create some kind of thread checking device (per thread performance)
// If one is stuggeling, then pick a different one.
