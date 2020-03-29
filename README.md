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
> To use React Redux with React app. sometimes we using --save or --save-dev. This code below mae redux state and actions/dispatch action visible in redux dev tools:

```
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

```

## The Fundamentals of Redux
> Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

The fundamental concepts in Redux are called "stores" and "actions". A store has two parts: a plain-old JavaScript object that represents the current state of your application, and a "reducer", which is a function that describes how incoming actions modify your state.

The **react-redux module** is the "official bindings" between react and redux. It adds some useful syntactic sugar for binding your components to your redux state. The Provider component that you get from react-redux is how you tell react-redux about your redux store.
### Part 1 Create redux store
```
const defaultState ={checked:false};
const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'TOGGLE' :
      return {...state,checked:!state.checked}
    default :
      return {...state}
  }
  // return state => This is another way to return the default state in case of initial action
};
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

```
### Part 2 Displaying the state
A store has three functions that you're going to be using in this course:

1. getState - fetches the current state of a store
2. dispatch - fires off a new action
3. subscribe - fires a callback everytime there's a new action after a reducer's action

We'll have the App component subscribe to the state using one of React's life-cycle hooks called **componentWillMount()**. This function is called when the component is going to be rendered, *so it's a good place to put initialization logic*.
```
componentWillMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

```
We subscribe to the redux store and call React's setState() function every time the store changes so we always get the newly reduced state. React calls the render() function every time the component's state changes, which "renders" the component.

### Part 3 Dispatching Actions to Change State
To mutate(change) the redux state, you need to dispatch an action. Recall that an action is the 2nd parameter that gets passed to your reducer. *An action is an object that tells your reducer what happened (e.g. toggle, click, etc.), Redux actions must have a type property, and sometimes payload optionally.*

create a function called **onClick** as example that calls the Redux store's dispatch() function, which is how you fire off an 
```
store.dispatch({ type: "TOGGLE" });
```
### Part 4 Redux connect and using (mapStateToProps , mapDispatchToProps)
**connect()** function connects a React component to a Redux store.It provides its *connected component* with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.
```
export default connect(mapStateToProps,mapDispatchToProps)(App);
```
**mapStateToProps** and **mapDispatchToProps** deals with your Redux store’s **state** and **dispatch**, respectively. state and dispatch will be supplied to your mapStateToProps or mapDispatchToProps functions as the first argument.

> The returns of mapStateToProps and mapDispatchToProps are referred to internally as stateProps and dispatchProps, respectively. 

It does not matter if a mapStateToProps function is written using the function keyword (function mapState(state) { } ) or as an arrow function (const mapState = (state) => { } ) - it will work the same either way.
