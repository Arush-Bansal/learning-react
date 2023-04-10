for icons use => `npm i react-icons`


### State Hooks -- few important points
1. react update the state hooks asyncronously(in future) and not immidiately(), so that the re-rendering happens later on.
2. state via state-hook happens outside the component
3. We can only use hooks at the top level of the component. All other variables, (like counters, etc) reset after a re-render not remembering what was stored in them previously.

4. Avoid redundent state variables(those which can be derived from other state variables)
5. Group related variables inside an object.
6. Avoid deeply nested object because they are hard to update. Prefer a flat structure of an object.


### Purity in React 
1. Pure Function => Given The same input, the function always returns the same output
2. React Expects Every Component To Be Pure => It will cause unpredictable behavior otherwise.
3. If the component has no changes, react skips re-rendering that component.


Strict Mode => Due to this react renders twice.
