var DownloadButtons = class {
    constructor () {
        this.img_lens = [];
    }

    getTargetDiv () {
        return document.getElementsByClassName(
            'cuc_container images__content flex row wrap justify-center relative');
    }

    createDLLink () {
        var div = document.createElement('div');

        return div;
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
            var dl_link = this.createDLLink();
            div_credit.appendChild(dl_link);
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
        var max = this.img_lens.length;
        if (max > 4 && this.img_lens[max - 3] == this.img_lens[max - 4]) {
            return true;
        }
    }
};


(function() {
    var dl = new DownloadButtons();
    var runed = false;

    function run () {
        var ready = dl.stateCheck();
        if (ready && !runed) {
            runed = true;
            dl.createDLButton();
        }
    }

    document.addEventListener("DOMSubtreeModified", run);
})();
