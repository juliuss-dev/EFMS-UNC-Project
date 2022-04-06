const Venue = require("../model/Venue")

exports.create = async (req, res) => {
    const {name, location, capacity, description, equipments} = req.body;


    try {
        let venue = new Venue();

        venue.name = name;
        venue.location = location;
        venue.capacity = capacity;
        venue.description = description;
        venue.equipments = equipments;

        await venue.save()

        res.json({
            sucessMessage: "Venue successfully added."  
            // venue

        })

    }catch(error){
        console.log(error, "venueController error")
        res.json({
            errorMessage: "Try again, Venue Error"
        })
    }
}