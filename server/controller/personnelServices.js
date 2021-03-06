const PersonnelServices = require("../model/PersonnelServices");
const Reservation = require("../model/Reservation");

exports.create = async (req, res) => {
  const {
    serviceName,
    name,
    position,
    description,
    status,
    department,
    reservationId,
  } = req.body;
  try {
    let personnelServices = new PersonnelServices();
    personnelServices.serviceName = serviceName;
    personnelServices.name = name;
    personnelServices.position = position;
    personnelServices.description = description;
    personnelServices.department = department;
    personnelServices.status = status;
    personnelServices.reservationId = reservationId;

    await personnelServices.save();

    res.json({
      successMessage: "Personnel Succesfully added",
      personnelServices,
    });
  } catch (error) {
    console.log(error, "Personnel Services POST Controller Error");
    res.status(500).json({
      errorMessage: "Try again, Personnel Services Inventory Error",
    });
  }
};

exports.readAll = async (req, res) => {
  try {
    const personnelServices = await PersonnelServices.find({});
    res.json({ personnelServices });
    console.log(personnelServices);
  } catch (error) {
    console.log("Personnel Services GET ALL Controller Error");
    res.status(500).json({
      errorMessage: "Try Again, Personnel Services Error",
    });
  }
};
exports.read = async (req, res) => {
  try {
    const personnelId = req.params.personnelId;
    const personnelServices = await PersonnelServices.findById(personnelId);
    res.json({ personnelServices });
    console.log(personnelServices);
  } catch (error) {
    console.log("Personnel Services GET ALL Controller Error");
    res.status(500).json({
      errorMessage: "Try Again, Personnel Services Error",
    });
  }
};

exports.GetImcPersonnel = async (req, res) => {
  try {
    const getImc = await PersonnelServices.find({ department: "IMC" });
    res.json({ getImc });
    console.log(getImc);
  } catch (error) {
    console.log("IMC personnel Services GET controller error", error);
    res.status(500).json({
      errorMessage: "Error in GET Ict Inventory",
    });
  }
};

exports.GetIctPersonnel = async (req, res) => {
  try {
    const getIct = await PersonnelServices.find({ department: "ICT" });
    res.json({ getIct });
    console.log(getIct);
  } catch (error) {
    console.log("IMC personnel Services GET controller error", error);
    res.status(500).json({
      errorMessage: "Error in GET Ict Inventory",
    });
  }
};

exports.GetVpaPersonnel = async (req, res) => {
  try {
    const getVpa = await PersonnelServices.find({ department: "VPA" });
    res.json({ getVpa });
    console.log(getVpa);
  } catch (error) {
    console.log("Vpa personnel Services GET controller error", error);
    res.status(500).json({
      errorMessage: "Error in GET Vpa Inventory",
    });
  }
};

exports.GetMaintenancePersonnel = async (req, res) => {
  try {
    const getMaintenance = await PersonnelServices.find({
      department: "Maintenance",
    });
    res.json({ getMaintenance });
    console.log(getMaintenance);
  } catch (error) {
    console.log("Maintenance personnel Services GET controller error", error);
    res.status(500).json({
      errorMessage: "Error in GET Ict Inventory",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const personnelId = req.params.personnelId;
    const personnel = await PersonnelServices.findByIdAndUpdate(
      personnelId,
      {
        $set: {
          status: "Not Available",
        },
      },
      {
        new: true,
      }
    );
    console.log("Personnel successfully updated");
    console.log(personnel);

    res.json({
      successMessage: "Personnel successfully updated",
      personnel,
    });
  } catch (error) {
    console.log("Update Personnel error", error);
    res.json(500).json({
      errorMessage: "Update Personnel Error",
    });
  }
};
exports.delete = async (req, res) => {
  try {
    const personnelId = req.params.personnelId;
    const deletePersonnel = await PersonnelServices.findByIdAndDelete(
      personnelId,
      res.body
    );
    console.log("Personnel successfully delete");
    res.json({
      successMessage: "Personnel has been deleted",
    });
  } catch (error) {
    console.log("Delete Personnel error", error);
    res.status(500).json({
      errorMessage: "Delete Personnel error",
    });
  }
};

exports.assignImcDocumentationPersonnel = async (req, res) => {
  try {
    const personnelId = req.params.personnelId;
    const reservationId = req.body.reservationId;
    const assignPersonnel = await PersonnelServices.findByIdAndUpdate(
      personnelId,

      {
        $set: {
          reservationId: reservationId,
        },
      }
    );
    console.log(personnelId);
    console.log(reservationId);
    console.log("Success");
    res.json({
      successMessage: "Successfully updated",
      assignPersonnel,
    });
  } catch (error) {
    console.log("Update equipment error", error);
    res.status(500).json({
      errorMessage: "Update Equipment Error",
    });
  }
};
