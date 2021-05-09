import logo from './logo.svg';
import './App.css';
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Dashboard from "./dashboard/dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Userlist from './userlist';
import Usercreate from './usercreate';
import Useredit from './useredit';
import Productlist from './productlist';
import Productcreate from './productcreate';
import Productedit from './productedit';
import {Userprovider} from './usercontext';

function App()
{
  return(
     <>
      <Router>
     <div id="wrapper">
       <Userprovider>
    <Sidebar></Sidebar>
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <Topbar></Topbar>
      <div className="container-fluid">
       
          <Switch>
            <Route path="/dashboard"component={Dashboard} exact={true}/>
            <Route path="/users"component={Userlist} exact={true}/>
            <Route path="/usercreate"component={Usercreate} exact={true}/>
            <Route path="/useredit/:id"component={Useredit} exact={true}/>
            <Route path="/products" component={Productlist} exact={true}/>
             <Route path="/productcreate" component={Productcreate} exact={true}/>
               <Route path="/productedit/:id" component={Productedit} exact={true}/>
          </Switch>
        
        
      </div>
    </div>
      </div>
      </Userprovider>
      </div>
      </Router>
    
  </>
  )
}
export default App