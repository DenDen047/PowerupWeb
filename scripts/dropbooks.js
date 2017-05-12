var MarkTitle = class {
    getInfo () {
        this.books =  document.getElementsByClassName("list");
    }

    mark () {
        var title, info, dl_cnt;
        for (var i = 0; i < this.books.length; i++) {
            title = this.books[i].getElementsByTagName("h3")[0];
            info = this.books[i].getElementsByTagName("dl")[0];
            dl_cnt = info.getElementsByTagName("dd")[2];
            dl_cnt = dl_cnt.innerHTML.split("回")[0];
            dl_cnt = parseInt(dl_cnt);
            // Popular Book
            this.checkDLCount(dl_cnt, title);
        };
    }

    checkDLCount (dl_cnt, tag) {
        if (dl_cnt > 4000) {
            tag.style.backgroundColor = "#ffcc99";
        }
    }

    getTemplateTitle (title_tag) {
        //
    }
};


(function() {
    markTitle = new MarkTitle();
    markTitle.getInfo();
    markTitle.mark();
})();
