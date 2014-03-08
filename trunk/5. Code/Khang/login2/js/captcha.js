//Created / Generates the captcha function    
    // For login
	function DrawCaptcha()
    {
        var a = Math.ceil(Math.random() * 10)+ '';
        var b = Math.ceil(Math.random() * 10)+ '';       
        var c = Math.ceil(Math.random() * 10)+ '';  
        var d = Math.ceil(Math.random() * 10)+ '';  
        var e = Math.ceil(Math.random() * 10)+ '';  
        var f = Math.ceil(Math.random() * 10)+ '';  
        var g = Math.ceil(Math.random() * 10)+ '';  
        var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
        document.getElementById("txtCaptcha").value = code
		document.getElementById("txtCaptcha-reg").value = code
    }

	// For register page
	
	
	
    // Validate the Entered input aganist the generated security code function   
	// For login
    function ValidCaptcha(){
        var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
        var str2 = removeSpaces(document.getElementById('captcha-enter').value);
        if (str1 == str2) return true;        
        return false;
        
    }
	
	// For Reg page
	function ValidCaptchaReg(){
        var str1 = removeSpaces(document.getElementById('txtCaptcha-reg').value);
        var str2 = removeSpaces(document.getElementById('captcha-enter-reg').value);
        if (str1 == str2) return true;        
        return false;
        
    }
	
    // Remove the spaces from the entered and generated code
    function removeSpaces(string)
    {
        return string.split(' ').join('');
    }