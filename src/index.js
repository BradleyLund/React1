// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
//writing some stuff down here just to see if it will reload hot baby, 
const App = ()=> {
    return <div>Hi there!</div>
}


//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)