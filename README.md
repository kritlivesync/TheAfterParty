## TheAfterParty

The After Party will be an anonymous posting site where users will be able to vote and determine who had the best night, last night. This idea was inspired by a Taco Bell cup slogan "Welcome To The After Party", as I was sitting in my apartment

### The Big Picture

Users will be able to post a story or moment of their night and other users will be able to up-vote one story, so they will need to choose wisely, to determine who had to best night. At 12 o'clock noon, a winner will be determined, based on up-votes, and that user will receive a "Party Animal" badge. During the 24 hour period, user's will be able to view a leader board of the top up-voted stories of the night. Users will also be able to view a leaderboard of the top "Party Animal"s.

Future Thoughts:
* Users will be able to upload images or video as their story

### Tech

##### Native
* React Native
  * `redux`
  * `react-native-router-flux`
  * `react-native-scrollable-tab-view`
* Native Base
  * A React Native framework

##### Backend
* [Node API Seed](https://github.com/charlieroth/node-api-seed)
* MongoDB
* Node
* Express
* Bcrypt `bcrypt-nodejs`
* JWT `jwt-simple`
* Passport `passport, passport-local, passport-jwt`

###### Todo
* Users
  * Full CRUD capability
  * Registration and login form error handling
  * Store "Party Animal" points
* Stories
  * Full CRUD capability
  * Up-vote and down-vote capability
  * Confirm story capability
  * "Party Animal" points capability
* Leaderboard
  * Rank by up-votes
  * User rank by "Party Animal" badges
