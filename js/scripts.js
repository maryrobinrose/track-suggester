$(document).ready(function(){
  $("form#quiz").submit(function(event){

    var one = $("input:radio[name=one]:checked").val();
    var two = $("input:radio[name=two]:checked").val();
    var three = $("input:radio[name=three]:checked").val();
    var four = $("input:radio[name=four]:checked").val();
    var five = $("input:radio[name=five]:checked").val();

    if (one === "true" && two === "true" && three === "true"  && four === "true" && five === "true") {
      $("#trackOne").show();
  }
  else if (one != "true" && two != "true" && three != "true"  && four != "true" && five != "true") {
    $("#trackTwo").show();
  }
  else {
    $("#trackThree").show();
  }


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
