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

        addListenerToObjectForWidget(object, widget);
    }
}

function addListenerToObjectForWidget(object, widget) {
        google.maps.event.addListener(object, 'current_changed', function() {
            var item = object.get('current');
            if (item != null) {
                widget.set('value', item['value']);
                var pos = new google.maps.LatLng(item['lat'], item['lng']);
                widget.set('position', pos);
            }
        });
}


function updateGH(deltaTime) {
    var time = ghModel.get('time');
    time.setFullYear(time.getFullYear() + 1);
    console.log("year:" + time.getFullYear());
    if (time > ghModel.get('maxTime')) {
        ghModel.set('time', new Date(ghModel.get('minTime')));
    } else {
        ghModel.set('time', time);
    }
    console.log("time: " + time.toGMTString());
}
