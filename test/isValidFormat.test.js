const assert = require('assert'),
    validatedate = require('../dist/index.js');


describe('validatedate.isValidFormat', () => {

    
        it('basic positive cases', () => {
            const good = [
                ['YYYY-MM-DD'],
                ['YYYY-DD-MM'],
                ['DD-MM-YYYY'],
                ['DD-YYYY-MM'],
                ['MM-DD-YYYY'],
                ['MM-YYYY-DD'],
                ['MMƒDD^YYYY', ['^', 'ƒ']],
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