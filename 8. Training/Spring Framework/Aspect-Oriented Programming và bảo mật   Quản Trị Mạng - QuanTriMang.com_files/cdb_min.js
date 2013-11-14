/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * 
 * http://javascriptcompressor.com/
 */

/*
 * send request to server for tracking
 */
 
function sendReq(reqUrl, callback) {  
    if($iframe==null) {              
        $iframe = $('<iframe>', {
            frameborder: 0,
            style: 'display:none;',
            with: 0,
            height: 0
        }).appendTo(document.body);
       
    }
    
    /* check if cookies are enabled before sending request */
    var cookieEnabled=(navigator.cookieEnabled)? true : false;
    //if navigator,cookieEnabled is not supported
    if (typeof navigator.cookieEnabled=="undefined" && !cookieEnabled){
        document.cookie="testcookie";
        cookieEnabled=(document.cookie.indexOf("testcookie")!=-1)? true : false;
    }
    if (cookieEnabled) {
        $iframe.attr("src",reqUrl);
    }
}

function bindAnchor() {

    var random = Math.floor(Math.random() * 9999999999);
    var url = baseUrl + "/delivery/ctdb.php?cb=" + random + "&";

    /* for all anchor inside the document */
    $('a').bind('click', function(e) {
        var params = new Object();
        params['destUrl']= $(this).attr('href');
        params['referUrl']= document.referrer;
        params['domain']= window.location.hostname;
        
        url += "params=" + encodeURIComponent(JSON.stringify(params));
        sendReq(url,null);                                 
        return true;                
    });

    /* for all anchor inside the PARENT document (if this script is run from an IFRAME)*/
    var isInIFrame = (window!=window.top);
    if(isInIFrame) { 
        $('a', window.parent.document).bind('click', function(e) {
            var params = new Object();
            params['destUrl']= $(this).attr('href');
            params['referUrl']= document.referrer;
            params['domain']= window.top.location.hostname;
            
            url += "params=" + encodeURIComponent(JSON.stringify(params));
            sendReq(url,null);                                 
            return true;                
        });
    }
}

function initTargetingService() {

    var params = new Object();
    var isInIFrame = (window!=window.top);
    var title = '';
    var metaData = '';
    
    if(isInIFrame) { 
        params['destUrl'] = document.referrer;
        params['domain'] = window.top.location.hostname;
        title = '' + window.parent.document.title + '';
        metaData = window.parent.document.getElementsByTagName("meta");
    } else {
        params['destUrl'] = window.location.href;
        params['domain'] = window.location.hostname;
        title = '' + document.title + '';
        metaData = document.getElementsByTagName("meta");
    }
    
    var meta = "";
    var metaCheck = "description";
    if (typeof (metaData) != 'undefined') {
        for(var i=0; i<metaData.length; i++) {
            if (metaData[i].name != "" && metaCheck.indexOf( "" + metaData[i].name ) != -1) {
                meta += metaData[i].content + " ";
            }
        }
    }
    
    /* add title to param */
    params['title']= title;
    /* add meta */
    params['meta']= meta;

    var random = Math.floor(Math.random()*999999999);
    var url = baseUrl + "/delivery/tdb.php?cb=" + random + "&";
    url += "params=" + encodeURIComponent(JSON.stringify(params));
    
    sendReq(url, null);
}

function tdb_init() {    
    /* init targeting info */
    initTargetingService();
    /* bind all the anchor link */
    bindAnchor();
}

function callTDB() {
    $iframe =  null;
    $(document).ready(function() {   
        tdb_init();
    });
}

if(typeof tdbLoaded == 'undefined') {
    var tdbLoaded = true;

    if(typeof jQuery=='undefined') {
        var headTag = document.getElementsByTagName("head")[0];
        var jqTag = document.createElement('script');
        jqTag.type = 'text/javascript';
        jqTag.src = 'http://123link.vcdn.vn/statis/js/jquery-1.9.1.min.js';
        jqTag.onload = callTDB;
        headTag.appendChild(jqTag);
    } else {
        callTDB();
    }
}
