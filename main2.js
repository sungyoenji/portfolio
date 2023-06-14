$(function(){
    //work_cover
    $('.cover').hide()
    $('#Works .inner .list li').mouseenter(function(){
        $(this).stop().find('.cover').slideDown()
    })
    $('#Works .inner .list li').mouseleave(function(){
        $(this).stop().find('.cover').slideUp()
    })

    let aboutNum = $('#About').offset().top
    console.log(aboutNum)

    let workNum = $('#Works').offset().top
    console.log(workNum)

    let contactNum = $('#Contact').offset().top
    console.log(contactNum)

    $('header .inner>.gnb>li>a').click(function(){
        let name = $($(this).attr('href'))
        console.log(name)
        let target = $($(this).attr('href')).offset().top
        console.log(target)
        $('body,html').animate({scrollTop:target},1000)
    })
   //스크롤바 이동시(할 때마다) 해당 셕선에 맞는 메뉴바 글자색 변경
    $('header .inner>.gnb>li:eq(0)>a').css({color: '#425C8F'})
   
  $(window).scroll(function(){
    let num = $(this).scrollTop() //얼마큼 스크롤 되는지 알려준는지 스크롤값 함수
    console.log(num)

    $('.xy').text(num)


    //영역별로 설정(home위치)

    if(num > 0 && num < aboutNum){
          $('header .inner>.gnb>li>a').css({color:'#777'}) //모든메뉴 #777
          $('header .inner>.gnb>li:eq(0)>a').css({color:'#425C8F'}) 
      }

    if( num >= aboutNum && num < workNum){
      $('header .inner>.gnb>li>a').css({color:'#777'})
       $('header .inner>.gnb>li:eq(1)>a').css({color:'#425C8F'}) 
      }//about구간

    if( num >= workNum && num < contactNum){
      $('header .inner>.gnb>li>a').css({color:'#777'})
       $('header .inner>.gnb>li:eq(2)>a').css({color:'#425C8F'}) 
      }//work구간
    if( num > contactNum){
        $('header .inner>.gnb>li>a').css({color:'#777'}) 
        $('header .inner>.gnb>li:eq(3)>a').css({color:'#425C8F'})  
    }//contact구간
  })



  // work_menu_onClass

  $('#Works .inner .menu>li').click(function(){
     $('#Works .inner .menu>li').removeClass('on')
     $(this).addClass('on')
  })



 // work_menu(options)

  $('.list').isotope({
      itemSelector: '.list_item',
      layoutMode: 'fitRows'
  });

  $('#pc').click(function(){
    $('.list').isotope({ filter: '.pc' })
  })  
  $('#all').click(function(){
     $('.list').isotope({ filter: '.list_item' })
  })
  $('#mb').click(function(){
     $('.list').isotope({ filter: '.mb' })
  })  
  $('#re').click(function(){
      $('.list').isotope({ filter: '.re' })
  })  
  $('#pr').click(function(){
      $('.list').isotope({ filter: '.pr' })
  })  



    //swiper 슬라이드
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });



  //도넛그래프 
  //   $(window).ready(function(){
  //    draw(85, '.chart1', '#ccc');
  //    draw(85, '.chart2', '#8b22ff');
  //    draw(70, 'chart3','#ff0');
  //  });
   
  //  function draw(max, classname, colorname){
  //     var i=1;
  //      var func1 = setInterval(function(){
  //        if(i<max){
  //            color1(i,classname,colorname);
  //            i++;
  //        } else{
  //          clearInterval(func1);
  //        }
  //      },10);
  //  }
  //  function color1(i, classname,colorname){
  //     $(classname).css({
  //          "background":"conic-gradient("+colorname+" 0% "+i+"%, #f1f1f1 "+i+"% 100%)"
  //     });
  //  }

          
    
})