/*
* Smart Fixed Object - jQuery plugin for floating and fixed position panel
*
* Copyright (c) 2010 SonNguyen Ali
*
* Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
* Project home:
*   http://www.meta.vn
*
* Version:  1.0.0
*
*/
(function ($) {
    $.fn.makeFixed = function (params) {
        var elements = this;
        elements.each(function () {
            doMakeFixed(this.id, params);
        });
    };
})(jQuery);

getBottomPosition = function (e, params) {
    var B0 = 0;
    try {
        if (typeof (params) == "undefined" || typeof (params.bottom) == "undefined") {
            var p = (e).parent();
            if (p != null && typeof (p) != "undefined") {
                B0 = p.offset().top + p.height();
            }
        }
        else if (typeof (params.bottom) == "string") {
            var botId = params.bottom;
            if (botId.indexOf('#') == -1)
                botId = '#' + botId;
            B0 = $(botId).offset().top;
        }
        else {
            B0 = params.bottom;
        }
    } catch (ex) { }
    return B0;
}

doPositionSet = function (e, params, tryCount) {
    var B0 = getBottomPosition(e, params);
    if (B0 > 0) {
        var b = $(window).scrollTop() + $(window).height() - B0;
        if ($(window).scrollTop() > e.T0) {
            $(e).css("position", "fixed");
            $(e).css("width", e.W0);
            $(e).css("height", e.H0);
            $(e).css("left", e.L0);
            if (b >= 0) {
                if ($(window).scrollTop() + e.H0 >= B0) {
                    $(e).css("top", "");
                    $(e).css("bottom", Math.round(b) + 1);
                } else {
                    $(e).css("bottom", "");
                    $(e).css("top", "0px");
                }
            }
            else {
                if ($(window).scrollTop() + e.H0 >= B0) {
                    $(e).css("top", "");
                    $(e).css("bottom", 0);
                } else {
                    $(e).css("bottom", "");
                    $(e).css("top", "0px");
                }
            }
        }
        else {
            $(e).css("position", "static");
        }
    }
    if (tryCount > 0) {
        for (var i = 0; i < tryCount; i++) {
            window.setTimeout(function () { doPositionSet(e, params, 0); }, 100);
        }
    }
}

doDimesionSet = function (e) {
    e.T0 = $(e).offset().top;
    e.L0 = $(e).offset().left;
    e.H0 = $(e).height();
    //e.H0 = $(e).outerHeight();
    e.W0 = $(e).width();
}

doMakeFixed = function (id, params) {
    if (id.indexOf('#') != -1)
        id = id.replace('#', '');
    var e = document.getElementById(id);
    doDimesionSet(e);
    var B0X = getBottomPosition(e, params);

    $(window).bind("resize", function (event) {
        $(e).each(function () {
            $(e).css("position", "static");
            doDimesionSet(e);
            doPositionSet(e, params, 5);
        });
    });

    $(window).bind("scroll", function (event) {
        doPositionSet(e, params, 5);
    });
};