import express from "express";
import notesController from "../controller/notes-controller.js";

const notesRouter = new express.Router();

notesRouter.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

notesRouter.post('/api/notes', notesController.create);

notesRouter.get('/api/notes', notesController.get);

notesRouter.put('/api/notes/:notesId', notesController.update);

notesRouter.delete('/api/notes/:notesId', notesController.remove);

export {
    notesRouter
}