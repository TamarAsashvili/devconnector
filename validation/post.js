const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateLoginInput(data) {
    let errors = {};


    data.text = !isEmpty(data.text) ? data.text : '';

    if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
        errors.text = 'POst must be between 10and 300 characters'
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = 'Text field is requered'
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }
}
