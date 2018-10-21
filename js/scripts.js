$(document).ready(function(){
  $("form#quiz").submit(function(event){
  
    var question1 = $("input:radio[name=one]:checked").val();
    var question2 = $("input:radio[name=two]:checked").val();
    var question3 = $("input:radio[name=three]:checked").val();
    var question4 = $("input:radio[name=four]:checked").val();
    var question5 = $("input:radio[name=five]:checked").val();

    if (question1 === true) {
      $("#trackOne").show();
      // $("#trackTwo").hide();
      // $("#trackThree").hide();
    // } else if (questionOne === false && questionTwo === false && questionThree === false && questionFour === false && questionFive === false);
    //   $("#trackTwo").show();
    //   $("#trackOne").hide();
    //   $("#trackThree").hide();
    //
    //   else
    //     $("#trackThree").show();


    event.preventDefault();


  });
});
