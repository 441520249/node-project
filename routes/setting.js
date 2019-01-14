var express = require('express');
var router = express.Router();
var multer = require("multer");
var {
    connect,
    insert,
    find,
    ObjectId,
    del,
    update
} = require("../libs/mongo.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
/* GET home page. */
//增
router.get('/zeng', function(req, res, next) {
    //http://localhost:3000/setting/zeng
    let aa = req.query;
    insert("users", [aa]);
    res.send("success");
});
//删
router.get('/del', async(req, res, next) => {
    let {
        name,
        age,
        address,
        city,
        tip
    } = req.query
    let data = await del(`users`, {
        name,
        age,
        address,
        city,
        tip
    })
    res.send("success");
});
//查
router.get('/findUser', async(req, res, next) => {
    let {
        name
    } = req.query
        // let data = await find('users', {name})
    let data = await find('users', name ? { name } : {})
    res.send(data);
});
//改
router.get('/update', async(req, res, next) => {
    let {
        name,
        age,
        address,
        city,
        tip
    } = req.query
    let data = await update(`users`, {
        name
    }, {
        age,
        address,
        city,
        tip
    })
    res.send(data);
});
//上传文件
var storage = multer.diskStorage({
    destination: function(req, file, cb) { //设置上传后文件路径，uploads文件夹会自动创建。
        cb(null, './uploads') //给上传文件重命名，获取添加后缀名
    },
    filename: function(req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        //给图片加上时间戳格式防止重名名
        //比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});
var upload = multer({
    storage: storage
});
router.post('/upload', upload.single('abc'), function(req, res, next) {
    let aa = req.file.filename;
    console.log(aa) //abc-1547097265773.jpg
    insert("imgurl", [{ "imgurl": `http://localhost:3000/${aa}` }]);
    res.json({
        status: "success",
        file: req.file
    });
    res.send(res);
});

module.exports = router;