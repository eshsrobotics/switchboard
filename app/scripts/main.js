'use strict';

$('#batteryLevel').knob({
    'readOnly': true,
    'value': 100
});

var i = 100;

function updateBatteryLife() {
    if (i > 0) {
      i--;
    }

    $('#batteryLevel').val(i).trigger('change');

    setTimeout(updateBatteryLife, 10000);
}

updateBatteryLife();
