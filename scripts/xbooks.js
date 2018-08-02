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
        ad_div = ad_div.concat(to_array(document.getElementsByClassName("adbox left")));
        ad_div = ad_div.concat(to_array(document.getElementsByClassName("adbox right")));

        // banner bottom-right
        ad_div.push(document.getElementById('ad_tsuibi'));
        ad_div.push(document.getElementById('ad_tsuibi2'));

        // top ad
        ad_div.push(document.getElementById('wrap').getElementsByTagName("div")[0]);
        ad_div = ad_div.concat(to_array(
            document.getElementById('wrap').getElementsByTagName('iframe')));

        // first blank window
        ad_div.push(document.getElementsByClassName('ad_img_box_e')[0]);

        // in outline
        // ad_div = ad_div.concat(to_array(
        //     document.getElementById('main2col').getElementsByTagName('center')));
    }
    else {
        /*--- Search Page ---*/
        // top ad
        ad_div.push(document.getElementById('wrap').getElementsByTagName("div")[0]);

        // banner bottom-right
        ad_div.push(document.getElementById('ad_tsuibi'));
        ad_div.push(document.getElementById('ad_tsuibi2'));

        // in outline
        ad_div.push(document.getElementById('main2col').getElementsByTagName('iframe')[0]);
        ad_div = ad_div.concat(to_array(
            document.getElementById('main2col').getElementsByTagName('center')));
    }

    // remove all
    for (var i = 0; i < ad_div.length; i++) {
        del_element(ad_div[i]);
    }

    function to_array(elements) {
        return Array.prototype.slice.call(elements);
    }

    function del_element(element){
        try {
            element.parentNode.removeChild(element);
        }
        catch(e){}
    }
})();
