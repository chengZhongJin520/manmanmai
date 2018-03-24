/**
 * Created by Lenovo on 2018/2/28.
 */





define(['jquery', 'template', 'Ajax', 'headAndFoot'], ($, template, A, H) => {
  H.set();
  document.getElementsByTagName('header')[0].style.backgroundColor='rgb(244, 72, 62)';
  A.Ajax({
    str:'getcoupon',
    collback:function(data){
      console.log(data);
      $(".dian").html(template('tmp',{list:data.result}))
    }
  })
})
//公共样式设置
;(function(){
  // set();
})();


//背景变红色
;(function(){
  //$('header').css('backgroundColor','rgb(244, 72, 62)');
  // document.getElementsByTagName('header')[0].style.backgroundColor='rgb(244, 72, 62)';
})();

;(function(){
  // Ajax({
  //   str:'getcoupon',
  //   collback:function(data){
  //     console.log(data);
  //     $(".dian").html(template('tmp',{list:data.result}))
  //   }
  // })
})();


;(function(){

})();
