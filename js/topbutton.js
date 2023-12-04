// 画面が一定量スクロールされると、TOPボタンが出現

// TOPボタンを指定
const pagetop_btn = document.querySelector(".topbtn");

window.addEventListener("scroll", scroll_event);
function scroll_event() {
    if (window.pageYOffset > 300) {
        // 画面が指定した領域よりも下に下がった時にopacity:1を付与する
pagetop_btn.style.opacity = "1";
} else if (window.pageYOffset < 300) {
        // 画面が指定した領域よりも上に上がった時にopacity:0を付与する
pagetop_btn.style.opacity = "0";
}
}