/**
 * Created by Lenovo on 2018/2/28.
 */

;(function(){
  set();
})();

//ajax()
;(function(){
  //导航
  //Ajax({
  //  str:'getgsshop',
  //  collback:function(data){
  //    //console.log(data);
  //    $('.search ul').html(template('tmp-nav',data))
  //  }
  //})

//商品
  Ajax({

    str:'getgsproduct',
    data:{
      shopid : 0  ,
      areaid : 0
    },
    collback:function(data){
      //console.log(data);
    $('.goods ul').html(template('tmp-goods',{list:data.result}));

    }
  })
})();


//点击事件（）
;(function(){
//$('.search ul').on('click','li',function(){
//  Ajax({
//    str:'getgsshoparea',
//    collback:function(data){
//      console.log(data);
//    }
//  })
//})

  var sc=document.getElementsByClassName('search')[0];
  var lis=sc.getElementsByTagName('ul')[0].getElementsByTagName('li');


  ;lis[0].addEventListener('click',function(){
    $('.search .ol').toggleClass('one');
    if($('.search .ol').hasClass('one')){
      Ajax({
        str:'getgsshop',
        collback:function(data){
          //console.log(data);
          $('.search .ol').prepend(template('tmp-nav1',data));
          $('.search .ol').children('.nav-1').slideDown(500);

        }
      })
    }else{
      $('.search .ol ').children('.nav-1').slideUp(500);
    }

  })



  ;lis[1].addEventListener('click',function(){
    $('.search .ol').toggleClass('two');
    if($('.search .ol').hasClass('two')){
      Ajax({
        str:'getgsshoparea',
        collback:function(data){
          console.log(data);
          $('.search .ol').append(template('tmp-nav2',data));
          $('.search .ol .nav-2').slideDown(500);

        }
      })
    }else{
      $('.search .ol .nav-2').slideUp(500);
    }
  })




  ;lis[2].addEventListener('click',function(){

    $('.search .ol').toggleClass('three');
    if($('.search .ol').hasClass('three')){

          $('.search .ol .nav-3').slideDown(500);
    }else{
      $('.search .ol .nav-3').slideUp(500);
    }
  })
})();