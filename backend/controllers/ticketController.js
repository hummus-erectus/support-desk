const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

// @dec     Get user tickets
// @route   GET /api/tickets/me
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'getTickets' })
})

// @dec     Create new ticket
// @route   POST /api/tickets/me
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'createTicket' })
})

module.exports = {
    getTickets,
    createTicket
}