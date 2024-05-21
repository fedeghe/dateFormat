const isValidFormat = (format, allowedSep, els = ['YYYY', 'MM', 'DD']) => {
    const hasEls = els.every(el => format.includes(el)),
        sep = format.replace(/\w/g, '').split('');
    let sepOk = true;
    if (allowedSep) sep.forEach(s => {
        sepOk &&= allowedSep.includes(s);
    });
    return sepOk && sep.length === els.length - 1 &&
        !!hasEls;
};