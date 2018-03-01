/**
 * Created by Lenovo on 2018/2/26.
 */

//页头页脚
;(function(){
  set()
})();


;(function(){
  //获取id
  var id=getId();
  console.log(id);
  //ajax请求 渲染商品
  Ajax({
    str:'getproduct',
    data:{productid:id},
    collback:function(data){
      var txt1=data.result[0].productName.split(' ')[0];
      var categoryId =data.result[0].categoryId;
      $('.mmm_productHead ').html(template('tmp-tit',{list:data.result}))


        //渲染导航
      ;(function(){
        var txt=$.cookie('categoryTxt');
        if(txt || txt1){}else{
          txt="全部分类";
          txt1='';
        }
        var str='<a href="index.html">首页 &gt;</a><a href="productlist.html?id='+categoryId +'" id="">'+txt +' &gt;</a><a href="javascript:;">'+ txt1+'</a><button>筛选</button>';
        $('.mmm_nav').html(str);

      })();

    }
  })
  //ajax请求 渲染评论
  Ajax({
    str:'getproductcom',
    data:{productid:id},
    collback:function(data){
      console.log(data.result);
      $('.mmm_comment ul').html(template('tmp-com',{list:data.result}))
    }
  })
})();




