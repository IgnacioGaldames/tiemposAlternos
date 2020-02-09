<<<<<<< HEAD
jQuery(document).ready(function ($) {
    $.get('https://restcountries.eu/rest/v2/region/americas?fields=name;translations', function (data) {
        $.each(data, function (index, val) {
            var name = val.name;
            var es = val.translations.es;
            if (val.translations.es == null) {
                es = name;
            }
            var html = '<option data-pais=' + name + '>' + es + '</option>';
=======
jQuery(document).ready(function($) {
    $.get('//restcountries.eu/rest/v2/region/americas', function(data) {
        $.each(data, function(index, val) {
            var html = '<option>'+ val.translations.es + '</option>';
            //console.log(html)
>>>>>>> template/master
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