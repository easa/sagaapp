# A saga application
An application to show the calls, that saves the position of calls in localStorage.
Uses #react #react-redux #redux-saga #redux-persist #material-ui #react-draggable #ramda

## Run

- run this command to install dependencies : `npm install`
- run this command to start the project : `npm start`

## Page elements
- hangup button 
    - on click : add a new call
- header's texts (no need to work)
- calls
    - draggable ([react-draggable](https://www.npmjs.com/package/react-draggable))
    - no scroll
    - contains just and image and the name of user

## Redux elements
- redux - saga
- typescript
- persistance - redux - state ([redux-persist](https://www.npmjs.com/package/redux-persist))

## naming convention

we are using the famous [naming convention](https://basarat.gitbook.io/typescript/styleguide)

## file structure
> the name convention is inspired by typical name conventions that are used in other online projects.
> and the default react naming convention
  
    .
    ├── components/
    │   ├── calls/               # the box that contains the cards
    │   ├── card/                # a single card of a call
    │   ├── layout/              # layout of the app (header, body, action bar)
    │   └── configureStore.ts    # all configuration related to redux, redux-saga and redux-persist
    ├── redux/                   # Test files (alternatively `spec` or `tests`)
    │   ├── modules/             # a set of reducers and middleware functions
    │   ├── requests/            # a set of fake data providers to mock request to a server
    │   ├── handler.ts           # saga's handlers
    │   ├── saga.ts              # saga's watchers
    │   ├── stateTypes.ts        # type definitions of actions and redux states
    │   └── configureStore.ts    # all configuration related to redux, redux-saga and redux-persist
    ├── helpers/                 # functions to provide static data like user and icon
    └── ...



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
