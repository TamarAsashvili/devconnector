const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateExperienceInput(data) {
    let errors = {};


    data.title = !isEmpty(data.title) ? data.title : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.from = !isEmpty(data.from) ? data.from : '';

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Job title field is requered'
    }
    if (Validator.isEmpty(data.company)) {
        errors.company = 'Company field is requered'
    }
    if (Validator.isEmpty(data.from)) {
        errors.from = 'From  data field is requered'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
