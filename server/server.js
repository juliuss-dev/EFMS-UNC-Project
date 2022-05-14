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
//Middleware
app.use(cors());
//parse the request into a json object
app.use(express.json());
app.use(cookieParser());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
app.use("/api/auth", authRoutes);
app.use("/api/reservation", reservationRoutes);

app.use("/api/maintenanceInventory", maintenanceInventory);

app.use("/api/deptInventory", deptInventory);

connectDB();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`The server is running on port 5000 ${port}`);
});
