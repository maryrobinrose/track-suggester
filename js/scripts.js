$(document).ready(function(){
  $("form#quiz").submit(function(event){
    $("#results").show();
    var question = $("input:radio[name=q1]:checked").val();

    $("#track").show()

    event.preventDefault();


  });
});
