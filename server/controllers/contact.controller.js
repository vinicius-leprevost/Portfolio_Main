import Contact from '../models/contact.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const create = async (req, res) => {
    const contact = new Contact(req.body);
    try {
        await contact.save();
        return res.status(200).json({
            message: "Successfully created!",
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const list = async (req, res) => {
    try {
        let contacts = await Contact.find().select('name phone subject_type title description email updated created');
        res.json(contacts);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const contactByID = async (req, res) => {
    try {
        let contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({
                error: "Could not find contact",
            });
        }
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve contact",
        });
    }
};

const read = (req, res) => {
    return res.json(req.profile);
};

const update = async (req, res) => {
    try {
        let contact = req.profile;
        contact = extend(contact, req.body);
        contact.updated = Date.now();
        await contact.save();
        res.json(contact);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const remove = async (req, res) => {
    try {
        let contact = req.profile;
        let deletedContact = await contact.deleteOne();
        res.json(deletedContact);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

export default { create, contactByID, read, list, remove, update };
