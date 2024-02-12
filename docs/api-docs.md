
### Authentication
To access protected endpoints, you need to include your API key in the request headers.

### Movies

**Get All Movies**
- Endpoint: GET /api/movies
- Description: Returns a list of all movies.
- Response:
- Status: 200 OK
- Body: Array of movie objects

**Get a Specific Movie by ID**
- Endpoint: GET /api/movies/:id
- Description: Returns details of a specific movie identified by its ID.
- Parameters:
   id (string): ID of the movie
- Response:
- Status: 200 OK
- Body: Movie object

**Get All Bookmarked Movies**
- Endpoint: GET /api/movies/bookmarked
- Description: Returns a list of all bookmarked movies.
- Response:
- Status: 200 OK
- Body: Array of movie objects

**Toggle Bookmark Status**
- Endpoint: PUT /api/movies/:id/bookmark
- Description: Toggles the bookmark status of a movie.
- Parameters:
   id (string): ID of the movie
- Response:
- Status: 200 OK
- Body: Updated movie object with the new bookmark status


### TV Series

**Get All TV Series**
- Endpoint: GET /api/tvseries
- Description: Returns a list of all TV series.
- Response:
- Status: 200 OK
- Body: Array of TV series objects

**Get a Specific TV Series by ID**
- Endpoint: GET /api/tvseries/:id
- Description: Returns details of a specific TV series identified by its ID.
- Parameters:
   id (string): ID of the TV series
- Response:
- Status: 200 OK
- Body: TV series object

**Get All Bookmarked TV Series**
- Endpoint: GET /api/tvseries/bookmarked
- Description: Returns a list of all bookmarked TV series.
- Response:
- Status: 200 OK
- Body: Array of TV series objects

**Toggle Bookmark Status for TV Series**
- Endpoint: PUT /api/tvseries/:id/bookmark
- Description: Toggles the bookmark status of a TV series.
- Parameters:
   id (string): ID of the TV series
- Response:
- Status: 200 OK
- Body: Updated TV series object with the new bookmark status


### Signup

- Endpoint: POST /api/auth/signup
- Description: Registers a new user.
- Request Body:
- json

{
  "email": "user@example.com",
  "password": "userpassword"
}
- Response:
- Status: 201 Created
- Body: Message indicating successful registration


### Login
- Endpoint: POST /api/auth/login
- Description: Logs in a user.
- Request Body:
- json

{
  "email": "user@example.com",
  "password": "userpassword"
}
- Response:
- Status: 200 OK
- Body: JWT token for authentication