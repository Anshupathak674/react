// a hook always starts from word "use"
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  //destructuring
  const { error, status, statusText } = err;
  console.log(err);
  return (
    <>
      <h1>Oops!!</h1>
      <h2>Something went wrong!</h2>
      <h3>{error.message}</h3>
      <h3>{status + " : " + statusText}</h3>
    </>
  );
};

export default Error;
