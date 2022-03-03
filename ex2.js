
function myFunction() {

  var num = document.getElementById("numbers").value;
  var list=[];
  list.push(num);   //Add a new number to an array
  var listString=list.toString(); //Convert a number to a string
  var numbers=listString.slice(',');   // method copies a given part of an array and returns that copied part as a new array.

  var countPositive=0;
  var countNegative=0;
  var total=0;

for (var i=0;i<numbers.length;i++){

        if (isNaN(numbers[i]) && numbers[i]!="-"){                //Check whether a value is NaN
            confirm(numbers[i]+ "   is NOT Valid, Please Press Start Over Button and Enter Positive or Negative Number Only")
  }
        else if (numbers[i]>0){
            countPositive++;
            total =countPositive-countNegative;
        }
        else if (numbers[i]=="-"){
            countNegative++;
        }
        else if(numbers[i]==0){
            confirm("Positive numbers: "+total+"  Negative numbers: "+countNegative + "  Please Press Start Over Button");  //when 0 entered display pop up
        }
       else{
       }
    }
}
