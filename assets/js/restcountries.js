function btnLista() {
	if ($('#lista-paises').val()) {
		$("#juegoNuevo").attr('disabled', true);
		$("#nuevoJuego").attr('disabled', true);
	} else {
		$("#juegoNuevo").attr('disabled', false);
		$("#nuevoJuego").attr('disabled', false);
	}
	$('#lista-paises').on('change', function () {
		$("#juegoNuevo").removeClass("disabled btn-secondary").addClass("btn-primary");
		$("#nuevoJuego").removeClass("disabled btn-secondary").addClass("btn-primary");
		$("#juegoNuevo").attr('disabled', false);
		$("#nuevoJuego").attr('disabled', false);
		console.log('btnLista')
	});
}

function getCountries() {
	$.get('https://restcountries.eu/rest/v2/region/americas?fields=name;translations', function (data) {
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
		var paisName = $(this).children("option:selected").data("pais");

		State.variables.pais = paisSelected;

		$.get('https://restcountries.eu/rest/v2/name/' + paisName, function (data) {
			$.each(data, function (index, val) {
				var name = val.name;
				var population = val.population;
				var capital = val.capital;
				var deathPopulation = Math.round(((population / 1000000) / 4) * 3);
				State.variables.deathPopulation = deathPopulation;
				State.variables.capital = capital;
			});
		});

	});

}
jQuery(document).ready(function ($) {
	getCountries();
	btnLista();
});
$(document).on(':passagestart', function (ev) {
	getCountries();
	btnLista();
});
$(document).on(':passagerender', function (ev) {
	/* JavaScript code */
	getCountries();
	btnLista();
});
$(document).on(':passageend', function (ev) {
	/* JavaScript code */
	getCountries();
	btnLista();
});