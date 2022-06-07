const AssignPersonnel = require("../model/PersonnelAssign");
const Reservation = require("../model/Reservation");
const Personnel = require("../model/PersonnelServices");
const date = require("date-and-time");

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
    const personnel = await Personnel.find({ _id: personnelId });

    //Time Formatting
    const now = reservation[0].dateOfEvent;
    const formattedDateAssignPersonnel = date.format(now, "DD/MM/YYYY");
    const formattedTimeAssignPersonnel = date.format(now, "HH:mm");
    console.log(formattedTimeAssignPersonnel);
    console.log(formattedDateAssignPersonnel);
    console.log(reservation);

    pipelineSearchForConflict = [
      {
        $match: {
          personnelId: personnelId,
        },
      },
      {
        $match: {
          dateOfEvent: formattedDateAssignPersonnel,
        },
      },
    ];

    const searchConflict = await AssignPersonnel.aggregate(
      pipelineSearchForConflict
    );

    console.log(searchConflict);

    if (Object.keys(searchConflict).length === 0) {
      assignPersonnel.activityName = reservation[0].title;
      assignPersonnel.nameOfRequestingParty = reservation[0].nameOfReqParty;

      assignPersonnel.dateOfEvent = formattedDateAssignPersonnel;
      assignPersonnel.timeOfEvent = formattedTimeAssignPersonnel;

      //From Personnel Services collection
      assignPersonnel.personnelId = personnelId;

      assignPersonnel.personnelName = personnel[0].name;
      assignPersonnel.assignServiceName = personnel[0].serviceName;

      await assignPersonnel.save();
    } else {
      console.log("Personnel is Already reserve for that date.");
    }

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

exports.getPersonnelAssignedSchedule = async (req, res) => {
  const personnelId = req.params.personnelId;

  pipelineSearchId = [
    {
      $match: {
        personnelId: personnelId,
      },
    },
  ];

  console.log(personnelId);
  try {
    const searchPersonnelId = await AssignPersonnel.find({
      personnelId: personnelId,
    });

    const aggSearchPersonnelId = await AssignPersonnel.aggregate(
      pipelineSearchId
    );

    res.json({ searchPersonnelId });
  } catch (error) {
    console.log(error, "Personnel Schedule Get Controller Error");
    res.status(500).json({
      errorMessage: "Try again, Personnel Schedule Error",
    });
  }
};
