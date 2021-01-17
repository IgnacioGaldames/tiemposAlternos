$("#textbox-playername").change(function () {
	var textboxPlayername = $("#textbox-playername").val();
	State.variables.playerName = textboxPlayername;
	if (env == 'staging') {
		console.log(textboxPlayername);
	}	
});