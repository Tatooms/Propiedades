var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AldeadeSaiar_1 = new ol.format.GeoJSON();
var features_AldeadeSaiar_1 = format_AldeadeSaiar_1.readFeatures(json_AldeadeSaiar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AldeadeSaiar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AldeadeSaiar_1.addFeatures(features_AldeadeSaiar_1);
var lyr_AldeadeSaiar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AldeadeSaiar_1, 
                style: style_AldeadeSaiar_1,
                popuplayertitle: 'Aldea de Saiar',
                interactive: true,
                title: '<img src="styles/legend/AldeadeSaiar_1.png" /> Aldea de Saiar'
            });
var format_Cernadas_2 = new ol.format.GeoJSON();
var features_Cernadas_2 = format_Cernadas_2.readFeatures(json_Cernadas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cernadas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cernadas_2.addFeatures(features_Cernadas_2);
var lyr_Cernadas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cernadas_2, 
                style: style_Cernadas_2,
                popuplayertitle: 'Cernadas',
                interactive: true,
                title: '<img src="styles/legend/Cernadas_2.png" /> Cernadas'
            });
var format_36005B50500438_3 = new ol.format.GeoJSON();
var features_36005B50500438_3 = format_36005B50500438_3.readFeatures(json_36005B50500438_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_36005B50500438_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_36005B50500438_3.addFeatures(features_36005B50500438_3);
var lyr_36005B50500438_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_36005B50500438_3, 
                style: style_36005B50500438_3,
                popuplayertitle: '36005B50500438',
                interactive: true,
                title: '<img src="styles/legend/36005B50500438_3.png" /> 36005B50500438'
            });
var format_36005B50500452_4 = new ol.format.GeoJSON();
var features_36005B50500452_4 = format_36005B50500452_4.readFeatures(json_36005B50500452_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_36005B50500452_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_36005B50500452_4.addFeatures(features_36005B50500452_4);
var lyr_36005B50500452_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_36005B50500452_4, 
                style: style_36005B50500452_4,
                popuplayertitle: '36005B50500452',
                interactive: true,
                title: '<img src="styles/legend/36005B50500452_4.png" /> 36005B50500452'
            });
var format_36005B50500453_5 = new ol.format.GeoJSON();
var features_36005B50500453_5 = format_36005B50500453_5.readFeatures(json_36005B50500453_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_36005B50500453_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_36005B50500453_5.addFeatures(features_36005B50500453_5);
var lyr_36005B50500453_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_36005B50500453_5, 
                style: style_36005B50500453_5,
                popuplayertitle: '36005B50500453',
                interactive: true,
                title: '<img src="styles/legend/36005B50500453_5.png" /> 36005B50500453'
            });
var format_36005B50500439_6 = new ol.format.GeoJSON();
var features_36005B50500439_6 = format_36005B50500439_6.readFeatures(json_36005B50500439_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_36005B50500439_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_36005B50500439_6.addFeatures(features_36005B50500439_6);
var lyr_36005B50500439_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_36005B50500439_6, 
                style: style_36005B50500439_6,
                popuplayertitle: '36005B50500439',
                interactive: true,
                title: '<img src="styles/legend/36005B50500439_6.png" /> 36005B50500439'
            });
var format_Casa_7 = new ol.format.GeoJSON();
var features_Casa_7 = format_Casa_7.readFeatures(json_Casa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casa_7.addFeatures(features_Casa_7);
var lyr_Casa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casa_7, 
                style: style_Casa_7,
                popuplayertitle: 'Casa',
                interactive: true,
                title: '<img src="styles/legend/Casa_7.png" /> Casa'
            });
var group_Urbano = new ol.layer.Group({
                                layers: [lyr_Casa_7,],
                                fold: "open",
                                title: 'Urbano'});
var group_Forestal = new ol.layer.Group({
                                layers: [lyr_36005B50500438_3,lyr_36005B50500452_4,lyr_36005B50500453_5,lyr_36005B50500439_6,],
                                fold: "open",
                                title: 'Forestal'});
var group_Agrcola = new ol.layer.Group({
                                layers: [lyr_AldeadeSaiar_1,lyr_Cernadas_2,],
                                fold: "open",
                                title: 'Agrícola'});

lyr_GoogleSatellite_0.setVisible(true);lyr_AldeadeSaiar_1.setVisible(true);lyr_Cernadas_2.setVisible(true);lyr_36005B50500438_3.setVisible(true);lyr_36005B50500452_4.setVisible(true);lyr_36005B50500453_5.setVisible(true);lyr_36005B50500439_6.setVisible(true);lyr_Casa_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Agrcola,group_Forestal,group_Urbano];
lyr_AldeadeSaiar_1.set('fieldAliases', {'Nome': 'Nome', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', });
lyr_Cernadas_2.set('fieldAliases', {'Nome': 'Nome', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', });
lyr_36005B50500438_3.set('fieldAliases', {'Nome': 'Nome', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', 'Idade': 'Idade', });
lyr_36005B50500452_4.set('fieldAliases', {'Nome': 'Nome', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', 'Idade': 'Idade', });
lyr_36005B50500453_5.set('fieldAliases', {'Nome': 'Nome', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', 'Idade': 'Idade', });
lyr_36005B50500439_6.set('fieldAliases', {'Nome': 'Nome', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', 'Idade': 'Idade', });
lyr_Casa_7.set('fieldAliases', {'Nome': 'Nome', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', 'Uso': 'Uso', });
lyr_AldeadeSaiar_1.set('fieldImages', {'Nome': 'TextEdit', 'Superficie': 'TextEdit', 'Cultivo': 'TextEdit', });
lyr_Cernadas_2.set('fieldImages', {'Nome': 'TextEdit', 'Superficie': 'TextEdit', 'Cultivo': 'TextEdit', });
lyr_36005B50500438_3.set('fieldImages', {'Nome': '', 'Superficie': '', 'Cultivo': '', 'Idade': '', });
lyr_36005B50500452_4.set('fieldImages', {'Nome': 'TextEdit', 'Superficie': 'TextEdit', 'Cultivo': 'TextEdit', 'Idade': 'Range', });
lyr_36005B50500453_5.set('fieldImages', {'Nome': 'TextEdit', 'Superficie': 'TextEdit', 'Cultivo': 'TextEdit', 'Idade': 'Range', });
lyr_36005B50500439_6.set('fieldImages', {'Nome': '', 'Superficie': '', 'Cultivo': '', 'Idade': '', });
lyr_Casa_7.set('fieldImages', {'Nome': '', 'Superficie': '', 'Cultivo': '', 'Uso': '', });
lyr_AldeadeSaiar_1.set('fieldLabels', {'Nome': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_Cernadas_2.set('fieldLabels', {'Nome': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_36005B50500438_3.set('fieldLabels', {'Nome': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', 'Idade': 'inline label - always visible', });
lyr_36005B50500452_4.set('fieldLabels', {'Nome': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', 'Idade': 'inline label - always visible', });
lyr_36005B50500453_5.set('fieldLabels', {'Nome': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', 'Idade': 'inline label - always visible', });
lyr_36005B50500439_6.set('fieldLabels', {'Nome': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', 'Idade': 'inline label - always visible', });
lyr_Casa_7.set('fieldLabels', {'Nome': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', 'Uso': 'inline label - always visible', });
lyr_Casa_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});