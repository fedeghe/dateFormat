var validatedate = (function() {
    var _F = "$defaults.format$",
        _S = $defaults.separators$,
        _P = $defaults.placeholders$,
        _PY = _P[0], _PM = _P[1], _PD = _P[2], _PY2='YY';  
    $$isValidDate.js$$
    $$isValidFormat.js$$
    return {
        isValidDate: isValidDate,
        isValidFormat: isValidFormat
    };
})();
/* istanbul ignore next */
if (typeof exports === 'object' &&
    typeof module !== 'undefined') {
    // eslint-disable-next-line no-undef
    module.exports = validatedate;
}