//gsap 라이브러리 연결
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

//lenis 변수 선언
let lenis;

//lenis scrollTrigger연결버전
const initSmoothScrolling = () => {
  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    ease: "linear",
    duration: 2.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  //lenis 초기스크롤 설정값
  lenis.on("scroll", () => ScrollTrigger.update());

  const scrollFn = (time) => {
    lenis.raf(time);

    requestAnimationFrame(scrollFn);
  };
  requestAnimationFrame(scrollFn);
};

//lenis 함수 선언
// initSmoothScrolling();



//---------------------------------------------

//페이지 초기값
let page1Change = 0;
let page2Change = 0;
let page2ChangeSlect = 0;
let page2PositionChange = 0;
let currentImg = "img/mid_img_mini.jpeg";
let last_scroll = "";
let last_scroll5 = "";
let last_scroll6 = "";
let pageListClick = 0;
let currentpageIndex = 10;
let marqueeEnd3 = 0;
let marqueeEnd4 = 0;
let marqueeEnd5 = 0;
let marqueeEnd6 = 0;
let page6Gsap = 0;
const translateValues = {};
let pageslectCheck = 0;
let executed = false;

//selector span으로 감싸기
function createSpan(selector) {
  let textContent = selector.text().split("");
  let splitWord = "";

  textContent.forEach((txt) => {
    splitWord += `<span>${txt}</span>`;
  });

  selector.html(splitWord);
}

//marquee 함수
function marquee(count, marqueeTxt, txtWidth, marqueeContainer, direction) {
  function marqueeTxt(count, element, direction) {
    if (count > txtWidth) {
      element.css({
        transform: "translate3d(0,0,0)",
      });
      count = 0;
    }
    element.css({
      transform: `translate3d(${count * direction}px,0,0)`,
    });
    return count;
  }

  function animate() {
    count++;
    count = marqueeTxt(count, marqueeContainer, direction);
    requestAnimationFrame(animate);
  }
  animate();
}

/* ******* page1 영역 ******* */
function page1() {
  //createSpan함수사용
  createSpan($(".p1intdesc1"));
  createSpan($(".p1intdesc2"));
  createSpan($(".p1intdesc3"));
  createSpan($(".p1intdesc4"));

  //page1gsap에 사용된 변수
  let p1intdesc1span = $(".p1intro .p1intdesc1 span");
  let p1intdesc2span = $(".p1intro .p1intdesc2 span");
  let p1intdesc3span = $(".p1intro .p1intdesc3 span");
  let p1intdesc4span = $(".p1intro .p1intdesc4 span");

  //page1gsap
  function page1gsap() {
    let p1tl = gsap.timeline();

    p1tl.to(".page1TL-line", {
      //여기서부터 175까지주석
      opacity: 1,
      top: "5%",
      left: "5%",
      width: "10vw",
      height: "10vw",
      duration: 1.5,
      ease: "power4.out",
    });
    p1tl.to(
      ".page1TR-line", {
        opacity: 1,
        top: "5%",
        right: "5%",
        width: "10vw",
        height: "10vw",
        duration: 1.5,
        ease: "power4.out",
      },
      "<"
    );
    p1tl.to(
      ".page1BL-line", {
        opacity: 1,
        bottom: "5%",
        left: "5%",
        width: "10vw",
        height: "10vw",
        duration: 1.5,
        ease: "power4.out",
      },
      "<"
    );
    p1tl.to(
      ".page1BR-line", {
        opacity: 1,
        bottom: "5%",
        right: "5%",
        width: "10vw",
        height: "10vw",
        duration: 1.5,
        ease: "power4.out",
      },
      "<"
    );

    p1tl.to(".page1centerTop-line", {
      opacity: 1,
      width: "70%",
      duration: 1,
      ease: "back.out(2)",
    });
    p1tl.to(
      ".page1centerTop-line .box", {
        opacity: 1,
        duration: 1,
      },
      "<"
    );
    p1tl.to(
      ".page1centerBottom-line", {
        opacity: 1,
        width: "70%",
        duration: 1,
        ease: "back.out(2)",
      },
      "<"
    );
    p1tl.to(
      ".page1centerBottom-line .box", {
        opacity: 1,
        duration: 1,
      },
      "<"
    );

    p1tl.to(p1intdesc1span, {
      opacity: 1,
      y: -15,
      stagger: 0.02,
      ease: "power4.out",
    });
    p1tl.to(p1intdesc2span, {
      opacity: 1,
      y: -15,
      stagger: 0.02,
      ease: "power4.out",
    });
    p1tl.to(p1intdesc3span, {
      opacity: 1,
      y: -15,
      stagger: 0.02,
      ease: "power4.out",
    });
    p1tl.to(p1intdesc4span, {
      opacity: 1,
      y: -15,
      stagger: 0.02,
      ease: "power4.out",
    });

    p1tl.to(".page1LodingBar", {
      delay: 0.3,
      opacity: 1,
      y: 30,
    });
    p1tl.to(".page1LodingBar .activeBar", {
      width: "110%",
      duration: 4,
      ease: "power4.out",
    });

    p1tl.to(".page1centerTop-line", {
      opacity: 0,
      width: "0%",
      duration: 1,
      ease: "back.in(2)",
    });
    p1tl.to(
      ".page1centerTop-line .box", {
        duration: 1,
      },
      "<"
    );
    p1tl.to(
      ".page1centerBottom-line", {
        opacity: 0,
        width: "0%",
        duration: 1,
        ease: "back.in(2)",
      },
      "<"
    );
    p1tl.to(
      ".page1centerBottom-line .box", {
        duration: 0.2,
      },
      "<"
    );

    p1tl.to(
      ".page1LodingBar", {
        y: "25vh",
        opacity: 0,
        duration: 1,
      },
      "<"
    );
    p1tl.to(".page1LodingBar", {
      width: "10vw",
      height: "10vw",
      duration: 1,
      opacity: 1,
    });
    p1tl.to(
      ".page1LodingBar", {
        borderRadius: "50%",
        duration: 0.1,
        ease: "power4.out",
      },
      "<"
    );

    p1tl.to(".page1LodingBar", {
      y: "50%",
      width: "200vw",
      height: "200vw",
      duration: 3,
      ease: "power2.out",
      onComplete: function () {
        $(".main-intro").addClass("page1End");
        page2();
      },
    });

    p1tl.to(
      ".p1intro", {
        opacity: 0,
        duration: 1,
      },
      "<"
    );
    p1tl.to(
      ".page1TL-line", {
        opacity: 0,
        top: "0%",
        left: "0%",
        width: "15vw",
        height: "15vw",
        duration: 1,
        ease: "power4.out",
      },
      "<"
    );
    p1tl.to(
      ".page1TR-line", {
        opacity: 0,
        top: "0%",
        right: "0%",
        width: "15vw",
        height: "15vw",
        duration: 1,
        ease: "power4.out",
      },
      "<"
    );
    p1tl.to(
      ".page1BL-line", {
        opacity: 0,
        bottom: "0%",
        left: "0%",
        width: "15vw",
        height: "15vw",
        duration: 1,
        ease: "power4.out",
      },
      "<"
    );
    p1tl.to(
      ".page1BR-line", {
        opacity: 0,
        bottom: "0%",
        right: "0%",
        width: "15vw",
        height: "15vw",
        duration: 1,
        ease: "power4.out",
      },
      "<"
    );
  }

  //page1gsap이 한번만 실행되도록하는 if함수
  if (page1Change == 0) {
    page1Change = 1;
    page1gsap();
  }
}
page1(); /* page1 */



/* ******* page2 영역 ******* */
function page2() {
  //page2 rightCont 초기값
  $(".selectTitle p").hide().eq(0).show();
  $(".selectDesc p").hide().eq(0).show();

  //lc_section mouseover 이벤트
  function lcSectionMouseEvent() {
    $(".lc_section").parent().removeClass("active");
    $(this).parent().addClass("active");
    let index = $(this).parent().index();

    //선택한 이미지값 추출
    let selectImg = $(this).find(".lc_hidden img").attr("src");
    $(".page2subTitle ul li")
      .removeClass("active")
      .eq(index)
      .addClass("active");
    console.log(index);

    //같은 index 선택시
    if (currentImg == selectImg) {
      console.log("같은 이미지입니다.");
    } else {
      //선택 이미지 변경
      $(".selectImgBox img").attr("src", selectImg);
      currentImg = selectImg;
    }

    $(".selectTitle p").hide().eq(index).show();
    $(".selectDesc p").hide().eq(index).show();
  }

  //lc_section mouseover 이벤트 실행
  $(".lc_section").mouseover(lcSectionMouseEvent);

  //lc_section click 이벤트 실행 - mouseover 이벤트 중지 . lcSelectGsap 실행
  $(".lc_section").click(function () {
    let index2 = $(this).parent().index();
    if (page2ChangeSlect == 0) {
      page2ChangeSlect = 1;
      lcSelectGsap(index2);
      $(".lc_section").off("mouseover", lcSectionMouseEvent);
    }
  });

  //lc_sectionStart mouseover 이벤트
  function lcSection_startMouseoverEvent() {
    $(this).parent().removeClass("active");

    gsap.to($(this).find(".lc_img"), {
      y: -20,
      opacity: 0,
    });
    gsap.to($(this).find(".lc_txt"), {
      y: 20,
      opacity: 0,
    });
    gsap.to($(this).find(".bg_circle"), {
      opacity: 0,
    });
    gsap.to($(this).find(".txt"), {
      x: 20,
      opacity: 1,
    });
    gsap.to($(this).parent(), {
      width: "100%",
    });
  }

  //lc_sectionStart mouseout 이벤트
  function lcSection_startMouseoutEvent() {
    $(".lc_section").parent().addClass("active");

    gsap.to($(this).find(".lc_img"), {
      y: 0,
      opacity: 1,
    });
    gsap.to($(this).find(".lc_txt"), {
      y: 0,
      opacity: 1,
    });
    gsap.to($(this).find(".bg_circle"), {
      opacity: 1,
    });
    gsap.to($(this).find(".txt"), {
      x: 0,
      opacity: 0,
    });
    gsap.to($(this).parent(), {
      width: "50%",
    });
  }

  //lc_sectionStart click 이벤트 - lcBox_startClick 이벤트 실행
  $(".lc_section").click(function () {
    let index3 = $(this).parent().index();
    if ($(".lc_box").hasClass("start") && page2PositionChange == 0) {
      page2PositionChange = 1;
      lcBox_startClick(index3);
    }
  });

  //lcBox_startClick 함수 - lc_sectionStart mouseover,out 이벤트 중지 . page2Move 이벤트 중지
  function lcBox_startClick(idx) {
    console.log("실행되었습니다");
    $(".lc_section").off("mouseover", lcSection_startMouseoverEvent);
    $(".lc_section").off("mouseout", lcSection_startMouseoutEvent);
    $(".page2").off("mousemove", page2Move);
    let selectlcBox = $(".leftCont .lc_box").eq(idx);
    let selectlcSection = $(".leftCont .lc_box").eq(idx).find(".lc_section");
    if ($(".leftCont .lc_box").hasClass("active")) {
      $(".leftCont .lc_box").removeClass("active");
    }

    //page 선택시 gsap효과
    p2tl3 = gsap.timeline();

    p2tl3.to(".lc_hiddnTxt", {
      opacity: 0,
      y: -20,
    });
    p2tl3.to(
      ".lc_click", {
        opacity: 0,
        x: -20,
      },
      "<"
    );
    p2tl3.to(selectlcBox, {
      opacity: 0,
      width: "0%",
    });
    p2tl3.to(
      selectlcSection, {
        height: "100%",
      },
      "<"
    );
    p2tl3.to(selectlcBox, {
      delay: 0.5,
      left: "50%",
      top: "50%",
      x: -180,
      y: -180,
      position: "fixed",
      width: 360,
      duration: 0,
      overflow: "hidden",
      borderRadius: "50%",
      zIndex: 1500,
    });
    p2tl3.to(selectlcBox, {
      delay: 0.5,
      oncomplete: function () {
        p2tl3.to(selectlcBox, {
          opacity: 1,
        });
        p2tl3.to(selectlcBox, {
          x: -120,
          y: -120,
          width: 240,
          height: 240,
          duration: 0.5,
        });
        p2tl3.to(selectlcBox, {
          x: "-50%",
          y: "-50%",
          width: "200vw",
          height: "200vw",
          duration: 3,
          ease: "power2.out",
          oncomplete: function () {
            //page전환 settime함수
            setTimeout(function () {
              $(".page").eq(idx).addClass("selectPage");
              $(".page").eq(idx).show();
              $(".main-intro").addClass("endIntro");

              pagecommon(idx);
              // idx를 넣어서 pagecommon 호출
            }, 2000);
          },
        });
      },
    });
  }

  //page2 marquee
  let count1 = 0;
  let page2MarqueeP = $(".page2 .page2Marquee .page2marqueeContainer p");
  let page2MarqueeWidth = page2MarqueeP.width();
  let p2Marquee_clone = page2MarqueeP.clone(true);
  let nextElement = $(".page2 .page2Marquee .page2marqueeContainer");
  nextElement.append(p2Marquee_clone);

  marquee(count1, page2MarqueeP, page2MarqueeWidth, nextElement, -1);

  //page2 lcbox pageMove 함수
  function page2Move(e) {
    let x = e.clientX;
    let y = e.clientY;

    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    let sWidthcalc = (screenWidth * 0.01) / 2;
    let sheightcalc = (screenHeight * 0.01) / 2;

    let moveX = sWidthcalc - x * 0.01;
    let moveY = sheightcalc - y * 0.004;

    /*  console.log(x * 0.01)
        console.log(sWidthcalc)
        console.log(moveX)
        */

    if ($(".leftCont .lc_box").hasClass("start")) {}
    $(".leftCont .lc_box.start").css(
      "transform",
      `translate(${-moveX}vw, ${-moveY}vh)`
    );
  }

  //page2 lcbox pageMove 실행
  $(".page2").on("mousemove", page2Move);

  //page2gsap
  function page2gsap() {
    let p2tl = gsap.timeline();

    p2tl.to(".page2TL-line", {
      opacity: 1,
      top: "5%",
      left: "5%",
      width: "10vw",
      height: "10vw",
      duration: 1.5,
      ease: "power4.out",
    });
    p2tl.to(
      ".page2TR-line", {
        opacity: 1,
        top: "5%",
        right: "5%",
        width: "10vw",
        height: "10vw",
        duration: 1.5,
        ease: "power4.out",
      },
      "<"
    );
    p2tl.to(
      ".page2BL-line", {
        opacity: 1,
        bottom: "5%",
        left: "5%",
        width: "10vw",
        height: "10vw",
        duration: 1.5,
        ease: "power4.out",
      },
      "<"
    );
    p2tl.to(
      ".page2BR-line", {
        opacity: 1,
        bottom: "5%",
        right: "5%",
        width: "10vw",
        height: "10vw",
        duration: 1.5,
        ease: "power4.out",
      },
      "<"
    );
    p2tl.to(".page2mainTitle", {
      x: 20,
      opacity: 1,
    });
    p2tl.to(
      ".page2subTitle ul li", {
        x: -20,
        opacity: 1,
        stagger: 0.2,
      },
      "<"
    );
    p2tl.to(".page2Cont .leftCont .lc_box", {
      top: 0,
      opacity: 1,
      stagger: 0.2,
    });
    p2tl.to(
      ".page2Cont .rightCont", {
        left: 0,
        opacity: 1,
      },
      "<"
    );
    p2tl.to(".page2 .page2Marquee .page2marqueeContainer", {
      opacity: 1,
    });
  }

  //page2gsap이 한번만 실행되도록하는 if함수
  if (page2Change == 0) {
    page2Change = 1;
    page2gsap();
  }

  //page2 lc_section 선택후 gsap
  function lcSelectGsap(element) {
    console.log(element);
    let p2tl2 = gsap.timeline();

    p2tl2.to(".page2TL-line", {
      opacity: 0,
      top: "0%",
      left: "0%",
      width: "15vw",
      height: "15vw",
      duration: 1.5,
      ease: "power4.out",
    });
    p2tl2.to(
      ".page2TR-line", {
        opacity: 0,
        top: "0%",
        right: "0%",
        width: "15vw",
        height: "15vw",
        duration: 1.5,
        ease: "power4.out",
      },
      "<"
    );
    p2tl2.to(
      ".page2BL-line", {
        opacity: 0,
        bottom: "0%",
        left: "0%",
        width: "15vw",
        height: "15vw",
        duration: 1.5,
        ease: "power4.out",
      },
      "<"
    );
    p2tl2.to(
      ".page2BR-line", {
        opacity: 0,
        bottom: "0%",
        right: "0%",
        width: "15vw",
        height: "15vw",
        duration: 1.5,
        ease: "power4.out",
        oncomplete: function () {
          $(".page2").addClass("selectPage");
        },
      },
      "<"
    );

    p2tl2.to(".page2Title .page2mainTitle", {
      x: "-30%",
      y: "-35%",
      fontSize: 40,
    });
    p2tl2.to(
      ".page2Title .page2subTitle", {
        x: "16%",
        y: "-210%",
      },
      "<"
    );
    p2tl2.to(
      ".page2 .page2Title .page2subTitle ul li", {
        fontSize: 20,
      },
      "<"
    );

    let lcBox = $(".leftCont .lc_box");
    lcBox.eq(element).css({
      "z-index": "100",
    });
    p2tl2.to(lcBox.eq(0), {
      opacity: 0,
      left: "50%",
    });
    p2tl2.to(
      lcBox.eq(1), {
        opacity: 0,
        left: "25%",
      },
      "<"
    );
    p2tl2.to(
      lcBox.eq(2), {
        opacity: 0,
      },
      "<"
    );
    p2tl2.to(
      lcBox.eq(3), {
        opacity: 0,
        right: "25%",
      },
      "<"
    );
    p2tl2.to(lcBox.eq(element), {
      opacity: 1,
      oncomplete: function () {
        lcBox.eq(element).addClass("start");
        $(".lc_section").mouseover(lcSection_startMouseoverEvent);
        $(".lc_section").mouseout(lcSection_startMouseoutEvent);
      },
    });
  }
} /* page2 */



/* ******* page공통 영역 ******* */
function pagecommon(pageIndex) {
  console.log(currentpageIndex);
  console.log(pageIndex);

  //선택된 페이지함수 초기실행

  if (pageslectCheck == 0) {
    if (pageIndex == 0) {
      Aboutme(pageIndex);
    } else if (pageIndex == 1) {
      Skills(pageIndex);
    } else if (pageIndex == 2) {
      Projects(pageIndex);
    } else if (pageIndex == 3) {
      Contact(pageIndex);
    }
    pageslectCheck = 1;
  }

  //page2 함수안에 pagecommon호출 idx넘겨받음
  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    // console.log(pageIndex);

    function topMenuScroll(scroll) {
      if (scroll > last_scroll) {
        $(".topMenu").addClass("on");
      } else {
        $(".topMenu").removeClass("on");
      }
      last_scroll = scroll;
    }
    topMenuScroll(scrollTop);
  });

  //공통page topMenuList mouseOver 함수
  let pagecommonMouseOver = function () {
    let index = $(this).index();
    $(".page")
      .eq(pageIndex)
      .find(".pageList ul li")
      .removeClass("active")
      .eq(index)
      .addClass("active");
    $(".page")
      .eq(pageIndex)
      .find(".pageListColor ul li")
      .removeClass("active")
      .eq(index)
      .addClass("active");
  };

  //공통page topMenuList mouseOver 함수
  let pagecommonMouseOut = function () {
    $(".page")
      .eq(pageIndex)
      .find(".pageList ul li")
      .removeClass("active")
      .eq(pageIndex)
      .addClass("active");
    $(".page")
      .eq(pageIndex)
      .find(".pageListColor ul li")
      .removeClass("active")
      .eq(pageIndex)
      .addClass("active");
  };

  //공통page topMenuList mouseOver.out 실행
  $(".page").eq(pageIndex).find(".pageList ul li").on({
    mouseover: pagecommonMouseOver,
    mouseout: pagecommonMouseOut,
  });

  //공통page click 이벤트 실행(함수밑에있음)
  $(".page").eq(pageIndex).find(".pageList ul li").on("click", pageMouseClick);

  //공통page restartClick 함수 - pageIndex값이 변한후 refresh위해서
  function restartClick() {
    $(".page")
      .eq(pageIndex)
      .find(".pageList ul li")
      .off("click", pageMouseClick);
    $(".page")
      .eq(pageIndex)
      .find(".pageList ul li")
      .on("click", pageMouseClick);
    $(".page").eq(pageIndex).find(".pageList ul li").off({
      mouseover: pagecommonMouseOver,
      mouseout: pagecommonMouseOut,
    });
    $(".page").eq(pageIndex).find(".pageList ul li").on({
      mouseover: pagecommonMouseOver,
      mouseout: pagecommonMouseOut,
    });
  }

  //공통page click 함수
  function pageMouseClick() {
    if (pageListClick == 0) {
      //topMenu중복클릭 방지
      pageListClick = 1;

      $(".page").eq(currentpageIndex).removeClass("loadingPage");

      //공통page topMenuList mouseOver.out 중지
      $(".page").eq(pageIndex).find(".pageList ul li").off({
        mouseover: pagecommonMouseOver,
        mouseout: pagecommonMouseOut,
      });

      let index = $(this).index();
      $(".page")
        .eq(pageIndex)
        .find(".pageList ul li")
        .removeClass("active")
        .eq(index)
        .addClass("active");
      $(".page")
        .eq(pageIndex)
        .find(".pageListColor ul li")
        .removeClass("active")
        .eq(index)
        .addClass("active");
      let pctl = gsap.timeline();

      //pageselect gsap 함수
      function pageselectGsap(pageIndex, index) {
        let selectpageListDot = $(".page")
          .eq(pageIndex)
          .find(".pageListColor ul li .dot");
        pctl.to(selectpageListDot.eq(index), {
          width: 100,
          height: 100,
          zIndex: 100,
        });
        pctl.to(selectpageListDot.eq(index), {
          y: -200,
          oncomplete: function () {
            pctl.to(selectpageListDot.eq(index), {
              delay: 0.5,
              position: "fixed",
              left: "50%",
            });
            pctl.to(selectpageListDot.eq(index), {
              y: 100,
            });
            pctl.to(selectpageListDot.eq(index), {
              left: "-50%",
              width: "200vw",
              height: "200vw",
              duration: 1,
            });
            gsap.to(
              selectpageListDot.eq(index), {
                oncomplete: selectPageComplete,
              },
              "+=0.5"
            );
          },
        });
      }
      //pageselect gsap 실행
      pageselectGsap(pageIndex, index);

      //pageselect gsap 함수 - oncomplete 함수
      function selectPageComplete() {
        $(window).scrollTop(0);
        setTimeout(pageChange, 1000);
      }

      //pageselect gsap 함수 - oncomplete 함수 - settimeout 함수
      function pageChange() {
        $(".page")
          .removeClass("selectPage")
          .eq(pageIndex)
          .addClass("loadingPage");
        $(".page").removeClass("selectPage").eq(index).addClass("selectPage");
        $(".page").eq(pageIndex).find(".pageList ul li").removeClass("active");
        $(".page")
          .eq(pageIndex)
          .find(".pageList ul li")
          .eq(pageIndex)
          .addClass("active");
        $(".page")
          .eq(pageIndex)
          .find(".pageListColor ul li")
          .removeClass("active");
        $(".page")
          .eq(pageIndex)
          .find(".pageListColor ul li")
          .eq(pageIndex)
          .addClass("active");
        pctl.reverse();
        pageListClick = 0;

        //선택되었던인덱스 , 현재인덱스
        currentpageIndex = pageIndex;
        pageIndex = index;

        console.log(currentpageIndex);
        console.log(pageIndex);
        restartClick();
        if (pageIndex == 0) {
          Aboutme(pageIndex);
        } else if (pageIndex == 1) {
          Skills(pageIndex);
        } else if (pageIndex == 2) {
          Projects(pageIndex);
        } else if (pageIndex == 3) {
          Contact(pageIndex);
        }
        return pageIndex;
      }
    }
  }
}


//page3~6에 쓰인 공통Gsap
function pageCommonGsap(index) {
  let pageTopMenu = $(".page").eq(index).find(".topMenu");
  let pageTopMainTitle = $(".page").eq(index).find(".mainTitle");
  let pageTopPageList = $(".page").eq(index).find(".pageList ul li");
  let pageTopPageColor = $(".page").eq(index).find(".pageListColor ul li");

  let pageLetter = $(".page").eq(index).find(".letterContainer");
  let pageLettercircle = $(".page")
    .eq(index)
    .find(".letterContainer .letterCircle");
  let pageLettertop = $(".page").eq(index).find(".letterContainer .lettercon4");
  let pageLetterCont = $(".page")
    .eq(index)
    .find(".letterContainer .letterCont");

  let tmtl = gsap.timeline();
  tmtl.fromTo(
    pageTopMenu, {
      opacity: 0,
      y: -100,
    }, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
    }
  );
  tmtl.fromTo(
    pageTopMainTitle, {
      opacity: 0,
      x: -50,
    }, {
      opacity: 1,
      x: 0,
      ease: "power2.out",
    }
  );
  tmtl.fromTo(
    pageTopPageList, {
      opacity: 0,
      y: -20,
    }, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      stagger: 0.1,
    }
  );
  tmtl.fromTo(
    pageTopPageColor, {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "power2.out",
      stagger: 0.1,
    },
    "<"
  );
  tmtl.fromTo(
    pageLetter, {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
    }
  );
  tmtl.fromTo(
    pageLettercircle, {
      opacity: 1,
      x: 0,
      y: 0,
    }, {
      opacity: 0,
      y: -30,
      x: -30,
      duration: 1,
      ease: "power2.out",
    },
    "+=0.5"
  );
  tmtl.fromTo(
    pageLettertop, {
      rotateX: 0,
    }, {
      rotateX: 90,
      duration: 1,
      ease: "power2.out",
    }
  );
  tmtl.fromTo(
    pageLetterCont, {
      y: 0,
    }, {
      y: -200,
      duration: 1,
      ease: "power2.out",
    },
    "+=0.5"
  );
}

//page가 실행될때 다른실행함수 막기위해

//page3,page4,page5,page6 함수
function Aboutme(idx) {

  //중복 재생되는 scrollTrigger 중지후 다시재생
  ScrollTrigger.getAll().forEach((trigger) => {
    trigger.kill();
  });

  //page공통gsap
  pageCommonGsap(idx);

  function p3containerGsap() {
    let p2Container1 = $(".page3_2container .top div").eq(0);
    let p2Container2 = $(".page3_2container .top div").eq(1);
    let p2Container3 = $(".page3_2container .top div").eq(2);

    gsap.to(p2Container1, {
      x: -200,
      scrollTrigger: {
        trigger: ".page3_2container .top",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(p2Container2, {
      x: 100,
      scrollTrigger: {
        trigger: ".page3_2container .top",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(p2Container3, {
      x: -100,
      scrollTrigger: {
        trigger: ".page3_2container .top",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".page3_2container .center .center2", {
      scrollTrigger: {
        trigger: ".page3_2container .center",
        start: "top -140%",
        end: "+=3500",
        scrub: true,
        pin: true,
      },
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3_2container .center",
        start: "top -120%",
        end: "+=3500",
        scrub: true,
      },
    });


    let lis = $('.visible li');

    for (let i = 0; i < 100; i++) {
      tl.fromTo(lis.eq(i), {
          x: Math.random() * window.innerWidth - window.innerWidth / 2,
          y: Math.random() * window.innerHeight - window.innerHeight / 2,
          borderRadius: 30,
          opacity: 0,
        }, {
          opacity: 1,
          x: 0,
          y: 0,
          borderRadius: 0

        },
        "<")
    }
    tl.to(".center2 .hidden li", {
      opacity: 0
    })
    tl.to(".center2 .visible li", {
      opacity: 0
    })


   


  }
  p3containerGsap();

  $(window).scroll(function () {
    let scrollTop3 = $(window).scrollTop();
    let p3centeroffTop = $(".page3_2container .center").offset().top;
    let p3centerHeight = $(".page3_2container .center").outerHeight()
    let p3centeroffbottom = p3centeroffTop + p3centerHeight - window.innerHeight
    let p3BottomFixedMove = (scrollTop3 - p3centeroffbottom) / window.innerHeight * 100

    console.log(scrollTop3)
    console.log(p3BottomFixedMove)


    //page3Fixed opacity 조절
    if (scrollTop3 > p3centeroffTop) {
      gsap.to(".p3BottomFixed", {
        opacity: 1,
        duration: 0,
      });
    } else if (scrollTop3 < p3centeroffTop) {
      gsap.to(".p3BottomFixed", {
        opacity: 0,
        duration: 0,
      });
    }

  });

}

function Skills(idx) {

  //중복 재생되는 scrollTrigger 중지후 다시재생
  ScrollTrigger.getAll().forEach((trigger) => {
    trigger.kill();
  });

  //page공통gsap
  pageCommonGsap(idx);


  //page4Gsap
  function p4containerGsap() {
    let p2Container1 = $(".page4_2container .top div").eq(0);
    let p2Container2 = $(".page4_2container .top div").eq(1);
    let p2Container3 = $(".page4_2container .top div").eq(2);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page4_2container .center",
        start: "top -16%",
        end: "+=3500",
        scrub: true,
      },
    });

    gsap.to(p2Container1, {
      x: -200,
      scrollTrigger: {
        trigger: ".page4_2container .top",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(p2Container2, {
      x: 100,
      scrollTrigger: {
        trigger: ".page4_2container .top",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(p2Container3, {
      x: -100,
      scrollTrigger: {
        trigger: ".page4_2container .top",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".page4_2container .center", {
      scrollTrigger: {
        trigger: ".page4_2container .center",
        start: "top -16%",
        end: "+=3500",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".page4_2container .center ul", {
      rotate: 30,
    });
    tl.to(".page4_2container .center ul", {
      rotate: -360,
      width: "60vh",
      height: "60vh",
    });

    tl.to(
      ".page4_2container .center ul li", {
        borderRadius: 50,
      },
      "<"
    );

    tl.to(".page4_2container .center ul li", {
      width: "20%",
      height: "20%",
      margin: "4%",
    });
    tl.to(".page4_2container .center ul li img", {
      opacity: 1
    }, "<");

    tl.to(".page4_2container .center ul", {
      width: "90vh",
      height: "90vh",
    });
  }
  p4containerGsap();


  //page4 skilbar
  function skillbar() {
    function animateSkills() {
      $('.skill-per').each(function () {
        let perElement = $(this);
        gsap.to(perElement, {
          duration: 2,
          width: perElement.attr('per') + "%",
          onUpdate: function () {
            console.log(perElement[0].style.width);
            perElement.attr('per', Math.ceil(this.progress() * parseInt(perElement[0].style.width)) + "%");
          }
        });
      });
    }

    // ScrollTrigger 사용
    ScrollTrigger.create({
      trigger: ".p4BottomFixed",
      start: "top 30%",
      onEnter: function () {
        if (!executed) {
          animateSkills();
          executed = true;
        }
      }
    });
  }
  skillbar()
} /* Skills */

function Projects(idx) {



  //중복 재생되는 scrollTrigger 중지후 다시재생
  ScrollTrigger.getAll().forEach((trigger) => {
    trigger.kill();
  });


  //page공통gsap
  pageCommonGsap(idx);

  //page5 container gsap 이벤트
  function p5containerGsap() {
    let p2Container1 = $(".page5_2container .top div").eq(0);
    let p2Container2 = $(".page5_2container .top div").eq(1);
    let p2Container3 = $(".page5_2container .top div").eq(2);
    let p2Hidden = $(".page5_2container .topDesc .hiddenbox");

    gsap.to(p2Container1, {
      x: -200,
      scrollTrigger: {
        trigger: ".page5_2container .top",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(p2Container2, {
      x: 100,
      scrollTrigger: {
        trigger: ".page5_2container .top",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(p2Container3, {
      x: -100,
      scrollTrigger: {
        trigger: ".page5_2container .top",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(p2Hidden, {
      width: "100%",
      height: "100%",
      top: "0%",
      left: "0%",
      borderRadius: 0,
      scrollTrigger: {
        trigger: ".page5_2container .top",
        start: "top top-=20%",
        end: "bottom top+=10%",
        scrub: true,
      },
    });
    gsap.to(".page5_2container .center", {
      scrollTrigger: {
        trigger: ".page5_2container .center",
        start: "top -16%",
        end: "+=3500",
        scrub: true,
        pin: true,
      },
    });

    p5projectContianerGsap1(".pcList1", "-80%", "-60%", 1, "-10%", "-90%");
    p5projectContianerGsap1(".pcList2", "-10%", "-90%", 2, "80%", "-80%");
    p5projectContianerGsap1(".pcList3", "80%", "-80%", 3, "100%", "10%");
    p5projectContianerGsap1(".pcList4", "-100%", "-10%", 4, "-80%", "-60%");
    p5projectContianerGsap1(".pcList5", "0", "0", 100);
    p5projectContianerGsap1(".pcList6", "100%", "10%", 6, "70%", "60%");
    p5projectContianerGsap1(".pcList7", "-50%", "90%", 7, "-100%", "-10%");
    p5projectContianerGsap1(".pcList8", "10%", "100%", 8, "-50%", "90%");
    p5projectContianerGsap1(".pcList9", "70%", "60%", 9, "10%", "100%");

    let p5Bottomcontainerwidth = $(".p5Bottomcontainer div").width() * 8.9;
    $(window).resize(function() {
      p5Bottomcontainerwidth = $(".p5Bottomcontainer div").width() * 8.9;
     });

    gsap.to(".p5Bottomcontainer", {
      x: -p5Bottomcontainerwidth,
      scrollTrigger: {
        trigger: ".p5Bottomcontainer",
        start: "top top",
        end: `+=${p5Bottomcontainerwidth}`,
        scrub: 1,
        pin: true,
        markers:true,
      },
    });

    
  }
  p5containerGsap();

  //page5 pcList1~9에 사용될 gsap함수
  function p5projectContianerGsap1(
    target,
    xMove,
    yMove,
    zindex,
    xMove2,
    yMove2
  ) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page5_2container .center",
        start: "top -16%",
        end: "+=3500",
        scrub: true,
      },
    });

    tl.to(target, {
      x: xMove,
      y: yMove,
    });
    tl.to(target, {
      x: xMove2,
      y: yMove2,
    });
    tl.to(target, {
      x: 0,
      y: 0,
    });
  }


  //page5 project click시 translateY효과
  $(".project").click(function () {
    let index = $(this).index();
    let targetImg = $(this).find("img");
    let imgcontainerHeight = $(".pjimg").height();
    let maxTranslate = targetImg.height() - imgcontainerHeight;

    translateValues[index] = translateValues[index] || 0;
    translateValues[index] += imgcontainerHeight;

    console.log(translateValues);

    if (translateValues[index] > maxTranslate) {
      translateValues[index] = maxTranslate;
    }

    targetImg.css({
      transform: "translateY(" + -translateValues[index] + "px)",
    });
  });
}

function Contact(idx) {

  //중복 재생되는 scrollTrigger 중지후 다시재생
  ScrollTrigger.getAll().forEach((trigger) => {
    trigger.kill();
  });

  //page공통gsap
  pageCommonGsap(idx);

  //page6 container gsap 이벤트
  function p6containerGsap() {
    let p2Container1 = $(".page6_2container .top div").eq(0);
    let p2Container2 = $(".page6_2container .top div").eq(1);
    let p2Container3 = $(".page6_2container .top div").eq(2);

    gsap.to(p2Container1, {
      x: -400,
      scrollTrigger: {
        trigger: ".page6_2container .top",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(p2Container2, {
      x: 100,
      scrollTrigger: {
        trigger: ".page6_2container .top",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(p2Container3, {
      x: -100,
      scrollTrigger: {
        trigger: ".page6_2container .top",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });

    let planetl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page6_2container .top",
        start: "top top",
        end: "bottom top-=150%",
        scrub: 1,
      },
    });

    planetl.to(
      ".paper-plane", {
        offsetDistance: "100%",
      },
      "plane"
    );
  }
  p6containerGsap();

  //page6 scroll 이벤트
  $(window).scroll(function () {
    let scrollTop6 = $(window).scrollTop();
    let p6_2sContoffSetTop = $(".p6_2sCont").offset().top;
    let P6_2stickyHeight = $(".P6_2sticky").height();
    let p6BottomFixed =
      p6_2sContoffSetTop + P6_2stickyHeight - window.innerHeight;
    let p6BottomFixedMoveVH =
      ((scrollTop6 - p6BottomFixed) / window.innerHeight) * 100;
    console.log(p6BottomFixedMoveVH);

    //page6 deltaY에따른 plane 방향
    function topMenuScroll(scroll) {
      if (scroll > last_scroll6) {
        $(".paper-plane").css("transform", "rotate(0deg)");
      } else {
        $(".paper-plane").css("transform", "rotate(180deg)");
      }
      last_scroll6 = scroll;
    }
    topMenuScroll(scrollTop6);

    //page6Fixed opacity 조절
    if (scrollTop6 > p6_2sContoffSetTop) {
      gsap.to(".p6BottomFixed", {
        opacity: 1,
        duration: 0,
      });
    } else if (scrollTop6 < p6_2sContoffSetTop) {
      gsap.to(".p6BottomFixed", {
        opacity: 0,
        duration: 0,
      });
    }


    //page6Fixed 높이에따른 gsap함수
    if (p6BottomFixedMoveVH > -10 && p6BottomFixedMoveVH < 100) {
      if (p6BottomFixedMoveVH >= 0 && p6BottomFixedMoveVH < 25) {
        gsap.to(".p6imgBox", {
          width: "0%",
        });
        gsap.to(".p6BFCont1", {
          x: 30,
          opacity: 1,
        });
      } else if (p6BottomFixedMoveVH >= 25 && p6BottomFixedMoveVH < 50) {
        gsap.to(".p6imgBox", {
          width: "25%",
        });
        gsap.to(".p6BFCont2", {
          x: 30,
          opacity: 1,
        });
      } else if (p6BottomFixedMoveVH >= 60 && p6BottomFixedMoveVH < 75) {
        gsap.to(".p6imgBox", {
          width: "50%",
        });
      } else if (p6BottomFixedMoveVH >= 75 && p6BottomFixedMoveVH < 100) {
        gsap.to(".p6imgBox", {
          width: "75%",
        });
        gsap.to(".p6BFCont3", {
          x: 30,
          opacity: 1,
        });
        gsap.to(".p6BFMaintitle", {
          x: 30,
          opacity: 1,
        });
        gsap.to(".p6BFsubtitle", {
          x: 30,
          opacity: 1,
        });
      }
      if (p6BottomFixedMoveVH < 0) {
        gsap.to(".p6BFCont1", {
          x: 0,
          opacity: 0,
          duration: 0.0001,
        });
        gsap.to(".p6BFCont2", {
          x: 0,
          opacity: 0,
          duration: 0.0001,
        });
        gsap.to(".p6BFCont3", {
          x: 0,
          opacity: 0,
          duration: 0.0001,
        });
        gsap.to(".p6BFMaintitle", {
          x: 0,
          opacity: 0,
          duration: 0.0001,
        });
        gsap.to(".p6BFsubtitle", {
          x: 0,
          opacity: 0,
          duration: 0.0001,
        });
        page6Gsap = 0;
      }

      if (p6BottomFixedMoveVH > 99 && page6Gsap == 0) {
        page6Gsap = 1;
        gsap.fromTo(
          ".p6BFLeftTL-line", {
            opacity: 0,
            top: "-5%",
            left: "-5%",
            width: "10vw",
            height: "10vw",
          }, {
            opacity: 1,
            top: "0%",
            left: "0%",
            width: "5vw",
            height: "5vw",
            duration: 1.5,
            ease: "power4.out",
          }
        );
        gsap.fromTo(
          ".p6BFLeftTR-line", {
            opacity: 0,
            top: "-5%",
            right: "-5%",
            width: "10vw",
            height: "10vw",
          }, {
            opacity: 1,
            top: "0%",
            right: "0%",
            width: "5vw",
            height: "5vw",
            duration: 1.5,
            ease: "power4.out",
          }
        );
        gsap.fromTo(
          ".p6BFLeftBL-line", {
            opacity: 0,
            bottom: "-5%",
            left: "-5%",
            width: "10vw",
            height: "10vw",
          }, {
            opacity: 1,
            bottom: "0%",
            left: "0%",
            width: "5vw",
            height: "5vw",
            duration: 1.5,
            ease: "power4.out",
          }
        );
        gsap.fromTo(
          ".p6BFLeftBR-line", {
            opacity: 0,
            bottom: "-5%",
            right: "-5%",
            width: "10vw",
            height: "10vw",
          }, {
            opacity: 1,
            bottom: "0%",
            right: "0%",
            width: "5vw",
            height: "5vw",
            duration: 1.5,
            ease: "power4.out",
          }
        );
      }
    }

  });

} /* Contact */


// Aboutme(0);
// Skills(1);
// Projects(2);
// Contact(3);