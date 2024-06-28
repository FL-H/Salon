document.addEventListener("DOMContentLoaded", (event) => {

  // $(document).ready(function () {
  //   $(".button a").click(function () {
  //     $(".overlay").fadeToggle(200);
  //     $(this).toggleClass('btn-open').toggleClass('btn-close');
  //   });
  // });
  // $('.overlay').on('click', function () {
  //   $(".overlay").fadeToggle(200);
  //   $(".button a").toggleClass('btn-open').toggleClass('btn-close');
  //   open = false;
  // });

  let img = document.getElementsByTagName('img');
  img[0].loading = 'lazy';
  // console.log(img[10]);

  // const textItems = document.querySelectorAll('.fade-text');
  const textItems = document.getElementsByTagName('img');

  // 監視対象の要素に対する処理
  const showElements = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 監視対象の条件を満たしたら .reveal を追加
        entry.target.classList.add('reveal');
      } else {
        // 監視対象の条件から外れたら .reveal を削除
        // ※アニメーションを繰り返さない場合はコメントアウト
        entry.target.classList.remove('reveal');
      }
    });
  }

  // 監視対象が到達したとみなす条件
  const options = {
    rootMargin: '0px',
    threshold: 1.0, // [0-1]
  };

  // 監視の内容、条件
  const observer = new IntersectionObserver(showElements, options);

  // console.log(textItems);
  // textItems.forEach(element => console.log(element));
  textItems.forEach(element => 
    // observer.observe(element)
    console.log(element)
  );

  // 対象要素すべてについて監視を開始
  textItems.forEach(text => {
    observer.observe(text);
  });

  // テキストエリアのフォーカスイベント
  // document.getElementsByTagName('textarea')[0].addEventListener(`blur`, () => {
  //   if (document.getElementsByTagName('textarea')[0].value == "") {
  //     document.getElementsByTagName('textarea')[0].nextElementSibling.classList.remove("label");
  //   }
  // });

  // document.getElementsByTagName('textarea')[0].addEventListener(`focus`, () => {
  //   document.getElementsByTagName('textarea')[0].nextElementSibling.classList.add("label");

  // });

  // インプットエリアのフォーカスイベント
  for (let i = 0; i < document.getElementsByTagName('input').length; i++) {

    document.getElementsByTagName('input')[i].addEventListener(`blur`, () => {
      if (document.getElementsByTagName('input')[i].value == "") {
        document.getElementsByTagName('input')[i].nextElementSibling.classList.remove("label");
      }
      console.log("フォーカス外した。");
    });

    document.getElementsByTagName('input')[i].addEventListener(`focus`, () => {
      document.getElementsByTagName('input')[i].nextElementSibling.classList.add("label");
      console.log("フォーカスした。");
    });

    // document.getElementsByTagName('input')[i].onBlur = function(){
    //   document.getElementsByTagName('input')[i].nextElementSibling.classList.remove("label");
    //   console.log("フォーカス外した。");
    // };

    // document.getElementsByTagName('input')[i].onfocus = function () {
    //   document.getElementsByTagName('input')[i].nextElementSibling.classList.add("label");
    //   console.log("フォーカスした。");
    // };

  }

  // スクロールイベント
  let delay = 1;
  window.addEventListener("scroll", function () {
    const elm = document.querySelector(".elm");
    const scroll = window.scrollY;
    if (scroll > 900) {
      elm.style.opacity = "1";
      elm.style.zIndex = "1";
      // console.log(scroll);
      delay = 1;
      // document.getElementById('achievements').children[0].style.animationDuration = "1.0s";
      // document.getElementById('achievements').children[1].style.animationDuration = "2.0s";
      // document.getElementById('achievements').children[2].style.animationDuration = "3.0s";
      for (let i = 0; i < 3; i++, delay = (delay + 0.1)) {
        document.getElementById('achievements').children[i].classList.add("fadeUp");
        document.getElementById('achievements').children[i].style.animationDuration = delay + ".0s";
        // document.getElementById('achievements').children[i].style.animationDelay = delay + ".0s";
        // console.log(scroll);
        console.log(document.getElementById('achievements').children[i].animationDuration);
        console.log(i + "：" + delay);
      }

      // document.getElementsByClassName('achievements')[0].classList.add('fadeUp');

    } else if (100 < scroll || scroll < 150) {
      elm.style.opacity = "0";
      elm.style.zIndex = "-1";
      // document.getElementsByClassName('achievements')[0].style.opacity = "0";
      // document.getElementsByClassName('achievements')[0].style.zIndex = "-1";
      delay = 1;
      for (let i = 0; i < document.getElementsByClassName('works')[0].children.length; i++, delay = (delay + 0.5)) {
        document.getElementsByClassName('works')[0].children[i].classList.add("fadeUp");
        document.getElementsByClassName('works')[0].children[i].style.animationDuration = delay + ".0s";
      }

      // console.log(document.getElementsByClassName('works')[0].children.length);
      // console.log(document.getElementsByClassName('works')[0].children[0]);
      // document.getElementById('works').classList.add("fadeUp");

      // console.log(scroll);
    } else {
      // document.getElementsByClassName('achievements')[0].style.opacity = "0";
      // document.getElementsByClassName('achievements')[0].style.zIndex = "-1";

    }

    // console.log(scroll);
  });

  console.log("読み込んだ")
});