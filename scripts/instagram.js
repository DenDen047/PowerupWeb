var DownloadFunc = class {
    del_element(element){
        try {
            element.parentNode.removeChild(element);
        }
        catch(e){}
    }

    getMediaTags () {
        return document.getElementsByTagName('img');
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
        // 全てのメディア（動画，画像）のタグを洗い出す
        var tags = this.getMediaTags();
        console.log(tags);
        console.log(tags.length);
    }
};


window.onload = function() {
    // document.write(document);
    dl = new DownloadFunc();
    dl.createDLbutton();

}
