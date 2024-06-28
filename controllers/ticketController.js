const Ticket = require('../models/ticketModel');

const createTicket = async (req, res) => {
    const { studentName, dept, year, college, issues } = req.body;

    if (!studentName || !dept || !year || !college || !issues) {
        return res.status(400).json({ message: 'Invalid form data' });
    }

    try {
        const ticket = await Ticket.create({ studentName, dept, year, college, issues });

        console.log('Ticket:', ticket);

        res.status(200).json({ message: 'Ticket created successfully!', data: ticket });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const listLatestTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find().sort({ createdAt: -1 }).limit(15);

        res.status(200).json({ message: 'Latest tickets fetched successfully!', data: tickets });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createTicket,
    listLatestTickets
};
