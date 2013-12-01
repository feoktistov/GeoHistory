/* class CircleWidget */
function CircleWidget(p) {
    this.set('name', p['name']);
    this.set('map', p.hasOwnProperty('map')? p['map'] : null);
    this.set('position', p['position']);
    this.set('value', 100);
    this.set('valueScale', p.hasOwnProperty('valueScale')? p['valueScale'] : 1);

    var circle = new google.maps.Circle({
        strokeWeight: 1,
        strokeColor: '#0000ff',
        fillColor: '#0000ff',
    });
    this.bindTo('bounds', circle);
    circle.bindTo('center', this, 'position');
    circle.bindTo('map', this);
    circle.bindTo('radius', this);
    circle.bindTo('strokeColor', this);
    circle.bindTo('strokeOpacity', this);
    circle.bindTo('strokeWeight', this);
    circle.bindTo('fillColor', this);
    circle.bindTo('fillOpacity', this);

//    var marker = new google.maps.Marker({
//    });
//    marker.bindTo('position', this);
//    marker.bindTo('map', this);
}
CircleWidget.prototype = new google.maps.MVCObject();
CircleWidget.prototype.value_changed = function() {
    var radius = Math.min(2000000, Math.max(100, this.get('value') * this.get('valueScale')));
    this.set('radius', radius);
};


/* class ArrowWidget */
function ArrowWidget (option) {
    this.set('map', options['map']);
    this.set('from', options['from']);
    this.set('to', options['to']);
}

