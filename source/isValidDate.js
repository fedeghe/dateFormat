const isValidDate = (dateString, format, separators, placeholders) => {
    // Escape special characters in a string for use in a regex
    const escapeRegex = str => str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
        // Create a regex pattern to match the date format
        separatorPattern = separators.map(escapeRegex).join('|'),
        placeholderPattern = placeholders.map(escapeRegex).join('|'),
        // Split the format into components
        formatComponents = format.split(new RegExp(`(${separatorPattern}|${placeholderPattern})`)),

        // Build the regex pattern based on the format components
        regexPattern = formatComponents.map(component => {
            switch (component) {
                case 'DD':
                    return '(\\d{2})';
                case 'MM':
                    return '(\\d{2})';
                case 'YYYY':
                    return '(\\d{4})';
                case 'YY':
                    return '(\\d{2})';
                default:
                    return escapeRegex(component);
            }
        }).join(''),
        dateRegex = new RegExp(`^${regexPattern}$`),
        match = dateString.match(dateRegex),
        dateComponents = {};

    if (!match) {
        return false;
    }

    // Extract the date components from the match
    let formatIndex = 1;

    formatComponents.forEach(component => {
        if (component === 'DD' || component === 'MM' || component === 'YYYY' || component === 'YY') {
            dateComponents[component] = match[formatIndex++];
        }
    });

    const day = parseInt(dateComponents['DD'], 10),
        month = parseInt(dateComponents['MM'], 10) - 1, // Months are zero-indexed in JavaScript Date
        year = parseInt(dateComponents['YYYY'] || `20${dateComponents['YY']}`, 10);

    // Validate the date by creating a Date object and checking its components
    let date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}