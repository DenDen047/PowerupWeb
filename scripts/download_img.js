var DownloadFunc = class {
    del_element(element){
        try {
            element.parentNode.removeChild(element);
        }
        catch(e){}
    }

    createDLlink () {
        var url = window.location.href;

        var aNode = document.createElement('a');
        aNode.href = url;
        var urlArray = url.split('/');
        aNode.download = urlArray[urlArray.length - 1];

        var imgNode = document.createElement('img');
        imgNode.src = url;

        aNode.appendChild(imgNode);

        return aNode;
    }

    createDLbutton () {
        var linkNode = this.createDLlink();
        document.body.appendChild(linkNode);
    }
};


(function() {
    dl = new DownloadFunc();
    dl.createDLbutton();
})();
