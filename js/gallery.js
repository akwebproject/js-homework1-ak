
function upDate(aimage){
   document.getElementById("image").innerHTML=aimage.alt;
   document.getElementById("image").style.backgroundImage="url('"+ aimage.src +"')";
   document.getElementById("image").style.border="10px solid red";
    document.getElementById("image").style.color="white";
 
 /* In this function you should blue"
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  
	}

	function unDo(){
         document.getElementById("image").style.backgroundColor="#c5b8ee";
         document.getElementById("image").innerHTML = "Hover over an image below to display here.";
         document.getElementById("image").style.color="black";
        document.getElementById("image").style.backgroundImage="url('')";''
    };
  /*  1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		
	