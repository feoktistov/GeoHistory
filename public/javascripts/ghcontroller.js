var ghWidgets = {};
var ghTime = 0;

function initGHView(map) {
    ghWidgets = {};
    for (var name in ghModel.get('objects')) {
        var object = ghModel.get('objects')[name];
        var item = object.get('current');
        var pos = new google.maps.LatLng(item['lat'], item['lng']);
        pos = map.getCenter();
        var widget = new CircleWidget({
            name:name,
            map:map,
            position:pos,
            valueScale:1,
        });
        ghWidgets[name] = widget;

        google.maps.event.addListener(object, 'current_changed', function() {
            var item = object.get('current');
            widget.set('value', item['value'] + ghModel.get('time'));
            var pos = new google.maps.LatLng(item['lat'], item['lng']);
            widget.set('position', pos);
        });
    }
}


function updateGH(deltaTime) {
    ghModel.set('time', ghModel.get('time') + deltaTime);
}
