# SNS-API-NoSQL

## Description:
This application serves as an API for a social netwrok, and uses a noSQL database. It collects Users, their usernames, thoughts, and friends. Additionally, their thoughts can hold reactions from other users. 

## Installation:
- clone this repository and navigate to it in your command line
- `npm install` the required dependencies
- `npm seed` to seed some sample data
- `npm start` to run application to server

## Usage:
- look for a database called `sns_api` in MongoDB to see documents for Users and Thoughts
- User Routes:  
    - GET all users:  `GET http://localhost:3001/api/users`
    - GET a single user: `GET http://localhost:3001/api/users/:userId`
    - CREATE a user: `POST http://localhost:3001/api/users`
    - UPDATE a user: `PUT http://localhost:3001/api/users/:userId`
    - DELETE a user: `DEL http://localhost:3001/api/users/:userId`
-Friend Routes:
    - ADD a Friend: `POST http://localhost:3001/api/users/:userId/friends/:userId[of new friend]`
    - REMOVE a Friend `DEL http://localhost:3001/api/users/:userId/friends/:userId[of friend]`
- Thought Routes:  
    - GET all thoughts: `GET http://localhost:3001/api/thoughts`
    - GET a single thought: `GET http://localhost:3001/api/thoughts/:thoughtId`
    - CREATE a thought: `POST http://localhost:3001/api/thoughts`
    - UPDATE a thought: `PUT http://localhost:3001/api/thoughts/:thoughtId`
    - DELETE a thought: `DEL http://localhost:3001/api/thoughts/:thoughtId`
- Reaction Routes: 
    - CREATE a Reaciton: `POST http://localhost:3001/api/thoughts/:thoughtId/reactions`
    - DELETE a Reaction: `DEL http://localhost:3001/api/thoughts/:thoughtId/reactions/_id`




## Links
Walkthrough Video: https://watch.screencastify.com/v/vvD7TdzGiFTdwMA8YnDK
GitHub Repo: https://github.com/srlevit94/SNS-API-NoSQL