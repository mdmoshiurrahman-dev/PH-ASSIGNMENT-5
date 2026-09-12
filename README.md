                                !-----------DevStack------------! 
# Description
it is a website that let users to select there fev teach stack. Is is basically full stack technology for build a complete web application.

# Used technology
* Html
* CSS
* JS
* TS
* Tailwind
* React (js library)
* React icons
* React toastify
* AI (for build dump JSON)

# Three feature about this page
* Clean Ul
* Used react toastify for temporary notification for every user event.
* Mobile and desktop responsive (it taken almost extra 6 hours to make this webpage responsive)

# Answers to the  Questions
1) full meaning of JSX is javascript xml. it allows to write HTML like code inside the javascript file, that's why it's used in react.
2) Props and state are two deferent thing. props means property, it allows developers to share a component's property to another child component to do something And state do same thing a variable do. In React normal variable can't change UI just like vanilla javascript do with selecting DOM manually. React use a lightweight of DOM, it only change and rerender UI when state change. 
3) useState a very important concept in react and it's very powerful in react. useState is build in React hook build by React. it's a internal memory of a components that's memorize every single changes in component. It rerender UI when useState can figure out something was change.
5) map in a javascript build in array function that throw loop on array. it's only works on array. In react map fn usually used for map a cart or other thing that we have to manually write if we did not use it. it loop over every element of an array and modify something with this element. when we use map or loop over something in react it's  that if we don't use key, react will throw an error but in face it's a necessary for react to identity every single object with a unique id for better optimization and some case it's helps a lot.
6) Conditional rendering means rendering something with a specific condition. It mean if the condition true do this thing and if not then do another thing. I will show you this in turnery operator, Ex--
isUser ? (<HelloUserComponent/>) : ('<LoginComponent/>');
7) It's not possible to pass data from child component to parent component. React only allows the flow of data from parent to child i mean only one directional flow. when we have to pass the data we can use Pros to pass it's called lift up props.
