import Joi from "joi";

const createValidation = Joi.object({
    judul: Joi.string().max(100).required(),
    password: Joi.string().max(100).required(),
    name: Joi.string().max(100).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).max(200).required(),
    role: Joi.string().valid('USER', 'ADMIN').required()
});

const getValidation = Joi.string().max(100).required();

const updateValidation = Joi.object({
    username: Joi.string().max(100).required(),
    password: Joi.string().max(100).optional(),
    name: Joi.string().max(100).optional(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).max(200).required(),
})

export {
    createValidation,
    getValidation,
    updateValidation
}