const AssignPersonnel = require("../model/PersonnelAssign");
const Reservation = require("../model/Reservation");
const Personnel = require("../model/PersonnelServices");

exports.create = async (req, res) => {
  const { assignReservationId, personnelId } = req.body;

  // const currentPersonnelId = req.params.personnelId;

  console.log(personnelId);

  try {
    let assignPersonnel = new AssignPersonnel();

    //From reservation collection
    assignPersonnel.assignReservationId = assignReservationId;

    console.log(assignReservationId);
    const reservation = await Reservation.find({ _id: assignReservationId });

    console.log(reservation);

    assignPersonnel.activityName = reservation[0].title;
    assignPersonnel.nameOfRequestingParty = reservation[0].nameOfReqParty;
    assignPersonnel.dateOfEvent = reservation[0].dateOfEvent;
    assignPersonnel.timeOfEvent = reservation[0].timeOfEvent;

    //From Personnel Services collection
    assignPersonnel.personnelId = personnelId.personnelId;
    const personnel = await Personnel.find({ _id: personnelId });
    assignPersonnel.personnelName = personnel[0].name;
    assignPersonnel.assignServiceName = personnel[0].serviceName;

    await assignPersonnel.save();

    res.json({
      successMessage: "Schedule successfully added",
      assignPersonnel,
    });
  } catch (error) {
    console.log(error, "Personnel Schedule POST Controller Error");
    res.status(500).json({
      errorMessage: "Try again, Personnel Schedule Error",
    });
  }
};

exports.readAll = async (req, res) => {
  try {
    const assignPersonnel = await AssignPersonnel.find({});
    //return the maintenanceInventory
    res.json({ assignPersonnel });
    console.log(assignPersonnel);
  } catch (error) {
    console.log("assignPersonnel GET ALL Controller Error");
    res.status(500).json({
      errorMessage: "Try Again, assignPersonnel  Error",
    });
  }
};

exports.read = async (req, res) => {
  try {
    const personnelId = req.params.personnelId;
    const assignPersonnel = await AssignPersonnel.findById(personnelId);

    res.json(assignPersonnel);
  } catch (error) {
    console.log("Read id in controller error", error);
    res.json({
      errorMessage: "Error Getting the id of assignPersonnel",
    });
  }
};
