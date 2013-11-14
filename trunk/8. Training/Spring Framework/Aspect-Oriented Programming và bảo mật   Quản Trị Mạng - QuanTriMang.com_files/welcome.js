function ajxLoadWelcome(){
    try{
        var page_request = false
        if (window.XMLHttpRequest) // if Mozilla, Safari etc
            page_request = new XMLHttpRequest()
        else if (window.ActiveXObject){ // if IE
            try {
                page_request = new ActiveXObject("Msxml2.XMLHTTP")
            } 
            catch (e){
                try{
                    page_request = new ActiveXObject("Microsoft.XMLHTTP")
                }
                catch (e){}
            }
        }
        else
            return false;
        document.getElementById('memberbox').innerHTML='loading...';            
        page_request.onreadystatechange=function(){
            if (page_request.readyState == 4 && (page_request.status==200 || window.location.href.indexOf("http")==-1)){
                document.getElementById('memberbox').innerHTML=page_request.responseText;
            }                
        }
        var a = new Date();
        var ms = a.getMilliseconds();
        var s = a.getSeconds();
        var mn = a.getMinutes();
        var h = a.getHours();
        var d = a.getDay();
        var m = a.getMonth();
        var y = a.getFullYear();
        var t = y+'.'+m+'.'+d+'-'+h+':'+mn+':'+s+':'+ms;
        page_request.open('GET','/scripts/ajx/welcome.ashx?t='+t,true);
        page_request.send(null);
    }
    catch(e){}
}
    
function rfMemberBox(){
        document.getElementById('memberbox').innerHTML='Loading...';
        ajxLoadMemberBox();
}