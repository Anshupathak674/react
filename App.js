// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "Class",
//     style: {color: "red", backgroundColor: "blue"}
//   },
//   "Namaste All"
// );
// console.log(heading); //react element is an object.
// in an app, everytime there is only one root.
// passing a react element inside the root and one render method.
// even if there is anything in the root element already existing, it will get overwritten
// async and defer
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
const heading = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "heading"
);
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading1"
);
// bundlers, web pack - parcel, vite, webpack are bundlers.
// Webpack in react is a JavaScript module bundler that is commonly used with React to bundle 
// and manage dependencies. It takes all of the individual JavaScript files and other assets 
// in a project, such as images and CSS, and combines them into a single bundle that can be 
// loaded by the browser.
const container = React.createElement("div", 
{ 
  id: "container", 
  hello: "world"   // any props can be given here. it is just like attributes. 
}, 
[
  heading,
  heading1,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
// minify, optimization, clean console and bundle
// package manager - npm, yarn to manage the packages like parcel.
// npm - doesn't stand for node package manager
// we use npm to manage a lot of packages a sreact app is powered 
// by a lot of package which come inside npm

// package-lock.json - it locks the exact version that is being used for the
// particular package and keep it safe. the package.json contains the version that can be 
// upgraded but package-lock.json contains exact version in use. 

// never keep package-lock.json in .gitignore