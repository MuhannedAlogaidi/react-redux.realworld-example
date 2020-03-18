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