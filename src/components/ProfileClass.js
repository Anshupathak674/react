import React from "react";
import UserContext from "../utils/UserContext";
class Profileclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
    };
  }
  render() {
    const { name, xyz } = this.props;
    const { count1, count2 } = this.state;
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h3>Name: {name}</h3>
        <h3>XYZ: {xyz}</h3>
        <h3>CountClass: {count1}</h3>
        <h3>CountClass2: {count2}</h3>
        <button
          onClick={() => {
            //WE NEVER MUTATE STATE DIRECTLY
            //DON'T DO this.state = something
            this.setState({
              count1: 1,
              count2: 2,
            });
          }}
        >
          ClassButton
        </button>
        <UserContext.Consumer>
          {({ user }) => (
            <h1 className="p-10 font-bold text-red-900 text-xl">
              {user.name}-{user.email}
            </h1>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Profileclass;
