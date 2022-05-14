var afterText='';
var afterTextContent=0;
function AutoSticker(a1){
    var text1=window.prompt('注册名','Point_');
    var text2=window.prompt('标题','');
    var text3Title=window.prompt('Point类型(留空默认项)','');
    var text4=window.prompt('缩放级别(Point建议范围4.6-5.6)','');

    var text3Color;
    text3Color=colorSelect(text3Title);

    var textContent="var "+text1+"= {\n" +
        "    title:'"+text2+"',\n" +
        "    fontSize:'10px',\n" +
        "    fontWeight:'bold',\n" +
        "    contentColor:'"+text3Color+"',\n" +
        "    outlineColor:'#ffffff',\n" +
        "    location:["+a1+"],\n" +
        "    minZoom:"+text4+",\n" +
        "    pointContent: PointContent,\n" +
        "    pointSize:4,\n" +
        "}\n"+
        text1+".pointContent("+text1+");\n\n";

    afterText=afterText+textContent;
    afterTextContent+=1;

    if(window.confirm('要立即导出内容吗？'+'[当前剪贴板有'+afterTextContent+'项内容]')){
        saveFile(afterText);
    }
}

function colorSelect(a){

    if (a===''){
        return '#6b6b6b';
    }
    else if(a==='学校'){
        return '#6695cf';
    }
    else if(a==='古迹'){
        return '#6b584d';
    }
    else if(a==='公园'){
        return '#62af40';
    }
}

function fakeClick(obj) {
    var ev = document.createEvent("MouseEvents");
    ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    obj.dispatchEvent(ev);
}

function exportRaw(name, data) {
    var urlObject = window.URL || window.webkitURL || window;
    var export_blob = new Blob([data]);
    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    fakeClick(save_link);
}

function saveFile(a1){
    exportRaw('Log.txt', a1);
}