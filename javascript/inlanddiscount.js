/**
 * Created by Lenovo on 2018/2/27.
 */

//渲染公共样式
;(function(){
  set();
})();

//ajax请求
;(function(){
  Ajax({
    str:'getinlanddiscount',
    collback:function(data){
      console.log(data);
      $(".goods ul").html(template('tmp',{list:data.result}))
    }
  })
})();
