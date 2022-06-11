const DeptInventory = require("../model/DeptInventory.js");

exports.create = async (req, res) => {
  const { name, model, units, description, dateAdded, departmentId } = req.body;

  try {
    let deptInventory = new DeptInventory();

    deptInventory.name = name;
    deptInventory.model = model;
    deptInventory.units = units;
    deptInventory.description = description;
    deptInventory.dateAdded = dateAdded;
    deptInventory.departmentId = departmentId;

    await deptInventory.save();

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

exports.read = async (req, res) => {
  try {
    // if (!mongoose.Types.ObjectId.isValid(id)) return false;
    const deptInventoryId = req.params.deptInventoryId;
    const inventory = await DeptInventory.findById();
    // res.json({
    //   successMessage: "Getting the id"
    // });
    res.json(inventory);
    // if (!inventoryId) {
    //   res.status(400).json({
    //     errorMessage: "inventoryid not found",
    //   });
    // }
  } catch (error) {
    console.log("Read id in controller error", error);
    res.json({
      errorMessage: "Error getting the id of department inventory",
    });
  }
};

// exports.GetIct = async (req, res) => {
//   try {
//     const getIct = await DeptInventory.find({ departmentId: 4 });
//     res.json({ getIct });
//     console.log(getIct);
//   } catch (error) {
//     console.log("Ict Inventory GET controller error", error);
//     res.status(500).json({
//       errorMessage: "Error in GET Ict Inventory",
//     });
//   }
// };

exports.GetDepartmentInventory = async (req, res) => {
  try {
    const getVpa = await DeptInventory.find({ departmentId: 5 });
    res.json({ getVpa });
    console.log(getVpa);
  } catch (error) {
    console.log("Ict Inventory GET controller error", error);
    res.status(500).json({
      errorMessage: "Error in GET Ict Inventory",
    });
  }
};

exports.GetVpa = async (req, res) => {
  try {
    const getVpa = await DeptInventory.find({ departmentId: 5 });
    res.json({ getVpa });
    console.log(getVpa);
  } catch (error) {
    console.log("Ict Inventory GET controller error", error);
    res.status(500).json({
      errorMessage: "Error in GET Ict Inventory",
    });
  }
};
