var DownloadFunc = class {
    del_element(element){
        try {
            element.parentNode.removeChild(element);
        }
        catch(e){}
    }

    getArticleTags () {
        // article要素だけを取り出す
        var div = document.querySelector(
            '#react-root > section > main > section > div > div:nth-child(1) > div');
        var articles = div.getElementsByTagName('article');

        return articles;
    }

    getMediaTags (article) {    // articleからメディア(画像/動画)のタグを取り出す
        // 必要な変数を用意する
        var header = article.querySelector('header');
        var media_div = article.querySelector('div:nth-child(1)');
        var explain_div = article.querySelector('div:nth-child(2)');
        var option_div = article.querySelector('div:nth-child(3)');
        // mediaのタグを抽出
        var media = media_div.querySelector('div > div > div:nth-child(1) > img')
    }

    createDLlink () {
        // 全てのarticleタグを取り出す
        var article = this.getArticleTags();
        // それぞれのarticleに対して処理を行う
        for (var i = 0; i < articles.length; i++) {
            // 必要な変数を取り出す
            var article = articles[i];
            var url = img.getAttribute('src');

            // parentをwrapperで，ラップすることで，画像にリンクを付与
            var parent = img.parentNode;
            var wrapper = document.createElement('a');
            console.log(url);
            wrapper.setAttribute('href', url);
            url = url.split('/');
            wrapper.setAttribute('download', url[url.length - 1]);

            // set the wrapper as child (instead of the element)
            parent.replaceChild(wrapper, img);
            // set element as child of wrapper
            wrapper.appendChild(img);
        }
    }

    createDLbutton () {
    }
};


function download_files(urls) {
    var link = document.createElement('a');

    link.setAttribute('download', null);
    link.style.display = 'none';

    document.body.appendChild(link);

    for (var i = 0; i < urls.length; i++) {
        link.setAttribute('href', urls[i]);
        link.click();
    }

    document.body.removeChild(link);
}


function dom_observe () {
    const CLASS_NEW_TWEETS_BAR = "new-tweets-bar";

    //監視ターゲットの取得
    const target = document.querySelector(
        "#react-root > section > main > section > div > div:nth-child(1) > div");

    //オブザーバーの作成
    const observer = new MutationObserver(records => {
        console.log('load!!');
        // var dl = new DownloadFunc();
        // dl.createDLlink();
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
    dl.createDLlink();

    // DOMの変更を監視して必要に応じて，更新する
    dom_observe();
}
