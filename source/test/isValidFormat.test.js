const assert = require('assert'),
    validatedate = require('../dist/index.js');


describe('validatedate.isValidFormat', () => {

    
        it('basic positive cases', () => {
            const good = [
                ['YYYY-MM-dd'],
                ['YYYY-dd-MM'],
                ['dd-MM-YYYY'],
                ['dd-YYYY-MM'],
                ['MM-dd-YYYY'],
                ['MM-YYYY-dd'],
                ['MMƒdd^YYYY', ['^', 'ƒ']],
                ['month-day-year', ['-'], ['day', 'month', 'year']],
                
            ]
            const bad = [
                [],
                [''],
                ['YYYY'],
                ['DD-DD'],
                ['---'],
                ['YYYY-DD-DD'],
                ['YYYY-DD-MM', [':']],
                ['YYYY-DD-nn', [':']],
                ['YYYY-DD-MM', ['-'], ['day','month','year']],
            ]
            good.forEach(w => {
                const res = validatedate.isValidFormat(...w);
                assert.strictEqual(res, true);
            })
            bad.forEach(w => {
                const res = validatedate.isValidFormat(...w);
                assert.strictEqual(res, false);
            })
            
        });
    

});