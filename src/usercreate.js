import {useContext, useState} from "react"
import Usercontext from "./usercontext";
export default function Usercreate()
{
    let userdata=useContext(Usercontext)

    let [firstName,setfirstName]=useState("");
    let [lastName,setlasttName]=useState("");
    let [Email,setEmail]=useState("");
    let [Password,setPassword]=useState("");

    let usersubmit=(e)=>
    {
        e.preventDefault()
        console.log({
            firstName,
            lastName,
            Email,
            Password
        })
        userdata.setUserList([...userdata.userList, {
            firstName,
            lastName,
            Email,
            Password}])
    }
    return (
    <>
  <div className="container">
      <div className="row">
          <div className="col-lg-12">
          <h1>User Form</h1>
          </div>
          
      </div>
      <form onSubmit={usersubmit }>
          <div className="row">
              <div className="col-lg-6">
                  <label>First Name</label>
              <input className="form-control" value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
              </div>
              <div className="col-lg-6">
                  <label>Last Name</label>
                  <input className="form-control"  value={lastName} onChange={(e)=>setlasttName(e.target.value)}/>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-6">
                  <label>Email</label>
                  <input className="form-control"  value={Email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="col-lg-6">
                  <label>Password</label>
                  <input className="form-control"  value={Password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              
          </div>
          <div className="row mt-3">
              <div className="col-lg-6">
                  <input className="btn btn-primary" type="submit" value="submit"/>
              </div>
          </div>
      </form>
  </div>
    </>
    )
}