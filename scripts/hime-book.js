(function() {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver(function() {
        // get URL
        var url = document.URL;
        url = url.split('/');

        // init
        var ad_div = [];

        // ad
        // top
        var ads = document.getElementsByClassName("header_big_pickup");
        for (var i = 0; i < ads.length; i++) {
            ad_div.push(ads[i]);
        };
        // bottom
        var divs = document.getElementsByClassName("pict_rss");
        var div = divs[divs.length-1];
        ad_div.push(div);
        // rss
        ad_div.push(document.getElementById("rss_pickup_right"));
        ad_div.push(document.getElementById("rss_pickup_left"));

        // remove alll
        for (var i = 0; i < ad_div.length; i++) {
            del_element(ad_div[i]);
        }


        function del_element(element){
            element.parentNode.removeChild(element);
        }
    });

    observer.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree:true
    });
})();
