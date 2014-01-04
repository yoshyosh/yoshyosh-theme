/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");
        $(document).on("mouseover", "#yosh-logo", function(){
        	$(".yosh-main-logo").stop().animate({"maxHeight": "0"}, 300, 'swing');
        });

        $(document).on("mouseout", "#yosh-logo", function(){
        	$(".yosh-main-logo").stop().animate({"maxHeight": "100px"}, 300, 'swing');
        });
    });

}(jQuery));