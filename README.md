# DASH (Dimensional Analysis Student Helper)

DASH's **client** is an iOS mobile app built with React Native using the [Expo](https://expo.io/) toolkit.  

DASH's **server** stack contains [Node.js](https://nodejs.org/en/) [Express](https://expressjs.com/) middleware and an [MLab](https://mlab.com/) [MongoDB](https://www.mongodb.com/) instance.

## Getting Started

### Installation instructions

1. Clone the repository `git clone https://github.com/sa-webb/DimensionalAnalysisApp.git`
2. Install Dependencies `yarn install`

### Starting the App

1. Insert your MLab db url on line 8 of [server/server.js](https://github.com/sa-webb/DimensionalAnalysisApp/blob/master/server/server.js).
2. Start the server `node server/server.js`
3. Start expo `yarn start` or `expo start`