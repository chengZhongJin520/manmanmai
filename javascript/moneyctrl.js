/**
 * Created by Lenovo on 2018/2/27.
 */
;(function(){
  set({button:true})
})();

//首次渲染
;(function(){
  Ajax(
    {
      str:'getmoneyctrl',
      collback:function(data){
        console.log(data);
        $('.mmm_search ol').html(template('goods-tmp',{list:data.result}))
        //分页渲染及事件
        ;(function(){
          $.setPage({
            count:data.totalCount,
            select:$('.mmm_button span ').eq(1).children(),
              url:'getmoneyctrl',
              ele:$('.mmm_search ol'),
              tmpId:'goods-tmp'
          })
        })();
      }
    })
})();


//逻辑
;(function(){

})();



