# MeerakiPrints - Single-Page Website and User Authentication

This repository contains the code for a single-page website for MeerakiPrints, a company that creates and sells creative products like notebooks, phone covers, and mugs. It also includes user authentication functionality for login and signup.

## Single-Page Website

The single-page website consists of the following files:

- `index.html`: The main HTML file for the website.
- `index.css`: The CSS file for styling the website.

### Features

- Homepage with a background image, company logo, description, and navigation bar.
- About section displaying the company story, owner's photo, and product images.
- Contact section with email address, phone number, and Instagram handle.
- Responsive design for various screen sizes.

### Instructions

1. Save `index.html` and `index.css` in the same folder.
2. Create an "images" folder within the same directory and save all image files (logos, product images, background image) inside it.
3. Open `index.html` in a web browser to view the website.

### Notes

- This is a single-page website, so clicking on navigation links won't lead to new pages. You can modify the code for a multi-page website.
- Replace the placeholder images with the actual images of the company.
- Customize `index.css` to change the website's style, including fonts, colors, and layout.

## User Authentication

The user authentication functionality consists of the following files:

- `login.html`: The HTML file for the login page.
- `login.css`: The CSS file for styling the login page.
- `signup.html`: The HTML file for the signup page.
- `signup.css`: The CSS file for styling the signup page.
- `script.js`: The shared JavaScript file for form validation.

### Login Page

#### Features

- A header with a "Home" button that links to the homepage (`index.html`).
- A form to enter a username and password.
- Simple form validation to ensure the username consists only of letters and numbers.
- A message area to display validation messages.

### Signup Page

#### Features

- A header with a "Home" button that links to the homepage (`index.html`).
- A form to enter a username, email address, and password.
- Basic form validation to ensure the username consists only of letters and numbers, the email address is in a valid format, and the password meets complexity requirements.
- A message area to display validation messages or a success message upon form submission (placeholders for success functionality).

### Shared Script

The `script.js` file handles form validation for both the login and signup pages.

### Instructions

1. Save `login.html`, `signup.html`, and `script.js` in the same folder.
2. Save `login.css` and `signup.css` in the same folder (or a separate CSS folder).
3. Open `login.html` or `signup.html` in a web browser to view the respective page.

### Notes

- The current form validation provides basic input checks. You can improve it by implementing backend verification, such as username availability and password encryption, during login and signup.
- The success messages for the signup functionality are placeholders and require backend integration for successful registration.

## License

This code is provided for educational purposes only. You are free to use and modify it for your own projects.