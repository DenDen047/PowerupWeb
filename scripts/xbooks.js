(function() {
    // get URL
    var url = document.URL;
    url = url.split('/');

    // init
    var ad_div = [];


    if (url[url.length-2] == 'detail') {
        /*--- Preview Page ---*/
        // header
        ad_div.push(document.querySelector('head > meta:nth-child(24)'));
        ad_div.push(document.querySelector('head > meta:nth-child(25)'));
        ad_div.push(document.querySelector('head > meta:nth-child(26)'));
        ad_div.push(document.querySelector('head > meta:nth-child(27)'));

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

        // previewの上下に出る広告
        ad_div.push(document.querySelector('#one_col > center'));
        ad_div.push(document.querySelector('#bookpreview > center'));

        // scripts
        ad_div.push(document.querySelector('#bookpreview > script'));
        ad_div.push(document.querySelector('#one_col > script'));
        ad_div.push(document.querySelector('body > script:nth-child(3)'));
        ad_div.push(document.querySelector('body > script:nth-child(5)'));
        ad_div.push(document.querySelector('body > script:nth-child(7)'));
        ad_div.push(document.querySelector('body > script:nth-child(8)'));

    }
    else {
        /*--- Search Page ---*/
        // header
        ad_div.push(document.querySelector('head > meta:nth-child(21)'));
        ad_div.push(document.querySelector('head > meta:nth-child(22)'));
        ad_div.push(document.querySelector('head > meta:nth-child(23)'));
        ad_div.push(document.querySelector('head > meta:nth-child(24)'));

        // top ad
        ad_div.push(document.getElementById('wrap').getElementsByTagName("div")[0]);

        // banner bottom-right
        ad_div.push(document.getElementById('ad_tsuibi'));
        ad_div.push(document.getElementById('ad_tsuibi2'));

        // in outline
        ad_div.push(document.getElementById('main2col').getElementsByTagName('iframe')[0]);
        ad_div = ad_div.concat(to_array(
            document.getElementById('main2col').getElementsByTagName('center')));

        // ad scripts
        ad_div.push(document.querySelector('#ad_tsuibi'));
        ad_div.push(document.querySelector('body > script:nth-child(3)'));
        ad_div.push(document.querySelector('#ad_tsuibi2'));
        ad_div.push(document.querySelector('body > script:nth-child(2)'));
        ad_div.push(document.querySelector('body > script:nth-child(4)'));
        ad_div.push(document.querySelector('body > script:nth-child(6)'));
        ad_div.push(document.querySelector('body > script:nth-child(7)'));

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
