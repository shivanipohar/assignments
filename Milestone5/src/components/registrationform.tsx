import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../contexts/bookcontext";
import axios from "axios";

interface Props {}
function RegistrationForm({}: Props) {
  const { state, dispatch } = useContext(UserContext);
  let history = useHistory();
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone:""
  });
  const handleChange = (e: any) => {
    // console.log(state.users);
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
    axios.post("http://localhost:8000/users/register",{name:user.name,email:user.email,password:user.password,phone:user.phone})
    .then(async (res:any)=>{
      console.log(await res.data());
   history.push("/books");
 
   
    })
    .catch(err=>{
      console.log(err);
    })
    history.push("/books");
  };
  

   
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


        <div className="form-group text-left">
          <label htmlFor="exampleInputphone">Phone</label>
          <input
            type="phone"
            className="form-control"
            name="phone"
           
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter phoneno"
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
