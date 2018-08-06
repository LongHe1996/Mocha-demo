const chai = require('chai');
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);

let baidu={
    searchError:function () {
        return chai.request("https://www.baidu.com")
            .get('/search/error.html')
    }
};
module.exports = baidu;