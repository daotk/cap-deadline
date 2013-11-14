$(document).ready(function () {
    var timeoutId, cleartimeout;
    var el = $("ul#topnav li.item.on");
    

    $("ul#topnav>li").hover(function () {
        clearTimeout(timeoutId);
        $("ul#topnav>li").removeClass('on');
        $(this).addClass('on');  
    }, function () { //on hover out...
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            $("ul#topnav>li").removeClass('on');
            el.addClass("on");
        }, 1000);
    });

	var shm_Width = $("ul#topnav").width();
    function shm_AlignCenter(sNode) {
        var childUl; for (var i = 0; i < sNode.childNodes.length; i++) {
            var cNode = sNode.childNodes.item(i); if (cNode.nodeType == 1 && cNode.tagName == "UL")
            { childUl = cNode; break; }
        }
        if (childUl) {
            //childUl.style.display = "inline";
            shm_WidthofSubElem = childUl.offsetWidth; shm_WidthofParent = sNode.offsetWidth;
            shm_LeftPosofParent = shm_FindPos(sNode);
            shm_LeftPosofSubElemWRTSHM = eval(shm_LeftPosofParent + eval(shm_WidthofParent / 2) - eval(shm_WidthofSubElem / 2));
            shm_RightPosofSubElem = eval(shm_LeftPosofSubElemWRTSHM + shm_WidthofSubElem);
            shm_LeftofRootNode = shm_FindPos(document.getElementById("topnav"));
            shm_LeftPosofSubElem = shm_LeftPosofSubElemWRTSHM - shm_LeftofRootNode;
            if (shm_LeftPosofSubElem > 0 && shm_RightPosofSubElem < eval(shm_Width + shm_LeftofRootNode))
                childUl.style.left = shm_LeftPosofSubElem + 'px';
            else if (shm_RightPosofSubElem > eval(shm_Width + shm_LeftofRootNode))
                childUl.style.left = eval((shm_Width - shm_WidthofSubElem) - 5) + 'px';
            else
                childUl.style.left = '0px';
        }
    }
    function shm_FindPos(obj) {
        var leftPos = 0; while (obj)
        { leftPos += obj.offsetLeft; obj = obj.offsetParent; }
        return leftPos;
    }

});