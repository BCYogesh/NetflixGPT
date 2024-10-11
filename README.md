# Netflix GPT

- Create React App
- Configured tailwind css
- Header
- Routing of app
- Login form
- Signup form
- Form validation
- useRef hook
- Firebase setup
- Deploying our app in production
- Create sign up in user account
- Implement signin user api
- Created Redux store
- Implemented sign out future
- Update profile
- Fetch from TMDB Movies api
- Bug fix : Sign up user display name and profile picture Update
- Bug fix : If the user not logged in Redirect / browse to log in page vice-versa
- Unsubscribed to the onAuthStateChage callback
- Create constant file and maintain inside constant images and links
- Register TMDB Api & create an app & get access token
- Make data from TMDB now playing movie list Api
- Custom for hook for nowPlayingMovies
- Create a movie slice
- Update the store with movies data
- Planning for Main container & secondary container
- Fetch data from Trailer video
- Update store with Trailer video data
- Embedded the youtube video and make it autoplay and mute
- Tailwind classes to make Main container look awesome
- Build secondary component
- Build Movie list
- Build Movie Card
- TMDB Image CDN URL
- Made the browse page amazing with tailwind CSS
- To create custom hooks for data fetching from TMDB API && Update the store

# Features

- Login/sign up
  - Sign up/sign out
  - Once sign in redirect to browse page
- Browse (After authenticaton) - Firebase
  - Header
  - Main Movie
    - Trailer in background
    - Title and description
    - Movie suggestion
      - Movie list \* N
- NextflixGPT
  - Search bar
  - Movie suggestions

# Steps for deployment

- Install firebase CLI - `npm install -g firebase-tools`
- Firebase Login - `firebase login`
- Initilize Firebase - `firebase init`, then select Hosting
- Deploy command - `firebase deploy`
