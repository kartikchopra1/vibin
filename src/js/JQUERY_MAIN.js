$(document).ready(function(){
  flag=0;
  $("#icon").click(function(){
    if(flag==0)
    {
      $("#main").css('box-shadow','inset 0px 0px 0px 30px black, inset 0px -70px 0px 30px black');
    }
  });
});
