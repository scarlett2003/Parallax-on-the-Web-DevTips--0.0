$(window).scroll(function(){var r=$(this).scrollTop();$(".logo").css({transform:"translate(0px, "+r/2+"%)"}),$(".back-bird").css({transform:"translate(0px, "+r/4+"%)"}),$(".fore-bird").css({transform:"translate(0px, -"+r/40+"%)"})});