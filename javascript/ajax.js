/**
 * Created by Lenovo on 2018/2/24.
 */

define(['jquery','template'], function($,template) {
  // ajax方法
  function Ajax(obj){
    obj.data=obj.data || '';

    var url='http://127.0.0.1:9090/api/';
    $.ajax({
      url: url + obj.str ,
      type:'get',
      dataType:'json',
      data:obj.data,
      success:function(data){
        //console.log(data);
        obj.collback && obj.collback(data);
      }
    })
  }
  //设置分页和事件
  var setPage=function (obj) {
    //默认地址
    var url=obj.url || 'getproductlist';
    //数据总条数
    var count=obj.count;
    //默认页数
    var pageNum = Math.ceil(count/10);
    //select标签
    var select=obj.select;
    //ajax需要传的数据
    var categoryid=obj.needId ||0;
    //需要渲染数据的标签
    var ele=obj.ele||$('.mmm_goods ul');
    //上一页
    var preEle=obj.preEle||$('.mmm_button span:first-child a');
    //下一页
    var nextEle=obj.nextEle||$('.mmm_button span:last-child a');
    //模板
    var tmpId=obj.tmpId ;
    //渲染分页
    var str = '';
    var pageid=0;
    console.log('pageNum是'+pageNum);
    for (var i = 1; i <=pageNum; i++) {
      //if(i==pageid){
      //str +='<option value="'+ i +'" selected>'+i+'/'+pageNum+'</option>';
      //}else{
      //  str +='<option value="'+ i+ '">'+i+'/'+pageNum+'</option>';
      //}
      str += '<option value="' + i + '">' + i + '/' + pageNum + '</option>';
    }

    select.html(str);


    //下拉菜单点击事件
    select.on('change', function () {
      pageid = +$(this).val()-1;
      Ajax({
        str: url,
        data:{categoryid: categoryid, pageid:pageid},
        collback: function (data) {
          //渲染模板
          ele.html(template(tmpId,{list:data.result}));
        }
      })

    })

    //下一页点击事件
    nextEle.on('click', function () {
      if (pageid >= pageNum-1) {
        pageid = pageNum-1;
        return false
      } else {
        pageid++;
        Ajax({
          str:url,
          data: {categoryid: categoryid, pageid: pageid},
          collback: function (data) {
            //渲染模板
            ele.html(template(tmpId,{list:data.result}));

            select.val(pageid+1);
          }
        })
      }
    })

    //上一页点击事件
    preEle.on('click', function () {
      if (pageid <= 0) {
        pageid = 0;
        return false
      } else {
        pageid--;
        Ajax({
          str: url,
          data: {categoryid: categoryid, pageid: pageid},
          collback: function (data) {

            //渲染模板
            ele.html(template(tmpId,{list:data.result}));

            select.val(pageid+1);
          }
        })
      }
    })



  }
  $.setPage= $.fn.setPage=setPage;
//获取id
  var getId= function (){
    return +location.search.split('=').slice(1,2)[0]
  }
  return {
    Ajax : Ajax,
    getId:getId
  }
  
});
//ajax方法
// ;(function(window){
  // function Ajax(obj){
  //   obj.data=obj.data || '';

  //   var url='http://127.0.0.1:9090/api/';
  //   $.ajax({
  //     url: url + obj.str ,
  //     type:'get',
  //     dataType:'json',
  //     data:obj.data,
  //     success:function(data){
  //       //console.log(data);
  //       obj.collback && obj.collback(data);
  //     }
  //   })
  // }

//   window.Ajax=Ajax;
// })(window);






//获取id
// ;(function(window){
//   var getId= function (){
//     return +location.search.split('=').slice(1,2)[0]
//   }
//   window.getId=getId;
// })(window);

//设置分页和事件
// ;(function($){
  //封装方法
/*obj对象方式传参
*数据总条数：obj.count(number类型)
*需要动态设置option的select标签：obj.select(element类型)
*传数据的地址：obj.url(string类型)
*需要添加数据的元素：obj.ele(element类型)
*模板id：obj.tmpId(string类型)
*后台需要的id：obj.needId(number类型)
*上一页事件的元素：obj.preEle(element类型)
*下一页事件的元素：obj.nextEle (element类型)
//  */
// var setPage=function (obj) {
//   //默认地址
//   var url=obj.url || 'getproductlist';
//   //数据总条数
//   var count=obj.count;
//   //默认页数
//   var pageNum = Math.ceil(count/10);
//   //select标签
//   var select=obj.select;
//   //ajax需要传的数据
//   var categoryid=obj.needId ||0;
//   //需要渲染数据的标签
//   var ele=obj.ele||$('.mmm_goods ul');
//   //上一页
//   var preEle=obj.preEle||$('.mmm_button span:first-child a');
//   //下一页
//   var nextEle=obj.nextEle||$('.mmm_button span:last-child a');
//   //模板
//   var tmpId=obj.tmpId ;
//   //渲染分页
//   var str = '';
//   var pageid=0;
//   console.log('pageNum是'+pageNum);
//   for (var i = 0; i <pageNum; i++) {
//     //if(i==pageid){
//     //str +='<option value="'+ i +'" selected>'+i+'/'+pageNum+'</option>';
//     //}else{
//     //  str +='<option value="'+ i+ '">'+i+'/'+pageNum+'</option>';
//     //}
//     str += '<option value="' + i + '">' + (i+1) + '/' + pageNum + '</option>';
//   }

//   select.html(str);


//   //下拉菜单点击事件
//   select.on('change', function () {
//     pageid = +$(this).val();
//     Ajax({
//       str: url,
//       data:{categoryid: categoryid, pageid: pageid},
//       collback: function (data) {
//         //渲染模板
//         ele.html(template(tmpId,{list:data.result}));
//       }
//     })

//   })

//   //下一页点击事件
//   nextEle.on('click', function () {
//     if (pageid >= pageNum-1) {
//       pageid = pageNum-1;
//       return false
//     } else {
//       pageid++;
//       Ajax({
//         str:url,
//         data: {categoryid: categoryid, pageid: pageid},
//         collback: function (data) {
//           //渲染模板
//           ele.html(template(tmpId,{list:data.result}));

//           select.val(pageid);
//         }
//       })
//     }
//   })

//   //上一页点击事件
//   preEle.on('click', function () {
//     if (pageid <= 0) {
//       pageid = 0;
//       return false
//     } else {
//       pageid--;
//       Ajax({
//         str: url,
//         data: {categoryid: categoryid, pageid: pageid},
//         collback: function (data) {

//           //渲染模板
//           ele.html(template(tmpId,{list:data.result}));

//           select.val(pageid);
//         }
//       })
//     }
//   })



// }
// $.setPage= $.fn.setPage=setPage;
 
// })(window.$);

//
