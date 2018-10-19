$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();
    $(".results").show();
    var question = $("input:radio[name=q1]:checked").val();

  });
});
