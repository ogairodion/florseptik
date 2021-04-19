import { html } from "cheerio";
import $ from "jquery";

initLoadMore(".kinds__item","4","8", ".kinds .btn--more");

function initLoadMore(block,count,visiblecount, button){
    let loadMoreBlocks = $(block);
    if (loadMoreBlocks.length / visiblecount > 1) {    
        for (let i = loadMoreBlocks.length - 1; i >= visiblecount; i--) {
            $(loadMoreBlocks[i]).addClass("hidden").fadeOut(0);
        }
        $(button).addClass("show_btn");
    }
    $(button).on("click", function() {
        let $this = $(this).parent().parent();
        loadMoreBlocks = $(".hidden", $this);
        if (loadMoreBlocks.length / count > 1) {        
            for (let j = 0; j < count; j++) {
                $(loadMoreBlocks[j]).removeClass("hidden").fadeIn();                    
            }            
        } else {
            for (let j = loadMoreBlocks.length - 1; j >= 0; j--) {
                $(loadMoreBlocks[j]).removeClass("hidden").fadeIn();                    
            }
            $(this).removeClass("show_btn");
        }
    });
}

$('.kinds__item').on('click', function() {
    let kind = {
        img: $('.kinds__item-img', $(this)).html(),
        title: $('.kinds__item-title', $(this)).text(),
        price: $('.kinds__item-price', $(this)).text(),
        characteristics: $('.kinds__item-characteristics', $(this)).html()
    }
    $('.popup-product__img').html(kind.img);
    $('.popup-product__title').text(kind.title);
    $('.popup-product__price').text(kind.price);
    $('.popup-product__characteristics').html(kind.characteristics);
});