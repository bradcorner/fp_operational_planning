var wms_layers = [];

var format_Waterways_0 = new ol.format.GeoJSON();
var features_Waterways_0 = format_Waterways_0.readFeatures(json_Waterways_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterways_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterways_0.addFeatures(features_Waterways_0);
var lyr_Waterways_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Waterways_0, 
                style: style_Waterways_0,
                interactive: true,
                title: '<img src="styles/legend/Waterways_0.png" /> Waterways'
            });
var format_RegionalBoundaries_1 = new ol.format.GeoJSON();
var features_RegionalBoundaries_1 = format_RegionalBoundaries_1.readFeatures(json_RegionalBoundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionalBoundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionalBoundaries_1.addFeatures(features_RegionalBoundaries_1);
var lyr_RegionalBoundaries_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RegionalBoundaries_1, 
                style: style_RegionalBoundaries_1,
                interactive: true,
                title: '<img src="styles/legend/RegionalBoundaries_1.png" /> Regional Boundaries'
            });
var format_Settlements_2 = new ol.format.GeoJSON();
var features_Settlements_2 = format_Settlements_2.readFeatures(json_Settlements_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Settlements_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Settlements_2.addFeatures(features_Settlements_2);
var lyr_Settlements_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Settlements_2, 
                style: style_Settlements_2,
                interactive: true,
                title: '<img src="styles/legend/Settlements_2.png" /> Settlements'
            });
var format_FishingSettlements_3 = new ol.format.GeoJSON();
var features_FishingSettlements_3 = format_FishingSettlements_3.readFeatures(json_FishingSettlements_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishingSettlements_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishingSettlements_3.addFeatures(features_FishingSettlements_3);
var lyr_FishingSettlements_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FishingSettlements_3, 
                style: style_FishingSettlements_3,
                interactive: true,
                title: '<img src="styles/legend/FishingSettlements_3.png" /> FishingSettlements'
            });
var format_HealthDistrictBoundaries_4 = new ol.format.GeoJSON();
var features_HealthDistrictBoundaries_4 = format_HealthDistrictBoundaries_4.readFeatures(json_HealthDistrictBoundaries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HealthDistrictBoundaries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthDistrictBoundaries_4.addFeatures(features_HealthDistrictBoundaries_4);
var lyr_HealthDistrictBoundaries_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HealthDistrictBoundaries_4, 
                style: style_HealthDistrictBoundaries_4,
                interactive: true,
                title: '<img src="styles/legend/HealthDistrictBoundaries_4.png" /> Health District Boundaries'
            });
var format_SDPProportionsbyDistrict_5 = new ol.format.GeoJSON();
var features_SDPProportionsbyDistrict_5 = format_SDPProportionsbyDistrict_5.readFeatures(json_SDPProportionsbyDistrict_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDPProportionsbyDistrict_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDPProportionsbyDistrict_5.addFeatures(features_SDPProportionsbyDistrict_5);
var lyr_SDPProportionsbyDistrict_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SDPProportionsbyDistrict_5, 
                style: style_SDPProportionsbyDistrict_5,
                interactive: true,
                title: '<img src="styles/legend/SDPProportionsbyDistrict_5.png" /> SDP Proportions by District'
            });

lyr_Waterways_0.setVisible(true);lyr_RegionalBoundaries_1.setVisible(true);lyr_Settlements_2.setVisible(true);lyr_FishingSettlements_3.setVisible(true);lyr_HealthDistrictBoundaries_4.setVisible(true);lyr_SDPProportionsbyDistrict_5.setVisible(true);
var layersList = [lyr_Waterways_0,lyr_RegionalBoundaries_1,lyr_Settlements_2,lyr_FishingSettlements_3,lyr_HealthDistrictBoundaries_4,lyr_SDPProportionsbyDistrict_5];
lyr_Waterways_0.set('fieldAliases', {'osm_id': 'osm_id', 'width': 'width', 'tunnel': 'tunnel', 'water': 'water', 'depth': 'depth', 'source': 'source', 'waterway': 'waterway', 'name': 'name', 'natural': 'natural', 'layer': 'layer', 'covered': 'covered', 'blockage': 'blockage', });
lyr_RegionalBoundaries_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Settlements_2.set('fieldAliases', {'LAT': 'LAT', 'LONG': 'LONG', 'CNTRY_CODE': 'CNTRY_CODE', 'NAME': 'NAME', 'REFNAME': 'REFNAME', 'Pcod': 'Pcod', 'popPlaceCI': 'popPlaceCI', 'popPlace1': 'popPlace1', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_FishingSettlements_3.set('fieldAliases', {'LAT': 'LAT', 'LONG': 'LONG', 'CNTRY_CODE': 'CNTRY_CODE', 'NAME': 'NAME', 'REFNAME': 'REFNAME', 'Pcod': 'Pcod', 'popPlaceCI': 'popPlaceCI', 'popPlace1': 'popPlace1', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_HealthDistrictBoundaries_4.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'TFHO_SM_SDP_joinMaster_List': 'TFHO_SM_SDP_joinMaster_List', 'TFHO_SM_SDP_joinRegion': 'TFHO_SM_SDP_joinRegion', 'TFHO_SM_SDP_joinRegion_ID': 'TFHO_SM_SDP_joinRegion_ID', 'TFHO_SM_SDP_joinSDP': 'TFHO_SM_SDP_joinSDP', });
lyr_SDPProportionsbyDistrict_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'TFHO_SM_SDP_joinMaster_List': 'TFHO_SM_SDP_joinMaster_List', 'TFHO_SM_SDP_joinRegion': 'TFHO_SM_SDP_joinRegion', 'TFHO_SM_SDP_joinRegion_ID': 'TFHO_SM_SDP_joinRegion_ID', 'TFHO_SM_SDP_joinSDP': 'TFHO_SM_SDP_joinSDP', });
lyr_Waterways_0.set('fieldImages', {'osm_id': 'TextEdit', 'width': 'TextEdit', 'tunnel': 'TextEdit', 'water': 'TextEdit', 'depth': 'TextEdit', 'source': 'TextEdit', 'waterway': 'TextEdit', 'name': 'TextEdit', 'natural': 'TextEdit', 'layer': 'TextEdit', 'covered': 'TextEdit', 'blockage': 'TextEdit', });
lyr_RegionalBoundaries_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_Settlements_2.set('fieldImages', {'LAT': 'TextEdit', 'LONG': 'TextEdit', 'CNTRY_CODE': 'TextEdit', 'NAME': 'TextEdit', 'REFNAME': 'TextEdit', 'Pcod': 'TextEdit', 'popPlaceCI': 'TextEdit', 'popPlace1': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'TextEdit', });
lyr_FishingSettlements_3.set('fieldImages', {'LAT': 'TextEdit', 'LONG': 'TextEdit', 'CNTRY_CODE': 'TextEdit', 'NAME': 'TextEdit', 'REFNAME': 'TextEdit', 'Pcod': 'TextEdit', 'popPlaceCI': 'TextEdit', 'popPlace1': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'TextEdit', });
lyr_HealthDistrictBoundaries_4.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'TFHO_SM_SDP_joinMaster_List': 'TextEdit', 'TFHO_SM_SDP_joinRegion': 'TextEdit', 'TFHO_SM_SDP_joinRegion_ID': 'TextEdit', 'TFHO_SM_SDP_joinSDP': 'Range', });
lyr_SDPProportionsbyDistrict_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'TFHO_SM_SDP_joinMaster_List': 'TextEdit', 'TFHO_SM_SDP_joinRegion': 'TextEdit', 'TFHO_SM_SDP_joinRegion_ID': 'TextEdit', 'TFHO_SM_SDP_joinSDP': 'Range', });
lyr_Waterways_0.set('fieldLabels', {'osm_id': 'no label', 'width': 'no label', 'tunnel': 'no label', 'water': 'no label', 'depth': 'no label', 'source': 'no label', 'waterway': 'no label', 'name': 'no label', 'natural': 'no label', 'layer': 'no label', 'covered': 'no label', 'blockage': 'no label', });
lyr_RegionalBoundaries_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Settlements_2.set('fieldLabels', {'LAT': 'no label', 'LONG': 'no label', 'CNTRY_CODE': 'no label', 'NAME': 'no label', 'REFNAME': 'no label', 'Pcod': 'no label', 'popPlaceCI': 'no label', 'popPlace1': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_FishingSettlements_3.set('fieldLabels', {'LAT': 'no label', 'LONG': 'no label', 'CNTRY_CODE': 'no label', 'NAME': 'no label', 'REFNAME': 'no label', 'Pcod': 'no label', 'popPlaceCI': 'no label', 'popPlace1': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_HealthDistrictBoundaries_4.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'TFHO_SM_SDP_joinMaster_List': 'no label', 'TFHO_SM_SDP_joinRegion': 'no label', 'TFHO_SM_SDP_joinRegion_ID': 'no label', 'TFHO_SM_SDP_joinSDP': 'no label', });
lyr_SDPProportionsbyDistrict_5.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'TFHO_SM_SDP_joinMaster_List': 'no label', 'TFHO_SM_SDP_joinRegion': 'no label', 'TFHO_SM_SDP_joinRegion_ID': 'no label', 'TFHO_SM_SDP_joinSDP': 'no label', });
lyr_SDPProportionsbyDistrict_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});