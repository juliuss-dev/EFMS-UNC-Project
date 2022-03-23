const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema({
    activityType: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    timeDuration: {
        type: String,
        required: true
    },
    numberParticipants: {
        type: Number,
        default: 0
    },
    nameOfReqParty: {
        type: String,
        required: true
    },

    venue:{
        type: String,
        default: "NO"
    }, 

    soundSystem: {
        type: String,
        default: "NO"
    },
    bluetoothSpeaker: {
        type: String,
        default: "NO"
    },
    microphone: {
        type: Number,
        default: 0
    },
    projector: {
        type: String,
        default: "NO"
    },
    projectorScreen: {
        type: String,
        default: "NO"
    },
    lights: {
        type: Number,
        default: 0
    },
    videoDocumentation:{
        type: String,
        default: "NO"
    },
    photoDocumentation:{
        type: String,
        default: "NO"
    },

    janitorial:{
        type: String,
        default: "NO"

    },
    security:{
        type: String,
        default: "NO"
    },
    electricians:{
        type: String,
        default: "NO"
    },
    itTechnicians:{
        type: String,
        default: "NO"
    },
    soundOperators:{
        type: String,
        default: "NO"
    },
    generatorOperators:{
        type: String,
        default: "NO"
    },
    van:{
        type: String,
        default: "NO"
    },

    phFlag:{
        type: String,
        default: "NO"
    },
    uncFlag:{
        type: String,
        default: "NO"
    },
    aircon:{
        type: String,
        default: "NO"
    },
    fan:{
        type: String,
        default: "NO"
    },
    generator:{
        type: String,
        default: "NO"
    },
    plants:{
        type: String,
        default: "NO"
    },
    displayBoards:{
        type: Number,
        default: 0
    },
    monoblocks:{
        type: Number,
        default: 0
    },
    pavillionTable:{
        type: Number,
        default: 0
    },
    industrialFan:{
        type: Number,
        default: 0
    },
    aeratronFan:{
        type: Number,
        default: 0
    },
    coolerfan: {
        type: Number,
        default: 0
    },
    others:{
        type: String
    },

    computers:{
        type: Number,
        default: 0
    }, 
    printers:{
        type: Number,
        default: 0
    },

    uncTheaterGuild:{
        type: String,
        // default: "NO"
    },
    collegeBand:{
        type: String,
        // default: "NO"
    },
    hsDxmc:{
        type: String,
        // default: "NO"
    },
    hsMajorettes:{
        type: String,
        // default: "NO"
    },
    collegeMajorettes:{
        type: String,
        // default: "NO"
    },
    elementaryMajorettes:{
        type: String,
        // default: "NO"
    },
    cat:{
        type: String,
        // default: "No"
    },
    status:{
        type: String,
        default: "Pending"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }

}, {timestamps: true})
    
const Reservation = mongoose.model('Reservation', ReservationSchema)
module.exports = Reservation;