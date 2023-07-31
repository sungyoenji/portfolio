$(function(){
    $('.cover').hide()
    $('#Works .inner .list li').mouseenter(function(){
        $(this).stop().find('.cover').slideDown()
    })
    $('#Works .inner .list li').mouseleave(function(){
        $(this).stop().find('.cover').slideUp()
    })

    $('."slide_wrap').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
      //$('선택할요소').offset().top;
    // let homeNum = $('#home').offset().top
    // console.log(homeNum)

    let aboutNum = $('#About').offset().top
    console.log(aboutNum)

    let pfNum = $('#Works').offset().top
    console.log(pfNum)

    let conNum = $('#Contact').offset().top
    console.log(conNum)

    //클릭이벤트
    // $('.gnb li:eq(0) a').click(function(){
    //     $('body,html').animate({scrollTop:0})
    //     $(this).css({color:'yellow'})
    // })
    // $('.gnb li:eq(1) a').click(function(){
    //     $('body,html').animate({scrollTop:aboutNum})
    //     $(this).css({color:'yellow'})
    // })
    // $('.gnb li:eq(2) a').click(function(){
    //     $('body,html').animate({scrollTop:pfNum})
    //     $(this).css({color:'yellow'})
    // })
    // $('.gnb li:eq(3) a').click(function(){
    //     $('body,html').animate({scrollTop:conNum})
    //     $(this).css({color:'yellow'})
    // })

    //페이지내에서 링크 위치로 스크롤바 이동하고 글자색 노란색으로 변경
    $('.gnb li a').click(function(){
        let name = $($(this).attr('href'))
        console.log(name)
        let target = $($(this).attr('href')).offset().top
        console.log(target)
        $('body,html').animate({scrollTop:target},1000)
    })

    // //스크롤바 이동시(할 때마다) 해당 셕선에 맞는 메뉴바 글자색 변경
    // $('.gnb li:eq(0) a').css({color:'yellow'})
    // $('.quick').css({transition:'all 0.3s ease'})

    // $(window).scroll(function(){
    //     let num = $(this).scrollTop() //얼마큼 스크롤 되는지 알려준는지 스크롤값 함수
    //     console.log(num)

    //     $('.xy').text(num)

    //     //영역별로 설정(home위치)
    //     if(num > 0 && num < aboutNum){
    //          $('.gnb li a').css({color:'#fff'}) //모든메뉴 흰색
    //          $('.gnb li:eq(0) a').css({color:'yellow'}) 
    //      }

    //     if( num >= aboutNum && num < pfNum){
    //           $('.gnb li a').css({color:'#fff'})
    //          $('.gnb li:eq(1) a').css({color:'yellow'})
    //      }//about구간

    //     if( num >= pfNum && num < conNum){
    //          $('.gnb li a').css({color:'#fff'})
    //          $('.gnb li:eq(2) a').css({color:'yellow'})
    //      }//포토폴리오구간
    //     if( num >= conNum){
    //         $('.gnb li a').css({color:'#fff'})
    //         $('.gnb li:eq(3) a').css({color:'yellow'})
    //     }//contact구간


    //     //스크롤바의 위치에 따라서 Quick Menu
    //     if( num >= pfNum && num < conNum){
    //         $('.quick').css({right:100},500)
    //     }else{
    //         $('.quick').css({right:-200},500)
    //     }

    // })
        //   //팝업창 연결
        //   $('.popup').hide()
        // $('.popup').hide()
        // $('.menu').click(function(){
        //     $(this).next().show();
        //     $('body,html').css({overflow:'hidden'})
            
        // })
        // $('.btn_modal').click(function(){
        //     $('.popup').hide()
        //     $('body,html').css({overflow:'auto'})
        // })
    
})