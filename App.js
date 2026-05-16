const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
/**
 * <div id= "parent">
 *      <div id= "child">
 *          <h1> Hello World from React! </h1>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I'm an h1 tag from nested div!"),
        React.createElement("h2", {}, "I'm an h2 tag from nested div!")
        ]
    )
);
root.render(parent);