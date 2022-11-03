const Handlebars = require('handlebars');
var MomentHandler = require('handlebars.moment');
MomentHandler.registerHelpers(Handlebars);

module.exports = {
    format_date: (date, format) => {
        // Format date as MM/DD/YYYY
        let mm = moment(date);
        return mm.format(format);
      },
};