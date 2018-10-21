$(document).ready(function(){
  $("form#quiz").submit(function(event){
    $("#results").show();
    var questionOne = $("input:radio[name=one]:checked").val();
    var questionTwo = $("input:radio[name=two]:checked").val();
    var questionThree = $("input:radio[name=three]:checked").val();
    var questionFour = $("input:radio[name=four]:checked").val();
    var questionFive = $("input:radio[name=five]:checked").val();

    if (questionOne === true && question === true) {
      $("#track").show()
    }
      $("#trackOne").show()



    event.preventDefault();


  });
});
