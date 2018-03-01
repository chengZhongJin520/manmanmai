/**
 * Created by Lenovo on 2018/2/24.
 */

$(function(){
  set();
  //导航菜单
  Ajax({
    str:'getindexmenu',
    collback:function(data){
      $('.mmm_top_nav ul').html(template('nav-tmp', {list: data.result}));


    }
  });

  //点击事件
 $('.mmm_top_nav ul').on('click','li:eq(7)',function(){
   $('.mmm_animation').toggleClass('animation');

 })

  //折扣商品
  Ajax(
    {
      str:'getmoneyctrl',
    collback:function(data){
    $('.mmm_search ol').html(template('goods-tmp',{list:data.result}))
    }
  })
  //$.fn.Ajax(true);

})
