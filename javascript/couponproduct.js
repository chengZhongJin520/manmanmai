/**
 * Created by Lenovo on 2018/2/28.
 */

//公共属性
;(function(){
  set();
  $('header')[0].style.backgroundColor='rgb(244, 72, 62)';
})();


//ajax
;(function(){
  var  id=getId()
  Ajax({
    str:'getcouponproduct',
    data:{couponid:id},
    collback:function(data){
      console.log(data);
      $('.comment ul').html(template('tmp',{list:data.result}))
    }
  })
})();



//点击事件模态框出现
;(function(){

  //点击事件模态框出现
  $('.comment ul').on('click','li',function(){
    $('.modal').css('display','block');
      var id=this.id;

    var num=0;
    $('.comment ul').find('img').each(function(index,ele){
      var  str ='<li></li>';
      $('.modal ul').append(str).children().eq(index).append(ele);
       num=index;
    });

    //添加假图片
    var firstLi=$('.modal ul').children()[0];
    var endLi=$('.modal ul').children('li:last-child')[0];
    //$('.modal ul').prepend(endLi).append(firstLi);
    var w=Math.ceil($('.modal ul').children()[0].offsetWidth);
    var index=$('.modal ul').children('li').length;

    //console.log(index);
    //console.log(index, w);
    $('.modal ul').css('width',w*index);


    //上一张 下一张点击事件
    ;(function(){
      var w=$('.modal ul').children('li')[0].offsetWidth;
      var index=0;
      var ul=$('.modal ul')[0];
      var length=$(ul).children().length;
      console.log(length);
      index=id;
      tf(ul,-id*w);


      //下一张  负数
      $('.modal .btn .next')[0].addEventListener('click',function(){
        if(index>=length-1){
          index=0;
          tnClose(ul);
          tf(ul,0);
        }else{
        index++;
        tnOpen(ul);
        console.log(-index * w);
        tf(ul,-index*w);}
      })


      //上一张
      $('.modal .btn .pre')[0].addEventListener('click',function(){
        index--;
        tnOpen(ul);

        tf(ul,-index*w);


      })
      $('.modal ')[0].addEventListener('transitionend',function(){
        console.log('过渡结束');
        if(index<=0){
          index=length-1;
        }

        tnClose(ul);
        tf(ul,-index*w);
      })

      //打开动画
      function tnOpen(ele){
        ele.style.transition='transform .5s';
      }
      //清除动画
      function tnClose(ele ){
        ele.style.transition='none';
      }
      //移动
      function tf(ele,num){
        ele.style.transform= 'translateX('+num+'px)';
      }
    })();

  })



})();



//点击事件模态框关闭
;(function(){
  var  id=getId();
  $('.modal .back')[0].addEventListener('click',function(){
    $('.modal').css('display','none');
    Ajax({
      str:'getcouponproduct',
      data:{couponid:id},
      collback:function(data){
        console.log(data);
        $('.comment ul').html(template('tmp',{list:data.result}))
      }
    })
  })
})();


