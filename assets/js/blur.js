$(document).on(':passageinit', function (ev) {
    //state.variables["versionjuego"] = $miVersionJuego;
    var indiceSueno = State.variables.playerIndiceSueno / 10 ;
    var indiceBlur = 10 - indiceSueno ;
    var cssBlur = '0px 0px ' + indiceBlur + 'px rgba(255,255,255,1)';
 
    console.log(indiceSueno);
    console.log(indiceBlur);
    console.log(cssBlur);
    $(" #menu").css({
        'color': 'transparent',
        'text-shadow':  cssBlur
    });
});
