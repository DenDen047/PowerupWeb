var DownloadFunc = class {
    del_element(element){
        try {
            element.parentNode.removeChild(element);
        }
        catch(e){}
    }

    getMediaTags () {

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
        var tags = this.getMediaTags()
        for (let tag of tags) {
            // それぞれのメディアのリンクをgetする
            // 各メディアにそれらのダウンロードリンクを貼る
        }
    }
};


(function() {
    document.write(document);
    dl = new DownloadFunc();
    dl.createDLbutton();
})();
