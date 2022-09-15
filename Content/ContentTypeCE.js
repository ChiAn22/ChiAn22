//this's Capital Expressway of Map

function CE_Content(a){
    var mainFeature = new ol.Feature({
        geometry: new ol.geom.Point(a.location),
        zoomValue:a.minZoom,
    });

    var mainFeatureIco = new ol.Feature({
        geometry: new ol.geom.Point(a.location),
        zoomValue:a.minZoom,
    });

    mainFeature.setStyle(createLabelStyle(mainFeature));
    mainFeatureIco.setStyle(createIcoStyle(mainFeatureIco));

    var vectorSource = new ol.source.Vector({
        features: [mainFeatureIco,mainFeature]
    });

    var vectorLayer = new ol.layer.Vector({
        className:'CE_Layer',
        source: vectorSource,
        minZoom:a.minZoom,
    });

    map.addLayer(vectorLayer);
    function createLabelStyle(){
        return new ol.style.Style({
            text: new ol.style.Text({
                textAlign: 'left',
                textBaseline: 'middle',
                font: a.fontWeight+' '+a.fontSize+' '+'Font1',
                text: a.title,
                offsetX:a.offsetX||11,
                offsetY:a.offsetY||1,
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
    function createIcoStyle(){
        return new ol.style.Style({
            image:new ol.style.Icon({
                anchor: [0.5, 0.5],
                crossOrigin: 'anonymous',
                src:a.icoSrc,
                scale:a.icoScale||0.06,
            })
        });
    }
}

var CE_Icon={
    Chisantin:'/CapitalCompass/Content/IconContent/Chisantin.ico',
}

//
    var Metro_1_SC2= {
        title:'芝南',
        fontSize:'14px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[258.7, 235.4],
        minZoom:4.2,
        offsetX: 13,
        icoScale:0.07,
        icoSrc:CE_Icon.Chisantin,
        CE_Content: CE_Content,
    }
    Metro_1_SC2.CE_Content(Metro_1_SC2);
