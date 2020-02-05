jQuery(document).ready(function ($) {
    $.get('//restcountries.eu/rest/v2/all', function (data) {
        $.each(data, function (index, val) {
            var name = val.name;
            var es = val.translations.es;
            if (val.translations.es == null) {
                es = name;
            }
            var capital = val.capital;
            var timezones = val.timezones;
            var population = val.population;
            var html = '<option>' + es + '</option>';
            $('#lista-paises').append(html);
        });
    });
    $("#lista-paises").change(function () {
        var paisSelected = $(this).children("option:selected").val();
        State.variables.pais = paisSelected;
    });
});