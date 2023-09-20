import notesService from "../service/notesService.js";

const create = async (req, res, next) => {
    try {
        const result = await notesService.create(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const get = async (req, res, next) => {
    try {
        const result = await notesService.get();
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const update = async (req, res, next) => {
    try {
        const notesId = req.params.notesId;
        const request = req.body;

        const result = await notesService.update(request, notesId);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const remove = async (req, res, next) => {
    try {
        const notesId = req.params.notesId;

        await notesService.remove(notesId);
        res.status(200).json({
            data: "OK"
        })
    } catch (e) {
        next(e);
    }
}

export default {
    create,
    get,
    update,
    remove
}