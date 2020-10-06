
var clickcount = 1;
$(function() {
  setup();
  $('.table').click(function() {
    play();
  });
  play();
  //盤と初期駒配置の設定
    function setup(){
      for(var i = 0; i < 8; i++){
        $('.table').append('<tr id="' + i +'">...</tr>');
      };

      for(var a = 0; a < 8; a++){
        $('.table tr').append('<td class="' + a +'"></td>');
      };

      $('#3 .3').html("●")
      $('#3 .4').html("○")
      $('#4 .3').html("○")
      $('#4 .4').html("●")
  };
  //駒を置く
  function blackplayer() {
    $('.table td').click(function() {
      clickcount = 2;
      $(this).html("●");
    });
};
  function whiteplayer() {
    $('.table td').click(function() {
      clickcount = 1;
      $(this).html("○");
    });
  };

  function play() {
    if(clickcount  == 1 ){
      blackplayer();
    }else{
      whiteplayer();
    };
  };

});