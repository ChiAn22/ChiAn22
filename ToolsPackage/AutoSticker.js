var afterText='';
var ContentMode;
var afterTextContent=0;
let itarget;
let C3Number=0,C4number=0;
function AutoSticker(a1){
    var text1,text2,text3,text4,text5,textContent,text3Color,text3Title;
    if(Content_[2]===true){
        if(ContentMode==='Point'){
            iMsg('当前标记列表为Point',2000);
        }else {
            function addIt(){
                textContent="var "+text1+"= {\n" +
                    "    title:'"+text2+"',\n" +
                    "    fontSize:'"+text5+"',\n" +
                    "    fontWeight:'bold',\n" +
                    "    contentColor:'#909090',\n" +
                    "    outlineColor:'#ffffff',\n" +
                    "    location:["+a1+"],\n" +
                    "    minZoom:"+text3+",\n" +
                    "    content: Content,\n" +
                    "}\n"+
                    text1+".content("+text1+");\n";

                afterText=afterText+textContent;
                afterTextContent+=1;
                if(itarget==='3'){
                    document.getElementById('Content_List').innerText='已标记 ['+C3Number+'] 个Level3坐标';
                }else if(itarget==='4'){
                    document.getElementById('Content_List').innerText='已标记 ['+C4number+'] 个Level4坐标';
                }

            }
            if(itarget===undefined){
                itarget=window.prompt('目标-地区级别？','4');
            }
            if(itarget==='3'){
                ContentMode='C3';
                text1=window.prompt('注册名','C3_');
                text2=window.prompt('标题','');
                text3=window.prompt('缩放级别(三级地区建议3.0-3.2)','');
                text5='14px';
                C3Number++;
                addIt();
            }else if(itarget==='4'){
                ContentMode='C4';
                text1=window.prompt('注册名','C4_');
                text2=window.prompt('标题','');
                text3=window.prompt('缩放级别(四级地区建议3.8-3.6)','');
                text5='10px';
                C4number++;
                addIt();
            }else {
                iMsg('错误的进行',3000,'red');
                itarget=undefined;
            }
            return [text2,afterTextContent];
        }

    }else if(Content_[2]===false){
        if(ContentMode==='C4'){
            iMsg('当前标记列表为Level4',2000);
        }else {
            ContentMode = 'Point';
            text1 = window.prompt('注册名', 'Point_');
            text2 = window.prompt('标题', '');
            if(Content_[6]===true){
                text3Title = '';
            }else {
                text3Title = window.prompt('Point类型(留空默认项)', '');
            }

            text4 = window.prompt('缩放级别(Point建议范围4.6-5.6)', '');
            text3Color = colorSelect(text3Title);

            textContent = "var " + text1 + "= {\n" +
                "    title:'" + text2 + "',\n" +
                "    fontSize:'10px',\n" +
                "    fontWeight:'bold',\n" +
                "    contentColor:'" + text3Color + "',\n" +
                "    outlineColor:'#ffffff',\n" +
                "    location:[" + a1 + "],\n" +
                "    minZoom:" + text4 + ",\n" +
                "    pointContent: PointContent,\n" +
                "    pointSize:4,\n" +
                "}\n" +
                text1 + ".pointContent(" + text1 + ");\n\n";

            afterText = afterText + textContent;
            afterTextContent += 1;
            document.getElementById('Content_List').innerText = '已标记 [' + afterTextContent + '] 个Point坐标';
            return [text2, afterTextContent];
        }
    }else {
        iMsg('创建标记失败',2000,'red');
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
    else if(a==='特殊'){
        return '#625ec5';
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

function InfoPoint(b,c){
    var mainFeature = new ol.Feature({
        geometry: new ol.geom.Point(b),
    });

    var mainFeaturePoint = new ol.Feature({
        geometry: new ol.geom.Point(b),
    });

    mainFeature.setStyle(createLabelStyle(mainFeature));
    mainFeaturePoint.setStyle(createCircleStyle(mainFeaturePoint));

    var vectorSource = new ol.source.Vector({
        features: [mainFeaturePoint,mainFeature]
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
    });

    map.addLayer(vectorLayer);
    function createLabelStyle(){
        return new ol.style.Style({
            text: new ol.style.Text({
                textAlign: 'left',
                textBaseline: 'middle',
                font: 'bold'+' '+'10px'+' '+'Font1',
                text: '标记'+c[1]+':'+c[0],
                offsetX:7,
                offsetY:1,
                fill: new ol.style.Fill({
                    color: '#c50b0b'
                }),
                stroke: new ol.style.Stroke({
                    color: '#ffffff',
                    width: 1,
                })
            })
        });
    }
    function createCircleStyle(){
        return new ol.style.Style({
            image:new ol.style.Circle({
                radius:4,
                fill: new ol.style.Fill({
                    color: '#c50b0b',
                }),
                stroke: new ol.style.Stroke({
                    color: '#ffffff',
                    width: 1,
                })
            })
        });
    }
}