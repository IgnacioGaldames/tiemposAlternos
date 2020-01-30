$(document).on(':passageend', function (ev) {
    (function () {
        var cloudflare, letteringJs, lsLockLettering;

        lsLockLettering = LoadScreen.lock();

        cloudflare = "https://cdnjs.cloudflare.com/ajax/libs/";

        letteringJs = [cloudflare + "lettering.js/0.7.0/jquery.lettering.min.js"];

        importScripts(letteringJs).then(function () {
            LoadScreen.unlock(lsLockLettering);
            $(".lettering").lettering();
            var indiceSueno = State.variables.playerIndiceSueno / 10;
            var indiceBlur = 10 - indiceSueno;
            var velocidadBlur = indiceBlur * 200;
            var cssBlur = '0px 0px ' + indiceBlur + 'px rgba(255,255,255,1)';
            var cssBlur2 = '0px 0px ' + (indiceBlur / 2) + 'px rgba(255,255,255,1)';
            var totalSpan = $(".lettering").find("span").length;
            var totalRandomBlur2 = Math.round((totalSpan / 3));

            function letteringLetters() {
                $(".lettering span").css({
                    'color': 'transparent',
                    'text-shadow': cssBlur
                });
            }
            function randomLetter() {
                $(".lettering span:nth-child(" + (Math.floor(Math.random() * totalSpan) + 1) + ")").css({
                    'color': 'transparent',
                    'text-shadow': cssBlur2
                });
                setTimeout(randomLetter, velocidadBlur);
            }

            letteringLetters();
            randomLetter();

            if (env == 'staging') {
                
                console.log("velocidad blur " + velocidadBlur);
                console.log("random " + random);
                console.log("total spans " + totalSpan);
                console.log("total random blur " + totalRandomBlur2);
                console.log("indice sueño " + indiceSueno);
                console.log("indice blur " + indiceBlur);
                console.log("css blur " + cssBlur);
            }
            if (env === 'staging') {
                console.log('letteringJs cargado');
            }
        })["catch"](function (err) {
            console.log(err);
        });

    }).call(this);


});
