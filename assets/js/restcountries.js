jQuery(document).ready(function($) {
    $.get('//restcountries.eu/rest/v2/region/americas', function(data) {
        $.each(data, function(index, val) {
            var html = '<option>'+ val.translations.es + '</option>';
            //console.log(html)
            $('#lista-paises').append(html);
        });
    });
    $("#lista-paises").change(function(){
        var paisSelected = $(this).children("option:selected").val();
        State.variables.pais =  paisSelected;
    });
});