function IcoContent(a){
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

var Copyright_Icon={
    Chisantin:'/CapitalCompass/Content/IconContent/Chisantin.ico',
    Asberrus:'/CapitalCompass/Content/IconContent/Asberrus.ico',
    SCDynamite:'/CapitalCompass/Content/IconContent/SCDynamite.ico',
    AfterCoye:'/CapitalCompass/Content/IconContent/AfterCoye.ico',
    TAHOFU:'/CapitalCompass/Content/IconContent/Tahofu.ico',
}
var MainPackage_Icon={
    Attention:'/CapitalCompass/Content/IconContent/Other/Alert.ico',
    RedSign:'/CapitalCompass/Content/IconContent/Other/Alert2.ico',
    Metro:'/CapitalCompass/Content/IconContent/Other/Metro.ico',
    Metro_C:'/CapitalCompass/Content/IconContent/Other/Metro/C.ico',
    Metro_E:'/CapitalCompass/Content/IconContent/Other/Metro/E.ico',
    Metro_W:'/CapitalCompass/Content/IconContent/Other/Metro/W.ico',
}



//首都捷运站标
//芝一线
    var Metro_C1_SC= {
        title:'芝南',
        fontSize:'14px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[258.7, 231.4],
        minZoom:4.2,
        offsetX: 13,
        icoScale:0.07,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C1_SC.icoContent(Metro_C1_SC);
    var Metro_C1_HT= {
        title:'商务都会',
        fontSize:'14px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[312.2, 197.6],
        minZoom:4.2,
        offsetX: 13,
        icoScale:0.07,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C1_HT.icoContent(Metro_C1_HT);
    var Metro_C1_TGCMAC= {
        title:'大港藝術中心',
        fontSize:'14px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[347.4, 79.3],
        minZoom:4.2,
        offsetX: 13,
        icoScale:0.07,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C1_TGCMAC.icoContent(Metro_C1_TGCMAC);
        var Metro_C1_TGCMAC_C1= {
            title:'换乘',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[349.011620018127,80.41787600110787],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_C,
            icoContent: IcoContent,
        }
        Metro_C1_TGCMAC_C1.icoContent(Metro_C1_TGCMAC_C1);
        var Metro_C1_TGCMAC_C2= {
            title:'换乘',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[345.793164294233,79.83409294056926],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_C,
            icoContent: IcoContent,
        }
        Metro_C1_TGCMAC_C2.icoContent(Metro_C1_TGCMAC_C2);
        var Metro_C1_TGCMAC_E1= {
            title:'换乘',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[345.6230331277285,80.56936894689619],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_E,
            icoContent: IcoContent,
        }
        Metro_C1_TGCMAC_E1.icoContent(Metro_C1_TGCMAC_E1);
        var Metro_C1_TGCMAC_E1= {
            title:'换乘',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[349.6058225797056,78.09986292873656],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_E,
            icoContent: IcoContent,
        }
        Metro_C1_TGCMAC_E1.icoContent(Metro_C1_TGCMAC_E1);
    var Metro_C1_RC= {
        title:'落芝',
        fontSize:'14px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[221, 93.5],
        minZoom:4.2,
        offsetX: 13,
        icoScale:0.07,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C1_RC.icoContent(Metro_C1_RC);
        var Metro_C1_RC_ER= {
            title:'乘换直快',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[218.85565803344582,93.27310242334786],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_C,
            icoContent: IcoContent,
        }
        Metro_C1_RC_ER.icoContent(Metro_C1_RC_ER);
    var Metro_C1_CCW= {
        title:'芝港西滩',
        fontSize:'14px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[151, 185.6],
        minZoom:4.2,
        offsetX: 13,
        icoScale:0.07,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C1_CCW.icoContent(Metro_C1_CCW);
        var Metro_C1_CCW_W1= {
            title:'换乘',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[150.81048146725144,187.21749727135267],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_W,
            icoContent: IcoContent,
        }
        Metro_C1_CCW_W1.icoContent(Metro_C1_CCW_W1);
        var Metro_C1_CCW_W2= {
            title:'换乘',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[150.435089720169,184.35142929437677],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_W,
            icoContent: IcoContent,
        }
        Metro_C1_CCW_W2.icoContent(Metro_C1_CCW_W2);
        var Metro_C1_CCW_C1= {
            title:'换乘',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[151.26712422046452,184.2022295453851],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_C,
            icoContent: IcoContent,
        }
        Metro_C1_CCW_C1.icoContent(Metro_C1_CCW_C1);
        var Metro_C1_CCW_C2= {
            title:'换乘',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[151.67318370668525,187.04232987476175],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_C,
            icoContent: IcoContent,
        }
        Metro_C1_CCW_C2.icoContent(Metro_C1_CCW_C2);
    var Metro_C1_CSM= {
        title:'芝山下',
        fontSize:'14px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[226.7, 224.4],
        minZoom:4.2,
        offsetX: 13,
        icoScale:0.07,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C1_CSM.icoContent(Metro_C1_CSM);
        var Metro_C1_CSM_E1= {
            title:'换乘',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[226.53407507860004,225.6783189102798],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_E,
            icoContent: IcoContent,
        }
        Metro_C1_CSM_E1.icoContent(Metro_C1_CSM_E1);
        var Metro_C1_CSM_E2= {
            title:'换乘',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[227.48011620826648,223.28156481919802],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_E,
            icoContent: IcoContent,
        }
        Metro_C1_CSM_E2.icoContent(Metro_C1_CSM_E2);
        var Metro_C1_CSM_C1= {
            title:'换乘',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[225.83982442925836,224.1135967638582],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_C,
            icoContent: IcoContent,
        }
        Metro_C1_CSM_C1.icoContent(Metro_C1_CSM_C1);
        var Metro_C1_CSM_C2= {
            title:'换乘',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[228.46095644325536,225.28272345624708],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_C,
            icoContent: IcoContent,
        }
        Metro_C1_CSM_C2.icoContent(Metro_C1_CSM_C2);
    var Metro_C2_CT= {
        title:'庭馆',
        fontSize:'14px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[271.9,149.2],
        minZoom:4.2,
        offsetX: 13,
        icoScale:0.07,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_CT.icoContent(Metro_C2_CT);
    var Metro_C2_001= {
        title:'春庭街',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[243,229.4],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_001.icoContent(Metro_C2_001);
    var Metro_C2_002= {
        title:'芝南现代',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[266.8628540672158,228.29786309549303],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_002.icoContent(Metro_C2_002);
        var Metro_C2_002_ER= {
            title:'乘换直快',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[265.44682675380767,229.23168311113193],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_C,
            icoContent: IcoContent,
        }
        Metro_C2_002_ER.icoContent(Metro_C2_002_ER);
    var Metro_C2_003= {
        title:'臣滨',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[295.0575398995236,219.13877364891877],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_003.icoContent(Metro_C2_003);
    var Metro_C2_004= {
        title:'迂回桥',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[308.43103934559775,209.13469895085464],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_004.icoContent(Metro_C2_004);
    var Metro_C2_005= {
        title:'香蒲',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[319.9982463672925,189.96022675276478],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_005.icoContent(Metro_C2_005);
        var Metro_C2_005_ER= {
            title:'乘换直快',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[319.1493742188186,190.38714013794845],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_C,
            icoContent: IcoContent,
        }
        Metro_C2_005_ER.icoContent(Metro_C2_005_ER);
    var Metro_C2_006= {
        title:'芝江沿',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[325.37979731632004,166.65471471564115],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_006.icoContent(Metro_C2_006);
    var Metro_C2_007= {
        title:'天代桥',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[326.59557264341004,149.13021839684993],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_007.icoContent(Metro_C2_007);
    var Metro_C2_008= {
        title:'戊寅',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[318.7451553167882,134.50621176678425],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_008.icoContent(Metro_C2_008);
    var Metro_C2_009= {
        title:'玉兔亭',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[317.8867854112883,116.13274851328272],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_009.icoContent(Metro_C2_009);
    var Metro_C2_010= {
        title:'芝江公园',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[340.6691067174509,105.15605593870339],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_010.icoContent(Metro_C2_010);
    var Metro_C2_011= {
        title:'首都大桥',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[354.28575963883816,75.28278312368457],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_011.icoContent(Metro_C2_011);
        var Metro_C2_011_ER= {
            title:'乘换直快',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[352.1572848836414,76.31028805613286],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_C,
            icoContent: IcoContent,
        }
        Metro_C2_011_ER.icoContent(Metro_C2_011_ER);
    var Metro_C2_012= {
        title:'芝山南天际',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[326.42354056558514,85.62976633369058],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_012.icoContent(Metro_C2_012);
    var Metro_C2_013= {
        title:'善埔',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[300.9270488574284,85.07398639365091],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_013.icoContent(Metro_C2_013);
    var Metro_C2_023= {
        title:'轻芝园',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[281.8516696315644,85.1087222258137],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_023.icoContent(Metro_C2_023);
    var Metro_C2_014= {
        title:'夜公园',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[260.7020047967264,79.95455358938088],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_014.icoContent(Metro_C2_014);
    var Metro_C2_015= {
        title:'夜埗',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[242.43067881082615,90.58388187944078],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_015.icoContent(Metro_C2_015);
    var Metro_C2_016= {
        title:'潮汐寺',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[201.04046797288305,89.71045029762851],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_016.icoContent(Metro_C2_016);
    var Metro_C2_017= {
        title:'黄家桥',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[182.22691589214946,96.98243431582884],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_017.icoContent(Metro_C2_017);
    var Metro_C2_018= {
        title:'西首都气象厅',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[160.8640544657155,98.44136046805819],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_018.icoContent(Metro_C2_018);
    var Metro_C2_019= {
        title:'落绒',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[163.53875196977364,118.5189802034249],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_019.icoContent(Metro_C2_019);
        var Metro_C2_019_ER= {
            title:'乘换直快',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[165.02078939139167,119.91004806218254],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_C,
            icoContent: IcoContent,
        }
        Metro_C2_019_ER.icoContent(Metro_C2_019_ER);
    var Metro_C2_020= {
        title:'滨谷',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[168.8186806139126,135.50032000396635],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_020.icoContent(Metro_C2_020);
    var Metro_C2_021= {
        title:'台堡',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[151.0683974108022,145.88649415616914],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_021.icoContent(Metro_C2_021);
    var Metro_C2_022= {
        title:'水乐木里',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[149.99156938762448,163.21994008534745],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_022.icoContent(Metro_C2_022);
    var Metro_C2_024= {
        title:'南水',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[150.33893300960045,177.9828953444124],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_024.icoContent(Metro_C2_024);
        var Metro_C2_024_ER= {
            title:'乘换直快',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[150.85257446923356,181.25512230546792],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_C,
            icoContent: IcoContent,
        }
        Metro_C2_024_ER.icoContent(Metro_C2_024_ER);
    var Metro_C2_025= {
        title:'西芝山埗',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[164.53161827264722,212.91631492532383],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_025.icoContent(Metro_C2_025);
    var Metro_C2_026= {
        title:'黄晴',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[190.5380898526637,217.466779168261],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_026.icoContent(Metro_C2_026);
    var Metro_C2_027= {
        title:'喜谷',
        fontSize:'12px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[215.1345021457092,220.48884294446918],
        minZoom:4.8,
        icoSrc:MainPackage_Icon.Metro,
        icoContent: IcoContent,
    }
    Metro_C2_027.icoContent(Metro_C2_027);
        var Metro_C2_027_ER= {
            title:'乘换直快',
            fontSize:'10px',
            fontWeight:'bold',
            contentColor:'#6b6b6b',
            outlineColor:'#ffffff',
            location:[220.79604460375555,222.33050982222068],
            minZoom:7.0,
            icoSrc:MainPackage_Icon.Metro_C,
            icoContent: IcoContent,
        }
        Metro_C2_027_ER.icoContent(Metro_C2_027_ER);

//注意内容
var Alert_Chisan_001= {
    title:'水位预警',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[327.9,185.8],
    minZoom:5.8,
    icoSrc:MainPackage_Icon.Attention,
    icoContent: IcoContent,
}
Alert_Chisan_001.icoContent(Alert_Chisan_001);
var Alert_Chisan_002= {
    title:'急弯区间\n减速慢行',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[300.5039543200644,192.2146070561517],
    minZoom:6.2,
    icoSrc:MainPackage_Icon.RedSign,
    icoContent: IcoContent,
}
Alert_Chisan_002.icoContent(Alert_Chisan_002);
var Alert_Chisan_003= {
    title:'山体滑坡',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[188.37241886498197,228.26074892226032],
    minZoom:5.8,
    icoSrc:MainPackage_Icon.Attention,
    icoContent: IcoContent,
}
Alert_Chisan_003.icoContent(Alert_Chisan_003);
var Alert_Chisan_004= {
    title:'山体滑坡',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[136.63382724794752,229.68215646337185],
    minZoom:6.2,
    icoSrc:MainPackage_Icon.Attention,
    icoContent: IcoContent,
}
Alert_Chisan_004.icoContent(Alert_Chisan_004);
var Alert_Chisan_005= {
    title:'山体滑坡',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[127.6046494243175,236.3668599981457],
    minZoom:6.8,
    icoSrc:MainPackage_Icon.Attention,
    icoContent: IcoContent,
}
Alert_Chisan_005.icoContent(Alert_Chisan_005);
var Alert_Chongnin_001= {
    title:'急弯区间\n减速慢行',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[406.8082616204191,70.06402609862995],
    minZoom:6.2,
    icoSrc:MainPackage_Icon.RedSign,
    icoContent: IcoContent,
}
Alert_Chongnin_001.icoContent(Alert_Chongnin_001);
var Alert_Chongnin_002= {
    title:'急弯区间\n减速慢行',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[503.5618178119735,80.69025052476901],
    minZoom:6.2,
    icoSrc:MainPackage_Icon.RedSign,
    icoContent: IcoContent,
}
Alert_Chongnin_002.icoContent(Alert_Chongnin_002);
var Alert_Chongnin_003= {
    title:'急弯区间\n减速慢行',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[463.8266724985777,53.010275443356434],
    minZoom:6.2,
    icoSrc:MainPackage_Icon.RedSign,
    icoContent: IcoContent,
}
Alert_Chongnin_003.icoContent(Alert_Chongnin_003);

//商业品牌
//芝餐厅
    var Ico_Chisantin001= {
        title:'芝餐厅',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[282.3, 160.2],
        minZoom:5.2,
        icoSrc:Copyright_Icon.Chisantin,
        icoContent: IcoContent,
    }
    Ico_Chisantin001.icoContent(Ico_Chisantin001);
    var Ico_Chisantin002= {
        title:'芝餐厅',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[319.6, 145],
        minZoom:5.2,
        icoSrc:Copyright_Icon.Chisantin,
        icoContent: IcoContent,
    }
    Ico_Chisantin002.icoContent(Ico_Chisantin002);
    var Ico_Chisantin003= {
        title:'芝餐厅',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[295.6, 136.6],
        minZoom:5.2,
        icoSrc:Copyright_Icon.Chisantin,
        icoContent: IcoContent,
    }
    Ico_Chisantin003.icoContent(Ico_Chisantin003);
    var Ico_Chisantin004= {
        title:'芝餐厅',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[271.2, 146.1],
        minZoom:5.2,
        icoSrc:Copyright_Icon.Chisantin,
        icoContent: IcoContent,
    }
    Ico_Chisantin004.icoContent(Ico_Chisantin004);
    var Ico_Chisantin005= {
        title:'芝餐厅',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[260.5, 156.2],
        minZoom:5.2,
        icoSrc:Copyright_Icon.Chisantin,
        icoContent: IcoContent,
    }
    Ico_Chisantin005.icoContent(Ico_Chisantin005);
    var Ico_Chisantin006= {
        title:'芝餐厅',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[320.3, 194.7],
        minZoom:5.2,
        icoSrc:Copyright_Icon.Chisantin,
        icoContent: IcoContent,
    }
    Ico_Chisantin006.icoContent(Ico_Chisantin006);
    var Ico_Chisantin007= {
        title:'芝餐厅',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[188.1, 213.1],
        minZoom:5.2,
        icoSrc:Copyright_Icon.Chisantin,
        icoContent: IcoContent,
    }
    Ico_Chisantin007.icoContent(Ico_Chisantin007);
    var Ico_Chisantin008= {
        title:'芝餐厅',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[227.5, 185.8],
        minZoom:5.2,
        icoSrc:Copyright_Icon.Chisantin,
        icoContent: IcoContent,
    }
    Ico_Chisantin008.icoContent(Ico_Chisantin008);
    var Ico_Chisantin009= {
        title:'芝餐厅',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[350.1, 88.8],
        minZoom:5.8,
        icoSrc:Copyright_Icon.Chisantin,
        icoContent: IcoContent,
    }
    Ico_Chisantin009.icoContent(Ico_Chisantin009);

//阿思贝璐丝
    var Ico_Asberrus001= {
        title:'阿思贝璐丝·望留',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[296.8, 250.8],
        minZoom:5.2,
        icoSrc:Copyright_Icon.Asberrus,
        icoContent: IcoContent,
    }
    Ico_Asberrus001.icoContent(Ico_Asberrus001);
    var Ico_Asberrus002= {
        title:'阿思贝璐丝·芝港心',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[246.1, 179.9],
        minZoom:5.2,
        icoSrc:Copyright_Icon.Asberrus,
        icoContent: IcoContent,
    }
    Ico_Asberrus002.icoContent(Ico_Asberrus002);
    var Ico_Asberrus003= {
        title:'阿思贝璐丝·落芝',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[223.3, 106.1],
        minZoom:5.2,
        icoSrc:Copyright_Icon.Asberrus,
        icoContent: IcoContent,
    }
    Ico_Asberrus003.icoContent(Ico_Asberrus003);
    var Ico_Asberrus004= {
        title:'阿思贝璐丝·横江香蒲',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[319.7, 195.6],
        minZoom:5.2,
        icoSrc:Copyright_Icon.Asberrus,
        icoContent: IcoContent,
    }
    Ico_Asberrus004.icoContent(Ico_Asberrus004);
    var Ico_Asberrus005= {
        title:'阿思贝璐丝·大港藝術中心',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[347.9,84.8],
        minZoom:5.8,
        icoSrc:Copyright_Icon.Asberrus,
        icoContent: IcoContent,
    }
    Ico_Asberrus005.icoContent(Ico_Asberrus005);

//芝南屋
    var Ico_SCDynamite001= {
        title:'芝南屋·大商',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[273.8, 246.6],
        minZoom:5.2,
        icoSrc:Copyright_Icon.SCDynamite,
        icoContent: IcoContent,
    }
    Ico_SCDynamite001.icoContent(Ico_SCDynamite001);
    var Ico_SCDynamite002= {
        title:'芝南屋·永芝',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[269.1, 214.3],
        minZoom:5.2,
        icoSrc:Copyright_Icon.SCDynamite,
        icoContent: IcoContent,
    }
    Ico_SCDynamite002.icoContent(Ico_SCDynamite002);
    var Ico_SCDynamite003= {
        title:'芝南屋·芝港心',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[246.30074781967826,168.69351623762785],
        minZoom:5.2,
        icoSrc:Copyright_Icon.SCDynamite,
        icoContent: IcoContent,
    }
    Ico_SCDynamite003.icoContent(Ico_SCDynamite003);

//阿福特可叶
    var Ico_AfterCoye001= {
        title:'After Coye',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[276.8, 236.4],
        minZoom:5.0,
        icoSrc:Copyright_Icon.AfterCoye,
        icoContent: IcoContent,
    }
    Ico_AfterCoye001.icoContent(Ico_AfterCoye001);
    var Ico_AfterCoye002= {
        title:'After Coye',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[313.1, 187.1],
        minZoom:5.8,
        icoSrc:Copyright_Icon.AfterCoye,
        icoContent: IcoContent,
    }
    Ico_AfterCoye002.icoContent(Ico_AfterCoye002);
    var Ico_AfterCoye003= {
        title:'After Coye',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[245.7,173.4],
        minZoom:5.8,
        icoSrc:Copyright_Icon.AfterCoye,
        icoContent: IcoContent,
    }
    Ico_AfterCoye003.icoContent(Ico_AfterCoye003);

//大获福
    var Ico_TAHOFU001= {
        title:'大获福',
        fontSize:'10px',
        fontWeight:'bold',
        contentColor:'#6b6b6b',
        outlineColor:'#ffffff',
        location:[254.1, 133],
        minZoom:5.2,
        icoSrc:Copyright_Icon.TAHOFU,
        icoContent: IcoContent,
    }
    Ico_TAHOFU001.icoContent(Ico_TAHOFU001);

