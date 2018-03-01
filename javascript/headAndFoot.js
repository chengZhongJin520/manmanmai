/**
 * Created by Lenovo on 2018/2/25.
 */

;(function (window) {
  var set = function (obj) {
    //console.log(obj);
    //var section=obj.sections||999;
    if (!obj) {
      var section = 0;
      var button = 0;
    } else {
      if (obj.sections) {
        var section = obj.sections;
      } else {
        var section = 0;
      }
      ;
      if (obj.button) {
        var button = obj.button;
      } else {
        var button = 0;
      }
    }
    //console.log('section是'+section);
    //console.log('button是'+button);
    var loc=location.pathname.split('/').pop().split('.')[0];
    console.log(loc);
    //页头
    if(loc==='index' || loc==='category' || loc==='product' || loc==='productlist'){
    var header = '<header class="clearfix mmm_header " id="linklink"><div class="logo fl"><a href="index.html"><img src="../pages/images/header_logo.png" alt=""></a></div><div class="appdown fr"><a href="javascript:;"><img src="../pages/images/header_app.png" alt=""></a></div></header>';}else{
var  pageTitle = {
  moneyctrl: '省钱控 - 最新优惠',
  moneyctrlproduct: '国内折扣',
  inlanddiscount: '国内折扣',
  discountproduct: '国内折扣',
  baicaijia: '白菜价-淘宝内部券',
  coupon: '优惠券',
  couponproduct: '优惠券',
  gsproduct: '凑单品',
  brandTitle: '品牌大全',
  brand: '品牌大全',
  sitenav: '商场导航'
};
      var txt='';
      var href='index';
     for(var k in pageTitle){
       ;if(k=== loc){
         txt = pageTitle[k];
       }
       ;if(txt===pageTitle[0] || loc==="inlanddiscount" || loc==='coupon' || loc==='gsproduct'){
         href='index';
       }
       if(loc==='discountproduct'){
         href='inlanddiscount';
       }
       ;if(loc==='moneyctrlproduct'){
         href='moneyctrl';
       }
       ;if(loc=='couponproduct'){
         href='coupon';
       }
     }

      var header='<header class="clearfix " id="mmm_header"><div class="logo fl" id="linklink"><a href="'+href+'.html">&lt;</a></div><div class="appdown fr"><a href="javascript:;"><img src="../pages/images/header_app.png" alt=""></a></div><div class="span"><span>'+ txt +'</span></div></header>';}

    var stn = '<section id="mmm_section" ><form action="#" class="clearfix"><input type="text" placeholder="请输入你想浏览的商品"><input type="button" value="搜索" ></form></section>';

    //页脚
    var footer = '<footer id="mmm_footer"><ul class="clearfix"><li class="fl"><a href="javascript:;">注册</a></li><li class="fl"><a href="javascript:;">登录</a></li><li class="fl"><a href="#linklink">返回顶部</a></li></ul><p><a href="javascript:;">手机APP下载</a><a href="javascript:;">慢慢买手机版</a><a href="javascript:;">--掌上比价平台</a></p><p>m.manmanbuy.com</p></footer>';

    //button
    var btnPage = '<div class="mmm_button clearfix"><span><a href="javascript:;">上一页</a></span><span><select></select></span><span><a href="javascript:;">下一页</a></span></div>';
    if (section != 0) {
      $('#mmm_container').prepend(stn);
    }
    ;
    if (button != 0) {
      $('#mmm_container').append(btnPage);
    }
    ;

    $('#mmm_container').prepend(header).append(footer);
  }
  window.set = set;
})(window);
