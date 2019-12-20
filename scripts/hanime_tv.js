var DownloadButtons = class {
    createDLLink () {
        var div = document.createElement('div');

        return div;
    }

    createDLButton () {
        // add DL buttons to each img element
        for (var i=0, max=div_images.length; i < max; i++) {
            // get the credit tag
            var div_credit = div_images[i].getElementsByClassName('credits');

            // add new element
            var dl_link = this.createDLLink();
            div_credit.appendChild(dl_link);
        }

    }

    stateCheck () {
        // check the existence of the target div
        var div_images = document.getElementsByClassName(
            'cuc_container images__content flex row wrap justify-center relative');

        if (div_images.length == 0) {
            console.log('wait');
            return;
        }
        else {
            console.log('exit');
        }
    }
};


(function() {
    function run () {
        dl = new DownloadButtons();
        dl.stateCheck();
    }

    document.addEventListener("DOMSubtreeModified", run);
})();
