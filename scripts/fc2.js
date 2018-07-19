(function() {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver(function() {
        // init
        var ad_div = document.getElementById("fc2_bottom_bnr");
        del_element(ad_div);


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