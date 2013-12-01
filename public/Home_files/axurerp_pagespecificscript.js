for(var i = 0; i < 59; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u47').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u47'); });
else {
    document.getElementById('u47').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u47'); }, true);
    document.getElementById('u47').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u47'); }, true);
}

widgetIdToDragFunction['u47'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u47',widgetDragInfo.xDelta,0,'none',500);

}

}

if (bIE) document.getElementById('u50').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u50'); });
else {
    document.getElementById('u50').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u50'); }, true);
    document.getElementById('u50').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u50'); }, true);
}

widgetIdToDragFunction['u50'] = function() {
var e = windowEvent;

if (IsOver(GetWidgetRectangles('u50'), GetWidgetRectangles('u56'))) {

	MoveWidgetBy('u50',widgetDragInfo.xDelta,0,'none',500);

}
else
if (IsOver(GetWidgetRectangles('u50'), GetWidgetRectangles('u46'))) {

	MoveWidgetTo('u50', GetNum('285'), GetNum('911'),'none',500);

}
else
if (IsOver(GetWidgetRectangles('u50'), GetWidgetRectangles('u45'))) {

	MoveWidgetTo('u50', GetNum('1778'), GetNum('911'),'none',500);

}

}
gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'center';u37.tabIndex = 0;

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

	MoveWidgetTo('u32', GetNum('80'), GetNum('988'),'none',500);

}
});
gv_vAlignTable['u37'] = 'top';u38.tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	MoveWidgetTo('u32', GetNum('80'), GetNum('1004'),'none',500);

}
});
gv_vAlignTable['u38'] = 'top';u39.tabIndex = 0;

u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if (true) {

	MoveWidgetTo('u32', GetNum('80'), GetNum('1022'),'none',500);

}
});
gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u6'] = 'center';document.getElementById('u8_img').tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	SetPanelState('u7', 'pd0u7','none','',500,'none','',500);

	MoveWidgetTo('u50', GetNum('285'), GetNum('911'),'none',500);

}
});
gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u42'] = 'top';u40.tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	MoveWidgetTo('u32', GetNum('80'), GetNum('970'),'none',500);

}
});
gv_vAlignTable['u40'] = 'top';u41.tabIndex = 0;

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

	MoveWidgetTo('u32', GetNum('80'), GetNum('951'),'none',500);

}
});
gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u49'] = 'center';document.getElementById('u10_img').tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	SetPanelState('u7', 'pd1u7','none','',500,'none','',500);

	MoveWidgetBy('u50', GetNum('1000'), GetNum('0'),'linear',200000);

}
});
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u18'] = 'center';