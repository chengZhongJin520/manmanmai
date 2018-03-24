/**
 * Created by Lenovo on 2018/2/25.
 */

define(['jquery','Ajax','template','headAndFoot'],function($,a,template,h){
  //页头页脚
  h.set({button:true});

  //分类导航渲染
  var id=a.getId();
  a.Ajax({
    str:'getcategorybyid',
    data:{categoryid:id},
    collback:function(data){
      //console.log(data.result[0].category);
      var txt=data.result[0].category;
      //把数据存到cookie里
      document.cookie="categoryTxt="+txt;
      $('.mmm_nav').html(template('tmp-nav',{list:data.result}));
      //$.cookie('categoryTxt',txt);
    }
  });


  //商品渲染
   //获得需要渲染的页面的id
 var categoryid=a.getId();
 //设置分页默认的为第一页
 var pageid=1;
 //如果不是其他页面跳转本页面，默认id为0
 if(!categoryid || categoryid<0){
   id=0
 }
 //ajax请求
 a.Ajax({
   str: 'getproductlist',
   data: {
     categoryid: categoryid,
     pageid: pageid
   },
   collback: function (data) {
     //console.log(data);
     //var pageNum = Math.ceil(data.totalCount / 10);
     //渲染模板
     $('.mmm_goods ul').html(template('tmp-goods', {list: data.result}));
     //console.log($.fn);
       $.setPage({count:data.totalCount,
               select:$('.mmm_button span ').eq(1).children(),
               url:'getproductlist',
               ele:$('.mmm_goods ul'),
               tmpId:'tmp-goods',
               needId:categoryid,
               preEle:$('.mmm_button span:first-child a'),
               nextEle:$('.mmm_button span:last-child a')})
   }
 })
})



//页头页脚
;(function(){
  // set({button:true})
})();

//分类导航渲染
;(function(){
  //console.log(location.pathname.split('/'));
  //console.log(window);
  // var id=getId();
  // Ajax({
  //   str:'getcategorybyid',
  //   data:{categoryid:id},
  //   collback:function(data){
  //     //console.log(data.result[0].category);
  //     var txt=data.result[0].category;
  //     //把数据存到cookie里
  //     document.cookie="categoryTxt="+txt;
  //     $('.mmm_nav').html(template('tmp-nav',{list:data.result}));
  //     //$.cookie('categoryTxt',txt);
  //   }
  // })
})();


//商品渲染
;(function(){
//   //获得需要渲染的页面的id
//  var categoryid=getId();
//   //设置分页默认的为第一页
//   var pageid=1;
//   //如果不是其他页面跳转本页面，默认id为0
//   if(!categoryid || categoryid<0){
//     id=0
//   }
//   //ajax请求
//   Ajax({
//     str: 'getproductlist',
//     data: {
//       categoryid: categoryid,
//       pageid: pageid
//     },
//     collback: function (data) {
//       //console.log(data);
//       //var pageNum = Math.ceil(data.totalCount / 10);
//       //渲染模板
//       $('.mmm_goods ul').html(template('tmp-goods', {list: data.result}));
//       //console.log($.fn);
//         $.setPage({count:data.totalCount,
//                 select:$('.mmm_button span ').eq(1).children(),
//                 url:'getproductlist',
//                 ele:$('.mmm_goods ul'),
//                 tmpId:'tmp-goods',
//                 needId:categoryid,
//                 preEle:$('.mmm_button span:first-child a'),
//                 nextEle:$('.mmm_button span:last-child a')})
//     }
//   })
})();




