import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../contexts/bookcontext";
import { requestingForOTP } from "../services";
import { loginUser } from "../services";

import jwt from "jsonwebtoken";

interface Props {
  handleToken: Function;
}
function LoginForm({ handleToken }: Props) {
  const { state, dispatch } = useContext(UserContext);
  let history = useHistory();
  const [user, setUser] = useState({
    // password: "",
    // email: "",
    phone:"",
    otp:""
  });
  const [otpno,setotpno]=useState(false);
  const handleChange = (e: any) => {
    let nam = e.target.name;
    let val = e.target.value;
    setUser({ ...user, [nam]: val });
  };
  const generateOTP=(e:any)=>{
    e.preventDefault()

    const result=requestingForOTP(user,dispatch)
    if(result)
    setotpno(true)
  }

  

  // const doLogin = (e: any) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:8000/users/login", user)
  //     .then((res: any) => {
  //       console.log(res.data.token);
  //       dispatch({
  //         type: "LOGIN_USER",
  //         payload: { email: user.email, token: res.data.token },
  //       });
  //       history.push("/books");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
const doLogin=(e:any)=>{
  e.preventDefault();
  console.log(state.token);
  const result=loginUser(user,dispatch,state.token);
  if(result)
  history.push("/books")
}
const formotp=(type:string)=>{
  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form onSubmit={type==='phone' ?generateOTP:doLogin}>
        {/* <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div> */}

        {/* <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
            autoComplete="off"
            placeholder="Password"
          />
        </div> */}


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



        <div className="form-group text-left">
          <label htmlFor="exampleInputotp">otp</label>
          <input
            type="otp"
            className="form-control"
            name="otp"
            
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter otp"
          />
         
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
return(
<div>
  {!otpno?formotp("phone"):formotp("otp")}
</div>
);
}
export default LoginForm;
