this.on('headsetplug',function() {trigger.device.flight.on( function (){console.log("Flight on");})});
this.on('headsetunplug',function() {trigger.device.flight.off(function(){console.log("Flight off");})});