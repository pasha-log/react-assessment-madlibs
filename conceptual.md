### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
*React is a JavaScript library/framework that was the brain child of Facebook, and is now widely used for apps like Instagram and Instacart. I would use it because it's by far the most popular JS libraries and the probably the most easy to learn. I would use it to create the frontend of a web application.*
* *Make it easy to make reusable “view components”*
- *These “encapsulate” logic and HTML into a class*
* Often make it easier to build modular applications

- What is Babel?
*Babel is like an extension/dependency for React. Since JSX isn’t legal JavaScript, it has to be “transpiled” to JavaScript. You can do this with Babel.*

- What is JSX?
*JSX is like a templating engine similar to Jinja, in which you can return HTML elements with advanced logic inside of. It is a syntax extension to JavaScript. It's recommended to be used with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.*

- How is a Component created in React?
*A component is created as a function that contains logic and returns JSX to fulfill a UI task or feature. It requires importing React and export to be rendered inside of the main App component.*

- What are some differences between state and props?
*Props are just like parameters passed through a component function, to be used and manipulate the returning JSX. State is a special kind of method that can be destructured into two variables. The first variable is the parameter that is mutable by the the function call of the second parameter which is usually started with "set" (as in "set" the first variable's current value to be used. useState is typically used when a DOM element is going to change it's current condition. Props are more static than that.*

- What does "downward data flow" refer to in React?
*Downward data flow is the idea that parent components pass data down to their children via props. In order to make data go the other way, we have to pass a. function down from the parent that the child can then call with some information.*

- What is a controlled component?
*Controlled Components are those in which form's data is handled by the component's state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc.*

- What is an uncontrolled component?
*Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.*

- What is the purpose of the `key` prop when rendering a list of components?
*React's key prop gives you the ability to control component instances. Each time React renders your components, it's calling your functions to retrieve the new React elements that it uses to update the DOM. If you return the same element types, it keeps those components/DOM nodes around, even if all the props changed.*

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
*The 2 things that a key should be is stable and unique. An index would be unique but it would not be stable since the array can mutate and indices can shift around.*

- Describe useEffect.  What use cases is it used for in React components?
*React comes with a built in hook for "side effects". Fetching data, starting a timer, and manually changing the DOM are all side effects. useEffect will run after the first render. Will run after all rerenders by default. Accepts a callback function as its first argument. Returns undefined or a function. If you return a func, the func will be run before the component unmounts or before the effect runs again. You can tell React to skip applying an effect if certain values haven't changed between re-renders. useEffect accepts an array as its second arg where you place these values (also called dependencies). What you pass to the array can help avoid performance issues*

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
*useRef is another built-in hook in React. It returns a mutable object with a key of **current**, whose value is equal to the initial value passed into the hook. The object persists across renders (so it's like a local variable, but independent of state). Mutating the object does not trigger a re-render.*

- When would you use a ref? When wouldn't you use one?
*Common Applications:*
1. *Accessing an underlying DOM element*
2. *Setting up/ clearing timers.*
3. *Click a button, and then on its click you want an input to come into focus*

- What is a custom hook in React? When would you want to write one?
*You can make hooks to write abstract logic, handle repeated tasks, generate your own JSX. You don't have to write custom hooks, but there are a number of situations where they can be useful. Same business logic inside of multiple components? Maybe a custom hook can help. Business logic cluttering up a single component? Maybe a custom hook even if only for one component, can help with readability. Don't start by asking what custom hooks you need; lean on custom hooks to help you refactor your code.*
