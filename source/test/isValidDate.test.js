const assert = require('assert'),
    validatedate = require('../dist/index.js');


describe('validatedate.isValidDate', () => {
    it('basic positive cases', () => {
        const good = [
            ['2012-12-12'],
            ['2012-02-29'],// leap
            // others
            ['2013-01-31'],
            ['2013-02-28'],
            ['2013-03-31'],
            ['2013-04-30'],
            ['2013-05-31'],
            ['2013-06-30'],
            ['2013-07-31'],
            ['2013-08-31'],
            ['2013-09-30'],
            ['2013-10-31'],
            ['2013-11-30'],
            ['2013-12-31'],
            //
            ['2013-12-31', 'YYYY-MM-dd'],
            ['13-12-31', 'YY-MM-dd'],
            
            
        ]
        const bad = [
            ['2013-02-29'], // no leap
            ['2013-13-29'], // no month
            ['2013-11-49'], // no day OR no month
            ['2013-98-49'], // no day AND no month
            // reg
            ['2013-01-32'],
            ['2013-02-29'],
            ['2013-03-32'],
            ['2013-04-31'],
            ['2013-05-32'],
            ['2013-06-31'],
            ['2013-07-32'],
            ['2013-08-32'],
            ['2013-09-31'],
            ['2013-10-32'],
            ['2013-11-31'],
            ['2013-12-32'],
            //
            ['2013-12-31', 'YYYY-dd-MM'],
            ['2013-12-31', 'YYYY-MM-nn'],
            ['13:12:31', 'YY:MM:DD', ['YY', 'MM', 'dd'], [':']],
        ]
        good.forEach(w => {
            const res = validatedate.isValidDate(...w);
            assert.strictEqual(res, true);
        })
        bad.forEach(w => {
            const res = validatedate.isValidDate(...w);
            assert.strictEqual(res, false);
        })
    });
});