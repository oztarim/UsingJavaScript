
function myFunction() {
      var x = document.getElementById("newText").value;

      var reverse = 0; //you should declare a variable ‘reverse’ and initialized it to 0
      var temp = x; //temporary placeholder storing the input number in a variable,  call it temp
      var num; //holding digits
      var response; //capturing response from statement

      while(x >0){
        num= x%10;  //modulus first iteration
        reverse = (reverse*10)+num; //second iteration
        x = Math.floor(x/10);  //third iteration
      }
      // should compare the initial number by its reverse If they are equal, output “yes”;
      if(reverse == temp ){
        response = "Yes";
      }
      // output “no”.
      else if(reverse != temp){

        response = "No";
      }
  	  document.getElementById("display").innerHTML = response;
  	 }
