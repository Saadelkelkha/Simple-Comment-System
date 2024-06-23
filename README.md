# Simple-Comment-System
This setup allows for a simple, dynamic comment system where user inputs are stored and displayed without requiring a page reload.

### HTML File: index.html
This file contains a basic HTML structure for a web page that includes a form for users to submit their name and comment. The form consists of:
- An input field for the name (`id="name"`).
- A textarea for the comment (`id="comment"`).
- A submit button (`id="btnAdd"`).
- An empty `div` to display comments (`id="comments"`).

The form uses JavaScript to handle the form submission and display the comments without reloading the page.

### JavaScript File: script.js
This JavaScript file contains the client-side logic to handle the form submission:
1. An event listener is attached to the submit button (`btnAdd`).
2. When the button is clicked, it prevents the default form submission.
3. It retrieves the values of the name and comment input fields.
4. An `XMLHttpRequest` is created to send these values to the server-side PHP script (`add.php`) via a GET request.
5. When the server responds, the comments are displayed on the web page, with each name centered and each comment centered with a blue background.

### PHP File: add.php
This PHP file handles the server-side logic for processing the form submission:
1. It checks if the `name` and `comment` parameters are set in the GET request.
2. It reads the existing comments from a JSON file (`data.json`) if it exists.
3. It appends the new comment to the existing comments array.
4. It writes the updated comments array back to the JSON file.
5. It returns the comments array as a JSON response.

### Summary of Interaction
When a user submits the form:
1. The JavaScript intercepts the form submission, preventing the default action.
2. The JavaScript sends the user's name and comment to the PHP script via an AJAX GET request.
3. The PHP script updates the comments JSON file with the new data and sends back the updated comments.
4. The JavaScript receives the updated comments and dynamically updates the web page to display all comments.

This setup allows for a simple, dynamic comment system where user inputs are stored and displayed without requiring a page reload.
