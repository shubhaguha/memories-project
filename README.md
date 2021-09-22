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
npm install axios moment react-file-base64 redux redux-thunk
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
