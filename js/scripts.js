$(document).ready(function(){
  $("form#quiz").submit(function(event){
    $("#resultsOne").show();
    var questionOne = $("input:radio[name=one]:checked").val();
    var questionTwo = $("input:radio[name=two]:checked").val();
    var questionThree = $("input:radio[name=three]:checked").val();
    var questionFour = $("input:radio[name=four]:checked").val();
    var questionFive = $("input:radio[name=five]:checked").val();

    if (questionOne === true && questionTwo === true) {
      $("#trackOne").show()
    }
      



    event.preventDefault();


  });
});
