const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child " }, [
    React.createElement("h1", { id: "heading" }, "i am h1 tag inside div"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
  React.createElement("div", { id: "child " }, [
    React.createElement("h1", { id: "heading" }, "i am h1 tag inside div"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
]);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
