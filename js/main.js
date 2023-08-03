$(function(){

  //scroll_ani
  AOS.init({
    duration: 1200,
  })

  //work_cover
  $('.cover').hide()
  $('#Works .inner .list li').mouseenter(function(){
      $(this).stop().find('.cover').slideDown()
  })
  $('#Works .inner .list li').mouseleave(function(){
      $(this).stop().find('.cover').slideUp()
  })

  //header_클릭이벤트
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
    

    //영역별로 설정

    if(num > 0 && num < aboutNum){
          $('header .inner>.gnb>li>a').css({color:'#777'}) //모든메뉴 #777
          $('header .inner>.gnb>li:eq(0)>a').css({color:'#425C8F'}) 
      }//home구간

    if( num >= aboutNum && num < workNum){
      $('header .inner>.gnb>li>a').css({color:'#777'})
       $('header .inner>.gnb>li:eq(1)>a').css({color:'#425C8F'}) 
      }//about구간

    if( num >= workNum && num < contactNum){
      $('header .inner>.gnb>li>a').css({color:'#777'})
       $('header .inner>.gnb>li:eq(2)>a').css({color:'#425C8F'}) 
      }//work구간
      
    if( num >= contactNum){
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

  $('.slidebox .slide li a').click(function(){
    $('.detail').show
  })
  //슬라이드
  $('.slide').slick({
    autoplay:true,  //자동재생
    autoplaySpeed: 3000,
    arrows:false, //좌우버튼
    dots:true,   //페이지버튼
    slidesToShow:2,  //한 화면에 보여줄 작품수
    slidesToScroll:1,  //하나씩 스크롤

  })
  // //슬라이드 메뉴
  // $('.slidebox .slide #slick-slide-control00').text("Dior 상세페이지")
  // $('.slidebox .slide #slick-slide-control01').text("THE BODY SHOP")
  // $('.slidebox .slide #slick-slide-control02').text("단스탠드 SNS광고")
  // $('.slidebox .slide #slick-slide-control03').text("Yorgerfresso Event")
  // $('.slidebox .slide #slick-slide-control04').text("버섯선물세트")
  // $('.slidebox .slide #slick-slide-control05').text("중식메뉴판")
 


  //design슬라이드
  $('.design_slideWrap_inner').slick({
    dots: true,
    infinite: true,
    speed: 500,
     fade: true,
    cssEase: 'linear',
    arrows:true
  });
  
  // lightbox
   $('.list_item .cover .icon .view').lightBox({
        overlayBgColor:'#000',  //cover
        overlayOpacity:0.9,   //cover 투명도
        imageLoading:"./images/lightbox-ico-loading.gif",   //image로딩시
        imageBtnClose:"./images/lightbox-btn-close.gif",   //닫기버튼이미지
        imageBtnPrev:"./images/lightbox-btn-prev.gif",   //이전버튼
        imageBtnNext:"./images/lightbox-btn-next.gif",   //다음버튼
        containerResieSpeed:500,   //모달 팝업창 속도 조절
        txtImage:"작품"  //작품
    })

    $('#section3 .design_slideWrap .design_slide ul li a').lightBox({
      overlayBgColor:'#000',  //cover
      overlayOpacity:0.9,   //cover 투명도
      imageLoading:"./images/lightbox-ico-loading.gif",   //imgage로딩시
      imageBtnClose:"./images/lightbox-btn-close.gif",   //닫기버튼이미지
      imageBtnPrev:"./images/lightbox-btn-prev.gif",   //이전버튼
      imageBtnNext:"./images/lightbox-btn-next.gif",   //다음버튼
      containerResieSpeed:500,   //모달 팝업창 속도 조절
      txtImage:"작품"  //작품
  })
  
})