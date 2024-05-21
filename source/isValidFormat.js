function isValidFormat(format, allowedSep, els) {
    els = els || ['YYYY', 'MM', 'DD'];
    var hasEls = els.every(function (el){ return  format.includes(el);}),
        sep = format.replace(/\w/g, '').split(''),
        sepOk = true;
    if (allowedSep) sep.forEach(function(s) {
        sepOk = sepOk && allowedSep.includes(s);
    });
    return sepOk && sep.length === els.length - 1 &&
        !!hasEls;
};