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
  var shopid=0;
  var areaid=0;

  ;lis[0].addEventListener('click',function(){
    $('.search .ol .nav-1').toggleClass('one');
    if($('.search .ol .nav-1').hasClass('one')){

      Ajax({
        str:'getgsshop',
        collback:function(data){
          //console.log(data);
          $('.search .ol .nav-1 ').html(template('tmp-nav1',data));
          $('.search .ol  .nav-1').slideDown(500).children()[shopid].classList.add('gou');
          $('.search .ol .nav-1').children().each(function(i,e){

            e.addEventListener('click',function(){
              $('.search .ol .nav-1').children().removeClass('gou');
              this.classList.add('gou');
               shopid=this.id;
              //$.cookie('shopid',shopid);
              ;(function(){
                Ajax({

                  str:'getgsproduct',
                  data:{
                    shopid : shopid  ,
                    areaid : 0
                  },
                  collback:function(data){
                    //console.log(data);
                    $('.goods ul').html(template('tmp-goods',{list:data.result}));
                    $('.search .ol ').children('.nav-1').slideUp(500);
                    $('.search .ol .nav-1').removeClass('one');
                  }
                })
              })();
            })
          })
          }
      })

    }else{
      $('.search .ol ').children('.nav-1').slideUp(500);
    }

  })



  ;lis[1].addEventListener('click',function(){
    $('.search .ol .nav-2').toggleClass('two');
    if($('.search .ol .nav-2').hasClass('two')){

      Ajax({
        str:'getgsshoparea',
        collback:function(data){
          //console.log(data);
          $('.search .ol .nav-2').html(template('tmp-nav2',data));
          $('.search .ol .nav-2').slideDown(500).children()[areaid].classList.add('gou');
          $('.search .ol .nav-2').children().each(function(i,e){
            e.addEventListener('click',function(){
              $('.search .ol .nav-2').children().removeClass('gou');
              this.classList.add('gou');
               areaid=this.id;
              ;(function(){
                shopid=shopid ||0;
                Ajax({
                  str:'getgsproduct',
                  data:{
                    shopid : shopid  ,
                    areaid : areaid
                  },
                  collback:function(info){
                    console.log(info);
                    //console.log(data);
                    $('.goods ul').html(template('tmp-goods',{list:info.result}));
                    $('.search .ol .nav-2').slideUp(500);
                    $('.search .ol .nav-2').removeClass('two');
                  }
                })
              })();
            })
          })
        }
      })
    }else{
      $('.search .ol .nav-2').slideUp(500);
    }
  })




  ;lis[2].addEventListener('click',function(){

    $('.search .ol .nav-3').toggleClass('three');
    if($('.search .ol .nav-3').hasClass('three')){

          $('.search .ol .nav-3').slideDown(500);
    }else{
      $('.search .ol .nav-3').slideUp(500);

    }
  })
})();