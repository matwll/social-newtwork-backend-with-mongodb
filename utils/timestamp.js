const moment = require('moment');
moment().format(); 

module.exports = (date) => {
    return moment(date).format("H:m:SSS M/Do/YYYY")
}