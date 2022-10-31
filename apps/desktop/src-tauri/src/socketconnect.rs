use websocket::{Client, Message};
use websocket::client::request::Url;

fn test() {
    let url = Url::parse("ws://127.0.0.1:1234").unwrap(); // Get the URL
    let request = Client::connect(url).unwrap(); // Connect to the server
    let response = request.send().unwrap(); // Send the request
    response.validate().unwrap(); // Ensure the response is valid

    let mut client = response.begin(); // Get a Client

    let message = Message::text("Hello, World!");
    client.send_message(&message).unwrap(); // Send message
}