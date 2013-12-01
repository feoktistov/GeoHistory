/* Model */

function GHObject(p) {
    this.set('name', p['name']);
    this.set('history', new Array());
    this.set('current', null);
    this.set('next', null);
    this.set('time', new Date());
}
GHObject.prototype = new google.maps.MVCObject();
GHObject.prototype.time_changed = function() {
    var history = this.get('history');
    var next = null;
    var item = null;
    for (var i=0; i<history.length; i++) {
        item = history[i];
        if (item['time'] > this.get('time')) {
            if (i < history.length) {
                next = history[i+1];
            }
            break;
        }
    }
    this.set('next', next);
    this.set('current', item);
    if (item != null) {
        console.log('time_changed' + ' current:' + this.get('current')['value']);
    }
};


function createDate(dateStr) {
    //"YYYY-MM-DD HH:MM:SS"
    var parts = dateStr.split(/[\-| |:]/);
    if (parts[4] === undefined) {
        parts[4] = 0;
    }
    if (parts[5] === undefined) {
        parts[5] = 0;
    }
    console.log("createDate from " + dateStr + " to:" + parts[0] + " " + (parts[1] - 1) + " " + parts[2] + " " + parts[3] + " " + parts[4] + " " + parts[5]);
    return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
}


function GHModel() {
    this.set('objects', {});
    this.set('time', new Date());
    this.set('minTime', null);
    this.set('maxTime', null);
    this.parse = function (data) {
        console.log("parse");
        var objects = ghModel.get('objects');
        var minTime = this.get('minTime');
        var maxTime = this.get('maxTime');
        for (var i=0; i<data.length; i++) {
            var item = data[i];
            var name = data[i]['name'];
            if (!objects.hasOwnProperty(name)) {
                var object = new GHObject({'name':name});
                object.bindTo('time', ghModel);
                objects[name] = object;
            }
            item['time'] = createDate(item['time']);
            objects[name].get('history').push(item);
            if (minTime == null || minTime > item['time']) {
                minTime = new Date(item['time']);
            }
            if (maxTime == null || maxTime < item['time']) {
                maxTime = new Date(item['time']);
            }
        }
        ghModel.set('time', new Date(minTime));
        ghModel.set('minTime', minTime);
        ghModel.set('maxTime', maxTime);
        console.log("minTime:" + minTime.toGMTString());
        console.log("maxTime:" + maxTime.toGMTString());
    }
}
GHModel.prototype = new google.maps.MVCObject();

// Singleton
var ghModel = new GHModel();
