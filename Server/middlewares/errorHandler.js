const constants = require('../constants')

// const {constants} = require('../constants')

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode? res.statusCode : 500
   
    switch (statusCode) {
        case constants.VALIDATION_ERROR:   //import constants to use codes
            res.json({title: "Validation Failed", message: err.message, stackTrace: err.stack})  
            break;
        case constants.UNAUTHORIZED:
            res.json({title: "Unauthorized", message: err.message, stackTrace: err.stack})  
            break
        case constants.FORBIDDEN:
            res.json({title: "Forbidden", message: err.message, stackTrace: err.stack})  
            break
        case constants.SERVER_ERROR:
            res.json({title: "Server Error", message: err.message, stackTrace: err.stack})  
            break
        case constants.NOT_FOUND:
            res.json({title: "Not Found", message: err.message, stackTrace: err.stack})  
            break
        default:
            console.log('No Error')
            break;
    next()
    }


}

module.exports = errorHandler //exported to server