import express from "express";
import { notesRouter } from "./src/route/api.js";
const app = express();
const port = 3000;

app.use(express.json());

app.use(notesRouter);

app.listen(port, () => [
    console.log('example app listening on port $port')
]);
