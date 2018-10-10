var DownloadFunc = class {
    del_element(element){
        try {
            element.parentNode.removeChild(element);
        }
        catch(e){}
    }

    getMediaTags () {
        var tags = document.getElementsByTagName('img');
        return tags;
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
        console.log('hoge');
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            console.log(tag);
            // それぞれのメディアのリンクをgetする
            // 各メディアにそれらのダウンロードリンクを貼る

        }
    }
};


(function() {
    // document.write(document);
    dl = new DownloadFunc();
    dl.createDLbutton();
})();
