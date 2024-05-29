import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profileclass from "./ProfileClass";
const About = () => {
  return (
    <>
      <h1>About Us Page</h1>
      <p>This is the Namaste React chapter "Finding the Path"</p>
      {/* <Outlet /> first way through outlet from dynamic routing */}
      {/* children of about will get appended here. */}
      <ProfileFunctionalComponent name={"AnshuFunction"} />
      <Profileclass name={"AnshuClass"} xyz={"abc"} />
      {/* second way through importing from  the component*/}
    </>
  );
};

export default About;
