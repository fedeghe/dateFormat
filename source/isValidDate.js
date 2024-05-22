function isValidDate(dateString, format, separators, placeholders) {
    format = format || _F;
    separators = separators || _S;
    placeholders = placeholders || _P;
    // Escape special characters in a string for use in a regex
    function escapeRegex(str) {return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}

        // Create a regex pattern to match the date format
    var separatorPattern = separators.map(escapeRegex).join('|'),
        placeholderPattern = placeholders.map(escapeRegex).join('|'),
        // Split the format into components
        formatComponents = format.split(
          new RegExp('(' + separatorPattern + '|' + placeholderPattern + ')')
        ).filter(Boolean),

        // Build the regex pattern based on the format components
        regexPattern = formatComponents.map(function(component){
            switch (component) {
                case _PD:
                    return '(\\d{2})';
                case _PM:
                    return '(\\d{2})';
                case _PY:
                    return '(\\d{4})';
                case _PY2:
                    return '(\\d{2})';
                default:
                    return escapeRegex(component);
            }
        }).join(''),
        dateRegex = new RegExp('^' + regexPattern + '$'),
        match = dateString.match(dateRegex),
        dateComponents = {},
        formatIndex = 1,
        date, day, month, year;

    if (!match) {
        return false;
    }

    // Extract the date components from the match

    formatComponents.forEach(function (component) {
        if ([_PD, _PM, _PY, _PY2].includes(component)) {
            dateComponents[component] = match[formatIndex++];
        }
    });

    day = parseInt(dateComponents[_PD], 10);
    month = parseInt(dateComponents[_PM], 10) - 1; // Months are zero-indexed in JavaScript Date
    year = parseInt(dateComponents[_PY] || '20' + dateComponents[_PY2], 10);
    // Validate the date by creating a Date object and checking its components
    date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}