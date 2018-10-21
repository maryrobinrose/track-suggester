$(document).ready(function(){
  $("form#quiz").submit(function(event){

    var questionOne = $("input:radio[name=one]:checked").val();
    var questionTwo = $("input:radio[name=two]:checked").val();
    var questionThree = $("input:radio[name=three]:checked").val();
    var questionFour = $("input:radio[name=four]:checked").val();
    var questionFive = $("input:radio[name=five]:checked").val();

    if (questionOne === "true" && questionTwo === "true" && questionThree === "true"  && questionFour === "true" && questionFive === "true") {
      $("#trackOne").show();
  }
  else if (questionOne != "true" && questionTwo != "true" && questionThree != "true"  && questionFour != "true" && questionFive != "true") {
    $("#trackTwo").show();
  }
  else {
    $("#trackThree").show();
  }


    event.preventDefault();


  });
});
