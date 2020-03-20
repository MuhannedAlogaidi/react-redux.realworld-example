# Introduction 
## What you will learn
The purpose of this tutorial is to cover all of them cohesively. The primary focus of this course will be showing you how to rebuild the codebase of the exemplary RealWorld React+Redux project from scratch, which was created by this tutorial's author with guidance that was graciously imparted by the creator of Redux, Dan Abramov.

As such, by the end of this tutorial series, you will have a firm understanding of how to actually build web applications with React and Redux. 

1. Fundamental understanding of how Redux works & why to use it
2. How to start a fresh React/Redux project
3. Interacting with a live CRUD API for (C)reating, (R)eading, (U)pdating, and (D)estroying data
4. Authentication
5. Routing with react-router

I feel that learning is best accomplished by "doing," and as such, throughout this course, we will be creating a production-ready Medium.com clone called "Conduit" to demonstrate & apply these learnings. [You can view a live demo of the application here]https://react-redux.realworld.io/#/?_k=vd3hbp. Conduit is a fully featured social blogging site including:

- Authentication with JWT
- Profiles with images
- Write/edit/read articles
- Comments on articles
- Ability to "favorite" articles
- Ability to follow other users & have their articles show up in your feed
- For your convenience, we have a hosted API that you can build your application against. 

***We're also going to release courses for how to create the backend in either Node, Rails, or Django over the next few weeks.***

## Commands
**Install *create-react-app* from npm**
`npm install -g create-react-app` 
> You'll want to install it globally (hence the -g flag)

**Create a new app called "real-world"**
`create-react-app real-world` 
> The folder real-world/ was created by create-react-app and houses all of our new application's code.

**Start the application**
`npm start -c` 
> Runs the app in development mode. Open http://localhost:3000 to view it in the browser.The page will reload if you make edits. You will see the build errors and lint warnings in the console.

**Install redux and react-redux**
`npm install react-redux redux` 
> To use React Redux with React app. sometimes we using --save or --save-dev

## The Fundamentals of Redux
> Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

The fundamental concepts in Redux are called "stores" and "actions". A store has two parts: a plain-old JavaScript object that represents the current state of your application, and a "reducer", which is a function that describes how incoming actions modify your state.

`const defaultState ={checked:false};
const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'TOGGLE' :
      return {...state,checked:!state.checked}
    default :
      return {...state}
  }
  // return state => This is another way to return the default state in case of initial action
};
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());`


















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
