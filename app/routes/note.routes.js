module.exports = (app) =>{
    const notes = require('../controllers/note.controllers.js');

    //create a new note
    app.post('/notes',notes.create);

    //retreive all notes
    app.get('/notes',notes.findAll);

    //retrive a single note with noteID
    app.get('/notes',notes.findOne);

    //update a note with id
    app.put('/notes/:noteId',notes.update);

    //delete a note with noteid
    app.delete('/notes/:noteId',notes.delete);
}