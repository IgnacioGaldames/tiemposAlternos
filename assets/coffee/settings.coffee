#Setting.addHeader "My Settings", "The settings for the game"
Setting.addToggle "matureContent", {label : "¿Contenido para audiencias maduras?"}
Setting.addList("difficulty", {
	label   : "Elige un nivel de dificultd.",
	list    : ["Fácil", "Normal", "Difícil", "Ultradifícil"],
	default : "Normal"
});
Setting.save()