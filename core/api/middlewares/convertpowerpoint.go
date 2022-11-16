package middlewares

import "github.com/thecodingmachine/gotenberg-go-client/v7"

// SaveAsPDF converts a powerpoint file to pdf => Only on the Application, this will not save to the database
// the reference to the file is saved in the database
func SaveAsPDF(filename string, path string, dest string) {
	// manage the client => like cors
	c := &gotenberg.Client{Hostname: "http://localhost:3000"}
	// get the document
	doc, _ := gotenberg.NewDocumentFromPath(filename, path)
	req := gotenberg.NewOfficeRequest(doc)

	// save the file
	err := c.Store(req, dest)
	if err != nil {
		return
	}
}
