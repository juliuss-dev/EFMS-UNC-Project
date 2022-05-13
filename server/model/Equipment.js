const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    model:{
        type: String,
        required: true,
    },
    units:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: false,
    },
    dateAdded:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: false,
    }
    


},{timestamps: true})

const Equipment = mongoose.model('User', EquipmentSchema)

module.exports = Equipment;