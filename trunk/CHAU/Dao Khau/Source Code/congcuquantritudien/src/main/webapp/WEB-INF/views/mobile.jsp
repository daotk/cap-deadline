<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link href="./images/icon-browser.ico" rel="shortcut icon" type="image/x-icon" />  
<title>Tải file</title>
<style type="text/css">
<!--
body{margin:0;font-size:.7em;font-family:Verdana, Arial, Helvetica, sans-serif;background:#EEEEEE;}
fieldset{padding:0 15px 10px 15px;} 
h1{font-size:2.4em;margin:0;color:#FFF;}
h2{font-size:2.5em;margin:0;color:#CC0000;} 
h3{font-size:2.0em;margin:10px 0 0 0;color:#000000;} 
#header{width:96%;margin:0 0 0 0;padding:6px 2% 6px 2%;font-family:"trebuchet MS", Verdana, sans-serif;color:#FFF;
background-color:#555555;}
#content{margin:0 0 0 2%;position:relative;}
.content-container{background:#FFF;width:96%;margin-top:8px;padding:10px;position:relative;}
-->
</style>
</head>
<body>
<div id="header"><h1>Cảnh báo</h1></div>
<div id="content">
 <div class="content-container"><fieldset>
  <h2>Tải file.</h2>
  <h3>Hiện tại đã có application cho công cụ này trên android. Bạn có muốn tải về dùng thử không?.</h3>
  <center>
  <div>
	  	<a href="app/Congcuquantri.apk"><button>Tải về</button></a>
	 	<form  method="post" action="mobile">	
			<button type="submit" name="actionmobile" value="cancel">Vẩn truy cập</button>
	    </form>
    </div>
  </center>
 </fieldset></div>
</div>
</body>
</html>
