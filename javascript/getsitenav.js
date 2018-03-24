/**
 * Created by Lenovo on 2018/3/2.
 */
define(['jquery', 'template', 'Ajax', 'headAndFoot'], ($, template, A, H) => {
  
  
    H.set();

    A.Ajax({
      str:'getsitenav',
      collback:function(data){
        console.log(data);
        $('.nav ul').html(template('tmp',data));
      }
    })
})
//头部 和尾部
;(function(){
  // set();
})();


//ajax
;(function(){
  // Ajax({
  //   str:'getsitenav',
  //   collback:function(data){
  //     console.log(data);
  //     $('.nav ul').html(template('tmp',data));
  //   }
  // })
})();