/**
 * Created by Lenovo on 2018/2/27.
 */



define(['jquery', 'template', 'Ajax', 'headAndFoot'], ($, template, A, H) => {


  H.set();

  var id=A.getId();
  A.Ajax({
    str:'getdiscountproduct',
    data:{productid :id},
    collback:function(data){
      // console.log(data);
      $('.mmm_info').html(template('tmp-info',{list:data.result}))
      $('.comment').html(template('tmp-com',{list:data.result}))
    }
  })

})
//公共样式
;(function(){
  // set();
})();

//ajax
;(function(){
  // var id=getId();
  // Ajax({
  //   str:'getdiscountproduct',
  //   data:{productid :id},
  //   collback:function(data){
  //     console.log(data);
  //     $('.mmm_info').html(template('tmp-info',{list:data.result}))
  //     $('.comment').html(template('tmp-com',{list:data.result}))
  //   }
  // })
})();
