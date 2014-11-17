/**
 * Created by be2n2me on 2014/11/17.
 * 分页实现的js
 */
var pageination = {

    leftPageNo : 5,
    rightPageNo: 5,
    pageDiv   : 'pageDiv',//分页区域
    curPageNo : 10,//当前页号
    totalPageNo : 100,//总页号
    totalRecords: 400,//总记录数
    isShowFirstPageBtn:true,//是否显示首页按钮
    isShowLastPageBtn:true,//是否显示尾页按钮
    isShowPrePageBtn:true,//是否显示前一页按钮
    isShowNextPageBtn:true,//是否显示下一页按钮
    inited:false,
    lang:{
        firstPageText:'首页',
        firstPageTipText:'首页',
        prePageText:'前一页',
        nextPageText:'后一页',
        lastPageText:'尾页',
        lastPageTipText:'尾页'
    },
    generateHtml:function(config){
        if(!this.inited){
            this.init(config);
        }
        var pageFirst='', pagePre='', pageNext='', pageLast='';
        var pageContent = '';
        if(this.isShowFirstPageBtn){
            pageFirst='<a onClick=pageination.pageBtnClick(\'firstPage\')>' + this.lang.firstPageText + '</a>';
        }
        if(this.isShowPrePageBtn){
            pagePre='<a onClick=pageination.pageBtnClick(\'prePage\')>' +  this.lang.prePageText + '</a>';
        }

        var startNum = this.curPageNo-this.leftPageNo>0?this.curPageNo-this.leftPageNo:1;
        var endNum = this.curPageNo+this.leftPageNo<this.totalPageNo?this.curPageNo+this.leftPageNo:this.totalPageNo;
        for(var i = startNum; i < this.curPageNo ; i++){
            pageContent += this.generatePageBtn(i);
        }
        pageContent += '<a class=\"aselect\">' + this.curPageNo + '</a>';

        for(var j = this.curPageNo + 1; j <= endNum; j++){
            pageContent += this.generatePageBtn(j);
        }

        if(this.isShowNextPageBtn){
            pageNext='<a onClick=pageination.pageBtnClick(\'nextPage\')>' +  this.lang.nextPageText + '</a>';
        }

        if(this.isShowLastPageBtn){
            pageLast='<a onClick=pageination.pageBtnClick(\'lastPage\')>' +  this.lang.lastPageText + '</a>';
        }
        return pageFirst + pagePre +  pageContent + pageNext + pageLast;
    },

    init:function(config){
        this.curPageNo = config.curPageNo;
        this.totalPageNo = config.totalPageNo;
        this.totalRecords = config.totalRecords;
        this.isShowFirstPageBtn = this.curPageNo - this.leftPageNo > 1;
        this.isShowLastPageBtn = this.curPageNo + this.rightPageNo <= this.totalPageNo;
        this.isShowPrePageBtn = this.curPageNo != 1;
        this.isShowNextPageBtn = this.curPageNo != this.totalPageNo;
        this.inited = true;
    },
    generatePageBtn:function(i){
        return '<a onClick=pageination.pageBtnClick('+ i +  ')>' + i + '</a>';
    },
    pageBtnClick:function(str){
        switch (str){
            case 'firstPage':
                this.curPageNo =  1;
                break;
            case 'prePage':
                this.curPageNo = this.curPageNo - 1;
                break;
            case 'nextPage':
                this.curPageNo = this.curPageNo + 1;
                break;
            case 'lastPage':
                this.curPageNo = this.totalPageNo;
                break;
            default :
                this.curPageNo = str;
        }
        this.inited = false;

        config = {
            curPageNo:this.curPageNo,
            totalPageNo:this.totalPageNo,
            totalRecords:this.totalRecords
        };
        this.refreshPage(config);
    },
    refreshPage:function(config){//刷新页面显示
        var div = document.getElementById(this.pageDiv);

        div.innerHTML = this.generateHtml(config);
    }


};
