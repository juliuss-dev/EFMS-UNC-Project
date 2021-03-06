const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./database/db");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const reservationRoutes = require("./routes/reservation");
const maintenanceInventory = require("./routes/maintenanceInventory");
const deptInventory = require("./routes/deptInventory");
const departments = require("./routes/departments");
const ictDepartmentInventory = require("./routes/ictDepartmentInventory");
const vpaDepartmentInventory = require("./routes/vpaDepartmentInventory");
const imcDepartmentInventory = require("./routes/ImcDepartmentInventory");
const personnelServices = require("./routes/personnelServices");
const maintenaceSchedule = require("./routes/maintenanceSchedule");
const MaintenanceInventory = require("./routes/maintenanceInventory");
const getAllEquipments = require("./routes/getAllEquipments");
const assignPersonnel = require("./routes/assignPersonnel");

const bodyParser = require("body-parser");
// const MaintenaceSchedule = require("./model/MaintenanceSchedule");
const filterRoutes = require("./routes/filter");
//Middleware
app.use(cors());
//parse the request into a json object

app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
app.use("/api/auth", authRoutes);
app.use("/api/reservation", reservationRoutes);

app.use("/api/maintenanceInventory", MaintenanceInventory);

app.use("/api/deptInventory", deptInventory);
app.use("/api/departments", departments);
app.use("/api/ictDepartmentInventory", ictDepartmentInventory);
app.use("/api/vpaDepartmentInventory", vpaDepartmentInventory);
app.use("/api/imcDepartmentInventory", imcDepartmentInventory);
app.use("/api/personnelServices", personnelServices);
app.use("/api/maintenanceSchedule", maintenaceSchedule);
app.use("/api/maintenanceInventory", MaintenanceInventory);
app.use("/api/filter", filterRoutes);
app.use("/api/getAllEquipments", getAllEquipments);
app.use("/api/assignPersonnel", assignPersonnel);

connectDB();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`The server is running on port 5000 ${port}`);
});
