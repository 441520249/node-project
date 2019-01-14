var express = require('express');
var router = express.Router();
var token = require("../libs/token.js");
let {
    connect,
    insert,
    find,
    ObjectId
} = require("../libs/mongo.js");

/* GET home page. */
router.get('/zeng', function(req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    //http://localhost:3000/api/zeng
    var aa = req.query; //前端参数
    // aa = {
    //     name: 'iphone',
    //     password: 999
    // }
    insert("yonghu", [{...aa }]);
    res.send("success");
});

// router.get('/findUser', async function(req, res, next) {
//     res.append('Access-Control-Allow-Origin', '*');
//     //http://localhost:3000/api/findUser
//     var aa = req.query; //前端参数
//     let data = await find("yonghu", {...aa });
//     res.send(data);
// });
router.post('/findUser', async(req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    let name = req.body.inputEmail;
    let mima = req.body.inputPassword;
    // let data = await find('users', { name })
    let data = await find("yonghu", { inputEmail: name });
    // let data = await find('users', name ? { name } : {})
    let crypto = token.createToken({
            inputEmail: name,
            inputPassword: mima
        }, 60)
        // console.log(crypto)
        // console.log(data, "data");
        // console.log(data[0].inputPassword, 66666);
    let DBmima = data[0].inputPassword;
    if (DBmima == mima) {
        res.send(crypto);
    } else {
        res.send('0');
    }

});


// let crypto = token.createToken({
//     inputEmail: "lemon",
//     inputPassword: 123
// }, 10)
// console.log(crypto)
// console.log(token.decodeToken(crypto).payload.data)
// console.log(token.checkToken(crypto))
router.post('/text', function(req, res, next) {
    var cry = req.body; //前端参数
    console.log(cry)
    var aa = token.checkToken(cry.value)
    console.log(aa)
    res.send(aa);
});

module.exports = router;