/**
 * Created by be2n2me on 2014/11/20.
 */


var treeComponent = {
    data:Array,

    init:function(data){
      if(data){
          this.data = data;
      }
    },
    getHtml:function(){
        return this.generateHtml(this.data);
     },
    generateHtml:function(dataParam){
        if(dataParam){
            var s = '<ul';
            if(dataParam == this.data){
                s += '/>';
            }else{
                s+=' style=\'display:none\'>';
            }

            for(var i = 0; i < dataParam.length; i++){
                var curData = dataParam[i];
                if(curData.data){
                    s+='<li class=\'node\'><img  src=\'img/closed.png\' ' +
                        'onclick=\'treeComponent.treeNodeClick(this)\'><span>'+
                        curData.name + '</span>';
                    s+=this.generateHtml(curData.data);
                    s+='</li>';
                }else{
                    s+='<li class=\"leaf\"><img src=\'img/file.png\'><span>'+curData.name + '</span></li>';
                }
            }

            s+='</ul>';
            return s;
        }else{
            return '';
        }
    },

    treeNodeClick: function (curImg) {
        var children = curImg.parentNode.childNodes;
        for(var i = 0; i<children.length; i++){
            if(children[i].tagName =='UL'){
                var displayInfo = children[i].style.display;
                if(children[i].style.display == 'none'){
                    children[i].style.display = 'block';
                    curImg.src='img/open.png';
                }else{
                    this.closeNode(children[i]);
                }
            }
        }
    },

    closeNode:function(curUl){

        var children = curUl.childNodes;
        for(var i = 0; i < children.length; i++){
            if(children[i].tagName =='LI'){
                var liChildren = children[i].childNodes;
                for(var j = 0; j < liChildren.length; j++){
                    if(liChildren[j].tagName == 'UL'){
                        this.closeNode(liChildren[j]);
                    }
                }
            }
        }
        curUl.style.display = 'none';
        var brotherNodes = curUl.parentNode.childNodes;
        for(var i = 0; i < brotherNodes.length; i++){
            if(brotherNodes[i].tagName == 'IMG'){
                brotherNodes[i].src = 'img/closed.png';
            }
        }
    }
}





