# Movie Mania Web Application

Movie Mania is a web application developed using ReactJS that pulls movie names randomly from the OMDb API and fetches detailed movie information. The app is designed to provide users with an easy way to discover movies and get relevant information such as plot, ratings, and more.

![Movie Mania Screenshot]()

## Features

- **Random Movie Discovery**: Users can discover movies by pulling random movie names from the OMDb API.
- **Detailed Movie Information**: Fetches and displays detailed information about movies including title, plot, ratings, and more.
- **User-Friendly Interface**: A clean and intuitive user interface designed for a seamless experience.
- **Responsive Design**: The application is fully responsive, providing a consistent experience across various devices.

## Technologies Used

- **ReactJS**: A JavaScript library for building user interfaces.
- **OMDb API**: A RESTful web service to obtain movie information.

## Installation and Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/samiansari01/movie-mania.git
    cd movie-mania
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Obtain an OMDb API Key**:
   - Visit [OMDb API](https://www.omdbapi.com/apikey.aspx) and generate an API key.

4. **Create an `.env` file** in the root directory and add your OMDb API key:
    ```bash
    REACT_APP_OMDB_API_KEY=your_api_key_here
    ```

5. **Run the application**:
    ```bash
    npm start
    ```

6. **Visit** `http://localhost:3000` to see the application in action.

## Usage

- Search the movies to fetch a random movie.
- View detailed information about the movie, including its title, plot, and ratings.

## Sources

- **OMDb API**: [https://www.omdbapi.com/](https://www.omdbapi.com/)


