$("#textbox-playername").change(function () {
	var textboxPlayername = $("#textbox-playername").val();
	State.variables.playerName = textboxPlayername;
	console.log(textboxPlayername);
});