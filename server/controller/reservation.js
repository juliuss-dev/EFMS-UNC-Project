const Reservation = require("../model/Reservation")

exports.create = async (req, res) =>{
    // console.log('req.body: ', req.body)
    const {activityType,title,timeDuration,numberParticipants,nameOfReqParty,venue,soundSystem,bluetoothSpeaker,microphone,
            projector,projectorScreen,lights,videoDocumentation,photoDocumentation,janitorial,security,electricians,itTechnicians,
            soundOperators,generatorOperators,van,phFlag,uncFlag,aircon,fan,generator,plants,displayBoards,monoblocks,pavillionTable,
            industrialFan,aeratronFan,coolerfan,others,computers,printers,uncTheaterGuild,collegeBand,hsDxmc,hsMajorettes,
            collegeMajorettes,elementaryMajorettes,cat, userId} = req.body;

    try {
        let reservation = new Reservation();

        reservation.activityType = activityType;
        reservation.title = title;
        reservation.timeDuration = timeDuration;
        reservation.numberParticipants = numberParticipants;
        reservation.nameOfReqParty = nameOfReqParty;
        reservation.venue = venue;
        reservation.soundSystem = soundSystem;
        reservation.bluetoothSpeaker = bluetoothSpeaker;
        reservation.microphone = microphone;
        reservation.projector = projector;
        reservation.projectorScreen = projectorScreen;
        reservation.lights = lights;
        reservation.videoDocumentation = videoDocumentation;
        reservation.photoDocumentation = photoDocumentation;
        reservation.janitorial = janitorial;
        reservation.security = security;
        reservation.electricians = electricians;
        reservation.itTechnicians = itTechnicians;
        reservation.soundOperators = soundOperators;
        reservation.generatorOperators = generatorOperators
        reservation.van = van;
        reservation.phFlag = phFlag;
        reservation.uncFlag = uncFlag;
        reservation.aircon = aircon;
        reservation.fan = fan;
        reservation.generator = generator;
        reservation.plants = plants;
        reservation.displayBoards = displayBoards;
        reservation.monoblocks = monoblocks;
        reservation.pavillionTable = pavillionTable;
        reservation.industrialFan = industrialFan;
        reservation.aeratronFan = aeratronFan;
        reservation.coolerfan = coolerfan;
        reservation.others = others;
        reservation.computers = computers;
        reservation.printers = printers;
        reservation.uncTheaterGuild = uncTheaterGuild;
        reservation.collegeBand = collegeBand;
        reservation.hsDxmc = hsDxmc;
        reservation.hsMajorettes = hsMajorettes;
        reservation.collegeMajorettes = collegeMajorettes
        reservation.elementaryMajorettes = elementaryMajorettes;
        reservation.cat = cat,

        reservation.userId = userId

        await reservation.save()

        res.json({
            // reservation: reservation,
            sucessMessage: "Reservation has been made successfully",
            reservation
        })

    } catch (error) {
        console.log(error, "reservationController error")
        res.status(500).json({
            errorMessage: "Try again, Reservation Error"
        })
    }
}
exports.readAll = async (req, res) =>{

    try {
        const reservation = await Reservation.find({userId: req.body.userId})
        res.json({reservation})
    } catch (error) {
        console.log("readAll controller error", error)
        res.json({
            errorMessage: "Please try again"
        })
    }
}
exports.read = async (req, res) =>{

    try {
        const reservationId = req.params.reservationId;
        const reservation = await Reservation.findById(reservationId)
        res.json(reservation)
        // reservation
    } catch (error) {
        console.log("read by id controller error", error)
        res.status(500).json({
            errorMessage: "Please try again"
        })
    }
}