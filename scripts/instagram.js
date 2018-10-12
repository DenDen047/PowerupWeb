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

function dom_observe () {
    const CLASS_NEW_TWEETS_BAR = "new-tweets-bar";

    //監視ターゲットの取得
    const target = document.querySelector(
        "#react-root > section > main > section > div > div:nth-child(1) > div");

    //オブザーバーの作成
    const observer = new MutationObserver(records => {
        console.log('load!!');
        // records.forEach(record => {
        //     Array.from(record.addedNodes)
        //         .filter(node => node.classList.contains(CLASS_NEW_TWEETS_BAR))
        //         .forEach(node => node.click());
        // });
    });

    //監視オプションの作成
    const options = {
        childList: true
    };

    //監視の開始
    observer.observe(target, options);
}


window.onload = function() {
    // document.write(document);

    // 画像のダウンロードボタンを生成する
    var dl = new DownloadFunc();
    dl.createDLbutton();

    // DOMの変更を監視して必要に応じて，更新する
    dom_observe();
}
