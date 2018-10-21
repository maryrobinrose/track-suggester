$(document).ready(function(){
  $("form#quiz").submit(function(event){
    $("#resultsOne").show();
    var questionOne = $("input:radio[name=one]:checked").val();
    var questionTwo = $("input:radio[name=two]:checked").val();
    var questionThree = $("input:radio[name=three]:checked").val();
    var questionFour = $("input:radio[name=four]:checked").val();
    var questionFive = $("input:radio[name=five]:checked").val();

    if (questionOne === true && questionTwo === true && questionThree === true && questionFour === true && questionFive === true) {
      $("#trackOne").show();
      $("#trackTwo").hide();
      $("#trackThree").hide();
    } else if (questionOne === false && questionTwo === false && questionThree === false && questionFour === false && questionFive === false);
      $("#trackTwo").show();
      $("#trackOne").hide();
      $("#trackThree").hide();

      else
        $("#trackThree").show();


    event.preventDefault();


  });
});
