import { prismaClient } from "../config/database.js";

const create = async (request) => {

    return prismaClient.notes.create({
        data: {
            judul: request.judul,
            body: request.body,
            tags: {
                connectOrCreate: request.tags.map((tag) => {
                    return {
                        where: { name: tag.name },
                        create: { name: tag.name }
                    };
                })
            }
        },
        select: {
            id: true,
            judul: true,
            body: true,
            tags: true
        }
    });
}

const get = async () => {
    return prismaClient.notes.findMany({
        include: {
            tags: true,
        },
    });
}

const update = async (request, notesId) => {

    const findNotes = prismaClient.notes.findUnique({
        where: {
            id: notesId
        }
    })

    return prismaClient.notes.update({
        where: {
            id: notesId
        },
        data: {
            judul: request.judul,
            body: request.body,
            tags: {
                connectOrCreate: request.tags.map((tag) => {
                    return {
                        where: { name: tag.name },
                        create: { name: tag.name }
                    };
                })
            }
        },
        select: {
            id: true,
            judul: true,
            body: true,
            tags: true
        }
    })
}

const remove = async (notesId) => {

    return prismaClient.notes.delete({
        where: {
            id: notesId
        }
    });
}

export default {
    create,
    get,
    update,
    remove
}