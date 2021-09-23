Full Stack MERN Tutorial
===

By [JavaScript Mastery](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A).

YouTube videos:
- [Part 1](https://youtu.be/ngc9gnGgUdA)
- [Part 2](https://youtu.be/aibtHnbeuio)

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
npm install axios moment react-file-base64 react-redux redux redux-thunk @material-ui/core @material-ui/icons
```

### Server

```bash
cd server/
touch index.js
npm init -y
npm install body-parser cors express mongoose nodemon dotenv
```

### Database

The tutorial recommends setting up a MongoDB cluster in the cloud (for free): <https://www.mongodb.com/cloud/atlas>

1. Sign in with Google.
1. Create a shared cluster for free.
1. Database Access > Create a database user.
1. Network Access > Add current IP address.
1. Databases > Connect > Connect your application > Copy to server/index.js, with database username and password created above in step 3.

Additional Tutorial Materials
---

- [Image](https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI)
- [Styles](https://gist.github.com/adrianhajdin/d99aaa67124f0de7667fd3937715fb26)
- [Code Repo](https://github.com/adrianhajdin/project_mern_memories)

Deployment
---

### Backend

The tutorial recommends using [Heroku](https://www.heroku.com/) to host the backend application.

1. Sign in.
1. Create new app: <https://dashboard.heroku.com/apps>
1. Follow Deploy instructions.

    ```shell
    $ # Install Heroku CLI and login
    $ # https://devcenter.heroku.com/articles/heroku-cli
    $ heroku login
    $
    $ # Add Heroku Git remote
    $ heroku git:remote -a memories-project-shubha
    $
    $ # Deploy application
    $ git add .
    $ git commit -am "make it better"
    $ git push heroku master
    ```

Alternative for deploying a subdirectory of git project:

1. Heroku App Dashboard > Deploy > Deployment method > GitHub
1. Heroku App Dashboard > Settings > Config Vars > Set `PROJECT_PATH` to subdirectory name.
1. Add Buildpack:

    ```shell
    heroku buildpacks:set https://github.com/timanovsky/subdir-heroku-buildpack
    heroku buildpacks:add heroku/nodejs  # or whatever buildpack you need for your application
    heroku config:set PROJECT_PATH=server  # pointing to what you want to be a project root.
    ```

1. Deploy as usual, as above.

### Frontend

The tutorial recommends using [Netlify](https://www.netlify.com/) to host the frontend app.

1. Sign in with GitHub.
1. From inside client directory: `npm run build`.
1. Sites > Drag and drop your site output folder here (without connecting to Git)
