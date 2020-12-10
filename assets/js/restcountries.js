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
		//console.log('btnLista')
	});
}
function setRegiones() {
	var misRegiones = {
		africa: "Africa",
		americas: "America",
		asia: "Asia", 
		europe: "Europe", 
		oceania: "Oceania",
	};
	$.each(misRegiones, function (index, val) {
		var nameRegion = index;
		var region = val;
		var htmlRegiones = '<option data-pais=' + nameRegion + '>' + region + '</option>';
		$('#lista-regiones').append(htmlRegiones);
	});
	$("#lista-regiones").change(function () {
		var regionName = $(this).children("option:selected").data("pais")
		$('#lista-paises').empty();
		getCountries(regionName);
	});
}
function getCountries(regionName) {
	$.get('https://restcountries.eu/rest/v2/region/' + regionName +'?fields=name;translations', function (data) {
		$.each(data, function (index, val) {
			var namePais = val.name;
			var es = val.translations.es;
			if (val.translations.es == null) {
				es = name;
			}
			var htmlPaises = '<option data-pais=' + namePais + '>' + es + '</option>';
			$('#lista-paises').append(htmlPaises);
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
				console.log(population);
				var capital = val.capital;
				var deathPopulation = Math.round(((population / 1000000) / 4) * 3);
				console.log(deathPopulation);
				if (deathPopulation == 0) {
					State.variables.deathPopulation = "tres cuartos de la población";
				}
				else if (deathPopulation == 1) {
					State.variables.deathPopulation = "1 millón de personas";
				}
				else {
					State.variables.deathPopulation = deathPopulation + " millones de personas";
				}
				//State.variables.deathPopulation = deathPopulation;
				State.variables.capital = capital;
			});
		});

	});
}
jQuery(document).ready(function ($) {
	//getCountries();
	btnLista();
});
$(document).on(':passagestart', function (ev) {
	setRegiones();
	//getCountries();
	btnLista();
});
$(document).on(':passagerender', function (ev) {
	/* JavaScript code */
	setRegiones();
	//getCountries();
	btnLista();
});
$(document).on(':passageend', function (ev) {
	/* JavaScript code */
	setRegiones();
	//getCountries();
	btnLista();
});