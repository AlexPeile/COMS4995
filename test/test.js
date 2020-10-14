const assert = require('assert');
const background = require('../background.js')
const popup = require('../popup.js')

describe('Background', function () {
    //TODO 
    describe('#isTracking()', function () {
        it('should return false when no tab focus is being tracked', function () {
            assert.strictEqual(isTracking(), false);
        });
        it('should return true when tab focus is being tracked', function () {
            assert.strictEqual(isTracking(), true);
        });
    });
    //TODO
    describe('#getTabFromTabId(integer tabId)', function () {
        it('', function () {
            assert.strictEqual();
        });
    });
    //TODO 
    describe('#getTabFromWindowId (integer windowId)', function () {
        it('', function () {
            assert.strictEqual();
        });
    });
});

describe('Popup', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});
