(function() {
    // get URL
    var url = document.URL;
    url = url.split('/');

    // init
    var ad_div = [];

    // add ads
    var scripts = document.getElementsByTagName("script")
    for (var i=0; i<scripts.length; i++) {
        if (
            ~scripts[i].src.indexOf("js/get_task_local.js") ||
            ~scripts[i].src.indexOf("crowd4u")
        ){
            ad_div.push(scripts[i]);
        }
    }
    var divs = document.getElementsByTagName("a")
    for (var i=0; i<divs.length; i++) {
        divs[i].classList.remove('microtask');
    }

    // remove alll
    for (var i = 0; i < ad_div.length; i++) {
        del_element(ad_div[i]);
    }

    function del_element(element){
        try {
            element.parentNode.removeChild(element);
        }
        catch(e){}
    }
})();
