function PointContent(a){
    var mainFeature = new ol.Feature({
        geometry: new ol.geom.Point(a.location),
        zoomValue:a.minZoom,
        CI:a.CI,
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



