jQuery(document).ready(function ($) {
    $.get('https://restcountries.eu/rest/v2/all?fields=name;translations', function (data) {
        $.each(data, function (index, val) {
            var name = val.name;
            var es = val.translations.es;
            if (val.translations.es == null) {
                es = name;
            }
            var html = '<option data-pais=' + name + '>' + es + '</option>';
            $('#lista-paises').append(html);
        });
    });
    $("#lista-paises").change(function () {
        var paisSelected = $(this).children("option:selected").val();
        var paisName = $(this).children("option:selected").data( "pais" );

        State.variables.pais = paisSelected;

        $.get('https://restcountries.eu/rest/v2/name/' + paisName, function (data) {
            $.each(data, function (index, val) {
                var name = val.name;
                var population = val.population;
                var deathPopulation = Math.round(((population / 1000000) / 4) * 3);
                console.log(population);
                console.log(deathPopulation);
                State.variables.deathPopulation= deathPopulation;
            });
        });

    });
});