const MaintenanceSchedule = require("../model/MaintenanceSchedule");

exports.create = async (req, res) => {
  const {
    title,
    dateReported,
    dateStarted,
    dateFinished,
    maintenanceType,
    checkedBy,
    performedBy,
    description,
    status,
    // status,
  } = req.body;

  try {
    let mSchedule = new MaintenanceSchedule();

    mSchedule.title = title;
    mSchedule.dateStarted = dateStarted;
    mSchedule.dateReported = dateReported;
    mSchedule.dateFinished = dateFinished;
    mSchedule.maintenanceType = maintenanceType;
    mSchedule.checkedBy = checkedBy;
    mSchedule.performedBy = performedBy;
    mSchedule.description = description;
    mSchedule.status = status;

    await mSchedule.save();

    res.json({
      successMessage: "Equipment has successfully added",
      mSchedule,
    });
  } catch (error) {
    console.log(error, "Maintenance Schedule POST Controller Error");
    res.status(500).json({
      errorMessage: "Try again, Maintenance Schedule Error",
    });
  }
};

exports.readAll = async (req, res) => {
  try {
    const mSchedule = await MaintenanceSchedule.find({});
    //return the maintenanceInventory
    res.json({ mSchedule });
    console.log(mSchedule);
  } catch (error) {
    console.log("Maintenance Schedule GET ALL Controller Error");
    res.status(500).json({
      errorMessage: "Try Again, Maintenance Schedule Error",
    });
  }
};

exports.read = async (req, res) => {
  try {
    const mScheduleId = req.params.imcId;
    const mSchedule = await MaintenanceSchedule.findById(mScheduleId);

    res.json(mSchedule);
  } catch (error) {
    console.log("Read id in controller error", error);
    res.json({
      errorMessage: "Error Getting the id of Maintenance Schedule",
    });
  }
};
