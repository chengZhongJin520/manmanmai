/**
 * Created by Lenovo on 2018/3/3.
 */



 define(['jquery', 'template', 'Ajax', 'headAndFoot'],($, template, A, H)=>{
  H.set({sections:true});



  var id=A.getId();
  //console.log(id);
  A.Ajax({
    str:'getbrand',
    data:{brandtitleid:id},
    collback:function(data){
      //console.log(data);
      $('.pinpai').html(template('tmp-pinpai', data)).find('.paiming').each(function(index,ele){
       if(index==0){$(ele).css('backgroundColor','red')};
       if(index==1){$(ele).css('backgroundColor','#ff9314')};
       if(index==2){$(ele).css('backgroundColor','#8adf5b')};
      })
    }
  })
  A.Ajax({
    str:'getbrandproductlist',
    data:{
          brandtitleid:id,
          pagesize:10
    },
    collback:function(data){
      var productId=0;
      var strImg='';
      var productName='';
      if(data){
        if(data.result[0]){
          productId=data.result[0].productId ;
          strImg=data.result[0].productImg ;
          productName=data.result[0].productName;
        }

      }


      $('.pp-data').html(template('tmp-pp-data',data));
      A.Ajax({
        str:'getproductcom',
        data:{productid:productId},
        collback:function(data){

          $('.product_cm ul').html(template('tmp',data));
          $('.product_cm ul').find('.img').html(strImg).next().text(productName);
          //console.log($('.product_cm ul').find('.img').html(strImg).next());
        }
      })
    }
  })

 })


//公共部分
;(function(){
  // set({sections:true});
})();


//ajax
;(function(){
  // var id=getId();
  // //console.log(id);
  // Ajax({
  //   str:'getbrand',
  //   data:{brandtitleid:id},
  //   collback:function(data){
  //     //console.log(data);
  //     $('.pinpai').html(template('tmp-pinpai', data)).find('.paiming').each(function(index,ele){
  //      if(index==0){$(ele).css('backgroundColor','red')};
  //      if(index==1){$(ele).css('backgroundColor','#ff9314')};
  //      if(index==2){$(ele).css('backgroundColor','#8adf5b')};
  //     })
  //   }
  // })



  // Ajax({
  //   str:'getbrandproductlist',
  //   data:{
  //         brandtitleid:id,
  //         pagesize:10
  //   },
  //   collback:function(data){
  //     var productId=0;
  //     var strImg='';
  //     var productName='';
  //     if(data){
  //       if(data.result[0]){
  //         productId=data.result[0].productId ;
  //         strImg=data.result[0].productImg ;
  //         productName=data.result[0].productName;
  //       }

  //     }


  //     $('.pp-data').html(template('tmp-pp-data',data));
  //     Ajax({
  //       str:'getproductcom',
  //       data:{productid:productId},
  //       collback:function(data){

  //         $('.product_cm ul').html(template('tmp',data));
  //         $('.product_cm ul').find('.img').html(strImg).next().text(productName);
  //         //console.log($('.product_cm ul').find('.img').html(strImg).next());
  //       }
  //     })
  //   }
  // })

})();