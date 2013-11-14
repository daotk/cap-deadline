/*------------------------------------------------------------------------------------------------------*/
var AD_TYPE_IMAGE = 1;
var AD_TYPE_TEXT = 2;
var AD_TYPE_FLASH = 3;
var AD_TYPE_HTML = 4;
var AD_TYPE_IFRAME = 4;
var AD_COUNT = 0;
var AD_EX_COUNT = 0;
var AD_SHARING_COUNT = 0;
var AD_POSITION_ORDER = -2;
var AD_POSITION_RANDOM_CHANGE = -1;
var AD_POSITION_RANDOM_BLINK = 1000;
var AD_POSITION_RANDOM_SHOW = 0;
var AD_ROOT_PATH = 'http://realclick.vn/client/';
var AD_BLANK_GIF = '/images/spacer.gif';
var AD_CLICK_PATH = 'http://realclick.vn/client/ck/';
var AD_THIRD_PARTY_CLICK_PATH = 'http://realclick.vn/client/click/';
var AD_IS_INSTALL = true;
var AD_CSS_CLASS = "__ad_spot";
var AD_DATA = new Array();
var __click = false;

function __add_banner(o) {
    //if (o && o.type && o.id && o.output) {
        AD_DATA[AD_DATA.length] = o;
    //}
}

function __load_banners() {
    var data = new String();
    if (AD_DATA.length > 0) {
        for (var i = 0; i < AD_DATA.length; i++) {
            var o = AD_DATA[i];
            data = data + '|' + o.type + '|' + o.id + '|' + o.output;
        }
        data = data.substring(1, data.length);
        document.write('<script type="text/javascript" src="/cache.aspx?_path=' + AD_ROOT_PATH + 'banner/&mod=lazy&data=' + data + '"></script>');
    }
}

/*Get dom object*/
function __getEL(eId) {
    return document.getElementById(eId);
};
/*Thiet lap duong dan goc*/
function __setRootPath(path) {
    if (path == '' || path == null) {
        AD_ROOT_PATH = '/';
    }
    else {
        AD_ROOT_PATH = path;
    }
    if (AD_ROOT_PATH.lastIndexOf('/') < (AD_ROOT_PATH.length - 1)) {
        AD_ROOT_PATH += '/';
    }
    AD_BLANK_GIF = AD_ROOT_PATH + 'glass.gif';
    AD_CLICK_PATH = AD_ROOT_PATH + 'glass.gif';
};
function __hostName() {
    var hst = location.host;
    if (hst == '' || hst == null) {
        return '';
    }
    else {
        return hst.toLowerCase();
    }
};
function __pathName() {
    var path = location.pathname;
    var i = path.lastIndexOf('/');
    if (i >= 0) {
        return path.substring(0, i);
    }
    else {
        return path;
    }
};
/*Url click cua ben thu 3*/
function __getThirdPartyClickLink(path, name, url) {
    if (path != '') {
        if (path.indexOf('?') >= 0) {
            return path + '&banner=' + name + '&from=' + escape(__hostName()) + '&path=' + escape(__pathName()) + '&url=' + escape(url);
        }
        else {
            return path + '?banner=' + name + '&from=' + escape(__hostName()) + '&path=' + escape(__pathName()) + '&url=' + escape(url);
        }
    }
    else {
        return url;
    }
};
/*Click Link for Banner Name*/
function __getClickLink(name) {
    if (AD_CLICK_PATH.indexOf('?') >= 0) {
        return AD_CLICK_PATH + '&domain=' + __hostName() + '&type=click&banner=' + name + '&res=' + screen.width + 'x' + screen.height;
    }
    else {
        return AD_CLICK_PATH + '?domain=' + __hostName() + '&type=click&banner=' + name + '&res=' + screen.width + 'x' + screen.height;
    }
};
function __onClick(name) {
    __getEL('MetaNET_Click').innerHTML = "<img src='" + __getClickLink(name) + "' border=0 width='1' height='1'/>";
};
/*View Link for Banner Name*/
function __getViewLink(name) {
	return AD_BLANK_GIF;
};
/*Neu khong phai la link*/
function IS_NO_LINK(url) {
    return (url == '' || url == '#' || url == 'javascript:void(0);' || url == 'about:blank' || typeof (url) == 'undefined');
};
/*Get 1 doi tuong quang cao tren site hien tai*/
function GET_ONE_AD(i) {
    return document.getElementById('MetaNET_ADV_NUMBER_' + i);
};
/*Get danh sach cac quang cao tren site*/
function GET_ALL_AD() {
    var arrADS = new Array();
    for (i = 1; i <= AD_COUNT; i++) {
        arrADS[length] = GET_ONE_AD(i);
    }
    return arrADS;
};
/*doc cookie*/
function __getCookie(key) {
    ckA = document.cookie.split(';');
    var res = '';
    for (var i = 0; i < ckA.length; i++) {
        p = ckA[i].split('=');
        p[0] = p[0].replace(/^\s+/g, "");
        if (p[0] == key) {
            return p[1];
            break;
        }
    }
    return res;
}
/*Ghi cookie*/
function __setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}
/*Xoa cookie*/
function eraseCookie(name) {
    __setCookie(name, "", -1);
}
function __setOpacity(el, op) {
    try {
        if (op > 100) op = 100;
        if (op < 1) op = op * 100;
        el.style.opacity = op / 100;
        el.style.filter = "alpha(opacity='" + op + "')";
    } catch (e) { }
}

function __IsNull(o) {
    return (typeof (o) == 'undefined' || o == null);
}

function __RepIfNull(rep, o) {
    if (typeof (o) == 'undefined' || o == null)
        return rep;
    else
        return o;
}

function __RepIfNullElse(rep, else_rep, o) {
    if (typeof (o) == 'undefined' || o == null)
        return rep;
    else
        return o;
}

/*Quang cao don - Single adobject*/
function MetaNET_AdObject(args) {
    var __rendered = 0;
    AD_COUNT++;
    this.__id = AD_COUNT;
    this.Id = 'MetaNET_ADV_NUMBER_' + AD_COUNT;
    this.name = __RepIfNull(this.Id, args['name']);
    this.imageUrl = __RepIfNull('', args['imageUrl']);
    this.linkUrl = __RepIfNull('#', args['linkUrl']);
    this.title = __RepIfNull('', args['title']);
    this.domain = __RepIfNull('', args['domain']);
    this.desc = __RepIfNull('', args['desc']);
    this.width = __RepIfNull(0, args['width']);
    this.height = __RepIfNull(0, args['height']);
    this.cssClass = __RepIfNullElse('', ' class=\'' + args['cssClass'] + '\'', args['cssClass']);
    this.style = __RepIfNullElse('', ' style=\'' + args['style'] + '\'', args['style']);
    this.target = __RepIfNull('_blank', args['target']);
    this.wmode = __RepIfNull('transparent', args['wmode']);
    this.onclick = __RepIfNull('', args['onclick']);
    this.__style = (this.style == '') ? '' : __RepIfNull('', args['style']);
    this.enableThirdPartyClick = __RepIfNull(false, args['enableThirdPartyClick']);
    this.thirdPartyClickUrl = __RepIfNull(AD_THIRD_PARTY_CLICK_PATH, args['thirdPartyClickUrl']);
    this.onMouseOut = __RepIfNull('', args['onMouseOut']);
    this.onMouseOver = __RepIfNull('', args['onMouseOver']);

    if (this.enableThirdPartyClick && this.thirdPartyClickUrl != '' && !IS_NO_LINK(this.linkUrl)) {
        this.linkUrl = __getThirdPartyClickLink(this.thirdPartyClickUrl, this.name, this.linkUrl);
    }
    if (__IsNull(args['adType'])) {
        var t = new String(this.imageUrl);
        t = t.toLowerCase();
        if (t.lastIndexOf('.swf') >= 0) {
            this.adType = AD_TYPE_FLASH;
        }
        else if ((t.lastIndexOf('.gif') >= 0)
				|| (t.lastIndexOf('.jpg') >= 0)
				|| (t.lastIndexOf('.png') >= 0)) {
            this.adType = AD_TYPE_IMAGE;
        }
        else if ((t.lastIndexOf('.htm') >= 0)
				|| (t.lastIndexOf('.asp') >= 0)
				|| (t.lastIndexOf('.php') >= 0)
				|| (t.lastIndexOf('.html') >= 0)
				|| (t.lastIndexOf('.aspx') >= 0)
				|| (t.lastIndexOf('.ashx') >= 0)) {
            this.adType = AD_TYPE_HTML;
        }
        else {
            this.adType = AD_TYPE_TEXT;
        }
    } else {
        this.adType = args["adType"];
    }
};
/*Hien thi quang cao*/
MetaNET_AdObject.prototype = {
    renderHTML: function () {
        var flashOK = true;
        var s = "";
        var click = (this.onclick == '') ? "onclick=\"__onClick('" + this.name + "')\"" : "onclick=\"__onClick('" + this.name + "');" + this.onclick + "\"";
        var mouseout = (this.onMouseOut == '') ? '' : ' onMouseOut="' + this.onMouseOut + '" ';
        var mouseover = (this.onMouseOver == '') ? '' : ' onMouseOver="' + this.onMouseOver + '" ';
        var trackview_added = false;

        if (this.adType == AD_TYPE_IMAGE) {
            if (IS_NO_LINK(this.linkUrl)) {
                s = "<div><img " + mouseover + " " + mouseout + " src='" + this.imageUrl + "' " + click + " width='" + this.width + "' height='" + this.height + "' border=0></div>";
            } else {
                s = "<div><a  " + mouseover + " " + mouseout + " href = '" + this.linkUrl + "' " + click + " target='" + this.target + "' id='" + this.Id + "' " + this.cssClass + this.style + ">" + "<img src='" + this.imageUrl + "' width='" + this.width + "' height='" + this.height + "' border=0></a></div>";
            }
        } else if (this.adType == AD_TYPE_FLASH) {
            if (flashOK) {
                if (IS_NO_LINK(this.linkUrl)) {
                    s = "<div  " + mouseover + " " + mouseout + "  style='width:" + this.width + "px; height:" + this.height + "px;' id='" + this.Id + "' " + click + ">" + "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' " + " codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' " + " width=" + this.width + " height=" + this.height + " id='" + this.Id + "_FLASH' align='middle'>" + " <param name='allowScriptAccess' value='sameDomain' />" + " <param name='movie' value='" + this.imageUrl + "'/>" + " <param name='wmode' value='" + this.wmode + "' />" + " <param name='linkUrl' value='" + this.linkUrl + "' />" + " <param name='quality' value='high' />" + "<embed src='" + this.imageUrl + "'" + " quality='high' width=" + this.width + " height=" + this.height + " id='" + this.Id + "_FLASH'" + " name='" + this.Id + "_FLASH'" + " align='middle' allowScriptAccess='sameDomain'" + " type='application/x-shockwave-flash'" + " wmode='" + this.wmode + "'" + " linkUrl='" + this.linkUrl + "'" + " pluginspage='http://www.macromedia.com/go/getflashplayer' />" + " </object></div>";
                } else {
                    trackview_added = true;
                    s = "<div style='width:" + this.width + "px; height:" + this.height + "px;'>" + "<div style='position:relative;width:" + this.width + "px; height:" + this.height + "px;' id='" + this.Id + "'>" + "<a  " + mouseover + " " + mouseout + "  href='" + this.linkUrl + "' " + click + " target='" + this.target + "'>" + "<div style='position:absolute; top:0px; left:0px;cursor:pointer;" + "width:" + this.width + "px; height:" + this.height + "px;z-index:1;display:block;background-color:Transparent'></div>" + "<img style='position:absolute; top:0px; left:0px;cursor:pointer;z-index:2' " + "src='" + __getViewLink(this.name) + "' border=0 width='" + this.width + "' height='" + this.height + "'/>" + "</a>" + "<div style='position:absolute; top:0px; left:0px;cursor:pointer;" + "width:" + this.width + "px; height:" + this.height + "px;z-index:1;background-color:transparent;" + this.__style + "' " + this.cssClass + ">" + "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' " + " codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' " + " width=" + this.width + " height=" + this.height + " id='" + this.Id + "_FLASH' align='middle'>" + " <param name='allowScriptAccess' value='sameDomain' />" + " <param name='movie' value='" + this.imageUrl + "'/>" + " <param name='wmode' value='" + this.wmode + "' />" + " <param name='linkUrl' value='" + this.linkUrl + "' />" + " <param name='quality' value='high' />" + "<embed src='" + this.imageUrl + "'" + " quality='high' width=" + this.width + " height=" + this.height + " id='" + this.Id + "_FLASH'" + " name='" + this.Id + "_FLASH'" + " align='middle' allowScriptAccess='sameDomain'" + " type='application/x-shockwave-flash'" + " wmode='" + this.wmode + "'" + " linkUrl='" + this.linkUrl + "'" + " pluginspage='http://www.macromedia.com/go/getflashplayer' />" + " </object></div></div></div>";
                }
            }
            else {
                if (IS_NO_LINK(this.linkUrl)) {
                    s = "<div><img " + mouseover + " " + mouseout + " src='" + this.imageUrl + ".gif' " + click + " width='" + this.width + "' height='" + this.height + "' border=0></div>";
                } else {
                    s = "<div><a  " + mouseover + " " + mouseout + " href = '" + this.linkUrl + "' " + click + " target='" + this.target + "' id='" + this.Id + "' " + this.cssClass + this.style + ">" + "<img src='" + this.imageUrl + ".gif' width='" + this.width + "' height='" + this.height + "' border=0></a></div>";
                }
            }
        } else if (this.adType == AD_TYPE_HTML) {
            s = "<div style='width:" + this.width + "px; height:" + this.height + "px;'>" +
			"<iframe style='width:" + this.width + "px; height:" + this.height + "px;' " +
			"height='" + this.height + "' frameborder='0' width='" + this.width + "' " +
			"scrolling='no' src='" + this.imageUrl + "' marginwidth='0' marginheight='0' " +
			"vspace='0' hspace='0' allowtransparency='true'></iframe></div>";            
        }
        else {
            var _lnk = "<a href = '" + this.linkUrl + "' " + click + "  target='" + this.target +"'>";
            s = '<div class="breview-box" ' + mouseover + ' ' + mouseout + ' id="'+this.Id+'">'+
                '<p class="adx-item adx-title">' + _lnk + this.title + '</a></p>' +
                '<p class="adx-item adx-domain">' + _lnk  + this.domain + '</a></p>' +
                '<div class="adx-body"><p class="adx-item adx-image">'+_lnk+'<img src="'+this.imageUrl+'" border="0" alt=""/></a></p>' +
                '<div class="adx-item adx-content">' + this.desc + '</div></div></div>';
        }

        if (!trackview_added)
            s += "<img style='position:absolute; top:0px; left:0px;z-index:1' " + "src='" + __getViewLink(this.name) + "' border='0' width='1' height='1'/>";

        if (!__click) {
            s += "<div name='MetaNET_Click' id='MetaNET_Click' style='font-size:0px;line-height:0px;position:absolute;top:0px;left:0px;z-index:2;width:1px;height:1px'></div>";
            __click = true;
        }
        __rendered = 1;
        return s;
    },
    show: function () {
        if (__rendered == 1) {
            var adDOMObj = __getEL(this.Id);
            adDOMObj.style.display = 'inline';
        } else {
            /*alert("[MetaNET_AdObject]:" + 'Khong the hien thi MetaNET_AdObject co ID=' + this.Id + ' do chua duoc Render');*/
        }
    },
    hide: function () {
        try {
            var adDOMObj = __getEL(this.Id);
            adDOMObj.style.display = 'none';
        } catch (e) { }
    },
    renderIn: function (domId) {
        var ee = __getEL(domId);
        if (ee) ee.innerHTML = this.renderHTML();
    },
    renderOut: function () {
        document.write(this.renderHTML());
    }
};
function MetaNET_ExAdObject(adPair) {
    var __rendered = 0;
    if (adPair.lenght = 2) {
        AD_EX_COUNT++;
        this.Id = 'MetaNET_EXADV_NUMBER_' + AD_COUNT;
        this.collapseAd = adPair[0];
        this.expandAd = adPair[1];
        this.widthMin = this.collapseAd.width;
        this.widthMax = this.expandAd.width;
        this.heightMin = this.collapseAd.height;
        this.heightMax = this.expandAd.height;
        this.mode = 0;
        this.showButtons = false;
        this.closeFunction = this.Id + '__close();';
        this.expandFunction = this.Id + '__expand();';
        this.collapseFunction = this.Id + '__collapse();';
        this.__interval = 5;
    } else {
        /*alert('[MetaNET_ExAdObject]:' + 'Khong the tao duoc  Expand Ad voi duy duy nhat mot hoa khong co MetaNET_AdObject!');*/
        return false;
    }
};
MetaNET_ExAdObject.prototype = {
    renderHTML: function () {
        var _width = this.widthMin;
        var _height = this.heightMin;
        if (this.mode == 1) {
            _width = this.widthMin;
            _height = this.heightMax;
        }
        if (this.showButtons == false) {
            //this.collapseAd.onclick = this.Id + '__expand();';
            this.collapseAd.onMouseOver = this.expandFunction;
            this.expandAd.onMouseOut = this.collapseFunction;
        }
        var s = "<div id='" + this.Id + "'><table cellpadding=0 cellspacing=0 border=0><tr><td valign=top id='" + this.Id + "_TD' width=" + _width + " height=" + _height + ">";
        if (this.mode == 1) {
            s += this.expandAd.renderHTML();
        } else {
            s += this.collapseAd.renderHTML();
        }
        s += "</td></tr></table>";
        if (this.showButtons == true) {
            if (this.mode == 1) {
                s += "<font face='arial,verdana,tahoma' size=1><div class='exAdBtnBar'><a class='expandAdBtn' id='" + this.Id + "__EXPAND' style='display:none' href='javascript:" + this.Id + "__expand();'>M&#7903; r&#7897;ng</a><a class='collapseAdBtn' id='" + this.Id + "__COLLAPSE' href='javascript:" + this.Id + "__collapse();'>Thu nh&#7887;</a>";
            } else {
                s += "<font face='arial,verdana,tahoma' size=1><div class='exAdBtnBar'><a class='expandAdBtn' id='" + this.Id + "__EXPAND' href='javascript:" + this.Id + "__expand();'>+</a><a class='collapseAdBtn' id='" + this.Id + "__COLLAPSE'  style='display:none' href='javascript:" + this.Id + "__collapse();'>-</a>";
            }
            s += " | <a class='closeAdBtn' id='" + this.Id + "__CLOSE' href='javascript:" + this.Id + "__close();'>x</a></div>";
            s += "</div></font>";
        } else {
            if (this.mode == 1) {
                s += "<font face='arial,verdana,tahoma' size=1><div style='display:none' class='exAdBtnBar'><a class='expandAdBtn' id='" + this.Id + "__EXPAND' style='display:none' href='javascript:" + this.Id + "__expand();'>M&#7903; r&#7897;ng</a><a class='collapseAdBtn' id='" + this.Id + "__COLLAPSE' href='javascript:" + this.Id + "__collapse();'>Thu nh&#7887;</a>";
            } else {
                s += "<font face='arial,verdana,tahoma' size=1><div style='display:none' class='exAdBtnBar'><a class='expandAdBtn' id='" + this.Id + "__EXPAND' href='javascript:" + this.Id + "__expand();'>+</a><a class='collapseAdBtn' id='" + this.Id + "__COLLAPSE'  style='display:none' href='javascript:" + this.Id + "__collapse();'>-</a>";
            }
            s += " | <a class='closeAdBtn' id='" + this.Id + "__CLOSE' href='javascript:" + this.Id + "__close();'>x</a></div>";
            s += "</div></font>";
        }
        s += "<div id='" + this.Id + "_HIDDEN' style='display:none; visiblity:hidden; z-index:-1000;'>";
        if (this.mode == 1) {
            s += this.collapseAd.renderHTML();
        } else {
            s += this.expandAd.renderHTML();
        }
        s += "</div>";
        var s2 = '';
        s2 += "<scr" + "ipt type='text/javascript'>";
        s2 += "var " + this.Id + "__timeID=0;";
        s2 += "var " + this.Id + "__ModeID=0;";
        s2 += "function " + this.Id + "__expand(){";
        s2 += "var adDOMObj = __getEL('" + this.Id + "_TD');";
        s2 += "__getEL('" + this.Id + "__EXPAND').style.display='none';";
        s2 += "__getEL('" + this.Id + "__COLLAPSE').style.display='inline';";
        s2 += "if(adDOMObj.height < " + this.heightMax + "){";
        s2 += "    adDOMObj.height = parseInt(adDOMObj.height) + 2;";
        s2 += "}";
        s2 += "else if(adDOMObj.height > " + this.heightMax + "){";
        s2 += "    adDOMObj.height=" + this.heightMax + ";";
        s2 += "}";
        s2 += "if(adDOMObj.width < " + this.widthMax + "){";
        s2 += "    adDOMObj.width = parseInt(adDOMObj.width) + 2;";
        s2 += "}";
        s2 += "else if(adDOMObj.width > " + this.widthMax + "){";
        s2 += "    adDOMObj.width=" + this.widthMax + ";";
        s2 += "}";
        s2 += "__setOpacity(adDOMObj,100-parseInt(adDOMObj.height*100/" + this.heightMax + "));";
        s2 += "if(adDOMObj.width>=" + this.widthMax + " && adDOMObj.height>=" + this.heightMax + "){";
        s2 += "    try{";
        s2 += "        window.clearTimeout(" + this.Id + "__timeID);";
        s2 += "        var " + this.Id + "__adDOMObj_H = __getEL('" + this.Id + "_HIDDEN');";
        s2 += "        var __t = adDOMObj.innerHTML;";
        s2 += "        adDOMObj.innerHTML = " + this.Id + "__adDOMObj_H.innerHTML;";
        s2 += "		   __setOpacity(adDOMObj,100);";
        s2 += "        " + this.Id + "__adDOMObj_H.innerHTML = __t;";
        s2 += "        " + this.Id + "__ModeID=1;";
        s2 += "        return;";
        s2 += "    }catch(e){}";
        s2 += "}else{";
        s2 += "    " + this.Id + "__timeID = window.setTimeout('" + this.Id + "__expand()',5);";
        s2 += "}";
        s2 += "return;";
        s2 += "}";
        s2 += "function " + this.Id + "__collapse(){";
        s2 += "var adDOMObj = __getEL('" + this.Id + "_TD');";
        s2 += "__getEL('" + this.Id + "__EXPAND').style.display='inline';";
        s2 += "__getEL('" + this.Id + "__COLLAPSE').style.display='none';";
        s2 += "if(" + this.Id + "__ModeID==1){";
        s2 += "var " + this.Id + "__adDOMObj_H = __getEL('" + this.Id + "_HIDDEN');";
        s2 += "var __t = adDOMObj.innerHTML;";
        s2 += "adDOMObj.innerHTML = " + this.Id + "__adDOMObj_H.innerHTML;";
        s2 += "" + this.Id + "__adDOMObj_H.innerHTML = __t;";
        s2 += "}";
        s2 += "" + this.Id + "__ModeID=0;";
        s2 += "if(adDOMObj.height > " + this.heightMin + "){";
        s2 += "    adDOMObj.height = parseInt(adDOMObj.height) - 2;";
        s2 += "}";
        s2 += "else if(adDOMObj.height < " + this.heightMin + "){";
        s2 += "    adDOMObj.height=" + this.heightMin + ";";
        s2 += "}";
        s2 += "if(adDOMObj.width > " + this.widthMin + "){";
        s2 += "    adDOMObj.width = parseInt(adDOMObj.width) - 2;";
        s2 += "}";
        s2 += "else if(adDOMObj.width < " + this.widthMin + "){";
        s2 += "    adDOMObj.width=" + this.widthMin + ";";
        s2 += "}";
        s2 += "__setOpacity(adDOMObj,parseInt(" + this.heightMin + "*100/adDOMObj.height));";
        s2 += "if(adDOMObj.width<=" + this.widthMin + " && adDOMObj.height<=" + this.heightMin + "){";
        s2 += "    try{";
        s2 += "        window.clearTimeout(" + this.Id + "__timeID);";
        s2 += "		   __setOpacity(adDOMObj,100);";
        s2 += "        return;";
        s2 += "    }catch(e){}";
        s2 += "}else{";
        s2 += "    " + this.Id + "__timeID = window.setTimeout('" + this.Id + "__collapse()',5);";
        s2 += "}";
        s2 += "return;";
        s2 += "}";
        s2 += "function " + this.Id + "__close(){";
        s2 += "var adDOMObj = __getEL('" + this.Id + "');";
        s2 += "adDOMObj.style.display='none';";
        s2 += "}";
        s2 += "</scr" + "ipt>";
        document.write(s2);
        __rendered = 1;
        return s;
    },
    show: function () {
        if (__rendered == 1) {
            var adDOMObj = __getEL(this.Id);
            adDOMObj.style.display = 'inline';
        } else { }
    },
    hide: function () {
        try {
            var adDOMObj = __getEL(this.Id);
            adDOMObj.style.display = 'none';
        } catch (e) { }
    },
    renderIn: function (domId) {
        var ee = __getEL(domId);
        if (ee) ee.innerHTML = this.renderHTML();
    },
    renderOut: function () {
        document.write(this.renderHTML());
    }
};
function MetaNET_SharingAdObject(interval, agrs) {
    var __rendered = 0;
    AD_SHARING_COUNT++;
    this.Id = "MetaNET_SHARING_AD_NUMBER_" + AD_SHARING_COUNT;
    this.adObjects = new Array();
    var __totalTime = 0;
    this.width = 'auto';
    this.height = 'auto';
    for (i = 0; i < agrs.length; i++) {
        this.adObjects[i] = agrs[i];
    }
    this.interval = interval;
    this.length = agrs.length;
    this.currentAdId = 0;
    this.direction = 'DOC';
    this.padding = '0';

};
MetaNET_SharingAdObject.prototype = {
    renderHTML: function () {
        var s = ''; var i = 0;
        if (this.length == 0) {
            /*alert('MetaNET_SharingAdObject phai it nhat mot banner');*/
            return '';
        }
        if (this.interval > 0) {
            s += "<div id='" + this.Id + "'>";
            if (this.length > 1) {
                for (i = 0; i < this.length; i++) {
                    s += "<div id='" + this.Id + "_SLIDE_" + i + "' style='display:none;width:" + this.adObjects[i].width + "px;height:" + this.adObjects[i].height + "px'>";
                    s += this.adObjects[i].renderHTML();
                    s += "</div>";
                }
                s += "<scr" + "ipt type='text/javascript'>";
                s += "" + this.Id + "__play();";
                s += "</scr" + "ipt>";
                var s2 = '';
                s2 += "<scr" + "ipt type='text/javascript'>";
                s2 += "var " + this.Id + "__timeID=0;";
                s2 += "var " + this.Id + "__index=" + this.currentAdId + ";";
                s2 += "var " + this.Id + "__old_index=" + this.currentAdId + ";";
                s2 += "function " + this.Id + "__play(){";
                s2 += " var adDOMObj = __getEL('" + this.Id + "');";
                s2 += " " + this.Id + "__old_index = " + this.Id + "__index;";
                s2 += " " + this.Id + "__index++;";
                s2 += " if(" + this.Id + "__index >= " + this.length + " ) " + this.Id + "__index = 0;";
                s2 += " __getEL('" + this.Id + "_SLIDE_' + " + this.Id + "__old_index).style.display='none';";
                s2 += " __getEL('" + this.Id + "_SLIDE_' + " + this.Id + "__index).style.display='inline';";
                s2 += " " + this.Id + "__timeID=window.setTimeout('" + this.Id + "__play()'," + this.interval + ");";
                s2 += " return;";
                s2 += "}";
                s2 += "</scr" + "ipt>";
                document.write(s2)
            }
            s += "</div>";
            __rendered = 1;
            return s
        } else if (this.interval < 0) {
            var _direct = this.direction.toLowerCase();
            if (_direct == 'doc' || _direct == 'vertical' || _direct == 'd' || _direct == '0')
                _direct = 'v';
            else if (_direct == 'n' || _direct == 'horizontal' || _direct == 'ngang' || _direct == '1')
                _direct = 'h';

            s += "<div id='" + this.Id + "'>";
            s += '<div class="adx-zone">';
            if (_direct == 'h') {
                s += '<div class="adx-row">';
                for (i = 0; i < this.length; i++) {
                    s += '<div class="adx-cell" style="width:' + this.adObjects[i].width + 'px; height:' + this.adObjects[i].height + 'px">';
                    s += this.adObjects[i].renderHTML();
                    s += '</div>';
                    if (this.padding > 0 && i < this.length - 1) s += '<div style="width:' + this.padding + 'px" class="adx-sep-h"></div>';
                }
                s += '</div>';
            }
            else if (_direct == 'v') {
                for (i = 0; i < this.length; i++) {
                    s += '<div class="adx-row"><div class="adx-cell" style="width:' + this.adObjects[i].width + 'px; height:' + this.adObjects[i].height + 'px">';
                    s += this.adObjects[i].renderHTML();
                    s += '</div></div>';
                    if (this.padding > 0 && i < this.length - 1) s += '<div style=":height:' + this.padding + 'px" class="adx-sep-v"></div>';
                }
            }
            s += '</div>';
            s += "</div>";
            __rendered = 1;
            return s
        } else {
            var j = this.currentAdId;
            s += '<div id="' + this.Id + '" style="width:' + this.adObjects[j].width + 'px; height:' + this.adObjects[j].height + 'px">';
            s += this.adObjects[this.currentAdId].renderHTML();
            s += "</div>"; __rendered = 1;
            return s
        }
    },
    show: function () {
        if (__rendered == 1) {
            var adDOMObj = __getEL(this.Id); adDOMObj.style.display = 'inline'
        } else { }
    },
    hide: function () {
        try {
            var adDOMObj = __getEL(this.Id); adDOMObj.style.display = 'none'
        } catch (e) { }
    },
    renderIn: function (domId) {
        var ee = __getEL(domId);
        if (ee) ee.innerHTML = this.renderHTML();
    },
    renderOut: function () {
        document.write(this.renderHTML())
    }
};

/*------------------------------------------------------------------------------------*/
function MetaNET_SharingAdObject2(interval, agrs) {
    var __rendered = 0;
    AD_SHARING_COUNT++;
    this.Id = "MetaNET_SHARING_AD_NUMBER_" + AD_SHARING_COUNT;
    this.adObjects = new Array();
    var __totalTime = 0;
    for (i = 0; i < agrs.length; i++) {
        this.adObjects[i] = agrs[i];
    }
    this.interval = interval;
    this.length = agrs.length;
    if (__getCookie(this.Id) == '' || __getCookie(this.Id) == null) {
        this.currentAdId = Math.floor(Math.random() * (this.length + 1));
    }
    else {
        this.currentAdId = parseInt(__getCookie(this.Id)) + 1;
    }
    if (this.currentAdId >= this.length) this.currentAdId = 0;
    __setCookie(this.Id, this.currentAdId, 1);
    this.direction = 'DOC';
    this.padding = '0';
    this.width = 'auto';
    this.height = 'auto';

    var _direct = this.direction.toLowerCase();
    if (_direct == 'doc' || _direct == 'vertical' || _direct == 'd' || _direct == '0') {
        if (this.padding = '0') this.padding = '3';
    }
    else if (_direct == 'n' || _direct == 'horizontal' || _direct == 'ngang' || _direct == '1') {
        if (this.padding = '0') this.padding = '3';
    }
};
/*------------------------------------------------------------------------------------*/
MetaNET_SharingAdObject2.prototype = {
    renderHTML: function () {
        var s = ''; var i = 0;
        if (this.length == 0) {
            /*alert('MetaNET_SharingAdObject phai co it nhat mot banner');*/
            return '';
        }
        if (this.interval > 0) {
            if (this.adObjects[0].width > 0 && this.adObjects[0].height > 0) {
                s += "<div id='" + this.Id + "' style='width:" + this.adObjects[0].width + "px;height:" + this.adObjects[0].height + "px'>";
            } else {
                s += "<div id='" + this.Id + "'>";
            }
            s += "<div style='position:relative;height:auto;width:auto;'>";
            if (this.length > 1) {
                for (i = 0; i < this.length; i++) {
                    s += "<div id='" + this.Id + "_SLIDE_" + i + "' style='position:absolute;top:0px;left:0px;"+((this.currentAdId==i)?"":"display:none;")+"width:" + this.adObjects[i].width + "px;height:" + this.adObjects[i].height + "px'>";
                    s += this.adObjects[i].renderHTML();
                    s += "</div>";
                }				
				var self = this;
				self._timeId = 0;
				self._index = this.currentAdId;
				self._old_index = 0;
				self._time_id = 0;
				self._play = function(){					
					self._old_index = self._index;
					self._index = this._index + 1;
					if(self._index >= self.length) self._index = 0;
					try{
						__getEL(self.Id + '_SLIDE_' + self._index).style.display = '';
						__getEL(self.Id + '_SLIDE_' + self._old_index).style.display = 'none';						
					}
					catch(e){}
					window.setTimeout(function(){self._play();},self.interval);					
				}
				self._play();				
            }
            s += "</div></div>";
            __rendered = 1;
            return s
        } else if (this.interval < 0) {
            var _direct = this.direction.toLowerCase();
            if (_direct == 'doc' || _direct == 'vertical' || _direct == 'd' || _direct == '0') {
                _direct = 'v';
            }
            else if (_direct == 'n' || _direct == 'horizontal' || _direct == 'ngang' || _direct == '1') {
                _direct = 'h';
            }
			var _max = this.length;
			if(_max > 4) _max = 4;
            s += "<div id='" + this.Id + "'>";
            var j = this.currentAdId;
            s += '<div class="adx-zone">';
            if (_direct == 'h') {
                s += '<div class="adx-row">';
                for (i = 0; i < _max; i++) {
                    if (this.adObjects[j].width > 0 && this.adObjects[j].height > 0) {
                        s += '<div class="adx-cell" style="width:' + this.adObjects[j].width + 'px; height:' + this.adObjects[j].height + 'px">';
                    } else {
                        s += '<div class="adx-cell">';
                    }
                    s += this.adObjects[j].renderHTML();
                    s += '</div>';
                    if (this.padding > 0 && i < _max - 1) {
                        s += '<div style="width:' + this.padding + '" class="adx-sep-v"></div>';
                    }
                    j++;
                    if (j >= this.length) { j = 0; }
                }
                s += '</div>';
            }
            else if (_direct == 'v') {
                for (i = 0; i < _max; i++) {
                    if (this.adObjects[j].width > 0 && this.adObjects[j].height > 0) {
                        s += '<div class="adx-row"><div class="adx-cell" style="width:' + this.adObjects[j].width + 'px; height:' + this.adObjects[j].height + 'px">';
                    } else {
                        s += '<div class="adx-row"><div class="adx-cell" >';
                    }
                    s += this.adObjects[j].renderHTML();
                    s += '</div></div>';
                    if (this.padding > 0 && i < _max - 1) {
                        s += '<div  style="height:' + this.padding + '" class="adx-sep-h"></div>';
                    }
                    j++;
                    if (j >= this.length) { j = 0; }
                }
            }
            s += '</div>';
            s += "</div>";
            __rendered = 1;
            return s
        } else {
            var j=this.currentAdId;
            if (this.adObjects[j].width > 0 && this.adObjects[j].height > 0) {
                s += '<div id="' + this.Id + '" style="width:' + this.adObjects[j].width + 'px; height:' + this.adObjects[j].height + 'px">';
            } else {
                s += "<div id='" + this.Id + "'>";
            }
            s += this.adObjects[j].renderHTML();
            s += "</div>"; __rendered = 1;
            return s
        }
    },
    /*hien thi quang cao*/
    show: function () {
        if (__rendered == 1) {
            var adDOMObj = __getEL(this.Id);
            adDOMObj.style.display = 'inline';
        } else { }
    },
    /*an quang cao*/
    hide: function () {
        try {
            var adDOMObj = __getEL(this.Id);
            adDOMObj.style.display = 'none';
        } catch (e) {
            /*alert(e.message);*/
        }
    },
    renderIn: function (domId) {
        var ee = __getEL(domId);
        if (ee) ee.innerHTML = this.renderHTML();
    },
    renderOut: function () {
        document.write(this.renderHTML());
    }
};
/*ham hien thi mot banner*/
function showAds(width, height, imageUrl, linkUrl) {
    var adObj = new MetaNET_AdObject({
        'imageUrl': imageUrl,
        'linkUrl': linkUrl,
        'width': width,
        'height': height
    });
    adObj.renderOut();
};
/*ham hien thi Interval sharing banner*/
function showSharingAds(interval, width, height, image_link) {
    var a = image_link.split('|');
    var adArray = new Array();
    var b;
    for (var i = 0; i < a.length; i++) {
        b = a[i].split('->');
        adArray[i] = new MetaNET_AdObject({
            'imageUrl': b[0],
            'linkUrl': b[1],
            'width': width,
            'height': height
        });
    }
    var sadArray = new MetaNET_SharingAdObject(interval, adArray);
    sadArray.renderOut();
};
/*ham hien thi Expanding banner*/
function showExpandAds(width1, height1, width2, height2, image1, image2, link) {
    var ad = MetaNET_ExAdObject(new Array(new MetaNET_AdObject({
        'imageUrl': image1,
        'linkUrl': link,
        'width': width1,
        'height': height1
    }), new MetaNET_AdObject({
        'imageUrl': image2,
        'linkUrl': link,
        'width': width2,
        'height': height2
    })));
    ad.renderOut();
};


var AD_BG_START = false;
var MetaNET_BgAds_Settings = {
    fixedType: 'top',
    centerWidth: 1000,
    leftOffset: 1,
    rightOffset: 1,
    topOffset: 1,
    bottomOffset: 1,
    zIndex: 100,
    isFixed: true,
    bgColor: '',
    height: 0,
    leftBannerId: 'BG_leftBanner',
    rightBannerId: 'BG_rightBanner'
}

MetaNET_BgAds = function (leftAd, rightAd, set) {
    if (leftAd == null && rightAd == null)
        return;
    var default_settings = MetaNET_BgAds_Settings;
    if (set == null || typeof (set) == 'undefined') {
        set = default_settings;
    }
    else {
        if (set.fixedType == null || typeof (set.fixedType) == 'undefined') set.fixedType = default_settings.fixedType;
        if (set.centerWidth == null || typeof (set.centerWidth) == 'undefined') set.centerWidth = default_settings.centerWidth;
        if (set.leftOffset == null || typeof (set.leftOffset) == 'undefined') set.leftOffset = default_settings.leftOffset;
        if (set.rightOffset == null || typeof (set.rightOffset) == 'undefined') set.rightOffset = default_settings.rightOffset;
        if (set.topOffset == null || typeof (set.topOffset) == 'undefined') set.topOffset = default_settings.topOffset;
        if (set.bottomOffset == null || typeof (set.bottomOffset) == 'undefined') set.bottomOffset = default_settings.bottomOffset;
        if (set.zIndex == null || typeof (set.zIndex) == 'undefined') set.zIndex = default_settings.zIndex;
        if (set.isFixed == null || typeof (set.isFixed) == 'undefined') set.isFixed = default_settings.isFixed;
        if (set.bgColor == null || typeof (set.bgColor) == 'undefined') set.bgColor = default_settings.bgColor;
        if (set.leftBannerId == null || typeof (set.leftBannerId) == 'undefined') set.leftBannerId = default_settings.leftBannerId;
        if (set.rightBannerId == null || typeof (set.rightBannerId) == 'undefined') set.rightBannerId = default_settings.rightBannerId;
    }

    var str_align = "top:0px";
    if (set.fixedType == "bottom") str_align = "bottom:" + set.bottomOffset + "px";
    var BANNER_LEFT_HTML = '<div style="position:relative;width:100%;height:100%;display:block"><div style="position:absolute;right:' + set.rightOffset + 'px;' + str_align + '">' + (leftAd == null ? '' : leftAd.renderHTML()) + '</div></div>';
    var BANNER_RIGHT_HTML = '<div style="position:relative;width:100%;height:100%;display:block"><div style="position:absolute;left:' + set.leftOffset + 'px;' + str_align + '">' + (rightAd == null ? '' : rightAd.renderHTML()) + '</div></div>';

    //alert(BANNER_LEFT_HTML);

    var BANNER_LEFT_ID = set.leftBannerId;
    var BANNER_RIGHT_ID = set.rightBannerId;

    var CENTER_WIDTH = set.centerWidth;
    var BODY_WIDTH = $(window).width();
    var BODY_HEIGHT = set.height == 0 ? $(window).height() : set.height;
    var LEFT_OFFSET = set.leftOffset;
    var RIGHT_OFFSET = set.rightOffset;
    var Z_INDEX = set.zIndex;
    var TOP_OFFSET = set.topOffset;
    var IS_FIXED = set.isFixed;
    var LEFT_BG = '';
    var RIGHT_BG = '';
    var BG_COLOR = set.bgColor;
    var BannerWidth = (BODY_WIDTH - CENTER_WIDTH) / 2;

    var _addLeft = false;
    var _addRight = false;

    var leftBanner = document.createElement('div');
    var rightBanner = document.createElement('div');

    if (document.getElementById(BANNER_LEFT_ID)) {
        leftBanner = document.getElementById(BANNER_LEFT_ID);
        _addLeft = true;
    }

    if (document.getElementById(BANNER_RIGHT_ID)) {
        rightBanner = document.getElementById(BANNER_RIGHT_ID);
        _addRight = true;
    }

    if (BG_COLOR != '') {
        $('body').css('background-color', BG_COLOR);
    }

    if (BODY_WIDTH <= CENTER_WIDTH + 100) {
        $(leftBanner).css('display', 'none');
        $(rightBanner).css('display', 'none');
    } else {
        $(leftBanner).css('display', '');
        $(rightBanner).css('display', '');
    }
    if ($.browser.msie && $.browser.version.substr(0, 1) < 7) {
        IS_FIXED = false;
    }
    if (IS_FIXED) {
        $(leftBanner).css('position', 'fixed');
        $(rightBanner).css('position', 'fixed');
    } else {
        $(leftBanner).css('position', 'absolute');
        $(rightBanner).css('position', 'absolute');
    }

    /*if (set.fixedType == 'top') {
    $(leftBanner).css('top', TOP_OFFSET);
    $(rightBanner).css('top', TOP_OFFSET);
    } else {
    $(leftBanner).css('bottom', set.bottomOffset);
    $(rightBanner).css('bottom', set.bottomOffset);
    }*/


    $(leftBanner).css('top', '0')
        .css('left', '0')
        .css('height', BODY_HEIGHT)
        .css('width', BannerWidth)
        .css('background', BG_COLOR)
        .css('overflow', 'hidden').attr('id', BANNER_LEFT_ID);

    $(rightBanner).css('top', '0')
        .css('right', '0')
        .css('height', BODY_HEIGHT)
        .css('width', BannerWidth)
        .css('background', BG_COLOR)
        .css('overflow', 'hidden').attr('id', BANNER_RIGHT_ID);

    if (!_addLeft) $(leftBanner).appendTo('body');
    if (!_addRight) $(rightBanner).appendTo('body');

    if (!AD_BG_START) {
        $(leftBanner).append(BANNER_LEFT_HTML);
        $(rightBanner).append(BANNER_RIGHT_HTML);
    }
    AD_BG_START = true;
}

MetaNET_BgAds2 = function (arrs, set) {
    if (arrs.length > 2) {
        var cookieName = '__BGADS_'
        this.currentAdId = 0;
        if (__getCookie(cookieName) == '' || __getCookie(cookieName) == null) {
            this.currentAdId = Math.floor(Math.random() * (arrs.length / 2));
        }
        else {
            this.currentAdId = parseInt(__getCookie(cookieName)) + 1;
        }
        if (this.currentAdId >= (arrs.length / 2)) this.currentAdId = 0;
        __setCookie(cookieName, this.currentAdId, 1);


        MetaNET_BgAds(arrs[this.currentAdId * 2], arrs[this.currentAdId * 2 + 1], set);
    } else {
        MetaNET_BgAds(arrs[0], arrs[1], set);
    }
}