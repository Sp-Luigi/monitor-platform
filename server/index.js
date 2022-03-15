const fs = require('fs');
const path = require('path');

const Koa = require('koa');
const cors = require("koa-cors")  //解决跨域的插件

const options = {
  origin: "http://localhost:3000",  //允许跨域的服务器地址，  *为所有。
  credentials: true,  //允许携带cookie
}
const app = new Koa();
app.use(cors(options));
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3333);
console.log('服务器启动成功')