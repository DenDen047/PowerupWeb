(function() {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver(function() {
        // get URL
        var url = document.URL;
        url = url.split('/');

        // init
        var ad_div = [];

        // ad
        var ads = document.getElementsByClassName("ads");
        for (var i = 0; i < ads.length; i++) {
            ad_div.push(ads[i]);
        };
        ad_div.push(document.getElementById("above_pagination_container"));

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
