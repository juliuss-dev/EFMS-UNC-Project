const Departments = require("../model/Departments.js");

exports.create = async (req, res) => {
  const { departmentName, location, building, description, userId } = req.body;

  try {
    let departments = new Departments();

    departments.departmentName = departmentName;
    departments.location = location;
    departments.building = building;
    departments.description = description;
    departments.userId = userId;

    await departments.save();

    res.json({
      successMessage: "Equipment has successfully added",
      departments,
    });
  } catch {
    console.log(error, "Department POST Controller Error");
    res.status(500).json({
      errorMessage: "Try again, Department Inventory Error",
    });
  }
};
