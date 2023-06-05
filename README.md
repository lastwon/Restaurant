# Restaurant Page

The Restaurant Page project is a web application where users can preview a list of restaurants and share their favorite restaurants with others. The shared data is saved to a JSON file, and the application utilizes the Unsplash API for a more pleasant user experience while browsing the restaurants. The project also incorporates Bootstrap for a carousel of images at the start of the page. Node.js and Express.js are used for server-side routing, and EJS templates are used for rendering dynamic content.

## Features

- Restaurant List: Users can view a list of restaurants, including information such as the name, cuisine type, and location.
- Restaurant Details: Clicking on a restaurant in the list displays more details about that specific restaurant, including the address.
- Share a Favorite Restaurant: Users can share their favorite restaurants with others by submitting the restaurant details through a form. The shared data is saved to a JSON file and can be viewed by other users.
- Restaurant Images: The application utilizes the Unsplash API to fetch high-quality images of the restaurants, providing a visually appealing experience for users while browsing the restaurant list and details.
- Bootstrap Carousel: The homepage of the application features a carousel of images using Bootstrap, showcasing enticing visuals of different restaurants.
- Node.js and Express.js: Server-side routing is implemented using Node.js and Express.js, allowing for efficient handling of HTTP requests and responses.
- EJS Templates: EJS templates are used for rendering dynamic content, enabling the application to display data from the JSON file and provide a seamless user experience.

## Technologies Used

- HTML/CSS: The front-end of the Restaurant Page is built using HTML and CSS for the layout and styling of the web application.
- JavaScript: The dynamic functionality of the application, including fetching data from the JSON file, interacting with the Unsplash API, and enhancing user interactions, is implemented using JavaScript.
- JSON: The shared restaurant data is stored in a JSON file, allowing for easy retrieval and updating of the restaurant list.
- Bootstrap: The Bootstrap framework is used to create a responsive and visually appealing carousel of images on the homepage.
- Node.js: The back-end of the application utilizes Node.js, an open-source JavaScript runtime, for server-side scripting.
- Express.js: Express.js, a web application framework for Node.js, is used for server-side routing and handling HTTP requests and responses.
- EJS: EJS (Embedded JavaScript) templates are used for rendering dynamic content and generating HTML markup with JavaScript.

## Installation

1. Clone the repository: git clone https://github.com/lastwon/Restaurant.git
2. Install the project dependencies:
cd Restaurant
npm install
3. Start the server:
node app.js
4. Open your web browser and visit `http://localhost:3000` to access the Restaurant Page.

## Contributing

Contributions to the Restaurant Page project are welcome! If you encounter any issues or have suggestions for improvements, please submit an issue or a pull request on the project's GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
