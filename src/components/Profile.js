import { useState } from "react";
const Profile = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <h2> Profile Component </h2>
      <h3>Name: {props.name}</h3>
      <h3>Count1: {count1}</h3>
      <h3>Count2: {count2}</h3>
      <button
        onClick={() => {
          setCount1(1);
          setCount2(2);
        }}
      >
        Button
      </button>
    </>
  );
};
export default Profile;
