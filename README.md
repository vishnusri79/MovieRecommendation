# MovieRecommendation
The Movie Recommendation System is a web-based application developed using React, integrating with TMDB (The Movie Database) API to provide users with popular movies, search capabilities, and a personalized movie rating system. The application includes user authentication (via Firebase) and allows users to log in, rate movies, and see tailored recommendations.

Core Features
Header with Navigation and Authentication:

Logo and Navigation Bar: Includes a logo and a navigation bar with options such as "Home," "Movies," "TV," "Entertainment," and "Sports."
Search Bar: Users can search for movies or genres directly from the search bar, which fetches results from the TMDB API.
Authentication: Users have the option to either log in or sign up using email authentication provided by Firebase. Once authenticated, users can access additional features like rating movies.
Popular Movies Display:

Movie Cards: The homepage displays a grid of movie cards showcasing popular movies fetched from the TMDB API. Each card includes the movie title, rating, and an image.
Modern Animations: The cards include subtle animations, making the user interface visually appealing and interactive.
Movie Search Functionality:

Search by Title or Genre: The search bar allows users to find specific movies by entering their title or genre. The results update dynamically, showing movie options with modern animations for a professional touch.
Movie Details Page:

Click to View Details: Users can click on any movie to view more detailed information, such as the movie’s synopsis, director, cast, release year, and genre. This information is fetched from the TMDB API.
Rate a Movie:

Rating Feature: Authenticated users can rate movies. Once logged in, they see a "Rate a Movie" option in the navigation bar. After clicking, users are presented with a form where they enter the movie name, director, year released, genre, and rating.
Submission and Feedback: Upon rating a movie, users receive a message thanking them for their rating.
Footer:

Professional Design: A clean, professional footer provides links to relevant sections of the application and includes basic information about the app.
User Authentication (Sign Up, Login, Logout):

Firebase Integration: The app uses Firebase authentication for email-based sign-ups and logins. After successful login, users see a personalized navigation option to "Rate a Movie" and a "Sign Out" button.
Sign Out: Users can log out using the "Sign Out" button, which redirects them to the homepage.
Project Flow
Initialization:

The project starts by setting up the environment using React, installing necessary dependencies (like react-router-dom, Firebase, Axios, and TMDB API integration).
Header Component:

Developed a responsive header with a logo, a functional search bar, a navigation menu, and authentication buttons (Login and Sign Up). The layout ensures the search bar and buttons are aligned properly with no unwanted background colors.
Popular Movies Section:

Fetched popular movies from the TMDB API and displayed them using responsive cards. Applied modern animations to make the cards interactive and aesthetically pleasing.
Search and Filtering:

Implemented a search functionality that fetches movies or genres entered by the user from the TMDB API, ensuring search results are dynamically displayed.
Authentication System:

Integrated Firebase for user authentication. Developed a modal-based login/signup system with form validation. After logging in, the user sees additional options, such as the ability to rate movies.
Implemented a sign-out feature to log out and redirect the user to the homepage.
Rating Movies:

Added a feature that allows users to rate movies. After successfully logging in, users can fill out a form to rate movies and provide additional information, such as movie name, director, genre, and year released. Upon submission, users see a confirmation message thanking them for their rating.
Footer Component:

Designed a professional footer with important links and a clean layout.
Technology Stack
Frontend: React.js
Routing: react-router-dom
State Management: useState, useContext (for authentication)
Styling: CSS modules, Flexbox for layout, animations for movie cards
Backend: TMDB API for fetching movie data, Firebase for user authentication
