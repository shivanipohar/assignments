import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../contexts/bookcontext";
import jwt from "jsonwebtoken";


interface Props {
  handleToken: Function
}
function LoginForm({ handleToken }: Props) {
  const {state,dispatch}=useContext(UserContext)
  let history = useHistory();
  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  const handleChange = (e: any) => {
    // console.log(state.users)
  
    let nam = e.target.name;
    let val = e.target.value;
    setUser({ ...user, [nam]: val });
  };

  const doLogin = (e: any) => {
    e.preventDefault()
    let res=state.users.find((storeduser:any)=>storeduser.email===user.email)
    if(res && res.password===user.password){
      let token=jwt.sign({usermail:user.email},"secretkey",{expiresIn:"2d"})
      console.log(token);
      dispatch({type:"LOGIN_USER",payload:{email:user.email,token:token}})
      history.push("/books");
    }
else{
  console.log("error occured");
}

   // console.log(user);
    // fetch("http://localhost:8000/users/login", {
    //   method: "POST",
    //   body: JSON.stringify(user),

    //   headers: { "Content-Type": "application/json" },
    // }).then(async (res) => {
    //   if (res.status === 200) {
    //     let tokenObject: any = await res.json();
    //     localStorage.setItem("token", tokenObject.token);
    //     console.log("successfully logged in");
    //     handleToken(tokenObject.token);
    //     history.push("/books");
    //   }

      //   else
      //       console.log("Problem In Login")
   // })

  //  axios.post("http://localhost:8000/users/login",user)
  //  .then((res:any)=>{
  //    console.log(res.data.token);
  //    localStorage.setItem('token',res.data.token)
  //    history.push("/books");
  //  })
  //  .catch(err=>{
  //    console.log(err);
  //  })
  };
  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form onSubmit={doLogin}>
        <div className="form-group text-left">
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
        </div>

        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
            autoComplete="off"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginForm;
