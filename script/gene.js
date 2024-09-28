//スクロールのためのスクリプト　https://mitsutano-oshiro.com/archives/1842　//
//キャッチコピー//
$(function () {
    // ウィンドウをスクロールしたら…
    $(window).scroll(function () {
        // ウィンドウの高さを取得
        const wHeight = $(window).height();
        // スクロールした量を取得
        const wScroll = $(window).scrollTop();
            // それぞれのblockクラスに対して…
            $(".gene").each(function () {
                // それぞれのblockクラスのウィンドウからの高さを取得
                const bPosition = $(this).offset().top;
                // スクロールした量が要素の高さを上回ったら
                // その数値にウィンドウの高さを引き、最後に200pxを足す
            if (wScroll > bPosition - wHeight + 400 ) {
                $(this).addClass("fadeIn");
            }
        });
    });
});

window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
    $('.bg1').addClass('bg1act');
    $('.bg2').addClass('bg2act');
  }