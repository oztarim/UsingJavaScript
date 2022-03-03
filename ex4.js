

     function randomNum(min, max){
        return Math.random() * (max - min)+ min;  // returns a random number between the specified values
       }

      var getHundredBoxes = function(){
        var generateboxes = document.getElementById('generateboxes');
        var colors =["blue","grey","yellow","red","orange","green"]

        for(var i = 0; i <100; i++){

          randomTop = randomNum(0,400); //random between 0-400 top side screen
          randomLeft = randomNum(0,400); ////random between 0-400 left side screen
          var myDiv = document.createElement('div');
          myDiv.className = "box";
          generateboxes.appendChild(myDiv);  // that a node can't be in two points of the document simultaneously
         //setting the styles
          myDiv.style.top = randomTop + "px"; //top side
          myDiv.style.left = randomLeft + "px";  //top left
          myDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          myDiv.setAttribute("onmouseover", "removechild(this)"); //removechild() function
        }
}

        function removechild(divRemove){
          var childCount = document.getElementById("generateboxes").childElementCount;
            if(childCount !== 1){
              divRemove.remove(); //removing the current element mouse is on
         } else{
            alert("Last One !!");
    }
}
