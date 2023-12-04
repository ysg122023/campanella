/* ---画面サイズが変更された時--- */
function _main_br(){
    /* 画面縦横 */
    const win_width = window.innerWidth;
    const win_height= window.innerHeight;
    /* 要素取得 */
    const main_txt  = document.querySelector('.main_txt');/* mainVisualの文字 */
    let main_update = document.querySelector('.new');/* お知らせ */
    let main_visual = document.querySelector('.header_wrap')/* ナビとmainVisual */
    /* 要素高さ */
    let main_txt_bottom = main_txt.getBoundingClientRect().bottom || 0;
    let main_visual_bottom = main_visual.getBoundingClientRect().bottom || 0;
    let under_blank = (main_visual_bottom - main_txt_bottom) || 0;
    /* 負の値の場合不要？ */
    if(main_visual_bottom <= 0){
        under_blank = under_blank * -1; 
    }else{}

    /*画面幅が狭ければ、mainVisualに改行を加える */
/*     if(win_width <= 530){
        let main_moji = document.querySelector('.main_visual_moji');
        main_moji.innerHTML = "Cafe Campanellaでは<br>「デジタルデトックス」<br>をコンセプトに";
    }else{
        let main_moji = document.querySelector('.main_visual_moji');
        main_moji.textContent = "Cafe Campanellaでは「デジタルデトックス」をコンセプトに";
    } */
    /*画面幅が低すぎる場合はお知らせ画面をmainVisualの下にもってくる*/
    if(under_blank < 40){
        let header = document.querySelector('header');
        header.appendChild(main_update);
        main_update.classList.add('move_out');
    }else{
        let header_wrap = document.querySelector('.header_wrap');
        header_wrap.appendChild(main_update);
        let main_update_af = document.querySelector('.new');
        if(!main_update_af.classList.contains('move_out')){
            main_update_af.classList.remove('move_out');
        }else{}
    }
}

let resize_timer = false;
function main_br(){
    if(resize_timer !== false){
        clearTimeout(resize_timer);
    }
    resize_timer = setTimeout(_main_br, 200);
}
window.addEventListener('resize' ,main_br);
window.addEventListener('DOMContentLoaded' ,main_br);
window.addEventListener('scroll' ,main_br);
/* window.addEventListener('load' ,main_br); */
