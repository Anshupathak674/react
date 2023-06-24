import React from "react";
import ReactDOM from "react-dom/client";
//react element
const heading = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

//everything is a component in react
//components is a normal javascript function

// const HeaderComponent = () => {
//   return <h1>Namaste React functional component</h1>;
// };
// const HeaderComponent2 = () => {
//   return (
//     <div>
//       <h1>Namaste React functional component</h1>
//       <h2>Namaste Line 2</h2>
//     </div>
//   );
// };

const HeaderComponent3 = () => (
  <div>
    <h1>Namaste React functional component</h1>
    {heading}

{/* /* if heading is a functional component */
  /* <Heading /> */ 
  /* {heading()} -> we can do like this as it is a normal javascript function */
  /* In this curly braces, w ecan write any piece of javascript code */}

    <h2>Namaste Line 2</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(<HeaderComponent3 />);