class Post
{
    constructor(obj) {
     this.from = obj.from;
     var work = new SharedWorker('./work/worker.js', 'work'),
     worker = work.port;
     worker.start();
     this.worker = worker;
    } 
 

   /*
   * 接收消息 
   * :xxx 这是有个bug 用户名可能会重名
   */
   inbox(obj) {
     obj.from = this.from; 
     var worker = this.worker;
     worker.addEventListener('message', function(e) {
       //如果消息是给这个用户的，就回调
       if (typeof e.data.to !== 'undefined' && e.data.to === obj.from)  {
         obj.onMessage(e.data);
       }
     });
     //在共享线程注册
     worker.postMessage({
       status: 0,
     });
   }


   /**
   *  发送消息
   *
   */
   sent(obj) 
   {
       obj.data.from = this.from; 
       obj.data.time = typeof obj.data.time === 'undefined' ? (new Date()).valueOf() : obj.data.time;
       var worker = this.worker;
       worker.postMessage({
         status: 2,
         data: obj.data 
       });
   }
   
}  

