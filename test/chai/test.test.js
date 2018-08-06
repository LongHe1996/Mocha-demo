const chai = require('chai');
expect = chai.expect ;
let array=[1,2,3];
global.before(function () {
   console.log("[START] 测试数组"+array);
});
global.after(function () {
    console.log("[END] 测试数组"+array);
});

describe('数组长度测试', function() {
    it('数组长度为3 ', function() {
        expect(array).to.have.length.of.at.most(3);
    });
    it('数组长度在2、4之间', function() {
        expect([1, 2, 3]).to.have.length.within(2, 4)
    });
});
describe('数组测试', function() {
    before(function () {
       console.log("[DESCRIBE]Before")
    });
    after(function () {
        console.log("[DESCRIBE]After")
    });
    beforeEach(function () {
        console.log("[It]Before")
    });
    afterEach(function () {
        console.log("[It]After")
    });
    it('array是一个数组 ', function() {
        expect([1, 2, 3]).to.be.an.instanceof(Array);
    });
    it('数组 [1,2,3] 含有元素 2 ', function() {
        expect(array).to.include(2);
    });
});