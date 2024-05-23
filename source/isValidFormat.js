function isValidFormat(format, separators, placeholders) {
    if (!format) return false;
    separators = separators || _S;
    placeholders = placeholders || _P;
    var hasEls = placeholders.every(
        function (ph) { return format.includes(ph); }
    ),
        sep = format.replace(/\w/g, '').split(''),
        sepOk = true,
        lesLength = placeholders.reduce((acc, s) => acc + s.length, 0),
        targetLen = lesLength + sep.length;
    /* istanbul ignore else */
    if (separators) sep.forEach(function (s) {
        sepOk = sepOk && separators.includes(s);
    });

    return format.length === targetLen
        && sepOk && sep.length === placeholders.length - 1
        && !!hasEls;
};