/* Model */

function GHObject(p) {
    this.set('name', p['name']);
    this.set('history', new Array());
    this.set('current', {});
    this.set('time', 0);
}
GHObject.prototype = new google.maps.MVCObject();
GHObject.prototype.time_changed = function() {
    this.set('current', this.get('history')[(Math.floor(this.get('time')) % history.length)]); // TODO
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


var ghData = [
{"value":100.0,"objectType":"circle","id":0,"name":"Angola","time":"Dec 31, 1949 12:00:56 AM","filter":"#population","color":"#FF0000","userData":"","lat":-11.20269,"lng":17.87389},
{"value":200.0,"objectType":"circle","id":0,"name":"Angola","time":"Dec 31, 1950 12:00:56 AM","filter":"#population","color":"#FF0000","userData":"","lat":-11.20269,"lng":17.87389},
{"value":300.0,"objectType":"circle","id":0,"name":"Angola","time":"Dec 31, 1951 12:00:56 AM","filter":"#population","color":"#FF0000","userData":"","lat":-11.20269,"lng":17.87389},
{"value":400.0,"objectType":"circle","id":0,"name":"Angola","time":"Dec 31, 1952 12:00:56 AM","filter":"#population","color":"#FF0000","userData":"","lat":-11.20269,"lng":17.87389},
{"value":500.0,"objectType":"circle","id":0,"name":"Angola","time":"Dec 31, 1953 12:00:56 AM","filter":"#population","color":"#FF0000","userData":"","lat":-11.20269,"lng":17.87389},
{"value":700.0,"objectType":"circle","id":0,"name":"Angola","time":"Dec 31, 1954 12:00:56 AM","filter":"#population","color":"#FF0000","userData":"","lat":-11.20269,"lng":17.87389},
{"value":1000.0,"objectType":"circle","id":0,"name":"Angola","time":"Dec 31, 1955 12:00:56 AM","filter":"#population","color":"#FF0000","userData":"","lat":-11.20269,"lng":17.87389},
{"value":500.0,"objectType":"circle","id":0,"name":"Angola","time":"Dec 31, 1956 12:00:56 AM","filter":"#population","color":"#FF0000","userData":"","lat":-11.20269,"lng":17.87389},
{"value":1000.0,"objectType":"circle","id":0,"name":"Angola","time":"Dec 31, 1957 12:00:56 AM","filter":"#population","color":"#FF0000","userData":"","lat":-11.20269,"lng":17.87389},
{"value":2500.0,"objectType":"circle","id":0,"name":"Angola","time":"Dec 31, 1958 12:00:56 AM","filter":"#population","color":"#FF0000","userData":"","lat":-11.20269,"lng":17.87389},
{"value":4816.0,"objectType":"circle","id":0,"name":"Angola","time":"Dec 31, 1959 12:00:56 AM","filter":"#population","color":"#FF0000","userData":"","lat":-11.20269,"lng":17.87389},
{"value":4884.19,"objectType":"circle","id":0,"name":"Angola","time":"Dec 31, 1960 12:00:56 AM","filter":"#population","color":"#FF0000","userData":"","lat":-11.20269,"lng":17.87389}
];
ghModel.parse(ghData);