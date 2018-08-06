const chai = require('chai');
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);
var baidu = require('../../src/baidu');

describe('百度', function() {
    it('错误页状态测试', function() {
        return baidu.searchError().then(function (res) {
            console.log("状态 "+res.status);
        })
    });
});