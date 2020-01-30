$(document).on(':passageend', function (ev) {
    (function () {
        var cloudflare, letteringJs, lsLockLettering;

        lsLockLettering = LoadScreen.lock();

        cloudflare = "https://cdnjs.cloudflare.com/ajax/libs/";

        letteringJs = [cloudflare + "lettering.js/0.7.0/jquery.lettering.min.js"];

        importScripts(letteringJs).then(function () {
            LoadScreen.unlock(lsLockLettering);
            $(".lettering").lettering();
            //state.variables["versionjuego"] = $miVersionJuego;
            var indiceSueno = State.variables.playerIndiceSueno / 10;
            var indiceBlur = 10 - indiceSueno;
            var cssBlur = '0px 0px ' + indiceBlur + 'px rgba(255,255,255,1)';
            var cssBlur2 = '0px 0px ' + (indiceBlur / 2) + 'px rgba(255,255,255,1)';
            var text = $(".lettering"),
                // assuming lettering() has already been called on it
                numLetters = text.find("span").length; // how many letters?

            $(".lettering span").css({
                'color': 'transparent',
                'text-shadow': cssBlur
            });

            if (env == 'staging') {
                console.log(numLetters);
                console.log(indiceSueno);
                console.log(indiceBlur);
                console.log(cssBlur);
            }
            if (env === 'staging') {
                console.log('letteringJs cargado');
            }
        })["catch"](function (err) {
            console.log(err);
        });

    }).call(this);


});
