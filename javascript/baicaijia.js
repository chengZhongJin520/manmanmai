/**
 * Created by Lenovo on 2018/2/27.
 */
//设置公共样式
define(['jquery', 'template', 'Ajax', 'headAndFoot'], ($, template, A, H) => {
  H.set();
  $('header').css('backgroundColor', '#f4483e')


  A.Ajax({
    str: 'getbaicaijiatitle',
    collback: function (data) {
      //console.log(template('tmp-topNav'),{list:data.result});
      $('.bcj-top-nav ul').html(template('tmp-topNav', {
        list: data.result
      }));
      //动态获取长度和高度
      var length = 0;
      //因为是rem布局所以获取时会把小数干掉所以要加一
      var height = $('.bcj-top-nav ul')[0].offsetHeight + 1;
      var arr = $('.bcj-top-nav ul').children();
      for (var i = 0; i < arr.length; i++) {
        length += arr[i].offsetWidth + 1;
      }
      length = length / 50 + 'rem';
      //把获取的数据赋值给元素
      $('.bcj-top-nav ul').css('width', length);
      $('.bcj-top-nav .search').css({
        'height': height,
        'width': height
      })


      //touchstart:手指放到屏幕上时触发
      //touchmove:手指在屏幕上滑动式触发（会触发多次）
      //touchend:手指离开屏幕时触发
      //touchcancel:系统取消touch事件的时候触发,比如电话


      //touch事件
      var startX = 0;
      var moveX = 0;
      var endX = 0;
      var moveW = 0;


      //手指放到屏幕上时触发
      $('.bcj-top-nav ul')[0].addEventListener('touchstart', function (e) {
        startX = e.changedTouches[0].clientX;
      })
      //手指在屏幕上滑动式触发（会触发多次）
      $('.bcj-top-nav ul')[0].addEventListener('touchmove', function (e) {
        moveX = e.changedTouches[0].clientX - startX;
        this.style.transition = 'none';
        this.style.transform = 'translateX(' + (moveX + moveW) + 'px)';
      })
      //手指离开屏幕时触发
      $('.bcj-top-nav ul')[0].addEventListener('touchend', function (e) {
        endX = e.changedTouches[0].clientX - startX;
        var w = $('.bcj-top-nav .search')[0].offsetWidth;
        moveW += endX;
        if (moveW <= 0 - w) {
          moveW = 0 - w;
          this.style.transition = 'transform .5s';
          this.style.transform = 'translateX(' + moveW + 'px)';
          return false;
        }
        if (moveW >= 0) {

          moveW = 0;
          this.style.transition = 'transform .5s';
          this.style.transform = 'translateX(0px)';
          return false;
        }

        this.style.transition = 'transform .5s';
        this.style.transform = 'translateX(' + moveW + 'px)';
      })
    }

  })

  A.Ajax({
    str: 'getbaicaijiaproduct',
    data: {
      titleid: 0
    },
    collback: function (data) {
      $('.goods ul').html(template('tmp-goods', {
        list: data.result
      }));
      $('.bcj-top-nav ul').children()[0].classList.add('active');
    }
  })


  $('.bcj-top-nav ul').on('click', 'li', function () {
    
        var id = +this.id;
        A.Ajax({
          str: 'getbaicaijiaproduct',
          data: {
            titleid: id
          },
          collback: function (data) {
            // console.log(data);
            $('.goods ul').html(template('tmp-goods', {
              list: data.result
            }));
            $('.bcj-top-nav ul').children().each(function (index, ele) {
              ele.classList.remove('active');
            });
            $('.bcj-top-nav ul').children()[id].classList.add('active');
          }
        })
      })
});



(function () {
  // set();
  // $('header').css('backgroundColor','#f4483e')
})();

//头部导航
;
(function () {
  // Ajax({
  //   str: 'getbaicaijiatitle',
  //   collback: function (data) {
  //     //console.log(template('tmp-topNav'),{list:data.result});
  //     $('.bcj-top-nav ul').html(template('tmp-topNav', {
  //       list: data.result
  //     }));
  //     //动态获取长度和高度
  //     var length = 0;
  //     //因为是rem布局所以获取时会把小数干掉所以要加一
  //     var height = $('.bcj-top-nav ul')[0].offsetHeight + 1;
  //     var arr = $('.bcj-top-nav ul').children();
  //     for (var i = 0; i < arr.length; i++) {
  //       length += arr[i].offsetWidth + 1;
  //     }
  //     length = length / 50 + 'rem';
  //     //把获取的数据赋值给元素
  //     $('.bcj-top-nav ul').css('width', length);
  //     $('.bcj-top-nav .search').css({
  //       'height': height,
  //       'width': height
  //     })


  //     //touchstart:手指放到屏幕上时触发
  //     //touchmove:手指在屏幕上滑动式触发（会触发多次）
  //     //touchend:手指离开屏幕时触发
  //     //touchcancel:系统取消touch事件的时候触发,比如电话


  //     //touch事件
  //     var startX = 0;
  //     var moveX = 0;
  //     var endX = 0;
  //     var moveW = 0;


  //     //手指放到屏幕上时触发
  //     $('.bcj-top-nav ul')[0].addEventListener('touchstart', function (e) {
  //       startX = e.changedTouches[0].clientX;
  //     })
  //     //手指在屏幕上滑动式触发（会触发多次）
  //     $('.bcj-top-nav ul')[0].addEventListener('touchmove', function (e) {
  //       moveX = e.changedTouches[0].clientX - startX;
  //       this.style.transition = 'none';
  //       this.style.transform = 'translateX(' + (moveX + moveW) + 'px)';
  //     })
  //     //手指离开屏幕时触发
  //     $('.bcj-top-nav ul')[0].addEventListener('touchend', function (e) {
  //       endX = e.changedTouches[0].clientX - startX;
  //       var w = $('.bcj-top-nav .search')[0].offsetWidth;
  //       moveW += endX;
  //       if (moveW <= 0 - w) {
  //         moveW = 0 - w;
  //         this.style.transition = 'transform .5s';
  //         this.style.transform = 'translateX(' + moveW + 'px)';
  //         return false;
  //       }
  //       if (moveW >= 0) {

  //         moveW = 0;
  //         this.style.transition = 'transform .5s';
  //         this.style.transform = 'translateX(0px)';
  //         return false;
  //       }

  //       this.style.transition = 'transform .5s';
  //       this.style.transform = 'translateX(' + moveW + 'px)';
  //     })
  //   }

  // })
})();

//ajax请求
;
(function () {
  // Ajax({
  //   str: 'getbaicaijiaproduct',
  //   data: {
  //     titleid: 0
  //   },
  //   collback: function (data) {
  //     $('.goods ul').html(template('tmp-goods', {
  //       list: data.result
  //     }));
  //     $('.bcj-top-nav ul').children()[0].classList.add('active');
  //   }
  // })
})();

//头部导航点击事件
;
(function () {

  // $('.bcj-top-nav ul').on('click', 'li', function () {

  //   var id = +this.id;
  //   Ajax({
  //     str: 'getbaicaijiaproduct',
  //     data: {
  //       titleid: id
  //     },
  //     collback: function (data) {
  //       console.log(data);
  //       $('.goods ul').html(template('tmp-goods', {
  //         list: data.result
  //       }));
  //       $('.bcj-top-nav ul').children().each(function (index, ele) {
  //         ele.classList.remove('active');
  //       });
  //       $('.bcj-top-nav ul').children()[id].classList.add('active');
  //     }
  //   })
  // })
})();