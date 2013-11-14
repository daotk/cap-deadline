var pos_573=new MetaNET_AdObject({'name':'banner_2125','imageUrl':'http://cdn01.rada.vn/data/File/META.vn/2013/Thang5/banner-364x90(1).gif','linkUrl':'http://meta.vn/','width':364,'height':90,'wmode':'opaque'});

pos_573.renderIn('adz302');
var pos_574=new MetaNET_AdObject({'name':'banner_2131','imageUrl':'http://cdn01.rada.vn/data/File/META.vn/2013/Thang5/banner-right-364x90.gif','linkUrl':'http://meta.vn/may-tap-chay-bang-dien-c356','width':364,'height':90,'wmode':'opaque'});

pos_574.renderIn('adz303');
var zone_304=new Array();
var pos_565=new Array();
pos_565[pos_565.length]=new MetaNET_AdObject({'name':'banner_3160','imageUrl':'http://cdn01.rada.vn/data/File/IDC/idc_quantrimang_19.6.jpg','linkUrl':'http://idconline.vn/cho-thue-may-chu.html','width':996,'height':90,'wmode':'opaque'});
pos_565[pos_565.length]=new MetaNET_AdObject({'name':'banner_3179','imageUrl':'http://cdn01.rada.vn/data/File/IDC/24.10.2013.11.gif','linkUrl':'http://fimhd.net/','width':996,'height':90,'wmode':'opaque'});
pos_565=new MetaNET_SharingAdObject2(5000,pos_565);
zone_304[zone_304.length]=pos_565;
zone_304=new MetaNET_SharingAdObject2(-1,zone_304);
zone_304.renderIn('adz304');
var zone_310=new Array();
zone_310=new MetaNET_SharingAdObject(-1,zone_310);
zone_310.renderIn('adz310');
var zone_306=new Array();
var pos_567=new MetaNET_AdObject({'name':'banner_3264','imageUrl':'http://cdn01.rada.vn/data/File/VDC/Thang 11.2013/Quan trị mạng (300x180)px.jpg','linkUrl':'http://adrealclick.com/client/click/?banner=3264&url=+http%3a%2f%2fvdconline.vn%2fvdc%2fkhuyen-mai-dich-vu-ten-mien-%25E2%2580%2593-hosting%2fc428-24988&adx_random=635199066329016513','width':300,'height':180,'wmode':'opaque'});
var pos_665=new MetaNET_AdObject({'name':'banner_3265','imageUrl':'http://cdn01.rada.vn/data/File/META.vn/2013/Thang11/Thethao11-300x250.jpg','linkUrl':'http://adrealclick.com/client/click/?banner=3265&url=http%3a%2f%2fwww.meta.vn%2fmay-tap-chay-bang-dien-c356&adx_random=635199066329172520','width':300,'height':250,'wmode':'opaque'});
zone_306[zone_306.length]=pos_567;
zone_306[zone_306.length]=pos_665;
zone_306=new MetaNET_SharingAdObject(-1,zone_306);
zone_306.renderIn('adz306');
var zone_308=new Array();
var pos_571=new MetaNET_AdObject({'name':'banner_1654','imageUrl':'http://quantrimang.com.vn/photos/social.html','linkUrl':'','width':300,'height':200,'wmode':'opaque'});
zone_308[zone_308.length]=pos_571;
zone_308=new MetaNET_SharingAdObject(-1,zone_308);
zone_308.renderIn('adz308');
var zone_311=new Array();
var pos_715=new MetaNET_AdObject({'name':'banner_1997','imageUrl':'http://cdn01.rada.vn/data/File/VinaGame/10.2013/iframe_Quantrimang_VNG_102013.html','linkUrl':'','width':300,'height':250,'wmode':'opaque'});
zone_311[zone_311.length]=pos_715;
zone_311=new MetaNET_SharingAdObject(-1,zone_311);
zone_311.renderIn('adz311');
BG_ShowAds=function(){var bg_banners = new Array();
bg_banners[bg_banners.length]=new MetaNET_AdObject({'name':'banner_1549','imageUrl':'http://cdn01.rada.vn/data/File/META.vn/2013/Thang8/thethaoleft-08.jpg','linkUrl':'http://meta.vn/xe-dap-tap-c357?ref=background','width':300,'height':800,'wmode':'opaque'});
bg_banners[bg_banners.length]=new MetaNET_AdObject({'name':'banner_1550','imageUrl':'http://cdn01.rada.vn/data/File/META.vn/2013/Thang8/thethaoright-08.jpg','linkUrl':'http://meta.vn/may-tap-chay-bang-dien-c356?ref=background','width':300,'height':800,'wmode':'opaque'});
bg_banners[bg_banners.length]=new MetaNET_AdObject({'name':'banner_1816','imageUrl':'http://cdn01.rada.vn/data/File/META.vn/2013/Thang10/giare9-left-M.jpg','linkUrl':'http://www.meta.vn/khuyenmai/25/gia-re-moi-ngay-su-lua-chon-thong-minh.aspx?ref=background','width':300,'height':800,'wmode':'opaque'});
bg_banners[bg_banners.length]=new MetaNET_AdObject({'name':'banner_1817','imageUrl':'http://cdn01.rada.vn/data/File/META.vn/2013/Thang10/giare9-right-M.jpg','linkUrl':'http://www.meta.vn/khuyenmai/25/gia-re-moi-ngay-su-lua-chon-thong-minh.aspx?ref=background','width':300,'height':800,'wmode':'opaque'});
MetaNET_BgAds2(bg_banners,null);}
$(document).ready(function () {
                BG_ShowAds();
                $(window).bind("resize", function (event) {
                    BG_ShowAds();
                });    
            });
