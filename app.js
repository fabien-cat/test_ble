function go(){
	var options={ filters: [{ services: ['battery_service'] }] };
	navigator.bluetooth.requestDevice(options)
	.then(device => {
		alert(device.name);
		alert(device.uuids);
	})
	.catch(error => { alert(error); });
}
