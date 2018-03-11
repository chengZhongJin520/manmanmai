/**
 * Created by Lenovo on 2018/3/2.
 */

//头部 和尾部
;(function(){
  set();
})();


//ajax
;(function(){
  Ajax({
    str:'getsitenav',
    collback:function(data){
      console.log(data);
      $('.nav ul').html(template('tmp',data));
    }
  })
})();