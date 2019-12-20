var DownloadButtons = class {
    constructor () {
        this.img_lens = [];
    }

    createDLLink () {
        var div = document.createElement('div');

        return div;
    }

    createDLButton () {
        console.log('go');
        // add DL buttons to each img element
        // for (var i=0, max=div_images.length; i < max; i++) {
        //     // get the credit tag
        //     var div_credit = div_images[i].getElementsByClassName('credits');

        //     // add new element
        //     var dl_link = this.createDLLink();
        //     div_credit.appendChild(dl_link);
        // }

    }

    stateCheck () {
        // check the existence of the target div
        var div_images = document.getElementsByClassName(
            'cuc_container images__content flex row wrap justify-center relative');
        if (div_images.length == 0) {
            return false;
        }

        // check the number of images in the div
        var as = div_images[0].getElementsByTagName('a');
        if (as.length == 0) {
            return false;
        }

        // check if the images can be load.
        this.img_lens.push(as.length);
        var max = this.img_lens.length;
        if (this.img_lens[max - 3] == this.img_lens[max - 4]) {
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
            dl.createDLButton();
            runed = true;
        }
    }

    document.addEventListener("DOMSubtreeModified", run);
})();
