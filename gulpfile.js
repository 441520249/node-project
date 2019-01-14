//任务1:sass->css:
//1.引入包
//（1）引入gulp包,返回值为对象
// (2) 引入gulp-sass包，返回值为函数
var gulp = require("gulp");
var sass = require("gulp-sass");


//gulp.task("indexSass",function(){
//  //2.1 拿到文件流gulp.src()
//  return gulp.src("./leslie/sass/index.scss")
//  //2.2通过管道运输gulp.pipe()，运输过程中，进行sass编译 sass()
//  //*忽略错误，继续编译
//  .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError)) 
// 
//  //2.3通过管道gulp.pipe()运输到指定目录下gulp.dest()
//  .pipe(gulp.dest("./leslie/css/"))
//})
//// 任务2：监听a.scss
//gulp.task("indexJt",function(){
//  gulp.watch("./leslie/sass/index.scss",gulp.series("indexSass"))
//})
//
//
////2.开启gulp任务 gulp.task(任务名,函数)
//gulp.task("loginSass",function(){
//  //2.1 拿到文件流gulp.src()
//  return gulp.src("./leslie/sass/login.scss")
//  //2.2通过管道运输gulp.pipe()，运输过程中，进行sass编译 sass()
//  //*忽略错误，继续编译
//  .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError)) 
// 
//  //2.3通过管道gulp.pipe()运输到指定目录下gulp.dest()
//  .pipe(gulp.dest("./leslie/css/"))
//})
//// 任务2：监听a.scss
//
//gulp.task("loginJt",function(){
//  gulp.watch("./leslie/sass/login.scss",gulp.series("loginSass"))
//})
//
//
////2.开启gulp任务 gulp.task(任务名,函数)
//gulp.task("registerSass",function(){
//  //2.1 拿到文件流gulp.src()
//  return gulp.src("./leslie/sass/register.scss")
//  //2.2通过管道运输gulp.pipe()，运输过程中，进行sass编译 sass()
//  //*忽略错误，继续编译
//  .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError)) 
// 
//  //2.3通过管道gulp.pipe()运输到指定目录下gulp.dest()
//  .pipe(gulp.dest("./leslie/css/"))
//})
//// 任务2：监听a.scss
//
//gulp.task("registerJt",function(){
//  gulp.watch("./leslie/sass/register.scss",gulp.series("registerSass"))
//})
//
//
////2.开启gulp任务 gulp.task(任务名,函数)
//gulp.task("listSass",function(){
//  //2.1 拿到文件流gulp.src()
//  return gulp.src("./leslie/sass/list.scss")
//  //2.2通过管道运输gulp.pipe()，运输过程中，进行sass编译 sass()
//  //*忽略错误，继续编译
//  .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError)) 
// 
//  //2.3通过管道gulp.pipe()运输到指定目录下gulp.dest()
//  .pipe(gulp.dest("./leslie/css/"))
//})
//// 任务2：监听a.scss
//
//gulp.task("listJt",function(){
//  gulp.watch("./leslie/sass/list.scss",gulp.series("listSass"))
//})
//
//
////2.开启gulp任务 gulp.task(任务名,函数)
//gulp.task("detailSass",function(){
//  //2.1 拿到文件流gulp.src()
//  return gulp.src("./leslie/sass/detail.scss")
//  //2.2通过管道运输gulp.pipe()，运输过程中，进行sass编译 sass()
//  //*忽略错误，继续编译
//  .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError)) 
// 
//  //2.3通过管道gulp.pipe()运输到指定目录下gulp.dest()
//  .pipe(gulp.dest("./leslie/css/"))
//})
//// 任务2：监听a.scss
//
//gulp.task("detailJt",function(){
//  gulp.watch("./leslie/sass/detail.scss",gulp.series("detailSass"))
//})
//
//
////2.开启gulp任务 gulp.task(任务名,函数)
//gulp.task("carSass",function(){
//  //2.1 拿到文件流gulp.src()
//  return gulp.src("./leslie/sass/car.scss")
//  //2.2通过管道运输gulp.pipe()，运输过程中，进行sass编译 sass()
//  //*忽略错误，继续编译
//  .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError)) 
// 
//  //2.3通过管道gulp.pipe()运输到指定目录下gulp.dest()
//  .pipe(gulp.dest("./leslie/css/"))
//})
//// 任务2：监听a.scss
//
//gulp.task("carJt",function(){
//  gulp.watch("./leslie/sass/car.scss",gulp.series("carSass"))
//})


//2.开启gulp任务 gulp.task(任务名,函数)
gulp.task("allSass",function(){
    //2.1 拿到文件流gulp.src()
    return gulp.src("./leslie/sass/*.scss")
    //2.2通过管道运输gulp.pipe()，运输过程中，进行sass编译 sass()
    //*忽略错误，继续编译
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError)) 
   
    //2.3通过管道gulp.pipe()运输到指定目录下gulp.dest()
    .pipe(gulp.dest("./leslie/css/"))
})
// 任务2：监听a.scss

gulp.task("allJt",function(){
    gulp.watch("./leslie/sass/*.scss",gulp.series("allSass"))
})