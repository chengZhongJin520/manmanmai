/**
 * Created by Lenovo on 2018/2/25.
 */

define(['jquery','headAndFoot','Ajax','template'],function($,a,b,template){
  //页头页脚
  a.set({sections:true});
  //搜索页面一级菜单
  b.Ajax(
    {
      str:'getcategorytitle',
      collback: function(data){
            $('.mmm_main ul').html(template('one-tmp',        {list:data.result}))
      }
  })
  $('.mmm_main ul').on('click','>li>p',function(){
    // console.log($(this).parent());
    $(this).parent().siblings().children().removeClass('xuanzhuan');
    $(this).toggleClass('xuanzhuan');
    var li=$(this).parent()[0];
    if($(this).hasClass('xuanzhuan')){

      var id= +li.id;
      // console.log(id);
      b.Ajax({
        str:'getcategory',
        data:{titleid:id},
        collback:function(data){
          $(li).children('ol').html(template('two-tmp',{list:data.result}))
          $(li).children('ol').slideDown(500);
        }
      })
    }else{

      $(li).children('ol').slideUp(500).remove('li');

    }
  })

})



//页头页脚
;(function(){
  // set({sections:true})
})();

//搜索页面一级菜单
;(function(){
  //console.log($('.mmm_main ul'));
  // Ajax(
  //   {
  //     str:'getcategorytitle',
  //     collback: function(data){
  //           $('.mmm_main ul').html(template('one-tmp',        {list:data.result}))
  //     }
  // })
})();



//点击事件
;(function(){
  // $('.mmm_main ul').on('click','>li>p',function(){
  //   console.log($(this).parent());
  //   $(this).parent().siblings().children().removeClass('xuanzhuan');
  //   $(this).toggleClass('xuanzhuan');
  //   var li=$(this).parent()[0];
  //   if($(this).hasClass('xuanzhuan')){

  //     var id= +li.id;
  //     console.log(id);
  //     Ajax({
  //       str:'getcategory',
  //       data:{titleid:id},
  //       collback:function(data){
  //         $(li).children('ol').html(template('two-tmp',{list:data.result}))
  //         $(li).children('ol').slideDown(500);
  //       }
  //     })
  //   }else{

  //     $(li).children('ol').slideUp(500).remove('li');

  //   }
  // })
})();