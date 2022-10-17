//二级区域 · 特别注释

function Content(a){
    var mainFeature = new ol.Feature({
        geometry: new ol.geom.Point(a.location),
        zoomValue:a.minZoom||'SUB',
        CI:a.CI,
    });

    mainFeature.setStyle(createLabelStyle(mainFeature));

    var vectorSource = new ol.source.Vector({
        features: [mainFeature]
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        minZoom:a.minZoom,
    });

    map.addLayer(vectorLayer);
    function createLabelStyle(){
        return new ol.style.Style({
            text: new ol.style.Text({
                textAlign: 'center',
                textBaseline: 'middle',
                font: a.fontWeight+' '+a.fontSize+' '+'Font1',
                text: a.title,
                fill: new ol.style.Fill({
                    color: a.contentColor
                }),
            })
        });
    }
}

var C2_Chisan= {
    title:'芝港区',
    fontSize:'16px',
    fontWeight:'bold',
    contentColor:'#909090',
    outlineColor:'#ffffff',
    location:[253, 188.5],
    content: Content,
}
C2_Chisan.content(C2_Chisan);

var C2_Chongnin= {
    title:'空港区',
    fontSize:'16px',
    fontWeight:'bold',
    contentColor:'#909090',
    outlineColor:'#ffffff',
    location:[466, 112],
    content: Content,
}
C2_Chongnin.content(C2_Chongnin);

var C2_Shuangtin= {
    title:'双庭区',
    fontSize:'16px',
    fontWeight:'bold',
    contentColor:'#909090',
    outlineColor:'#ffffff',
    location:[470,234],
    content: Content,
}
C2_Shuangtin.content(C2_Shuangtin);

var C2_Taee= {
    title:'台逸区',
    fontSize:'16px',
    fontWeight:'bold',
    contentColor:'#909090',
    outlineColor:'#ffffff',
    location:[446,382],
    content: Content,
}
C2_Taee.content(C2_Taee);

var C2_Westown= {
    title:'西馆区',
    fontSize:'16px',
    fontWeight:'bold',
    contentColor:'#909090',
    outlineColor:'#ffffff',
    location:[698,292],
    content: Content,
}
C2_Westown.content(C2_Westown);

var C2_HOPE= {
    title:'后谷区',
    fontSize:'16px',
    fontWeight:'bold',
    contentColor:'#909090',
    outlineColor:'#ffffff',
    location:[135, 379],
    content: Content,
}
C2_HOPE.content(C2_HOPE);

var special_ChisanRiver_Estuary= {
    title:'芝江入海口',
    fontSize:'12px',
    fontWeight:'bold',
    contentColor:'#4a79a0',
    outlineColor:'#ffffff',
    location:[377.4, 42.9],
    content: Content,
}
special_ChisanRiver_Estuary.content(special_ChisanRiver_Estuary);

var special_Taichi= {
    title:'苔芝岬',
    fontSize:'12px',
    fontWeight:'bold',
    contentColor:'#4a79a0',
    outlineColor:'#ffffff',
    location:[124, 222.3],
    minZoom: 4,
    content: Content,
}
special_Taichi.content(special_Taichi);

var special_NorthGardenTunnel= {
    title:'北公园隧道',
    fontSize:'12px',
    fontWeight:'bold',
    contentColor:'#4a79a0',
    outlineColor:'#ffffff',
    location:[300, 276.4],
    minZoom: 5,
    content: Content,
}
special_NorthGardenTunnel.content(special_NorthGardenTunnel);

var special_Chisan= {
    title:'芝山',
    fontSize:'12px',
    fontWeight:'bold',
    contentColor:'#578835',
    outlineColor:'#ffffff',
    location:[193.1, 263.7],
    content: Content,
}
special_Chisan.content(special_Chisan);