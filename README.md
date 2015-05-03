# Elearning
This is a prototype elearning platform I built to test out the MEAN stack.
This project uses the following packages for development:
Server side:

"dependencies": {
    "body-parser": "~1.12.0",
    "cookie-parser": "~1.3.4",
    "debug": "~2.1.1",
    "express": "^4.12.3",
    "express-session": "^1.11.1",
    "jade": "^1.9.2",
    "mongoose": "^4.0.2",
    "morgan": "~1.5.1",
    "passport": "^0.2.1",
    "passport-local": "^1.0.0",
    "serve-favicon": "~2.2.0",
    "stylus": "^0.50.0"
  }

Client Side:

"dependencies": {
    "jquery": "~2.1.3",
    "toastr": "~2.1.1",
    "angular": "~1.3.15",
    "angular-resource": "~1.3.15",
    "angular-route": "~1.3.15",
    "bootstrap": "~3.3.4"
 }

This project uses a combination of Jade template eninge, Stylus compiler and AngularJs to combine the frontend web application whose corresponding files are stored in public folder.

The backend uses passport and passport-local for user athentication, mongodb for persistance and mongoose for interacting with mongo. Express is the architecture binding these components together.

Key Features : 
1) User authentication using passport
2) Manual user authorization
3) Caching
