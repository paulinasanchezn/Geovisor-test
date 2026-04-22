var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_IPT_13_PRC_Cerrillos_1 = new ol.format.GeoJSON();
var features_IPT_13_PRC_Cerrillos_1 = format_IPT_13_PRC_Cerrillos_1.readFeatures(json_IPT_13_PRC_Cerrillos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPT_13_PRC_Cerrillos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPT_13_PRC_Cerrillos_1.addFeatures(features_IPT_13_PRC_Cerrillos_1);
var lyr_IPT_13_PRC_Cerrillos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IPT_13_PRC_Cerrillos_1, 
                style: style_IPT_13_PRC_Cerrillos_1,
                popuplayertitle: 'IPT_13_PRC_Cerrillos',
                interactive: true,
    title: 'IPT_13_PRC_Cerrillos<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_0.png" /> AV intercomunal parque Cerrillos<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_1.png" /> AV Parque Las Torres<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_2.png" /> Avenida parque Américo Vespucio<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_3.png" /> Parque Cerrillos<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_4.png" /> Parque Isabel Riquelme<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_5.png" /> Zona A - Seccional Lo Errázuriz<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_6.png" /> Zona B - Seccional Lo Errázuriz<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_7.png" /> Zona C - Sector Buzeta<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_8.png" /> Zona comercial obligatoria<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_9.png" /> Zona de actividades productivas y de servicios de carácter industrial<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_10.png" /> Zona de derrumbes y asentamiento del suelo<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_11.png" /> Zona de uso mixto preferentemente en densidad alta<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_12.png" /> Zona de uso mixto preferentemente equipamiento<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_13.png" /> Zona de uso preferentemente residencial en densidad media<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_14.png" /> Zona de uso preferentemente residencial en densidad media, cabezal sur<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_15.png" /> Zona equipamiento exclusivo<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_16.png" /> Zona equipamiento salud y educación<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_17.png" /> Zona habitacional mixta metropolitana<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_18.png" /> Zona industrial<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_19.png" /> Zona industrial exclusiva con actividad molesta reincorporada<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_20.png" /> Zona residencial exclusiva<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_21.png" /> Zona residencial mixta<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_22.png" /> Zona subsector geográfico sur poniente 25 F<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_23.png" /> Zona subsector geográfico sur poniente 27 E 2<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_24.png" /> Zona subsector geográfico sur poniente 27 H 1<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_25.png" /> Zona subsector geográfico sur poniente 27 H 2<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_26.png" /> Zona uso especial<br />\
    <img src="styles/legend/IPT_13_PRC_Cerrillos_1_27.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_IPT_13_PRC_Cerrillos_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_IPT_13_PRC_Cerrillos_1];
lyr_IPT_13_PRC_Cerrillos_1.set('fieldAliases', {'REG': 'REG', 'COM': 'COM', 'LOC': 'LOC', 'ZONA': 'ZONA', 'NOM': 'NOM', 'UPERM': 'UPERM', 'UPROH': 'UPROH', 'P_DO': 'P_DO', 'N_DOC': 'N_DOC', 'T_DO': 'T_DO', 'OBS': 'OBS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_IPT_13_PRC_Cerrillos_1.set('fieldImages', {'REG': 'TextEdit', 'COM': 'TextEdit', 'LOC': 'TextEdit', 'ZONA': 'TextEdit', 'NOM': 'TextEdit', 'UPERM': 'TextEdit', 'UPROH': 'TextEdit', 'P_DO': 'TextEdit', 'N_DOC': 'TextEdit', 'T_DO': 'TextEdit', 'OBS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IPT_13_PRC_Cerrillos_1.set('fieldLabels', {'REG': 'no label', 'COM': 'no label', 'LOC': 'no label', 'ZONA': 'no label', 'NOM': 'no label', 'UPERM': 'no label', 'UPROH': 'no label', 'P_DO': 'no label', 'N_DOC': 'no label', 'T_DO': 'no label', 'OBS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_IPT_13_PRC_Cerrillos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});