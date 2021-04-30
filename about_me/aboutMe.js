$(function(){
  const target = $('.infinity .list');
  let breakList = 1;
  let listCount = 0;

  let winTop;
  let onTop;

  function getList(){
    let list;
    listCount ++;
    if (listCount > breakList) {
      list = null;
      // 리스트를 호출한 횟수가 10보다 커지면 더이상 호출 x
    } else {
      list = "<li><p> 2010년 홈페이지 디자인1 </p><figure><img src='./imgs/aboutMe/2010_homepage_making.JPG'></figure></li>"
      list += "<li><p> 2010년 홈페이지 디자인2 </p><figure><img src='./imgs/aboutMe/2010_homepage_making2.JPG'></figure></li>"
      list += "<li><p>이젠아카데미 성적 최우수상</p><figure><img src='./imgs/aboutMe/certificate_Ezen_Academy.JPG'></figure></li>"
      list += "<li><p>이젠아카데미 수료증</p><figure><img src='./imgs/aboutMe/Ezen_finish.JPG'></figure></li>"
      list += "<li><p>웹디자인 기능사 자격증</p><figure><img src='./imgs/aboutMe/web_design_gi.JPG'></figure></li>"
      list += "<li><p> 카드 디자인 </p><figure><img src='./imgs/aboutMe/blue_card.JPEG'></figure></li>"
      list += "<li><p> 카드 디자인 </p><figure><img src='./imgs/aboutMe/FallPhoU_card.JPEG'></figure></li>"
      list += "<li><p> 커버 디자인 </p><figure><img src='./imgs/aboutMe/bookCover.JPG'></figure></li>"
      list += "<li><p> 핸드폰케이스 DIY </p><figure><img src='./imgs/aboutMe/IMG_4485.JPG'></figure></li>"
      list += "<li><p>미국 어학연수 (SF)</p><figure><img src='./imgs/aboutMe/certificate_america0.JPG'></figure></li>"
      list += "<li><p>미국 어학연수(NY) </p><figure><img src='./imgs/aboutMe/certificate_america1.JPG'></figure></li>"
      list += "<li><p>경희대 학위증</p><figure><img src='./imgs/aboutMe/certificate_Korean_uni.JPG'></figure></li>"
      list += "<li><p>테솔 자격증</p><figure><img src='./imgs/aboutMe/certificate_tesol.JPG'></figure></li>"
    }
    return list;
  }

  function callList(){
    winTop = $(window).scrollTop();
    onTop = $(document).height() - $(window).height();
    if (winTop >= onTop){
      let data = getList();
      if (data !=null) {
        target.append(data);
      } else {
        return false;
      }
    }
  }  

  function init(){
    callList();
  }

  $(window).scroll(function(){
    callList();
  });

  init();

});