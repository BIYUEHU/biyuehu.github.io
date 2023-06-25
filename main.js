((window) => {
    /* 设置 */
    const time = 5; 
    const url = confirm('本博客(Hexo & Ayer)已于2021年停用,2022年彻底废弃\n点击取消跳转到新博客地址,确认跳转到ICEAGE') ? 'https://imlolicon.tk' : '/waste/iceage/';

    const view = document.getElementById("second");
    view.innerHTML = time;
    let timer = time;
    setInterval(() => {
        timer--;
        view.innerHTML = timer;
        if (timer == 1) window.location.href = url;
    }, 1000);
})(window);
