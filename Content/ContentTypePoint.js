function PointContent(a){
    var mainFeature = new ol.Feature({
        geometry: new ol.geom.Point(a.location),
    });

    var mainFeaturePoint = new ol.Feature({
        geometry: new ol.geom.Point(a.location),
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

    map.addLayer(vectorLayer);
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
Point_LBRehabilitationCentre.pointContent(Point_LBRehabilitationCentre);

var Point_RanPark= {
    title:'冉公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[201.6814576052893,197.9677173608917],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_RanPark.pointContent(Point_RanPark);

var Point_HeninTemple= {
    title:'褐宁寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[198.7196108204704,207.72439049098486],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_HeninTemple.pointContent(Point_HeninTemple);

var Point_HuangtsingPark= {
    title:'黄晴公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[187.59416168751807,219.1815939691933],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_HuangtsingPark.pointContent(Point_HuangtsingPark);

var Point_CRHS= {
    title:'皇家园林前高校',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[185.85189835164755,221.67883764086054],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_CRHS.pointContent(Point_CRHS);

var Point_CapitalGrassGraden= {
    title:'首都绿地花园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[191.05140004601907,169.5076008742236],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_CapitalGrassGraden.pointContent(Point_CapitalGrassGraden);

var Point_AnranGarden= {
    title:'安然纪念厅花园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[191.36992513261254,164.79343105073215],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_AnranGarden.pointContent(Point_AnranGarden);

var Point_AnranPark= {
    title:'安然公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[191.43362917786982,158.7414544054559],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_AnranPark.pointContent(Point_AnranPark);

var Point_CapitalPoliticalHall= {
    title:'首都政厅',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[198.75970616952,167.7238608753308],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_CapitalPoliticalHall.pointContent(Point_CapitalPoliticalHall);

var Point_CapitalOfficialOfChisan= {
    title:'首都公式总部',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[197.9315438605612,158.6777479300451],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_CapitalOfficialOfChisan.pointContent(Point_CapitalOfficialOfChisan);

var Point_SyiremoriMarket= {
    title:'水乐木里渔市场',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[162.51155277327342,157.21253301774576],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_SyiremoriMarket.pointContent(Point_SyiremoriMarket);

var Point_RochePark= {
    title:'洛希公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[151.61799456876088,157.08512492723122],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_RochePark.pointContent(Point_RochePark);

var Point_Enoumikouen= {
    title:'油画海遗址公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[149.06979023078256,168.10609486748865],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_Enoumikouen.pointContent(Point_Enoumikouen);

var Point_SaltMuseum= {
    title:'盐矿博物馆',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[149.1334967061934,164.8571399562965],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_SaltMuseum.pointContent(Point_SaltMuseum);

var Point_KichunTemple= {
    title:'杞醇寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[179.64820097391078,185.24274428320282],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_KichunTemple.pointContent(Point_KichunTemple);

var Point_CentralParkOfChisanCenter= {
    title:'芝港心中央公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[240.09770391357034,190.2184081231344],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_CentralParkOfChisanCenter.pointContent(Point_CentralParkOfChisanCenter);

var Point_AreaLeadersOfChisan= {
    title:'芝港区域行政厅',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[252.48935645521402,187.60489629449975],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_AreaLeadersOfChisan.pointContent(Point_AreaLeadersOfChisan);

var Point_ChisanTheater= {
    title:'芝山大剧院',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[235.54658857675435,186.3432011067717],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_ChisanTheater.pointContent(Point_ChisanTheater);

var Point_HuangJiafu= {
    title:'芝中黄家府',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[242.35073164841464,181.74702418390456],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_HuangJiafu.pointContent(Point_HuangJiafu);

var Point_NCMAS= {
    title:'新芝山医学院\n附属研究院',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[235.05092144373435,179.35881169090686],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_NCMAS.pointContent(Point_NCMAS);

var Point_RuinedTemple= {
    title:'火烧寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[255.50841568261387,174.40215239317314],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_RuinedTemple.pointContent(Point_RuinedTemple);

var Point_ChisanBankBuilding= {
    title:'芝山银行大厦',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[246.4061815711344,177.51133135482777],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_ChisanBankBuilding.pointContent(Point_ChisanBankBuilding);

var Point_DSPark= {
    title:'灾害纪念公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[258.12192579232476,182.19762973087342],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_DSPark.pointContent(Point_DSPark);

var Point_ShijiaTower= {
    title:'世家天塔',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[260.8706189412653,171.8337021505896],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_ShijiaTower.pointContent(Point_ShijiaTower);

var Point_OBBuilding= {
    title:'橘子湾大厦',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[248.52402970459653,201.0780028364382],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_OBBuilding.pointContent(Point_OBBuilding);

var Point_CapitalCourtHallOfChisan= {
    title:'芝港区法厅',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[263.07858680898227,189.45238006842635],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_CapitalCourtHallOfChisan.pointContent(Point_CapitalCourtHallOfChisan);

var Point_NCM= {
    title:'新芝山医学院',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[232.16704697448787,180.30508608981947],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_NCM.pointContent(Point_NCM);

var Point_FootbridgeOfWestChisan= {
    title:'人行天桥',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[152.53495217845546,200.90502578776753],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_FootbridgeOfWestChisan.pointContent(Point_FootbridgeOfWestChisan);

var Point_TsingranCI= {
    title:'轻冉首都醫療',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[188.62642435254207,187.4403122984649],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_TsingranCI.pointContent(Point_TsingranCI);

var Point_MushiNorthTower= {
    title:'木实北大厦',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[201.41065859775068,180.10327309018874],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_MushiNorthTower.pointContent(Point_MushiNorthTower);

var Point_CISOfCapital= {
    title:'首都综合监管厅',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[197.29746934028373,177.65759476766135],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_CISOfCapital.pointContent(Point_CISOfCapital);

var Point_EinhyiMTC= {
    title:'萤喜微波电塔',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[215.13981280828423,211.95269420535638],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_EinhyiMTC.pointContent(Point_EinhyiMTC);

var Point_No2LiveHallOfChisan= {
    title:'芝山2号演播厅',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[216.3070681303601,214.39837464823088],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_No2LiveHallOfChisan.pointContent(Point_No2LiveHallOfChisan);

var Point_SMCJS= {
    title:'芝山下小学',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[212.58296468703406,224.01434172164477],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_SMCJS.pointContent(Point_SMCJS);

var Point_IndoorStadiumOfCapitalWest= {
    title:'西首都室内\n体育竞技馆',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[220.56859556203793,216.0078025967711],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_IndoorStadiumOfCapitalWest.pointContent(Point_IndoorStadiumOfCapitalWest);

var Point_HSOfChuntin= {
    title:'芝南春庭高校',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[232.55277788009278,234.17430284576494],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_HSOfChuntin.pointContent(Point_HSOfChuntin);

var Point_CAECOfSouthChi= {
    title:'芝南会展中心',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[247.342781726942,228.89555595872298],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_CAECOfSouthChi.pointContent(Point_CAECOfSouthChi);

var Point_BankUnionOfCapital= {
    title:'首都银协',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[269.646680023342,225.47150490449485],
    minZoom:5.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_BankUnionOfCapital.pointContent(Point_BankUnionOfCapital);

var Point_SouthChiUrbanPoliceOfCapital= {
    title:'首都察院',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[265.0812774082857,231.84404597908892],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_SouthChiUrbanPoliceOfCapital.pointContent(Point_SouthChiUrbanPoliceOfCapital);

var Point_JSOfSouthChi= {
    title:'芝南小学',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[273.9743012144031,227.32619892318036],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_JSOfSouthChi.pointContent(Point_JSOfSouthChi);

var Point_SouthChi_Building001= {
    title:'商圈第一大厦',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[276.33433971181483,242.60834102090183],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_SouthChi_Building001.pointContent(Point_SouthChi_Building001);

var Point_RiverVisionOfCA= {
    title:'全港芝江视觉展望台',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[311.6240028024882,212.0261341996383],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_RiverVisionOfCA.pointContent(Point_RiverVisionOfCA);

var Point_YuhuiPark= {
    title:'迂回桥公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[311.13731846523694,205.23814761480406],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_YuhuiPark.pointContent(Point_YuhuiPark);

var Point_LightingHomeOfHenjiang= {
    title:'Lighting Home',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[296.8689922879459,203.2657907235676],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_LightingHomeOfHenjiang.pointContent(Point_LightingHomeOfHenjiang);

var Point_CLROfChisan= {
    title:'首都线道',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[285.87189397648984,193.24271145696562],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_CLROfChisan.pointContent(Point_CLROfChisan);

var Point_WestChisanUniversity= {
    title:'芝大西院',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[267.7743680875209,120.96130671564865],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_WestChisanUniversity.pointContent(Point_WestChisanUniversity);

var Point_EastChisanUniversity= {
    title:'芝大東院',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[278.33785241726105,113.76317667518967],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_EastChisanUniversity.pointContent(Point_EastChisanUniversity);

var Point_LectureHallOfChisan= {
    title:'首都学术报告总厅',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[276.09427932501245,116.19371656916633],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_LectureHallOfChisan.pointContent(Point_LectureHallOfChisan);

var Point_ChisanUniversity= {
    title:'芝山大学',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[271.32668917853016,118.5775107508922],
    minZoom:4.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_ChisanUniversity.pointContent(Point_ChisanUniversity);

var Point_MAMAOfChisan= {
    title:'MAMA Sculpture',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[271.37343132471983,108.01402820418267],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_MAMAOfChisan.pointContent(Point_MAMAOfChisan);

var Point_FROfSomonrenin= {
    title:'松门乐宁故居',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[265.390573905795,111.80005467704859],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_FROfSomonrenin.pointContent(Point_FROfSomonrenin);

var Point_ChisanArtRoom= {
    title:'芝山美术厅',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[260.57624161312305,109.93041162219518],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_ChisanArtRoom.pointContent(Point_ChisanArtRoom);

var Point_SomonreninPark= {
    title:'松门乐宁公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[258.42615281325385,107.21942776623328],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_SomonreninPark.pointContent(Point_SomonreninPark);

var Point_SatelliteCenterOfChisan= {
    title:'西首都卫星中心',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[154.39844658565548,95.86849398883922],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_SatelliteCenterOfChisan.pointContent(Point_SatelliteCenterOfChisan);

var Point_CWMO= {
    title:'西首都气象厅',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[152.96019154526346,99.25033503804588],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_CWMO.pointContent(Point_CWMO);

var Point_SoutheastBeacon= {
    title:'西南灯塔',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[161.91294163411206,85.96844053862745],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_SoutheastBeacon.pointContent(Point_SoutheastBeacon);

var Point_RyoRongPark= {
    title:'朱蕉田园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[170.23149372584868,110.61313052593859],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_RyoRongPark.pointContent(Point_RyoRongPark);

var Point_Taipu03= {
    title:'灾害预警设施',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[147.84352584916627,129.82740102832008],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_Taipu03.pointContent(Point_Taipu03);

var Point_TaipuPark= {
    title:'台堡公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[148.3380657698952,135.7618869371495],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_TaipuPark.pointContent(Point_TaipuPark);

var Point_Taipu02= {
    title:'台堡消浪块遗址',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[148.3380657698952,142.59553930052166],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_Taipu02.pointContent(Point_Taipu02);

var Point_HarbourCafeInSouthcoast= {
    title:'Harbour Cafe',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[150.76379507959214,149.57384246393235],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_HarbourCafeInSouthcoast.pointContent(Point_HarbourCafeInSouthcoast);

var Point_MaoriMuseum= {
    title:'毛利人文化厅',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[291.7946954646367,87.6041886676669],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_MaoriMuseum.pointContent(Point_MaoriMuseum);

var Point_SouthSkylineParkOfChisan= {
    title:'南天际线公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[283.7034973388209,69.87854822395099],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_SouthSkylineParkOfChisan.pointContent(Point_SouthSkylineParkOfChisan);

var Point_NightParkOfShitin= {
    title:'汐庭夜公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[252.70290145947996,81.93433690592467],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_NightParkOfShitin.pointContent(Point_NightParkOfShitin);

var Point_CruiseshipMuseum= {
    title:'船舶纪念馆',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[243.5344254608211,87.30372031967212],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_CruiseshipMuseum.pointContent(Point_CruiseshipMuseum);

var Point_Hitinyapo= {
    title:'汐庭夜埗',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[237.35456780290147,88.87401114850815],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_Hitinyapo.pointContent(Point_Hitinyapo);

var Point_CasinoRochi= {
    title:'落芝赌场',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[219.6746523738742,92.31852137236413],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_CasinoRochi.pointContent(Point_CasinoRochi);

var Point_ElmKoen= {
    title:'榆树园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[227.41846312351214,130.7895578158586],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_ElmKoen.pointContent(Point_ElmKoen);

var Point_MainTempleOfCET= {
    title:'榆水正寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[225.01989385746157,132.73839796556808],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_MainTempleOfCET.pointContent(Point_MainTempleOfCET);

var Point_NCU= {
    title:'芝山汉语大学',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[221.97170612493875,117.24762334917096],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_NCU.pointContent(Point_NCU);

var Point_NCUAffiliatedJHS= {
    title:'芝山汉语大学\n附属中学',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[217.72423757181747,123.14410946408539],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_NCUAffiliatedJHS.pointContent(Point_NCUAffiliatedJHS);

var Point_HyampoGarden= {
    title:'猫尾香蒲花园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[323.6719036458516,190.1528634548134],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_HyampoGarden.pointContent(Point_HyampoGarden);

var Point_VisionChisan01= {
    title:'江绝楼遮寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[326.11864314226074,187.13041933638],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_VisionChisan01.pointContent(Point_VisionChisan01);

var Point_StarOfChisan= {
    title:'芝山之星',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[316.8327550254707,170.72552362638845],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_StarOfChisan.pointContent(Point_StarOfChisan);

var Point_BridgeVision01= {
    title:'全港都桥观景台',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[354.3188852500947,77.35792938520599],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_BridgeVision01.pointContent(Point_BridgeVision01);

var Point_TsinmonInsideHarbor= {
    title:'青朦内埠',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[299.1158939031339,246.06337450646978],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_TsinmonInsideHarbor.pointContent(Point_TsinmonInsideHarbor);

var Point_RochiCityLight= {
    title:'ROCHI CITY LIGHT',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[220.56312768708818,101.63596082388139],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_RochiCityLight.pointContent(Point_RochiCityLight);

var Point_CapitalRadioOfRyoRong= {
    title:'首都电台',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[171.49827510003254,113.19710692044953],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_CapitalRadioOfRyoRong.pointContent(Point_CapitalRadioOfRyoRong);

var Point_RyoRongHOMERUN= {
    title:'HOMERUN',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[151.5603096732665,121.06344758424972],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_RyoRongHOMERUN.pointContent(Point_RyoRongHOMERUN);

var Point_ChisanMuseum= {
    title:'芝山博物厅',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[250.10737917704782,190.50267975926826],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_ChisanMuseum.pointContent(Point_ChisanMuseum);

var Point_Lutai= {
    title:'绿台',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[240.23335364350345,192.35406143853632],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_Lutai.pointContent(Point_Lutai);

var Point_WuyinDockyard= {
    title:'戊寅造船厂',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[336.87745853697845,129.51491454444982],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_WuyinDockyard.pointContent(Point_WuyinDockyard);

var Point_ChisanRiverCityPark= {
    title:'芝江都市公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[341.71243523607404,116.03268727668153],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_ChisanRiverCityPark.pointContent(Point_ChisanRiverCityPark);

var Point_TashangCI= {
    title:'大商首都醫療',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[260.0953732083386,245.916712308947],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_TashangCI.pointContent(Point_TashangCI);

var Point_TashangChisanBank= {
    title:'芝山银行',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[267.95075642897734,242.89805122983034],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_TashangChisanBank.pointContent(Point_TashangChisanBank);

var Point_WanrioPrincessRainHotel= {
    title:'雨公主酒店·望留',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[295.42380408121375,239.94416095783646],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_WanrioPrincessRainHotel.pointContent(Point_WanrioPrincessRainHotel);

var Point_QueCityPark= {
    title:'雀公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[278.8101283000382,193.37056319416936],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_QueCityPark.pointContent(Point_QueCityPark);

var Point_DCAExhibitionHall= {
    title:'灾防展示园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[277.8828957222001,200.21289947493727],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_DCAExhibitionHall.pointContent(Point_DCAExhibitionHall);

var Point_QueParkChisanBank= {
    title:'芝山银行',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[274.74948975278465,203.9537997695235],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_QueParkChisanBank.pointContent(Point_QueParkChisanBank);

var Point_SCOutlets= {
    title:'芝南奥特莱斯',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[260.96332647640014,210.96715115583442],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_SCOutlets.pointContent(Point_SCOutlets);

var Point_UeshiTemple= {
    title:'未世正寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[261.2555474275314,203.3060928691013],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_UeshiTemple.pointContent(Point_UeshiTemple);

var Point_TideTemple= {
    title:'潮汐正寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[201.75288601496112,86.70416574704582],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_TideTemple.pointContent(Point_TideTemple);

var Point_CultureHallOfCapital= {
    title:'首都文化厅',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[229.7722063006126,97.29105910076395],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_CultureHallOfCapital.pointContent(Point_CultureHallOfCapital);

var Point_TsinchiTemple= {
    title:'轻芝正寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[283.0517033500835,90.39615976972769],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_TsinchiTemple.pointContent(Point_TsinchiTemple);

var Point_TsinchiCI= {
    title:'轻芝园首都醫療',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[286.3869050378325,94.13361237174712],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_TsinchiCI.pointContent(Point_TsinchiCI);

var Point_TagaCityFarm= {
    title:'大港都市农场',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[291.85974415986163,108.74042483539918],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_TagaCityFarm.pointContent(Point_TagaCityFarm);

var Point_Yututing= {
    title:'玉兔亭',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[315.7137723201003,118.60539985171224],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_Yututing.pointContent(Point_Yututing);

var Point_FuzhuTemple= {
    title:'俯筑正寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[293.4235848805991,135.22961332790038],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_FuzhuTemple.pointContent(Point_FuzhuTemple);

var Point_BridgeTown= {
    title:'小桥流水',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[285.3827691078893,134.80641353624986],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_BridgeTown.pointContent(Point_BridgeTown);

var Point_FilbertPark= {
    title:'榛公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[243.1280044460147,154.41324166562873],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_FilbertPark.pointContent(Point_FilbertPark);

var Point_ElmTemplePark= {
    title:'榆水寺公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[225.29232597918775,152.56253701370443],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_ElmTemplePark.pointContent(Point_ElmTemplePark);

var Point_ThaichiTemple= {
    title:'苔芝正寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[134.15821757616294,235.41163125875318],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_ThaichiTemple.pointContent(Point_ThaichiTemple);

var Point_ThaichiTemple02= {
    title:'苔芝深寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[138.3956358018196,246.0358869790709],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_ThaichiTemple02.pointContent(Point_ThaichiTemple02);

var Point_NanshuiTemple= {
    title:'南水正寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[169.29847324726023,179.122947559135],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_NanshuiTemple.pointContent(Point_NanshuiTemple);

var Point_TianhuaCenter= {
    title:'天華大厦',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[313.03405876903156,194.4838357815193],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_TianhuaCenter.pointContent(Point_TianhuaCenter);

var Point_TiandaiBridgePark= {
    title:'天代桥公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[328.0986588837314,141.11031581855866],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_TiandaiBridgePark.pointContent(Point_TiandaiBridgePark);

var Point_CapitalMusicHall= {
    title:'首乐馆',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[342.6288601065498,87.24361180866931],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_CapitalMusicHall.pointContent(Point_CapitalMusicHall);

var Point_EchoHall= {
    title:'回声馆',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[353.31467421534455,86.08257819008168],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_EchoHall.pointContent(Point_EchoHall);

var Point_ReDaiHall= {
    title:'乐代馆',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[348.69203840423194,91.8877487435719],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_ReDaiHall.pointContent(Point_ReDaiHall);

var Point_NinDaiHall= {
    title:'宁代馆',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[347.1439935794484,82.66397660476869],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_NinDaiHall.pointContent(Point_NinDaiHall);

var Point_CentralDome= {
    title:'中央馆',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[348.6545638965019, 87.68181584749931],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_CentralDome.pointContent(Point_CentralDome);

var Point_CapitalMusicCenter= {
    title:'首乐中心',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[342.9943710091397,88.9421620394308],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_CapitalMusicCenter.pointContent(Point_CapitalMusicCenter);

var Point_CMAC= {
    title:'大港藝術中心',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[347.9090564253362,86.78791175246153],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_CMAC.pointContent(Point_CMAC);

var Point_YouthRecreationCentreOfChisan_01= {
    title:'青少年娱乐中心',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[250.77745977208838,209.03117263407628],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_YouthRecreationCentreOfChisan_01.pointContent(Point_YouthRecreationCentreOfChisan_01);

var Point_TsinshuiParkOfChisan= {
    title:'清水公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[246.4001258438558,207.45729898100933],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_TsinshuiParkOfChisan.pointContent(Point_TsinshuiParkOfChisan);

var Point_JiriZoo= {
    title:'芝港蓟里动物园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[220.65019091143105,197.18848316780804],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_JiriZoo.pointContent(Point_JiriZoo);

var Point_YouthRecreationCentreOfChisan_02= {
    title:'芝山新十代\n青少年中心',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[218.22920876897132,188.50240973913117],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_YouthRecreationCentreOfChisan_02.pointContent(Point_YouthRecreationCentreOfChisan_02);

var Point_HaotanTemple= {
    title:'蒿潭正寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[250.32714908701877,206.58159598340734],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_HaotanTemple.pointContent(Point_HaotanTemple);

var Point_TintownChisanTemple= {
    title:'小芝寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[273.4088395891956,156.20469433697593],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_TintownChisanTemple.pointContent(Point_TintownChisanTemple);

var Point_HettanGarden= {
    title:'黑檀园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[277.2935659459241,152.81634951672882],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_HettanGarden.pointContent(Point_HettanGarden);

var Point_HyininZhuang= {
    title:'喜柠庄',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[275.5886023822698,149.62224134363044],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_HyininZhuang.pointContent(Point_HyininZhuang);

var Point_TintownRenin= {
    title:'庭馆乐宁',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[266.416331817772,152.96742237303553],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_TintownRenin.pointContent(Point_TintownRenin);

var Point_SandalwoodTemple_01= {
    title:'檀香正寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[288.81132636299054,153.9590459420343],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_SandalwoodTemple_01.pointContent(Point_SandalwoodTemple_01);

var Point_Yijingtan= {
    title:'一镜潭',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[287.6148479133324,153.61974565613966],
    minZoom:5.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_Yijingtan.pointContent(Point_Yijingtan);

var Point_LOTOMBuilding= {
    title:'CUBE LOTOM',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[288.01758301279386,156.23404827703007],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_LOTOMBuilding.pointContent(Point_LOTOMBuilding);

var Point_ChyandoCitang= {
    title:'千道祠堂',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[267.76774125311726,139.3896155903267],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_ChyandoCitang.pointContent(Point_ChyandoCitang);

var Point_FuhuiCoffee= {
    title:'洑洄调茶馆',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[348.33109012976036,71.92687006152775],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_FuhuiCoffee.pointContent(Point_FuhuiCoffee);

var Point_GravelProcessingFactoryOfChisan= {
    title:'碛杂加工工厂',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[308.82704649948374,83.38735780044415],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_GravelProcessingFactoryOfChisan.pointContent(Point_GravelProcessingFactoryOfChisan);

var Point_ShitinCircleInternationalSpeedway= {
    title:'汐庭环状国际赛场',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[266.8595232465792,85.8159492882755],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_ShitinCircleInternationalSpeedway.pointContent(Point_ShitinCircleInternationalSpeedway);

var Point_TakasakiServices= {
    title:'高崎后勤',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[271.0145104023716,83.93064625099336],
    minZoom:5.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_TakasakiServices.pointContent(Point_TakasakiServices);

var Point_EcologicalUniversityOfCapital= {
    title:'首都生态大学',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[264.88157065411275,102.06221517268546],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_EcologicalUniversityOfCapital.pointContent(Point_EcologicalUniversityOfCapital);

var Point_BusinessUniversityOfCapital= {
    title:'首都商贸学院',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[244.43391112666916,116.65342434532994],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_BusinessUniversityOfCapital.pointContent(Point_BusinessUniversityOfCapital);

var Point_ShidaiUniversityOfCapital= {
    title:'首都时代大学',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6695cf',
    outlineColor:'#ffffff',
    location:[249.59189021622845,122.95762203314763],
    minZoom:5.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_ShidaiUniversityOfCapital.pointContent(Point_ShidaiUniversityOfCapital);

var Point_RoRyongClearskyLibrary= {
    title:'落绒晴空书厅',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[163.34731205402537,116.72064219985887],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_RoRyongClearskyLibrary.pointContent(Point_RoRyongClearskyLibrary);

var Point_BuildingKanyuan= {
    title:'瞰远大厦',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[157.84960496915892,140.2813953910016],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_BuildingKanyuan.pointContent(Point_BuildingKanyuan);

var Point_ChisanTemple_01= {
    title:'大芝寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[284.7098131900836,182.17336842238151],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_ChisanTemple_01.pointContent(Point_ChisanTemple_01);

var Point_ChisanTemple_Diexiezhijing= {
    title:'叠榭之景',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[286.5460427062238,180.4821046207317],
    minZoom:6.0,
    pointContent: PointContent,
    pointSize:4,
}
Point_ChisanTemple_Diexiezhijing.pointContent(Point_ChisanTemple_Diexiezhijing);

var Point_ChiJiangCityPark_01= {
    title:'大芝江滨国家绿地\n湿地博物馆',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[343.2591337383636,118.55219864951792],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_ChiJiangCityPark_01.pointContent(Point_ChiJiangCityPark_01);

var Point_ChiJiangCityPark_02= {
    title:'风埗',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[344.2464745873609,114.75243563752043],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_ChiJiangCityPark_02.pointContent(Point_ChiJiangCityPark_02);

var Point_ChiJiangCityPark_03= {
    title:'芝山之眼\n摩天轮设施',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[347.5675266425918,110.95267262552295],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_ChiJiangCityPark_03.pointContent(Point_ChiJiangCityPark_03);

var Point_EastWuyinSquare= {
    title:'东戊寅广场',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[340.3569547689708,125.31398078450488],
    minZoom:5.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_EastWuyinSquare.pointContent(Point_EastWuyinSquare);

var Point_YushuiWetlandPark= {
    title:'榆水湿地公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[212.92637144001608,143.0825332328395],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_YushuiWetlandPark.pointContent(Point_YushuiWetlandPark);

var Point_BingoBotanicalGarden= {
    title:'滨谷植物园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[183.56444021773666,144.50090583842982],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_BingoBotanicalGarden.pointContent(Point_BingoBotanicalGarden);

var Point_Tintown_BaishiriRong= {
    title:'百十里弄',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[267.060321340526,150.02560420743134],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_Tintown_BaishiriRong.pointContent(Point_Tintown_BaishiriRong);

var Point_Tintown_Kuoxiaxishui= {
    title:'阔下溪水',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[261.5708622601272,150.17821008515742],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_Tintown_Kuoxiaxishui.pointContent(Point_Tintown_Kuoxiaxishui);

var Point_Tintown_Hurilou= {
    title:'槲栎楼',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[260.7433457850103,146.40473571623843],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_Tintown_Hurilou.pointContent(Point_Tintown_Hurilou);

var Point_Tintown_Lianyuan= {
    title:'楝园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[260.0482324509881,148.1259689743296],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_Tintown_Lianyuan.pointContent(Point_Tintown_Lianyuan);

var Point_DatinFishingBoat= {
    title:'大汀渔船公司',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[416.82654604370833,69.90077212822119],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_DatinFishingBoat.pointContent(Point_DatinFishingBoat);

var Point_DayangRoadstead= {
    title:'大洋驳区',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[486.0936875074102,46.20776082065315],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_DayangRoadstead.pointContent(Point_DayangRoadstead);

var Point_ShenshuiPort= {
    title:'深水埠头',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[495.9368709614876,51.525722664104066],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_ShenshuiPort.pointContent(Point_ShenshuiPort);

var Point_JiuzhouPu_Pugon= {
    title:'苑宫',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[406.7066275566749,67.09489450386648],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_JiuzhouPu_Pugon.pointContent(Point_JiuzhouPu_Pugon);

var Point_JiuzhouPu_GrassGround= {
    title:'九洲堡公园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[412.6897526345099,66.31930358983152],
    minZoom:4.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_JiuzhouPu_GrassGround.pointContent(Point_JiuzhouPu_GrassGround);

var Point_JiuzhouPu_SOHO= {
    title:'九洲堡SOHO',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[416.7523672801278,77.87928932229829],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_JiuzhouPu_SOHO.pointContent(Point_JiuzhouPu_SOHO);

var Point_Ginri_HarbourHotel= {
    title:'港湾码头酒店',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[413.76080615008715,81.0555154588509],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_Ginri_HarbourHotel.pointContent(Point_Ginri_HarbourHotel);

var Point_JadeGarden= {
    title:'翡翠园',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#62af40',
    outlineColor:'#ffffff',
    location:[422.287504842594,158.11761337661804],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_JadeGarden.pointContent(Point_JadeGarden);

var Point_CWL= {
    title:'首都文联',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[419.84832835538253,165.2937480550903],
    minZoom:4.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_CWL.pointContent(Point_CWL);

var Point_JadeGarden_Hall_Ru= {
    title:'麓馆文学殿堂',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[419.84832835538253,160.62749366083932],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_JadeGarden_Hall_Ru.pointContent(Point_JadeGarden_Hall_Ru);

var Point_JadeGarden_Hall_Ru_Meetingroom= {
    title:'麓馆会议中心',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[416.77284061977514,162.71316734513752],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_JadeGarden_Hall_Ru_Meetingroom.pointContent(Point_JadeGarden_Hall_Ru_Meetingroom);

var Point_CMAC_RedCarpet= {
    title:'红毯',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[352.0287324475209,91.0750682338923],
    minZoom:5.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_CMAC_RedCarpet.pointContent(Point_CMAC_RedCarpet);

var Point_CMAC_TAGA_ArtisticAwards= {
    title:'大港藝赏媒体工作部',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[351.7197556877702,84.14762100580823],
    minZoom:5.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_CMAC_TAGA_ArtisticAwards.pointContent(Point_CMAC_TAGA_ArtisticAwards);

var Point_CMAC_KeplerHotel= {
    title:'开普勒酒店',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b6b6b',
    outlineColor:'#ffffff',
    location:[346.435304922188,99.03853586258481],
    minZoom:5.6,
    pointContent: PointContent,
    pointSize:4,
}
Point_CMAC_KeplerHotel.pointContent(Point_CMAC_KeplerHotel);

var Point_Fodaoci= {
    title:'佛道祠',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[416.88932535870197,181.18281560833196],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_Fodaoci.pointContent(Point_Fodaoci);

var Point_DarkTeaTemple= {
    title:'黑茶寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[459.9555642819798,98.72506556182557],
    minZoom:5.2,
    pointContent: PointContent,
    pointSize:4,
}
Point_DarkTeaTemple.pointContent(Point_DarkTeaTemple);

var Point_YuhaiTemple= {
    title:'毓海寺',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[506.9127380158365,148.63185223173323],
    minZoom:5.4,
    pointContent: PointContent,
    pointSize:4,
}
Point_YuhaiTemple.pointContent(Point_YuhaiTemple);

var Point_Tintown_Yiquan= {
    title:'绎泉',
    fontSize:'10px',
    fontWeight:'bold',
    contentColor:'#6b584d',
    outlineColor:'#ffffff',
    location:[268.8052209375864,148.29659356247964],
    minZoom:5.8,
    pointContent: PointContent,
    pointSize:4,
}
Point_Tintown_Yiquan.pointContent(Point_Tintown_Yiquan);







