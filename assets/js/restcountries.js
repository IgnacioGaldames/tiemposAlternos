jQuery(document).ready(function ($) {
    $.get('https://restcountries.eu/rest/v2/all', function (data) {
        $.each(data, function (index, val) {
            var name = val.name;

            var html = '<option data-pais=' + name + '>' + name + '</option>';
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
                var capital = val.capital;
                var deathPopulation = Math.round(((population / 1000000) / 4) * 3);
                State.variables.deathPopulation= deathPopulation;
                State.variables.capital= capital;
            });
        });

    });
});