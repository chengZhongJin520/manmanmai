/**
 * Created by Lenovo on 2018/3/3.
 */
define(['jquery', 'template', 'Ajax', 'headAndFoot'], ($, template, A, H) => {
  H.set({
    sections: true
  });
  A.Ajax({
    str: 'getbrandtitle',
    collback: function (data) {
      // console.log(data);
      $('.mmm_pinpai').html(template('tmp', data));
    }
  })
})
//设置公共部分
;
(function () {
  // set({sections:true});
})();


//ajax
;
(function () {
  // Ajax({
  //   str:'getbrandtitle',
  //   collback:function(data){
  //     console.log(data);
  //     $('.mmm_pinpai').html(template('tmp',data));
  //   }
  // })
})();