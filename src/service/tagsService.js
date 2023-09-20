import { prismaClient } from "../config/database.js";

const create = async (request) => {
    return prismaClient.tags.create({
        data: {
            name: request.name
        },
        select: {
            id: true,
            name: true
        }
    });
}

const get = async () => {
    return prismaClient.tags.findMany();
}

const update = async (request, notesId) => {

    const findNotes = prismaClient.tags.findUnique({
        where: {
            id: notesId
        }
    })

    return prismaClient.tags.update({
        where: {
            id: notesId
        },
        data: {
            judul: request.judul,
            body: request.body,
            tags: {

                connectOrCreate:
                {
                    where: request.tags.map((tag) => ({ id: tag.id })),
                    create: request.tags.map((tag) => ({ name: tag.name })),
                }
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

    return prismaClient.tags.delete({
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