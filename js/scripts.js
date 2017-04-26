$(window).load(function(){
  $(".search-overlay__close, #open-search").click(function(){
    e.preventDefault();
    $(".search-overlay").toggleClass("no-show");
  })
})
