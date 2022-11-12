function PointContent(a){
    var mainFeature = new ol.Feature({
        geometry: new ol.geom.Point(a.location),
        zoomValue:a.minZoom,
        /*  1-1
        CI:a.CI,
        */
    });

    var mainFeaturePoint = new ol.Feature({
        geometry: new ol.geom.Point(a.location),
        zoomValue:a.minZoom,
    });

    mainFeature.setStyle(createLabelStyle(mainFeature));
    mainFeaturePoint.setStyle(createCircleStyle(mainFeaturePoint));

    var vectorSource = new ol.source.Vector({
        features: [mainFeaturePoint,mainFeature]
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        minZoom:a.minZoom,
    });

    if(window.location.href.includes('index.html')){
        map.addLayer(vectorLayer);
    }
    function createLabelStyle(){
        return new ol.style.Style({
            text: new ol.style.Text({
                textAlign: 'left',
                textBaseline: 'middle',
                font: a.fontWeight+' '+a.fontSize+' '+'Font1',
                text: a.title,
                offsetX:a.offsetX||7,
                offsetY:a.offsetX||1,
                fill: new ol.style.Fill({
                    color: a.contentColor
                }),
                stroke: new ol.style.Stroke({
                    color: a.outlineColor,
                    width: a.strokeWitdh||1,
                })
            })
        });
    }
    function createCircleStyle(){
        return new ol.style.Style({
            image:new ol.style.Circle({
                radius:a.pointSize,
                fill: new ol.style.Fill({
                    color: a.contentColor,
                }),
                stroke: new ol.style.Stroke({
                    color: a.outlineColor,
                    width: a.strokeWitdh||1,
                })
            })
        });
    }
}

var Point_ChisanIRC= {
    title:'芝南国际赛马场',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[282, 218.9],
    minZoom:4.8,
    pointSize:4,
    pointContent: PointContent,
}
Point_ChisanIRC.pointContent(Point_ChisanIRC);

var Point_Chisantin= {
    title:'意景',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[272.1, 162.5],
    minZoom:4.6,
    pointSize:4,
    pointContent: PointContent,
}
Point_Chisantin.pointContent(Point_Chisantin);

var Point_ChisanSiyi= {
    title:'芝山寺坮小学',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[281.1, 176.9],
    minZoom:5.6,
    pointSize:4,
    pointContent: PointContent,
}
Point_ChisanSiyi.pointContent(Point_ChisanSiyi);

var Point_WestAroundCenterVilla= {
    title:'西都环宫',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[309.504147703307,195.4597918921068],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_WestAroundCenterVilla.pointContent(Point_WestAroundCenterVilla);

var Point_BinjiangXiaohuiguan= {
    title:'滨江小会馆',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[318.4462529910775,198.21852545982728],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_BinjiangXiaohuiguan.pointContent(Point_BinjiangXiaohuiguan);

var Point_HenjiangMHS= {
    title:'横江现代高校',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[291.81177707148015,198.80672570601408],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_HenjiangMHS.pointContent(Point_HenjiangMHS);

var Point_ShyampooHarbour= {
    title:'香蒲埠头',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[326.10547261339326,177.11831608249727],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_ShyampooHarbour.pointContent(Point_ShyampooHarbour);

var Point_TiandaiRuins= {
    title:'天代桥遗址',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[333.7223400372845,143.66030069360886],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_TiandaiRuins.pointContent(Point_TiandaiRuins);

var Point_TiandaiTemple= {
    title:'天代寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[328.89220452356636,142.62527123714304],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_TiandaiTemple.pointContent(Point_TiandaiTemple);

var Point_TiandaiCityMuseum= {
    title:'天代桥历史展厅',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[328.54719421729715,139.94186229344592],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_TiandaiCityMuseum.pointContent(Point_TiandaiCityMuseum);

var Point_KimhodiNS= {
    title:'金虎堤邻里小学',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[317.2385422402878,138.90683283698007],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_KimhodiNS.pointContent(Point_KimhodiNS);

var Point_SihaiR= {
    title:'四海饭店',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[303.5914908946796,133.6550178975616],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_SihaiR.pointContent(Point_SihaiR);

var Point_GanchiCI= {
    title:'干支首都醫療',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[304.4348475525676,149.33379432755677],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_GanchiCI.pointContent(Point_GanchiCI);

var Point_WestChisanSaltern= {
    title:'芝西盐场',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[150.9316894889438,212.01471543004965],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_WestChisanSaltern.pointContent(Point_WestChisanSaltern);

var Point_HyichiHotel= {
    title:'西栀酒店',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[172.77315442478871,218.29655486538115],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_HyichiHotel.pointContent(Point_HyichiHotel);

var Point_WestChisanJS= {
    title:'芝西小学',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[173.86844956884076,210.88720622894976],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_WestChisanJS.pointContent(Point_WestChisanJS);

var Point_ChisanPeach= {
    title:'芝西蜜桃棒球馆',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[168.4564044204513,203.89665139412799],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_ChisanPeach.pointContent(Point_ChisanPeach);

var Point_AnCompany01= {
    title:'An Company\n安氏科技',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[159.75847629768083,203.02685833607345],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
    CI:pointInfo.Point_AnCompany01
}
Point_AnCompany01.pointContent(Point_AnCompany01);

var Point_LBRehabilitationCentre= {
    title:'湖水桥康复中心',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[190.93077509874794,185.11837757589328],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}