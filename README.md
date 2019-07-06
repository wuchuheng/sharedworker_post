# shareworker子线程消息共享处理

------
`H5` 的`SharedWorker`子线程能实现多个页面的消息接收和发送。
本模块引入邮件的收发概念，使能多个页面之间的消息能明确收发。

#### 使用方式
在`html`页面加载`index.js`文件后;

> * 
``` javascript
<script>
   // 声明接收消息地址（任意字符串）
   var post = new Post({from:"我是第一帅锅"});
   //收件回调
   post.inbox(
    {
      onMessage: function(e) {
        console.log(e.data); //收件内容
      }
    });
    //消息发送 
     post.sent({
           status: 2,
           data: {
             value: 'content', // 发件的内容
             to: '我是第二帅锅' // 接收人  
           }
         });

<script>
```
