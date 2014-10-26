Chrome Extension to Parse File Uploads

The Task
Built a chrome extension which will inject into a specific website, listen for file upload events and lastly sort the contents of the uploaded file.

The Details
A few sample input files contains listings of “People” and each contains a name and a corresponding age. These files are used as the input to the upload form.
The Chrome extension performs the following tasks:
1. The extension can be hooked to a particular website (for this task, assume that the html file is located at file:///test/main.htm.
2. The extension takes action when a file is selected using the file upload field
3. The extension parses through the sample input file and sorts the “People” based on their age (youngest first).
4. The sorted list of “People” then outputs into a new div element on the existing page. There is a div called ‘listofpeople’ on the page which can be used to print names to.