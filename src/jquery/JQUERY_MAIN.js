$(document).ready(function(){
  flag=0;
  $("#icon").click(function(){
    if(flag==0)
    {
      $("#main").css('box-shadow','inset 0px 0px 0px 30px black, inset 0px -70px 0px 30px black');
      $("#main").css('background-color','rbga(0,0,0,.2)');
      $("#m1").animate({top:'40%'},200);
      $("#m2").animate({top:'40%'},200);
      $("#m3").animate({top:'40%'},200);
      $("#m4").animate({top:'40%'},200);
      flag=1;
    }
    else {
      $("#main").css('box-shadow','inset 0px 0px 0px 0px black, inset 0px 0px 0px 0px black');
      $("#main").css('background-color','rbga(0,0,0,0)');
      $("#m1").animate({top:'100%'},200);
      $("#m2").animate({top:'100%'},200);
      $("#m3").animate({top:'100%'},200);
      $("#m4").animate({top:'100%'},200);
      flag=0;
    }

  });
});
