/**
 * Created by Lenovo on 2018/2/27.
 */
define(['jquery', 'template', 'Ajax', 'headAndFoot'], ($, template, A, H) => {
  
  
    H.set();

    A.Ajax({
      str:'getinlanddiscount',
      collback:function(data){
        console.log(data);
        $(".goods ul").html(template('tmp',{list:data.result}))
      }
    })

})

//渲染公共样式
;(function(){
  // set();
})();

//ajax请求
;(function(){
  // Ajax({
  //   str:'getinlanddiscount',
  //   collback:function(data){
  //     console.log(data);
  //     $(".goods ul").html(template('tmp',{list:data.result}))
  //   }
  // })
})();
