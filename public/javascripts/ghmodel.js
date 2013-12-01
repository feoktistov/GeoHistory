/* Model */

function GHObject(p) {
    this.set('name', p['name']);
    this.set('history', new Array());
    this.set('current', null);
    this.set('time', 0);
}
GHObject.prototype = new google.maps.MVCObject();
GHObject.prototype.time_changed = function() {
    if (this.get('history') != null && this.get('history').length > 0) {
        this.set('current', this.get('history')[(Math.floor(this.get('time')) % history.length)]); // TODO
    }
};



function GHModel() {
    this.set('objects', {});
    this.set('time', 0);
    this.parse = function (data) {
        for (var i=0; i<data.length; i++) {
            var item= data[i];
            var name = data[i]['name'];
            if (!ghModel.get('objects').hasOwnProperty(name)) {
                var object = new GHObject({'name':name});
                object.bindTo('time', ghModel);
                ghModel.get('objects')[name] = object;
            }
            ghModel.get('objects')[name].get('history').push(data[i]);
        }
        ghModel.set('time', 0);
    }
}
GHModel.prototype = new google.maps.MVCObject();

// Singleton
var ghModel = new GHModel();
