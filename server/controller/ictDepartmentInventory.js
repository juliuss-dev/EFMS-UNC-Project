const IctDepartmentInventory = require("../model/IctDepartmentInventory.js");
const Reservation = require("../model/Reservation");

exports.create = async (req, res) => {
  const {
    name,
    model,
    units,
    description,
    dateAdded,
    reservationId,
    // serialNumber,
    // status,
  } = req.body;

  try {
    let ictInventory = new IctDepartmentInventory();

    ictInventory.name = name;
    ictInventory.model = model;
    ictInventory.units = units;
    ictInventory.description = description;
    ictInventory.dateAdded = dateAdded;
    // ictInventory.department = department;
    ictInventory.reservationId = reservationId;

    // ictInventory.status = status;
    await ictInventory.save();

    res.json({
      successMessage: "Equipment has successfully added",
      ictInventory,
    });
  } catch (error) {
    console.log(error, "ictDepartmentInventory POST Controller Error");
    res.status(500).json({
      errorMessage: "Try again, ict Department Inventory Error",
    });
  }
};

// exports.getLastIctDesktop = async (req, res) => {
//   try {
//     const ictInventory = await IctDepartmentInventory.find({
//       name: "Laptop",
//     })
//       .sort({ _id: -1 })
//       .limit(1);

//     var parsinglastIctLaptopSerialNumber = ictInventory[0].serialNumber;
//     parsinglastIctLaptopSerialNumber =
//       parseFloat(parsinglastIctLaptopSerialNumber) + 1;
//     parsinglastIctLaptopSerialNumber =
//       parsinglastIctLaptopSerialNumber.toString();
//     parsinglastIctLaptopSerialNumber = parsinglastIctLaptopSerialNumber + "-CP";

//     console.log(parsinglastIctLaptopSerialNumber),
//       res.json({
//         successMessage: "Sucessful",

//         ictInventory,
//       });
//   } catch (error) {
//     console.log(error, "get last dekstop Controller Error");
//     res.status(500).json({
//       errorMessage: "Try again, ict get last dekstop Error",
//     });
//   }
// };

exports.readAll = async (req, res) => {
  try {
    const ictInventory = await IctDepartmentInventory.find({});
    //return the maintenanceInventory
    res.json({ ictInventory });
    console.log(ictInventory);
  } catch (error) {
    console.log("ict Inventory GET ALL Controller Error");
    res.status(500).json({
      errorMessage: "Try Again, ict Inventroy Error",
    });
  }
};

exports.read = async (req, res) => {
  try {
    const ictId = req.params.ictId;
    const ictInventory = await IctDepartmentInventory.findById(ictId);

    res.json(ictInventory);
  } catch (error) {
    console.log("Read id in controller error", error);
    res.json({
      errorMessage: "Error Getting the id of ict Inventory",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const ictId = req.params.ictId;
    const ictInventory = await IctDepartmentInventory.findByIdAndUpdate(
      ictId,
      req.body
      // {
      //   $set: {
      //     status: "Not Available",
      //   },
      // },
      // {
      //   new: true,
      // }
    );

    console.log("Equipment successfully updated");
    console.log(ictInventory);
    console.log("req.body", req.body);

    res.json({
      successMessage: "Equipment successfully updated",
      ictInventory,
    });
  } catch (error) {
    console.log("Update equipment error", error);
    res.status(500).json({
      errorMessage: "Update Equipment Error",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const ictId = req.params.ictId;
    const deleteUpdate = await IctDepartmentInventory.findByIdAndDelete(
      ictId,
      res.body
    );
    console.log("Equipment successfully delete");
    res.json({
      successMessage: "An equipment has been deleted",
      deleteUpdate,
    });
  } catch (error) {
    console.log("Delete Equipment error", error);
    res.status(500).json({
      errorMessage: "Delete Equipment error",
    });
  }
};

// exports.getIctComputer = async (req, res) => {
//   try {
//     // const getComputer = await IctDepartmentInventory.find({
//     //   name: "Computer",
//     // });
//     const pipelineD = [
//       {
//         $match: {
//           name: "Desktop",
//         },
//       },
//       {
//         $match: {
//           status: "Available",
//         },
//       },
//       {
//         $group: {
//           _id: "name",
//           sum_units: {
//             $sum: "$units",
//           },
//         },
//       },
//     ];

//     const sumUnits = await IctDepartmentInventory.aggregate(pipelineD);
//     const getComputerUnits = sumUnits[0].sum_units;
//     console.log("Get computer success");
//     res.json({
//       successMessage: "Get Computer succes",
//       getComputerUnits,
//     });
//   } catch (error) {
//     console.log("computer Equipment error", error);
//     res.status(500).json({
//       errorMessage: "computer Equipment error",
//     });
//   }
// };

exports.getIctComputer = async (req, res) => {
  try {
    // const GetIctComputerPrinter = await IctDepartmentInventory.find({
    //   name: { $in: ["Desktop", "Printer"] },
    // });

    const pipelineD = [
      {
        $match: {
          name: "Desktop",
        },
      },
      {
        $match: {
          status: "Available",
        },
      },
    ];

    const pipelineP = [
      {
        $match: {
          name: "Printer",
        },
      },
      {
        $match: {
          status: "Available",
        },
      },
    ];

    const getPriSum = await IctDepartmentInventory.aggregate(pipelineP);
    const getPrinterSum = getPriSum.length;

    const getComSum = await IctDepartmentInventory.aggregate(pipelineD);
    const getComputerSum = getComSum.length;

    res.json([getComputerSum, getPrinterSum]);
    // res.json({ GetComputerUnits, GetPrinterUnits });

    // console.log(getComputerAndPrinter);
  } catch (error) {
    console.log("Ict Inventory GET controller error", error);
    res.status(500).json({
      errorMessage: "Error in GET Ict Inventory",
    });
  }
};

// exports.getIctPrinter = async (req, res) => {
//   try {
//     const pipeline = [
//       {
//         $match: {
//           name: "Printer",
//         },
//       },
//       {
//         $match: {
//           status: "Available",
//         },
//       },
//       {
//         $group: {
//           _id: "name",
//           sum_units: {
//             $sum: "$units",
//           },
//         },
//       },
//     ];

//     const getSum = await IctDepartmentInventory.aggregate(pipeline);
//     const getPrinterUnits = getSum[0].sum_units;

//     console.log("Get printer success");
//     res.json({
//       // getComputerUnits,
//       getPrinterUnits,
//     });
//   } catch (error) {
//     console.log("printer Equipment error", error);
//     res.status(500).json({
//       errorMessage: "printer Equipment error",
//     });
//   }
// };

exports.getAllIctDesktop = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Desktop",
        },
      },
    ];

    const getDesktop = await IctDepartmentInventory.aggregate(pipeline);

    // console.log("Get printer success");
    res.json({
      successMessage: "Get Computer succes",
      getDesktop,
    });
  } catch (error) {
    console.log("Get all Dekstop error", error);
    res.status(500).json({
      errorMessage: "Get all Deksto error",
    });
  }
};

exports.getAllIctLaptop = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Laptop",
        },
      },
    ];

    const getAllIctLaptop = await IctDepartmentInventory.aggregate(pipeline);

    console.log("Get printer success");
    res.json({
      successMessage: "getAllIctLaptop success",
      getAllIctLaptop,
    });
  } catch (error) {
    console.log("getAllIctLaptop error", error);
    res.status(500).json({
      errorMessage: "getAllIctLaptop Deksto error",
    });
  }
};

exports.getAllIctKeyboard = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Keyboard",
        },
      },
    ];

    const getAllIctKeyboard = await IctDepartmentInventory.aggregate(pipeline);

    console.log("Get printer success");
    res.json({
      successMessage: "getAllIctKeyboard success",
      getAllIctKeyboard,
    });
  } catch (error) {
    console.log("getAllIctKeyboard error", error);
    res.status(500).json({
      errorMessage: "getAllIctKeyboard  error",
    });
  }
};

exports.getAllIctMouse = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Mouse",
        },
      },
    ];

    const getAllIctMouse = await IctDepartmentInventory.aggregate(pipeline);

    console.log("Get printer success");
    res.json({
      successMessage: "getAllIctMouse success",
      getAllIctMouse,
    });
  } catch (error) {
    console.log("getAllIctMouse error", error);
    res.status(500).json({
      errorMessage: "getAllIctMouse  error",
    });
  }
};

exports.getAllIctPrinter = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Printer",
        },
      },
    ];

    const getAllPrinter = await IctDepartmentInventory.aggregate(pipeline);

    console.log("Get printer success");
    res.json({
      successMessage: "getAllIctPrinter success",
      getAllIctPrinter,
    });
  } catch (error) {
    console.log("getAllIctMouse error", error);
    res.status(500).json({
      errorMessage: "getAllIctPrinter  error",
    });
  }
};
