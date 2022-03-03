function myFunction() {
      var x = document.getElementById("newText").value;

      var lettergrade;   //declaring variable lettergrade
      //According to http://calendars.registrar.yorku.ca/2012- 2013/academic/grades/index.htm.

        if(isNaN(x)){  // check if it is not a number
          confirm((x) + " is Not Valid");  //show error if not a number
      }
        else if(x <= 45){
          lettergrade = "Your letter grade is a 'F' which means Failing.";
  	  }
  	  	else if(x <= 49 ){
  	  		lettergrade = "Your letter grade is an 'E' which means Marginally Failing.";
  	  	}
  	  	else if(x <= 54 ){
  	  		lettergrade = "Your letter grade is a 'D' which means Barely Passing..";
  	  	}
  	  	else if(x <= 59 ){
  	  		lettergrade = "Your letter grade is a 'D+' which means Passing.";
  	  	}
  	  	else if(x <= 64 ){
  	  		lettergrade = "Your letter grade is a 'C' which means Fairly Competent.";
  	  	}
  	  	else if(x <= 69 ){
  	  		lettergrade = "Your letter grade is a 'C+' which means Competent.";
  	  	}
  	  	else if(x <= 74 ){
  	  		lettergrade = "Your letter grade is a 'B' which means Good.";
  	  	}
  	  	else if(x <= 79 ){
  	  		lettergrade = "Your letter grade is a 'B+' which means Very Good.";
  	  	}
  	  	else if(x <= 89 ){
  	  		lettergrade = "Your letter grade is a 'A' which means Excellent.";
  	  	}
  	  	else if(x <= 100 ){
  	  		lettergrade = "Your letter grade is a 'A+' which means Exceptional.";
  	  	}


  	  document.getElementById("display").innerHTML = lettergrade;
  	 }
