// React is a JavaScript library created by Facebook
// React is a User Interface (UI) library
// React is a tool for building UI components
// React is a JavaScript library for building user interfaces.
// React is used to build single-page applications.
// React allows us to create reusable UI components.

import { Component } from "react"

// Components:
// 1. Components are self-contained units with all the logic, 
// markup, data and event handlers for that UI container. 
// 2. Elements are the markup that users can see. 
// 3. Components are JS functions (called by React)
// 4. Elements are objects
// 5. Components are return Elements.

// Q. How to import export in React?

// Default method:
// => export default function Button(){}
// => import Button from './button.js';

// Name method: 
// => export function Button(){}
// => import {Button} from './button.js';


//////////////////////  Some short snippets of React Component  ////////////////////////

// Example of components
export default function App() {
    return (
        <div classname='App'>
            <h1>Namste World!</h1>
            <h2>First React try.</h2>
        </div>
    );
}



// Button
export default function Button() {
    return (
        <div classname='Button'>
            <h1>Button Examples</h1>
            <Button variant='primary'>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
        </div>
    );
}



// Creating List
export default function App() {
    return (
        <div className="App">
            <Skills items={["skill1", "skill2", "skill3"]} />
        </div>
    );
}

function Skills({ items }) {
    return (
        <ul>
            {items.map((items) => (
                <li>{items}</li>
            ))}
        </ul>
    );
}




// Creating img with caption and button

export default function App() {
    return (
        <div className="App">
            <Avatar imgURL={userDetails.imgURL} name={userDetails.name} />
            <Button />
        </div>
    );
}

const userDetails = {
    imgURL:
        "https://t2.gstatic.com/images?q=tbn:ANd9GcQ4SOsnVbc_U2hOHskrL2LltsiMX0yjRxPUAE_vkC6JcIAideOn",
    name: "Anand"
};

function Avatar(props) {
    const { imgURL, name } = props;

    return (
        <div>
            <img src={imgURL} alt={name} className="imgstyle" />
            <h3>{name}</h3>
        </div>
    );
}

function Button() {
    return <button>Click Me!</button>;
}



// Click button with alert!

export default function App() {
    return (
        <div className="App">
            <Button clickme={output} />
        </div>
    );
}

const output = () => {
    alert("You Clicked Masai!");
};


function Button({ clickme }) {
    return <button onClick={clickme}>Click me!</button>;
}
