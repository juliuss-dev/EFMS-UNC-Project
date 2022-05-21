const PersonnelServices = require("../model/PersonnelServices");

exports.create = async (req, res) => {
  const { serviceName, name, position, description, status, department } =
    req.body;
  try {
    let personnelServices = new PersonnelServices();
    personnelServices.serviceName = serviceName;
    personnelServices.name = name;
    personnelServices.position = position;
    personnelServices.description = description;
    personnelServices.department = department;
    personnelServices.status = status;

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
