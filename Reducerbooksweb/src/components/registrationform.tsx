import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../contexts/bookcontext";

interface Props {}
function RegistrationForm({}: Props) {
  const {state,dispatch}=useContext(UserContext)
  let history = useHistory();
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
   
  });
  const handleChange = (e: any) => {
    console.log(state.users)
    let nam = e.target.name;
    let val = e.target.value;
    if (nam === "confirmpassword" && val !== user.password) {
      setMessage("Passwords doesnt match,try giving correct password");
    } else {
      setMessage("");
    }
    setUser({ ...user, [nam]: val });
  };

  const addingUser = (e: any) => {
    // console.log(state.users)
    dispatch({type:"REGISTER_USER",payload:user})
    history.push("/books");
  }
  //   fetch("http://localhost:8000/users/register", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: user.name,
  //       email: user.email,
  //       password: user.password,
      
  //     }),
  //     headers: { "Content-Type": "application/json" },
  //   }).then(async (res) => {
  //     if (res.status === 201) {
  //       console.log(await res.text());
  //       history.push("/books");
  //     } else if (res.status === 409) {
  //       console.log(
  //         "User is already registered please try to log in to continue"
  //       );
  //     } else console.log("something went wrong try again");
  //   });
  // };
  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form onSubmit={addingUser}>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="name"
            className="form-control"
            name="name"
            onChange={handleChange}
            placeholder="Enter name"
            autoComplete="off"
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            autoComplete="off"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
