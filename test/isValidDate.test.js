const assert = require('assert'),
    validatedate = require('../dist/index.js');


describe('validatedate.isValidDate', () => {
    it('basic positive cases', () => {
        const good = [
            ['2012-12-12'],
            ['2012-02-29'],

        ]
        const bad = [

            ['2013-02-29'], // leap
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