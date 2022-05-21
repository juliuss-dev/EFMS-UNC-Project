import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Reservation from "./components/reservation/Reservation";
// import Approval from './components/approval/Approval';
import User from "./components/user/User";
// import ViewApproval from "./components/view-approval/ViewApproval";
import Department from "./components/department/Department";
import ApproveEquipments from "./components/department/ApproveEquipments";
import UserRoute from "./components/user/UserRoute";
import ViewReservationModal from "./components/user/ViewReservationModal";
import ApprovalDashboard from "./components/approval/ApprovalDashboard";
import Maintenance from "./components/maintenance/Maintenance";
import MaintenanceRoute from "./components/maintenance/MaintenanceRoute";
import EditEquipments from "./components/maintenance/EditEquipments";
// import ViewEquipments from "./components/maintenance/ViewEquipments";
import ViewApproval from "./components/approval/ViewApproval";
// import ViewRequest from "./components/approval/ViewRequest";
import EditRequest from "./components/approval/EditRequest";
import ApprovalRoute from "./components/approval/ApprovalRoute";
import ImcRoute from "./components/imc/ImcRoute";
import Imc from "./components/imc/Imc";
import Ict from "./components/ict/Ict";
import IctRoute from "./components/ict/IctRoute";
import Vpa from "./components/vpa/Vpa";
import VpaRoute from "./components/vpa/VpaRoute";
import MaintenanceRoutes from "./components/main-tenance/MaintenanceRoutes";
import Maintenances from "./components/main-tenance/Maintenances";
import ViewMaintenanceEquipment from "./components/main-tenance/Inventory Management/ViewMaintenanceEquipment";
import EditMaintenanceEquipment from "./components/main-tenance/Inventory Management/EditMaintenanceEquipment";
import AddMaintenanceInventory from "./components/main-tenance/Inventory Management/AddMaintenanceInventory";
import AddImcModal from "./components/imc/AddImcModal";
import ViewImcModal from "./components/imc/ViewImcModal";
import UserAccountManagement from "./components/main-tenance/User Management/UserAccountManagement";
import EditImcModal from "./components/imc/EditImcModal";
import ReservationRequest from "./components/main-tenance/ReservationRequest/ReservationRequest";
import AddIctModal from "./components/ict/AddIctModal";
import ViewIctModal from "./components/ict/ViewIctModal";
import AddReservationModal from "./components/user/AddReservationModal";
import EditIctModal from "./components/ict/EditIctModal";
import AddVpaModal from "./components/vpa/AddVpaModal";
import ViewVpaModal from "./components/vpa/ViewVpaModal";
import ManageImcPersonnel from "./components/imc/PersonnelManagement/ViewPersonnel";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home" component={Home}>
            <Home />
          </Route>

          <Route exact path="/signin" component={SignIn}></Route>

          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/reservation" component={Reservation}></Route>
          <Route
            exact
            path="/approval/dashboard"
            component={ApprovalDashboard}
          ></Route>
          {/* Protected routes of user */}
          <UserRoute exact path="/user/dashboard" component={User}></UserRoute>
          <UserRoute
            exact
            path="/user/view/reservation/:reservationId"
            component={ViewReservationModal}
          ></UserRoute>
          <UserRoute
            exact
            path="/user/add/reservation/"
            component={AddReservationModal}
          ></UserRoute>
          <UserRoute
            exact
            path="/user/view/reservation/"
            component={ViewReservationModal}
          ></UserRoute>

          {/* <Route exact path="/user/dashboard"component={User}>
          </Route> */}
          <Route exact path="/viewapproval" component={ViewApproval}></Route>
          <Route exact path="/department" component={Department}></Route>
          <Route
            exact
            path="/approvalequipments"
            component={ApproveEquipments}
          ></Route>

          {/* <MaintenanceRoute
            exact
            path="/maintenance/dashboard"
            component={Maintenance}
          ></MaintenanceRoute>
          <MaintenanceRoute
            exact
            path="/maintenance/edit/:inventoryId"
            component={EditEquipments}
          /> */}

          <MaintenanceRoutes
            exact
            path="/maintenance/dashboard"
            component={Maintenances}
          />
          <MaintenanceRoutes
            exact
            path="/maintenance/inventory"
            component={ViewMaintenanceEquipment}
          />

          <MaintenanceRoutes
            exact
            path="/maintenance/edit/:inventoryId"
            component={EditMaintenanceEquipment}
          />
          <MaintenanceRoutes
            exact
            path={"/maintenance/add"}
            component={AddMaintenanceInventory}
          />

          <MaintenanceRoutes
            exact
            path={"/maintenance/user/account"}
            component={UserAccountManagement}
          />

          <MaintenanceRoutes
            exact
            path={"/maintenance/reservation"}
            component={ReservationRequest}
          />
          {/* <MaintenanceRoute
            exact
            path="/maintenance/view/equipment/:inventoryId"
            component={ViewEquipments}
          /> */}
          <ApprovalRoute
            exact
            path="/view/edit/:reservationId"
            component={EditRequest}
          />

          {/* <Route exact path="/view/:reservationId" component={ViewRequest} /> */}
          <ImcRoute exact path="/imc/dashboard" component={Imc}></ImcRoute>
          <ImcRoute exact path="/imc/add" component={AddImcModal} />
          <ImcRoute exact path="/imc/view" component={ViewImcModal} />
          <ImcRoute exact path="/imc/edit/:imcId" component={EditImcModal} />
          <ImcRoute
            exact
            path="imc/PersonnelManagement/ViewPersonnel"
            component={ManageImcPersonnel}
          />

          <IctRoute exact path="/ict/dashboard" component={Ict}></IctRoute>
          <IctRoute exact path="/ict/add" component={AddIctModal} />
          <IctRoute exact path="/ict/view" component={ViewIctModal} />
          <IctRoute exact path="/ict/edit/:ictId" component={EditIctModal} />

          <VpaRoute exact path="/vpa/dashboard" component={Vpa}></VpaRoute>
          <VpaRoute exact path="/vpa/add" component={AddVpaModal} />
          <VpaRoute exact path="/vpa/view" component={ViewVpaModal} />
          {/* <VpaRoute exact path="/vpa/edit/:ictId" component={EditVpaModal} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
