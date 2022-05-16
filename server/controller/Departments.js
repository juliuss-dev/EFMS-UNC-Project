const Departments = require("../model/Departments.js");

exports.create = async (req, res) => {
  const { departmentName, location, building, description } = req.body;

  try {
    let departments = new Departments();

    departments.departmentName = departmentName;
    departments.location = location;
    departments.building = units;
    departments.description = description;

    await departments.save();

    res.json({
      successMessage: "Equipment has successfully added",
      deptInventory,
    });
  } catch {
    console.log(error, "DepartmentInventory POST Controller Error");
    res.status(500).json({
      errorMessage: "Try again, Department Inventory Error",
    });
  }
};
