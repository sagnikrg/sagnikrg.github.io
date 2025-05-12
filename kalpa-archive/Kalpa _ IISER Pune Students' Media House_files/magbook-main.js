var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(function(){var e,n,a,t,i,o,s=jQuery("#search-toggle"),r=jQuery("#search-box");s.on("click",function(){s.hasClass("header-search")?(s.removeClass("header-search").addClass("header-search-x"),r.addClass("show-search-box")):(s.removeClass("header-search-x").addClass("header-search"),r.removeClass("show-search-box"))}),jQuery(function(){var e=jQuery("#page div"),n=jQuery("body");e.hasClass("main-slider")&&n.addClass("sld-plus")}),jQuery(document).ready(function(){var a=jQuery(".tab-wrapper"),t=a.find(".tabs-container > .tab-content"),i=a.find(".tab-menu button");t.not(":first-of-type").hide(),i.each(function(e){jQuery(this).attr("data-tab","tab"+e)}),t.each(function(e){jQuery(this).attr("data-tab","tab"+e)}),i.on("click",function(){var e=jQuery(this).data("tab"),n=jQuery(this).closest(a);n.find(i).removeClass("active"),jQuery(this).addClass("active"),n.find(t).hide(),n.find(t).filter("[data-tab="+e+"]").show()})}),(a=jQuery(".main-navigation"))&&(e=a.find(".menu-toggle"))&&((n=a.find(".menu"))&&n.children().length?jQuery(".menu-toggle").on("click",function(){jQuery(this).toggleClass("on"),a.toggleClass("toggled-on")}):e.hide()),(o=jQuery(".top-bar-menu"))&&(t=o.find(".top-menu-toggle"))&&((i=o.find(".top-menu"))&&i.children().length?jQuery(".top-menu-toggle").on("click",function(){jQuery(this).toggleClass("on"),o.toggleClass("toggled-on")}):t.hide()),jQuery(function(){jQuery(window).width()<981&&(jQuery("#site-navigation .menu-item-has-children, #site-navigation .page_item_has_children").prepend('<button class="sub-menu-toggle"> <i class="fa fa-plus"></i> </button>'),jQuery(".main-navigation .menu-item-has-children ul, .main-navigation .page_item_has_children ul").hide(),jQuery(".main-navigation .menu-item-has-children > .sub-menu-toggle, .main-navigation .page_item_has_children > .sub-menu-toggle").on("click",function(){jQuery(this).parent(".main-navigation .menu-item-has-children, .main-navigation .page_item_has_children").children("ul").first().slideToggle(),jQuery(this).children(".fa-plus").first().toggleClass("fa-minus")}))}),jQuery(document).ready(function(){jQuery(".show-menu-toggle, .hide-menu-toggle, .page-overlay").click(function(){jQuery(".side-menu").fadeToggle("slow"),jQuery(".side-menu").addClass("show"),jQuery(".page-overlay").toggleClass("side-menu-open"),jQuery("#page").addClass("side-content-open")}),jQuery(".hide-menu-toggle, .page-overlay").click(function(){jQuery(".side-menu").removeClass("show"),jQuery(".page-overlay").removeClass("side-menu-open"),jQuery("#page").removeClass("side-content-open")})}),jQuery(document).ready(function(){jQuery(".go-to-top").hide(),jQuery(window).scroll(function(){900<jQuery(window).scrollTop()?jQuery(".go-to-top").fadeIn():jQuery(".go-to-top").fadeOut()}),jQuery(".go-to-top").click(function(){return jQuery("html,header,body").animate({scrollTop:0},700),!1})})});

}
/*
     FILE ARCHIVED ON 12:02:03 Jun 04, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:10:25 May 12, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.809
  exclusion.robots: 0.029
  exclusion.robots.policy: 0.013
  esindex: 0.014
  cdx.remote: 108.621
  LoadShardBlock: 297.986 (3)
  PetaboxLoader3.datanode: 196.506 (4)
  PetaboxLoader3.resolve: 214.901 (2)
  load_resource: 184.661
*/