1. JSX: It's basically a syntax that lets us write HTML directly inside JavaScript. It makes writing React code much easier because you can clearly see what the UI looks like right where the logic is.

2. Props vs State: Props are used to pass data down from a parent component to a child component and they cannot be changed by the child. State is local data managed inside the component itself that can be changed when users interact with the app.

3. useState: This hook is used to create and update dynamic data in functional components. In my project, I used it to keep track of the technologies data, the items added to the stack, and the loading spinner state.

4. useEffect: It handles side effects when a component loads or updates. I needed it here to run the fetch code just once when the page opens so it can pull data from the technologies.json file.

5. Unique key prop: React relies on keys to track which items in a list are added, deleted, or changed. Without unique keys, React gets confused when updating the list and it can cause performance issues or UI glitches.

6. Conditional rendering: It means rendering different UI elements based on a condition. For example, I used it to show the Stack is empty message when stack.length === 0, and show the selected item cards when items are added.

7. Data passing: Parent components send data down to child components using props. If the child needs to send data back up, the parent passes down a callback function as a prop, and the child calls that function with the data inside it.