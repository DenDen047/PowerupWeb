(function() {
    // get URL
    var url = document.URL;
    url = url.split('/');

    console.log('HELLO WORLD');

    // init
    var blocked_contents = [];

    // related videos
    var related_videos = document.querySelector("#related")
    blocked_contents.push(related_videos);

    // remove alll
    for (var i = 0; i < blocked_contents.length; i++) {
        del_element(blocked_contents[i]);
    }


    function del_element(element){
        try {
            element.parentNode.removeChild(element);
        }
        catch(e){}
    }
})();
