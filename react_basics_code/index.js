// React is a JavaScript library created by Facebook
// React is a User Interface (UI) library
// React is a tool for building UI components
// React is a JavaScript library for building user interfaces.
// React is used to build single-page applications.
// React allows us to create reusable UI components.

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


// Example of components
export default function App(){
    return(
        <div classname='App'>
            <h1>Namste World!</h1>
            <h2>First React try.</h2>
        </div>
    );
}




export default function Button(){
    return(
        <div classname='Button'>
            <h1>Button Examples</h1>
            <Button variant = 'primary'>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
        </div>
    );
}