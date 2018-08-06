const chai = require('chai');
var add = require('../../src/add.js');
chai.should();

describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
        add(1,1).should.be.equal(2);
    });

    it('任何数加0等于自身', function() {
        add(1,0).should.be.equal(1);
        add(0,0).should.be.equal(0);
    });
});