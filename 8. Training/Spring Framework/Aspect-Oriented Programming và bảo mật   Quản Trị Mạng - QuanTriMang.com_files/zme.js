if (typeof zmoa_written == 'undefined') {
    function getCookie(c_name) {
        var str_cookie = document.cookie;
        var cookies = str_cookie.split(';');
        for(var i=0;i<cookies.length;i++) {
            var pair = cookies[i].split('=');
            if (pair[0].indexOf(c_name) >=0 && pair[1] != null) {
                return pair[1];
            }
        }
        return null;
    }
    document.write("<script type='text/javascript' src='http://static.me.zing.vn/zmoa/js/zmCore-1.54.min.js'></sc" + "ript>");
    document.write("<script type='text/javascript' src='http://static.me.zing.vn/zmoa/js/zm.xcall-1.15.min.js'></sc" + "ript>");
    document.write("<script type='text/javascript' src='http://123link.vcdn.vn/statis/js/zmoa-g3-1.00.min.js' charset='utf-8'></sc" + "ript>");
    document.write("<div class='zmoa-up' id='zmoa-holder' data-site='delivery.ad.zing.vn' data-page='zingme' data-app='ztu_g3'></div>");
    document.write("<img id='oatforward' src='' width='1px' height='1px'/>");
    var script = "<script>";
    script += "var r = Math.floor(Math.random()*99999999999);";
    script += "var src = 'http://cdb.ad.zing.vn/zmoa/zmoa.php?r=' + r;";
    var zmoat = getCookie('zmoat');
    if (zmoat != null) {
        script += "src += '&oat=" + zmoat + "';";
    }
    script += "document.getElementById('oatforward').src = src;";
    script += "</scr" + "ipt>";
    document.write(script);
    var zmoa_written = true;
}