import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/home/Home';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Reservation from './components/reservation/Reservation';
// import Approval from './components/approval/Approval';
import User from './components/user/User';
import ViewApproval from './components/view-approval/ViewApproval';
import Department from './components/department/Department';
import ApproveEquipments from './components/department/ApproveEquipments';
import UserRoute from './components/user/UserRoute'
import ViewReservationModal from './components/user/ViewReservationModal';
import ApprovalDashboard from './components/approval/ApprovalDashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
        <Route exact path ="/">
          <Home/>
        </Route>

          <Route exact path ="/home" component={Home}>
            <Home/>
          </Route>
    
          <Route exact path="/signin"component={SignIn}>
          </Route>
    
          <Route exact path="/signup"component={SignUp}>
          </Route>
          <Route exact path="/contact"component={Contact}>
          </Route>
          <Route exact path="/about"component={About}>
          </Route>
          <Route exact path="/reservation"component={Reservation}>
          </Route>
          <Route exact path="/approval/dashboard"component={ApprovalDashboard}>
          </Route>
          {/* Protected routes of user */}
          <UserRoute exact path="/user/dashboard"component={User}>
          </UserRoute>
          <UserRoute exact path="/user/view/reservation/:reservationId"component={ViewReservationModal}>
          </UserRoute>
          {/* <Route exact path="/user/dashboard"component={User}>
          </Route> */}
          <Route exact path="/viewapproval"component={ViewApproval}>
          </Route>
          <Route exact path="/department" component={Department}>
          </Route>
          <Route exact path="/approvalequipments" component={ApproveEquipments}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
