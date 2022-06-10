const { reset } = require("nodemon");
const IctDepartmentInventory = require("../model/IctDepartmentInventory.js");
const ImcDepartmentInventory = require("../model/ImcDepartmentInventory.js");
const MaintenanceInventory = require("../model/MaintenanceInventory");
const VpaDepartmentInventory = require("../model/VpaDepartmentInventory.js");

exports.getMaintenance = async (req, res) => {
  //pipeline aggregation declarations

  //Resources Needed
  const pipelineAircon = [
    {
      $match: {
        name: "Aircon",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
  ];

  const pipelineFan = [
    {
      $match: {
        name: "Fan",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
  ];

  const pipelineGenrator = [
    {
      $match: {
        name: "Generator",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
  ];

  pipelinePhFlag = [
    {
      $match: {
        name: "Philippine Flag",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
    {
      $group: {
        _id: null,
        count: {
          $sum: "$units",
        },
      },
    },
  ];

  pipelineUncFlag = [
    {
      $match: {
        name: "UNC Flag",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
    {
      $group: {
        _id: null,
        count: {
          $sum: "$units",
        },
      },
    },
  ];

  pipelineDisplayBoards = [
    {
      $match: {
        name: "Display Boards",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
    {
      $group: {
        _id: null,
        count: {
          $sum: "$units",
        },
      },
    },
  ];

  pipelineMonoblocks = [
    {
      $match: {
        name: "Monoblock",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
    {
      $group: {
        _id: null,
        count: {
          $sum: "$units",
        },
      },
    },
  ];

  pipelinePavillionTable = [
    {
      $match: {
        name: "Pavillion Table",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
    {
      $group: {
        _id: null,
        count: {
          $sum: "$units",
        },
      },
    },
  ];

  pipelineIndustrialFan = [
    {
      $match: {
        name: "Industrial Fan",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
  ];

  pipelineCoolerFan = [
    {
      $match: {
        name: "Cooler Fan",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
  ];
  //Resources Needed

  //VPA AUXILIARY
  pipelineSoundSystem = [
    {
      $match: {
        name: "Sound System",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
  ];

  pipelineBluetoothSpeaker = [
    {
      $match: {
        name: "Bluetooth Speaker",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
  ];

  pipelineMultimediaProjector = [
    {
      $match: {
        name: "Multimedia Projector",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
  ];

  pipelineMicrophone = [
    {
      $match: {
        name: "Microphone",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
    {
      $group: {
        _id: null,
        count: {
          $sum: "$units",
        },
      },
    },
  ];

  pipelineProjectorScreen = [
    {
      $match: {
        name: "Projector Screen",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
    {
      $group: {
        _id: null,
        count: {
          $sum: "$units",
        },
      },
    },
  ];

  pipelineLights = [
    {
      $match: {
        name: "Lights",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
    {
      $group: {
        _id: null,
        count: {
          $sum: "$units",
        },
      },
    },
  ];
  //VPA AUXILIARY

  try {
    //Maintenance Department
    const getAircon = await MaintenanceInventory.aggregate(pipelineAircon);
    const getAirconUnits = getAircon.length;

    const getFan = await MaintenanceInventory.aggregate(pipelineFan);
    const getFanUnits = getFan.length;

    const getGenerator = await MaintenanceInventory.aggregate(pipelineGenrator);
    const getGeneratorUnits = getGenerator.length;

    const flag = await MaintenanceInventory.aggregate(pipelinePhFlag);
    const phFlag = flag[0].count;

    const unflag = await MaintenanceInventory.aggregate(pipelineUncFlag);
    const UncFlag = unflag[0].count;

    const disBoard = await MaintenanceInventory.aggregate(
      pipelineDisplayBoards
    );
    const displayBoards = disBoard[0].count;

    const mon = await MaintenanceInventory.aggregate(pipelineMonoblocks);
    const monoblocks = mon[0].count;

    const table = await MaintenanceInventory.aggregate(pipelinePavillionTable);
    const pavTable = table[0].count;

    const induFan = await MaintenanceInventory.aggregate(pipelineIndustrialFan);
    const industrialFan = induFan.length;

    const coolFan = await MaintenanceInventory.aggregate(pipelineCoolerFan);
    const coolerFan = coolFan.length;
    //Maintenance Department

    //Vpa Department
    const aggSoundSystem = await VpaDepartmentInventory.aggregate(
      pipelineSoundSystem
    );
    const soundSystem = aggSoundSystem.length;

    const aggBlueSpeaker = await VpaDepartmentInventory.aggregate(
      pipelineBluetoothSpeaker
    );
    const bluetoothSpeaker = aggBlueSpeaker.length;

    const aggMultimediaProjector = await VpaDepartmentInventory.aggregate(
      pipelineMultimediaProjector
    );
    const multimediaProjector = aggMultimediaProjector.length;

    const aggMicrophone = await VpaDepartmentInventory.aggregate(
      pipelineMicrophone
    );
    const microphone = aggMicrophone[0].count;

    const aggProjectorScreen = await VpaDepartmentInventory.aggregate(
      pipelineProjectorScreen
    );
    const projectorScreen = aggProjectorScreen[0].count;

    const aggLights = await VpaDepartmentInventory.aggregate(pipelineLights);
    const lights = aggLights[0].count;
    //Vpa Department

    res.json([
      getAirconUnits,
      getFanUnits,
      getGeneratorUnits,
      phFlag,
      UncFlag,
      displayBoards,
      monoblocks,
      pavTable,
      industrialFan,
      coolerFan,
      soundSystem,
      bluetoothSpeaker,
      multimediaProjector,
      microphone,
      projectorScreen,
      lights,
    ]);
  } catch (error) {
    console.log("Maintenance equipment error", error);
    res.status(500).json({
      errorMessage: "Maintenance Equipment Error",
    });
  }
};

exports.getPhFlag = async (req, res) => {
  try {
    pipelinePhFlag = [
      {
        $match: {
          name: "Philippine Flag",
        },
      },
      {
        $group: {
          _id: null,
          count: {
            $sum: "$units",
          },
        },
      },
    ];

    const flag = await MaintenanceInventory.aggregate(pipelinePhFlag);
    const phFlag = flag[0].count;

    console.log(phFlag);
    res.json({
      phFlag,
    });
  } catch (error) {
    console.log("Update equipment error", error);
    res.status(500).json({
      errorMessage: "Update Equipment Error",
    });
  }
};

exports.getUncFlag = async (req, res) => {
  try {
    const phFlag = await MaintenanceInventory.findOne({
      name: "UNC Flag",
    });

    console.log(phFlag);
    res.json({
      phFlag,
    });
  } catch (error) {
    console.log("Update equipment error", error);
    res.status(500).json({
      errorMessage: "Update Equipment Error",
    });
  }
};

exports.getMonoblocks = async (req, res) => {
  try {
    const phFlag = await MaintenanceInventory.findOne({
      name: "Monoblock",
    });

    console.log(phFlag);
    res.json({
      phFlag,
    });
  } catch (error) {
    console.log("Update equipment error", error);
    res.status(500).json({
      errorMessage: "Update Equipment Error",
    });
  }
};

exports.getPavillionTable = async (req, res) => {
  try {
    const phFlag = await MaintenanceInventory.findOne({
      name: "Pavillion Table",
    });

    console.log(phFlag);
    res.json({
      phFlag,
    });
  } catch (error) {
    console.log("Update equipment error", error);
    res.status(500).json({
      errorMessage: "Update Equipment Error",
    });
  }
};
