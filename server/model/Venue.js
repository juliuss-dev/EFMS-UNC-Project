const mongoose = require("mongoose");


const VenueSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    location:{
        type: String, 
        required: true,
    },
    capacity:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: false,
    },
    equipments:{
        type: String,
        required: false,
    },
    status:{
        type: String,
        //required: true,
        default: "Pending",
    }

},{timestamps: true}

)

const venue = mongoose.model("Venue", VenueSchema)

module.exports = venue;