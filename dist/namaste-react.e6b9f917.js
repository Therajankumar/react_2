/*<div id = "parent">
*      <div id = "child">
*         <h1>I am an h1 tag</
*     </div>
*
*React.createElement(object)=>HTML(BROWSER UNDERSTANDS)
*/ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "I am an h1 tag")));
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=namaste-react.e6b9f917.js.map
