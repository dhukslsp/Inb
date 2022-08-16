const express = require("express");
const router = express.Router();
const fetchuser = require("../Middlewere/fetchuser");
const Note = require("../models/Notes");
const { body, validationResult } = require("express-validator");
// ROute 1 get all the notes 
router.get('/Fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("The main Internal server error accoured");
    }
})
// add a new not using post add note
router.post('/addnote', fetchuser,
    body("title", "Enter a valid title with min length of 5").isLength({ min: 5 }),
    body("description", "Enter a valid description of at least 5 characters").isLength({ min: 5 })
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: "please atleast the title of min length of 5 and description of 5" });
        }
        try {
            const { title, description, tag } = req.body;
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savenote = await note.save()
            res.json(savenote);
        } catch (error) {
            console.error(error);
        }
    })
// route 3 updata an existing note ,Login req
router.get('/Fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("The main Internal server error accoured");
    }
})
//Router 3 this is a main endpoint for the note called to Uadate an existing note
// The req.params.id sends the user idz
router.put('/updatenote/:id', fetchuser,
    async (req, res) => {
        const {title,description,tag} = req.body;
        //create a new note object
        const newnote = {}
        if(title){newnote.title = title};
        if(description){newnote.description = description};
        if(tag){newnote.tag = tag};
        //Find the note to be upfated and update it
        let note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).send("Not Found");
        }
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id,{$set: newnote},{new:true})
        res.json(note);
    })
//ROute 4 dleate an existing note using DELETE request post/api/notes/deletenote
router.delete('/deletenote/:id',fetchuser,async (req,res)=>{
    //Find the note and delete it
    let note = await Note.findById(req.params.id);
    if(!note){return res.send("Not Found")};
    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({"sucess":"The note has been deleted",note:note});
})

module.exports = router;