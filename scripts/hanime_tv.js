var DownloadButtons = class {
    constructor () {
        this.img_lens = [];
        this.date = new Date();
        this.time_now = 0.;
        this.time_ago = 0.;
    }

    getTargetDiv () {
        return document.getElementsByClassName(
            'cuc_container images__content flex row wrap justify-center relative');
    }

    createDLLink (a_tag) {
        var aNode = document.createElement('a');
        var href = a_tag.href;
        console.log(href);
        var urlArray = href.split('/');
        aNode.setAttribute('href', href);
        aNode.setAttribute('download', urlArray[urlArray.length - 1]);

        var imgNode = document.createElement('img');
        var icon = chrome.runtime.getURL('icons/icon128.png');
        imgNode.setAttribute('src', icon);
        imgNode.setAttribute('width', 22);

        aNode.appendChild(imgNode);

        return aNode;
    }

    createDLButton () {
        var div_images = this.getTargetDiv();
        var as = div_images[0].getElementsByTagName('a');
        console.log(as.length);

        // add DL buttons to each img element
        for (var i=0, i_max=as.length; i < i_max; i++) {
            // get the credit tag
            var div_credit = as[i].getElementsByClassName('credits')[0];

            // add new element to each image
            var dl_link = this.createDLLink(as[i]);
            div_credit.appendChild(dl_link);

            console.log(i);
        }
    }

    stateCheck () {
        // check the existence of the target div
        var div_images = this.getTargetDiv();
        if (div_images.length == 0) {
            return false;
        }

        // check the number of images in the div
        var as = div_images[0].getElementsByTagName('a');
        if (as.length == 0) {
            return false;
        }

        // check if all the images can be load.
        this.img_lens.push(as.length);
        console.log(this.img_lens);

        function check_dom_update(array, len) {
            if (array.length < len) {
                return false;
            }

            var max_index = array.length;
            var val0 = array[max_index - 1];
            for (var i = 0; i < len - 1; i++) {
                var val = array[max_index - (i + 2)];
                if (val != val0) return false;
            }
            return true;
        }

        if (check_dom_update(this.img_lens, 29)) {
            return true;
        }
    }
};


(function() {
    var dl = new DownloadButtons();

    var run = function run_func () {
        if (dl.stateCheck()) {
            document.removeEventListener("DOMSubtreeModified", run);
            dl.createDLButton();
        }
    }

    document.addEventListener("DOMSubtreeModified", run);
})();
