Full Stack MERN Tutorial
===

By [JavaScript Mastery](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A).

YouTube videos:
- [Part 1](https://youtu.be/ngc9gnGgUdA)

Prerequisites
---

[Node.js](https://nodejs.org/en/)

Initial Setup
---

### Client

```bash
cd client/
npm uninstall -g create-react-app
npx create-react-app ./
npm install axios moment react-file-base64 react-redux redux redux-thunk @material-ui/core
# reset src/ directory with minimal index.js and App.js
```

### Server

```bash
cd server/
touch index.js
npm init -y
npm install body-parser cors express mongoose nodemon
# import libraries in index.js
```

### Database

The tutorial recommends setting up a MongoDB cluster in the cloud (for free): <https://www.mongodb.com/cloud/atlas>

1. Sign in with Google.
1. Create a shared cluster for free.
1. Database Access > Create a database user.
1. Network Access > Add current IP address.
1. Databases > Connect > Connect your application > Copy to server/index.js, with database username and password created above in step 3.

### Additional Tutorial Materials

- [Image](https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI)
- [Styles](https://gist.github.com/adrianhajdin/d99aaa67124f0de7667fd3937715fb26)
- [Code Repo](https://github.com/adrianhajdin/project_mern_memories)
