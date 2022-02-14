"use strict";

const error = {
    internalServerError: (err) => {
        return {
            message: 'Internal server error.',
            serverError: err,
        };
    },
    notFound: (collection, id) => {
        return {
            message: `${collection} resource with id: ${id} not found.`
        };
    },
    badRequest: (message) => {
        return {
            message: message
        };
    }
};

module.exports = error;