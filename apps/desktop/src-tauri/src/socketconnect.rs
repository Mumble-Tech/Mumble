use websocket::{Client, Message};
use websocket::client::request::Url;
use thread;


pub(crate) fn test() {
    // TODO: Spawn another thread for all websocket tasks, one for audio, a seperate for video.
    // ! Eventually I would like to load this through another thread.
    let new_thread = spawn_thread();
    new_thread.join();
    let url = Url::parse("ws://127.0.0.1:8080/ws").unwrap(); // Get the URL
    let request = Client::connect(url).unwrap(); // Connect to the server
    let response = request.send().unwrap(); // Send the request
    response.validate().unwrap(); // Ensure the response is valid

    let mut client = response.begin(); // Get a Client

    let message = Message::text("Hello, World!");
    client.send_message(&message).unwrap(); // Send message
}
