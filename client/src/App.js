import "./App.css";
import React from "react";
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
import ViewRequest from "./components/approval/ViewRequest";
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
// import ManageImcPersonnel from "./components/imc/PersonnelManagement/ViewPersonnel";
import ViewPersonnel from "./components/imc/PersonnelManagement/ViewPersonnel";
import AddImcPersonnel from "./components/imc/PersonnelManagement/AddPersonnel";
import ForgotPassword from "./components/sign-in/ForgotPassword";
import UserAccount from "./components/user/UserAccount";
import EditPersonnel from "./components/imc/PersonnelManagement/EditPersonnel";
import ViewMaintenanceSchedule from "./components/main-tenance/Maintenance Schedule/viewMaintenanceSchedule";
import ViewApprovalCalendar from "./components/approval/ViewApprovalCalendar";
import ViewImcMaintenanceRequest from "./components/imc/MaintenanceRequest/ViewMaintenanceRequest";
import AddImcMaintenanceRequest from "./components/imc/MaintenanceRequest/AddMaintenanceRequest";
import UserAccountApproval from "./components/approval/UserAccountApproval";
import UserAccountIct from "./components/ict/UserAccountIct";
import UserAccountImc from "./components/imc/UserAccountImc";
import UserAccountVpa from "./components/vpa/UserAccountVpa";
import UserAccountMaintenance from "./components/main-tenance/UserAccountMaintenance";
import Desktop from "./components/ict/Inventory Category/Desktop";
import Laptop from "./components/ict/Inventory Category/Laptop";
import Mouse from "./components/ict/Inventory Category/Mouse";
import Keyboard from "./components/ict/Inventory Category/Keyboard";
import DslrCamera from "./components/imc/Inventory Category/DslrCamera";
import CameraLense from "./components/imc/Inventory Category/CameraLense";
import Tripod from "./components/imc/Inventory Category/Tripod";
import EditVpaModal from "./components/vpa/EditVpaModal";
import Speaker from "./components/vpa/Inventory Category/Speaker";
import BluetoothSpeaker from "./components/vpa/Inventory Category/BluetoothSpeaker";
import Projector from "./components/vpa/Inventory Category/Projector";
import ProjectorScreen from "./components/vpa/Inventory Category/ProjectorScreen";
import Microphone from "./components/vpa/Inventory Category/Microphone";
import Lights from "./components/vpa/Inventory Category/Lights";
import Aeratron from "./components/main-tenance/Inventory Management/Inventory Category/Aeratron";
import UncFlag from "./components/main-tenance/Inventory Management/Inventory Category/UncFlag";
import PhFlag from "./components/main-tenance/Inventory Management/Inventory Category/PhFlag";
import Aircon from "./components/main-tenance/Inventory Management/Inventory Category/Aircon";
import Fan from "./components/main-tenance/Inventory Management/Inventory Category/Fan";
import Generator from "./components/main-tenance/Inventory Management/Inventory Category/Generator";
import Plants from "./components/main-tenance/Inventory Management/Inventory Category/Plants";
import DisplayBoard from "./components/main-tenance/Inventory Management/Inventory Category/DisplayBoard";
import Monoblock from "./components/main-tenance/Inventory Management/Inventory Category/Monoblock";
import PavillionTable from "./components/main-tenance/Inventory Management/Inventory Category/PavillionTable";
import IndustrialFan from "./components/main-tenance/Inventory Management/Inventory Category/IndustrialFan";
import CoolerFan from "./components/main-tenance/Inventory Management/Inventory Category/CoolerFan";
import Printer from "./components/ict/Inventory Category/Printer";
import AssignPersonnel from "./components/imc/PersonnelManagement/AssignPersonnel";
import ViewReservationRequest from "./components/ict/ViewReservationRequest";
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

          <UserRoute
            exact
            path="/user/account/:userId"
            component={UserAccount}
          ></UserRoute>
          <UserRoute
            exact
            path="/user/account/"
            component={UserAccount}
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

          <MaintenanceRoute
            exact
            path={"/maintenance/maintenanceSchedule"}
            component={ViewMaintenanceSchedule}
          />

          <MaintenanceRoute
            exact
            path="/maintenance/account/:userId"
            component={UserAccountMaintenance}
          ></MaintenanceRoute>

          <MaintenanceRoute
            exact
            path="/maintenance/view/aeratronFan"
            component={Aeratron}
          ></MaintenanceRoute>

          <MaintenanceRoute
            exact
            path="/maintenance/view/unc"
            component={UncFlag}
          ></MaintenanceRoute>

          <MaintenanceRoute
            exact
            path="/maintenance/view/ph"
            component={PhFlag}
          ></MaintenanceRoute>

          <MaintenanceRoute
            exact
            path="/maintenance/view/aircon"
            component={Aircon}
          ></MaintenanceRoute>

          <MaintenanceRoute
            exact
            path="/maintenance/view/fan"
            component={Fan}
          ></MaintenanceRoute>

          <MaintenanceRoute
            exact
            path="/maintenance/view/aeratronFan"
            component={Aeratron}
          ></MaintenanceRoute>

          <MaintenanceRoute
            exact
            path="/maintenance/view/generator"
            component={Generator}
          ></MaintenanceRoute>

          <MaintenanceRoute
            exact
            path="/maintenance/view/plants"
            component={Plants}
          ></MaintenanceRoute>

          <MaintenanceRoute
            exact
            path="/maintenance/view/displayBoard"
            component={DisplayBoard}
          ></MaintenanceRoute>

          <MaintenanceRoute
            exact
            path="/maintenance/view/monoblock"
            component={Monoblock}
          ></MaintenanceRoute>

          <MaintenanceRoute
            exact
            path="/maintenance/view/pavillionTable"
            component={PavillionTable}
          ></MaintenanceRoute>

          <MaintenanceRoute
            exact
            path="/maintenance/view/industrialFan"
            component={IndustrialFan}
          ></MaintenanceRoute>

          <MaintenanceRoute
            exact
            path="/maintenance/view/coolerFan"
            component={CoolerFan}
          ></MaintenanceRoute>
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
          <ApprovalRoute exact path="/approval/view" component={ViewApproval} />

          {/* <Route exact path="/view/:reservationId" component={ViewRequest} /> */}
          <ApprovalRoute
            exact
            path="/approval/calendar"
            component={ViewApprovalCalendar}
          />
          <ApprovalRoute
            exact
            path="/approval/account/:userId"
            component={UserAccountApproval}
          ></ApprovalRoute>
          <ImcRoute exact path="/imc/dashboard" component={Imc}></ImcRoute>
          <ImcRoute exact path="/imc/add" component={AddImcModal} />
          <ImcRoute exact path="/imc/view" component={ViewImcModal} />
          <ImcRoute exact path="/imc/edit/:imcId" component={EditImcModal} />
          <ImcRoute
            exact
            path="/imc/PersonnelManagement/ViewPersonnel"
            component={ViewPersonnel}
          />
          <ImcRoute
            exact
            path="/imc/PersonnelManagement/addPersonnel"
            component={AddImcPersonnel}
          />

          <ImcRoute
            exact
            path="/imc/PersonnelManagement/edit/:personnelId"
            component={EditPersonnel}
          />

          <ImcRoute
            exact
            path="/imc/MaintenanceRequest/ViewMaintenanceRequest"
            component={ViewImcMaintenanceRequest}
          />
          <ImcRoute
            exact
            path="/imc/MaintenanceRequest/AddMaintenanceRequest"
            component={AddImcMaintenanceRequest}
          />

          <ImcRoute
            exact
            path="/imc/account/:userId"
            component={UserAccountImc}
          ></ImcRoute>

          <ImcRoute
            exact
            path="/imc/PersonnelManagement/AssignPersonnel/:personnelId"
            component={AssignPersonnel}
          />

          <ImcRoute exact path="/imc/view/dslr" component={DslrCamera} />
          <ImcRoute exact path="/imc/view/lense" component={CameraLense} />
          <ImcRoute exact path="/imc/view/tripod" component={Tripod} />

          <IctRoute exact path="/ict/dashboard" component={Ict}></IctRoute>
          <IctRoute exact path="/ict/add" component={AddIctModal} />
          <IctRoute exact path="/ict/view" component={ViewIctModal} />
          <IctRoute
            exact
            path="/ict/viewReservationEquipment"
            component={ViewReservationRequest}
          />

          <IctRoute exact path="/ict/edit/:ictId" component={EditIctModal} />
          <IctRoute
            exact
            path="/ict/account/:userId"
            component={UserAccountIct}
          ></IctRoute>
          <IctRoute exact path="/ict/view/desktop" component={Desktop} />
          <IctRoute exact path="/ict/view/laptop" component={Laptop} />
          <IctRoute exact path="/ict/view/keyboard" component={Keyboard} />
          <IctRoute exact path="/ict/view/mouse" component={Mouse} />
          <IctRoute exact path="/ict/view/printer" component={Printer} />

          <VpaRoute exact path="/vpa/dashboard" component={Vpa}></VpaRoute>
          <VpaRoute exact path="/vpa/add" component={AddVpaModal} />
          <VpaRoute exact path="/vpa/view" component={ViewVpaModal} />
          <VpaRoute
            exact
            path="/vpa/account/:userId"
            component={UserAccountVpa}
          ></VpaRoute>
          <VpaRoute exact path="/vpa/edit/:vpaId" component={EditVpaModal} />
          <VpaRoute exact path="/vpa/view/speaker" component={Speaker} />
          <VpaRoute
            exact
            path="/vpa/view/bluetoothSpeaker"
            component={BluetoothSpeaker}
          />
          <VpaRoute exact path="/vpa/view/projector" component={Projector} />
          <VpaRoute
            exact
            path="/vpa/view/projectorScreen"
            component={ProjectorScreen}
          />
          <VpaRoute exact path="/vpa/view/microphone" component={Microphone} />
          <VpaRoute exact path="/vpa/view/lights" component={Lights} />

          {/* <VpaRoute exact path="/vpa/edit/:ictId" component={EditVpaModal} /> */}
          <Route
            exact
            path="/forgot-password"
            component={ForgotPassword}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
