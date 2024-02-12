### Database Design Documentation



### Movies Table

| Column        | Type       | Description                      |
|---------------|------------|----------------------------------|
| id            | INT        | Primary Key: Movie identifier    |
| title         | VARCHAR    | Title of the movie               |
| poster        | VARCHAR    | URL of the movie's poster image  |
| rating        | VARCHAR    | Movie rating                     |
| language      | VARCHAR    | Language of the movie            |
| release_date  | DATE       | Release date of the movie        |
| genre         | VARCHAR    | Genre of the movie               |
| synopsis      | VARCHAR    | Description of the movie         |
| imdb          | VARCHAR    | IMDB rating of the movie         |
| website       | VARCHAR    | Official website of the movie    |


### TV Series Table


| Column        | Type       | Description                          |
|---------------|------------|--------------------------------------|
| id            | INT        | Primary Key: TV series identifier    |
| title         | VARCHAR    | Title of the TV series               |
| poster        | VARCHAR    | URL of the TV series' poster image  |
| rating        | VARCHAR    | TV series rating                     |
| language      | VARCHAR    | Language of the TV series            |
| start_date    | DATE       | Start date of the TV series          |
| end_date      | DATE       | End date of the TV series            |
| genre         | VARCHAR    | Genre of the TV series               |
| synopsis      | VARCHAR    | Description of the TV series         |
  website       | VARCHAR    | Official website of the TV series    |




### Users Table

| Column        | Type       | Description                           |
|---------------|------------|---------------------------------------|
| user_id       | INT        | Primary Key: User identifier          |
| username      | VARCHAR    | Username of the user                  |
| email         | VARCHAR    | Email address of the user             |
| password      | VARCHAR    | Encrypted password of the user        |
| profile_image | VARCHAR    | URL of the user's profile image       |




### Bookmarked Table


| Column        | Type       | Description                                    |
|---------------|------------|------------------------------------------------|
| bookmark_id   | INT        | Primary Key: Bookmark identifier               |
| user_id       | INT        | Foreign Key: User who bookmarked the item      |
| movie_id      | INT        | Foreign Key: Movie that is bookmarked          |
| series_id     | INT        | Foreign Key: TV series that is bookmarked      |






## relationships between the tables:

## Users and Bookmarked Items Relationship:
Each user can have multiple bookmarks.
Each bookmark belongs to only one user.
This relationship forms a One-to-Many relationship between the Users table and the Bookmarked table.
Movies and Bookmarked Items Relationship:


## Movies and Bookmarked Items Relationship:
Each movie can be bookmarked by multiple users.
Each bookmarked item belongs to only one movie.
This relationship forms a Many-to-One relationship between the Movies table and the Bookmarked table.
TV Series and Bookmarked Items Relationship:

## TV Series and Bookmarked Items Relationship:
Each TV series can be bookmarked by multiple users.
Each bookmarked item belongs to only one TV series.
This relationship forms a Many-to-One relationship between the TV Series table and the Bookmarked table.
Users and TV Series/Movies Relationship (through Bookmarked Items):


## Users and TV Series/Movies Relationship (through Bookmarked Items):
Each user can bookmark multiple TV series and movies.
Each TV series/movie can be bookmarked by multiple users.
This relationship forms a Many-to-Many relationship between the Users table and both the Movies and TV Series tables through the Bookmarked table.