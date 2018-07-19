(function() {
    // get URL
    var url = document.URL;
    url = url.split('/');

    // init
    var ad_div = [];

    if (url[url.length-2] == 'detail') {
        /*--- Preview Page ---*/
        // round ad
        ad_div.push(document.getElementsByClassName("movie-in-ad")[0]);
        ad_div.push(document.getElementsByClassName("adbox left")[0]);
        ad_div.push(document.getElementsByClassName("adbox right")[0]);
        ad_div.push(document.getElementById('ad_tsuibi'));
    }
    else {
        /*--- Search Page ---*/
        // top ad
        ad_div.push(document.getElementById("main2col").getElementsByTagName('center')[0]);
        // banner bottom-right
        ad_div.push(document.getElementById('ad_tsuibi'));
        // top article
        var content_lists = document.getElementsByClassName("content_list");
        ad_div.push(content_lists[0]);
        // ad_div.push(content_lists[content_lists.length - 2]);
        // preview box ad
        ad_div.push(document.getElementsByClassName("box")[3]);
    }

    // remove all
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
