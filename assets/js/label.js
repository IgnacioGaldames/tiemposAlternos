$("#textbox-playername").change(function () {
    var textboxPlayername = $("#textbox-playername").val();
    State.variables.playerName = textboxPlayername;
    console.log(textboxPlayername);
    console.log('cambio');
});
$("input").change(function(){
    alert("The text has been changed.");
  });