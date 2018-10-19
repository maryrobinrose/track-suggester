$(document).ready(function(){
  $("form#quiz").submit(function(event){
    $("#results").show();
    var question = $("input:radio[name=one]:checked").val();
    var question = $("input:radio[name=two]:checked").val();
    var question = $("input:radio[name=three]:checked").val();
    var question = $("input:radio[name=four]:checked").val();
    var question = $("input:radio[name=five]:checked").val();
    $("#track").show()


    event.preventDefault();


  });
});
