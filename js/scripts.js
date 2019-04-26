// Business Logic
      var triangleTracker = function(side1, side2, side3) {
      var sideOne = parseFloat(side1);
      var sideTwo = parseFloat(side2);
      var sideThree = parseFloat(side3);

      var newTriangle = { side1: sideOne,
                          side2: sideTwo,
                          side3: sideThree,
                          type: ""
      };

//  User Interface Logic
  //  Alert ERROR messages
      if( isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree)){
        return "ERROR: Please enter number for all three sides!";
      }
      if(sideOne+sideTwo<sideThree || sideTwo+sideThree<sideOne || sideOne+sideThree<sideTwo){
        return "ERROR: These are not valid triangle dimensions!";
      }
      if(sideOne<=0 || sideTwo <= 0 || sideThree <= 0){
        return "ERROR: All sides must have a value greater than zero!";
      }
      if(sideOne===sideTwo && sideTwo===sideThree){
        newTriangle.type = "Equilateral";
        return newTriangle;
      }else if(sideOne===sideTwo || sideOne===sideThree || sideTwo===sideThree){
        newTriangle.type = "Isosceles";
        return newTriangle;
      }else {
        newTriangle.type = "Scalene";
        return newTriangle;
      }

    };

    $(document).ready(function() {
      $("form#triangle-sides").submit(function(event) {

        var side1 = $('input#side1').val();
        var side2 = $('input#side2').val();
        var side3 = $('input#side3').val();
        var triangle = triangleTracker(side1, side2, side3);
  // Not a triangle
        if(typeof(triangle)=="string"){
          alert(triangle);
  // 3 sides are equal
        }else if(triangle.type=="Equilateral") {
          $("ul#equilateral").append("<li>" + triangle.side1 + " "+ triangle.side2 + " " + triangle.side3 +  "</li>");
  // 2 sides are equal
        }else if(triangle.type=="Isosceles"){
          $("ul#isosceles").append("<li>" + triangle.side1 + " "+ triangle.side2 + " " + triangle.side3 + "</li>");
  // No sides equal
        }else {
          $("ul#scalene").append("<li>"+ triangle.side1 + " " +triangle.side2+ " " + triangle.side3  + "</li>");
        }
        event.preventDefault();
      });
    });
