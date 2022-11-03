module.exports = {
    // no function with .toLocalDateString()???
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
      },
};