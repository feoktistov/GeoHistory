/* class CircleWidget */
function CircleWidget(options) {
this.set('map', options['map']);
this.set('position', options['position']);
this.set('value', 100);
this.set('valueScale', options['valueScale']); // TODO: make default value

var circle = new google.maps.Circle({
strokeWeight: 2
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
}
CircleWidget.prototype = new google.maps.MVCObject();
CircleWidget.prototype.value_changed = function() {
this.set('radius', this.get('value') * this.get('valueScale'));
};
