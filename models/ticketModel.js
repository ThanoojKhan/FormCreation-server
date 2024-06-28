const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    issues: {
        type: String,
        required: true
    }
}, { timestamps: true }); 

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
