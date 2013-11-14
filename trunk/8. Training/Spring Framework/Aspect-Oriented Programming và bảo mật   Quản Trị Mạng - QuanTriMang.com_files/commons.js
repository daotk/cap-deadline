function openPopUp(width, height, url, target) {
    return window.open(url, target, 'toolbar=0,location=0, directories=0, status=0, menubar=0, scrollbars=1, resizable=0, width=' + width + ', height=' + height + ', left=' + (screen.width - width) / 2 + ', top=' + (screen.height - height) / 2);
}
function openPopUp2(width, height, url, target) {
    return window.open(url, target, 'toolbar=0,location=0, directories=0, status=0, menubar=0, scrollbars=0, resizable=0, width=' + width + ', height=' + height + ', left=' + (screen.width - width) / 2 + ', top=' + (screen.height - height) / 2);
}
function popWin() {
    return openPopUp(550, 400, 'about:blank', '__popWin');
}
function popPrint() {
    var width = 550; var height = 400;
    return window.open("about:blank", '__popPrint', 'toolbar=0,location=0, directories=0, status=0, menubar=0, scrollbars=0, resizable=0, width=' + width + ', height=' + height + ', left=' + (screen.width - width) / 2 + ', top=' + (screen.height - height) / 2);

}
function op_m_i(url) {
    openPopUp(392, 450, 'about:blank', '_pimage');
}
function printO(obj) {
    obj.focus();
    obj.print();
}

function comment_window() {
    openPopUp(550, 530, 'about:blank', '_comment')
}
function rateover(o, r) {
    var id = parseInt(o.id.replace('dorate', ''));
    for (var i = 1; i <= id; i++) {
        document.getElementById('dorate' + i).src = '/images/rate/ra.gif';
    }
}
function rateout(o, r) {
    for (var i = 1; i <= 5; i++) {
        if (i <= r)
            document.getElementById('dorate' + i).src = '/images/rate/r1.gif';
        else
            document.getElementById('dorate' + i).src = '/images/rate/r0.gif'
    }
}

function ajax_page(url, containerid) {
    var page_request = false
    if (window.XMLHttpRequest) // if Mozilla, Safari etc
        page_request = new XMLHttpRequest()
    else if (window.ActiveXObject) { // if IE
        try {
            page_request = new ActiveXObject("Msxml2.XMLHTTP")
        }
        catch (e) {
            try {
                page_request = new ActiveXObject("Microsoft.XMLHTTP")
            }
            catch (e) { }
        }
    }
    else
        return false;

    document.getElementById(containerid).innerHTML = '<img src="/images/loading14.gif" align="absmiddle"/>'//loading.. text
    page_request.onreadystatechange = function () {
        load_page(page_request, containerid)
    }

    var cache_clear_param = (url.indexOf("?") != -1) ? "&" + new Date().getTime() : "?" + new Date().getTime();
    page_request.open('GET', url + cache_clear_param, true);
    page_request.send(null);

}

function load_page(page_request, containerid) {
    if (page_request.readyState == 4 && (page_request.status == 200 || window.location.href.indexOf("http") == -1))
        document.getElementById(containerid).innerHTML = page_request.responseText
    //window.location.href.indexOf("http")==-1 : Not remote site
}

function dorate(id, point, sid) {
    ajax_page('/backend/rating.aspx?news_id=' + id + "&point=" + point + "&sid=" + sid, 'rating_pad');
}
function badReport(id) {
    ajax_page('/backend/CommentBadReport.aspx?id=' + id, 'cmt_bad_' + id);
    alert('Cảm ơn bạn đã thông báo cho chúng tôi');
}
function time_params() {
    var a = new Date();
    var ms = a.getMilliseconds();
    var s = a.getSeconds();
    var mn = a.getMinutes();
    var h = a.getHours();
    var d = a.getDay();
    var m = a.getMonth();
    var y = a.getFullYear();
    var t = y + '_' + m + '_' + d + '_' + h + '_' + mn + '_' + s + '_' + ms;
    return t;
}

function counter(id) {
    document.write('<img src="/backend/counter.ashx?news_id=' + id + '&sid=' + time_params() + '" width="1" height="1" border="0" />');
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate)
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return null
}

function checkCookie() {
    username = getCookie('username')
    if (username != null)
    { alert('Welcome again ' + username + '!') }
    else
    {
        username = prompt('Please enter your name:', "")
        if (username != null && username != "") {
            setCookie('username', username, 365)
        }
    }
}

function addfav() {
    if (window.sidebar) {
        window.sidebar.addPanel(document.title, location.href, "");
    } else if (window.external) { // IE Favorite
        window.external.AddFavorite(location.href, document.title);
    }
    else if (window.opera && window.print) {
        return true;
    }
    else {
        alert("Chức năng này không được hỗ trợ cho trình duyệt bạn đang sử dụng!");
    }

}

function gotoRef(url) {
    var _ref = "returnUrl=" + escape(location.href);
    _ref = (url.indexOf("?") != -1) ? "&" + _ref : "?" + _ref;
    location.href = url + _ref;
}

//Get position {top,left} of html element
function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
//Set pos of an element to other element
function setOverEL0(frId, toId) {
    var src = $('#' + toId);
    var dest = $('#' + frId);

    src.height(dest.height());
    src.width(dest.width());
    var p = src.position();
    dest.offset({ top: p.top, left: p.left });
}
function setOverEL(frId, toId) {
    var src = $('#' + toId);
    var dest = $('#' + frId);

    src.height(dest.height());
    src.width(dest.width());
    var p = src.position();
    dest.offset({ top: p.top, left: p.left });

    $(window).resize(function () {
        setOverEL0(frId, toId);
    });
}
$.getScript("http://s7.addthis.com/js/250/addthis_widget.js#username=ducsduyen&domready=1");
$(function () {

    if ($(".page-article #comments").length > 0) {
        $(".page-article #comments").html('<div class="fb-comments" data-href="http://www.quantrimang.com.vn' + location.pathname + '" data-width="650" data-num-posts="10"></div>');
        (function (d, s, id) {
            $("body").append('<div id="fb-root"></div>');
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/vi_VN/all.js#xfbml=1&appId=265611626917890";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        $(".page-article ul.paging").quickPager();
    }

    /*active tab*/
    var bhref = $(".News_Detail .tl .tr .tc a:nth-child(3)").attr("href");
    if (!bhref) { bhref = location.pathname }
    if (bhref.length > 1 && bhref.toLowerCase() != "/thietbiso" && bhref.toLowerCase() != "/thietbiso/") {
        var $li = $('ul#topnav a[href*="' + bhref + '"]').parents("ul#topnav>li");
        if ($li.length > 0) {
            $('ul#topnav>li').removeClass("on");
            $li.addClass("on");
        }
    }
});