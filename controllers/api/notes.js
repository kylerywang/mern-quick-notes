const Note = require("../../models/note")

module.exports = {
    create,
    index,
}

async function create(req, res) {
    console.log("req.body in controller", req.body)
    try {
        const note = await Note.create(req.body)
        res.json(note)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function index(req, res) {
    let notes = []
    try {
        notes = await Note.find({user: req.user._id})
        res.json(notes)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}