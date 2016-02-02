function validateForm() {
    var x = document.forms["myForm"]["text1"].value;
	var y= document.forms["myForm"]["text2"].value;
	var z= document.forms["myForm"]["text3"].value;
    if (x == null || x == "") {
        document.getElementById('output').innerHTML="Please enter email";
        return false;
    }
	if(y==null || y==""){
	
	    document.getElementById('output').innerHTML="Please enter your Name";
        return false;
	}
	if (z== null || z== "") {
        document.getElementById('output').innerHTML="Please enter Message";
        return false;
    }
}


function redirect()
    {
    var url = "C:\Users\asyed0\Desktop\New folder (3)\redirect.html";
    window.location(url);
    }
