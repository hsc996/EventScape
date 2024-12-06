const { AppError } = require("../../functions/helperFunctions");
const { EventModel } = require("../../models/EventModel.js");


async function findPublicEvents(query){
    try {
        return await EventModel.find({
            $text: { $search: query },
            isPublic: true
        })
    } catch (error) {
        throw new AppError("An error occurred: Unable to complete search at this time.");
    }
}


async function findPrivateEvents(query){
    try {
        return await EventModel.find({
            $text: { $search: query },
            isPublic: false
        })
    } catch (error) {
        throw new AppError("An error occurred: Unable to complete search at this time.");
    }
}

module.exports = {
    findPublicEvents,
    findPrivateEvents
}