

// 渲染页面 html
var app=require('express')()
app.set('view engine','html')
app.engine('html',require('ejs').__express())
app.set('views',path.resolve('views'))


var Koa=require('koa')
var app=new Koa()
var views=require('koa-views')
app.use(views(__dirname+'/views',{
    extension:'jade'
}));

//  css 和图片 指定静态资源文件
app.use(express.static(path.resolve('public')));
app.use(require('koa-static')(__dirname+'/public')) //图片和css

//处理post请求 放在req.body 上面  ctx.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));// form 表单 打开
app.use(bodyParser.json({extended:true}));// json 就
// 如果使用 form表单的话 在查吧
const json = require('koa-json');// 肯定要和 bodyparser 结合在一起
var koaBodyParse=require('koa-bodyparser')
app.use(convert(koaBodyParse()))//
