//-------------------------------------------------
//		Quick Pager jquery plugin
//		Created by dan and emanuel @geckonm.com
//		www.geckonewmedia.com
// 
//		v1.1
//		18/09/09 * bug fix by John V - http://blog.geekyjohn.com/
//-------------------------------------------------

(function ($) {

    $.fn.quickPager = function (options) {

        var defaults = {
            pageSize: 10,
            currentPage: 1,
            holder: null,
            pagerLocation: "after"
        };

        var options = $.extend(defaults, options);


        return this.each(function () {


            var selector = $(this);
            var pageCounter = 1;

            //selector.wrap("<div class='simplePagerContainer'></div>");

            selector.children().each(function (i) {

                if (i < pageCounter * options.pageSize && i >= (pageCounter - 1) * options.pageSize) {
                    $(this).addClass("simplePagerPage" + pageCounter);
                }
                else {
                    $(this).addClass("simplePagerPage" + (pageCounter + 1));
                    pageCounter++;
                }

            });

            // show/hide the appropriate regions 
            selector.children().hide();
            selector.children(".simplePagerPage" + options.currentPage).show();

            if (pageCounter <= 1) {
                return;
            }

            //Build pager navigation
            var pageNav = "<div class='simplePagerNav' align='right'>";
            for (i = 1; i <= pageCounter; i++) {
                if (i == options.currentPage) {
                    pageNav += " <a class='test' rel='" + i + "' href='#'>" + i + "</a>";
                }
                else {
                    pageNav += " <a rel='" + i + "' href='#'>" + i + "</a>";
                }

            }
            pageNav += "</div>";

            if (!options.holder) {
                switch (options.pagerLocation) {
                    case "before":
                        selector.before(pageNav);
                        break;
                    case "both":
                        selector.before(pageNav);
                        selector.after(pageNav);
                        break;
                    default:
                        selector.after(pageNav);
                }
            }
            else {
                $(options.holder).append(pageNav);
            }

            //pager navigation behaviour
           
            selector.parent().find(".simplePagerNav a").click(function () {

                //grab the REL attribute 
                var clickedLink = $(this).attr("rel");
                options.currentPage = clickedLink;
              
                if (options.holder) {
                    $(this).parent(options.holder).find("a.test").removeClass("test");
                    $(this).parent(options.holder).find("a[rel='" + clickedLink + "']").parent("a").addClass("test");
                }
                else {
                    //remove current current (!) page
                    $(this).parent(".simplePagerNav").find("a.test").removeClass("test");
                    //Add current page highlighting
                    $(this).parent(".simplePagerNav").find("a[rel='" + clickedLink + "']").addClass("test");
                  
                }

                //hide and show relevant links
                selector.children().hide("slow");
                selector.find(".simplePagerPage" + clickedLink).show(2000);

                return false;
            });
        });
    }


})(jQuery);

