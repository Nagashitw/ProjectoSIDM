// Função para Fechar a aplicação a partir do menu superior
function exitFromApp() {
  console.log("A Fechar Aplicação");
  navigator.app.exitApp();
}

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
/* ++++++++ CONVERSOR DE MEDIDAS +++++++++++

 ++++++++ CONVERSOR DE PESO ++++++++++++++*/

function conv_peso() {
  //Ir buscar os ids das unidades a converter;
  var peso1 = document.getElementById("select_unidade_peso").value;
  //var peso2 =  document.getElementById("selectpeso2").value;
  var valor = document.getElementById("valorpeso").value;
  //alert (valor);

  if (peso1 == "kg") {
    // KG para Toneladas
    var kg_to_toneladas = round((valor * 0.001), 3);
    var setLabel = document.getElementById("td_tonelada").innerHTML = kg_to_toneladas;

    // Preencher o campo dos KG na tabela
    var setLabel = document.getElementById("td_quilograma").innerHTML = "-";

    //KG para grama
    var kg_to_grama = round((valor * 1000), 3);
    var setLabel = document.getElementById("td_grama").innerHTML = kg_to_grama;

    //KG to Libra
    var kg_to_lbs = round((valor * 2.2046), 3);
    var setLabel = document.getElementById("td_libra").innerHTML = kg_to_lbs;

    //Kg to stone
    var kg_to_stone = round((valor * 0.157473044), 3);
    var setLabel = document.getElementById("td_stone").innerHTML = kg_to_stone;

    //kg to arroba
    var kg_to_arroba = round((valor * 0.06807351940095303), 3);
    var setLabel = document.getElementById("td_arroba").innerHTML = kg_to_arroba;

    // kg to onca
    var kg_to_oz = round((valor * 35.2739619), 3);
    var setLabel = document.getElementById("td_oz").innerHTML = kg_to_oz;

  } else if (peso1 == "tonelada") {
    // Preencher o campo das toneladas na tabela
    var setLabel = document.getElementById("td_tonelada").innerHTML = "-";
    //tonelada to kg
    var tonelada_to_kg = round((valor * 1000), 3);
    var setLabel = document.getElementById("td_quilograma").innerHTML = tonelada_to_kg;

    //tonelada para grama
    var tonelada_to_grama = round((valor * 1000000), 3);
    var setLabel = document.getElementById("td_grama").innerHTML = tonelada_to_grama;

    //tonelada to Libra
    var tonelada_to_libra = round((valor * 2455.57275542), 3);
    var setLabel = document.getElementById("td_libra").innerHTML = tonelada_to_libra;

    //tonelada to stone
    var tonelada_to_stone = round((valor * 124.89974518), 3);
    var setLabel = document.getElementById("td_stone").innerHTML = tonelada_to_stone;

    //tonelada to arroba
    var tonelada_to_arroba = round((valor * 53.9925119129), 3);
    var setLabel = document.getElementById("td_arroba").innerHTML = tonelada_to_arroba;

    // kg to onca
    var tonelada_to_oz = round((valor * 27977.5429203), 3);
    var setLabel = document.getElementById("td_oz").innerHTML = tonelada_to_oz;

  } else if (peso1 == "grama") {
    //grama para tonelada
    var grama_to_tonelada = round((valor * 0.000001), 3);
    var setLabel = document.getElementById("td_tonelada").innerHTML = grama_to_tonelada;

    //grama para kg
    var grama_to_kg = round((valor * 0.001), 3);
    var setLabel = document.getElementById("td_quilograma").innerHTML = grama_to_kg;

    // Preencher o campo das gramas na tabela
    var setLabel = document.getElementById("td_grama").innerHTML = "-";

    //grama libra
    var grama_to_libra = round((valor * 0.00220462262), 3);
    var setLabel = document.getElementById("td_libra").innerHTML = grama_to_libra;

    //grama to stone
    var grama_to_stone = round((valor * 0.000157473044), 3);
    var setLabel = document.getElementById("td_stone").innerHTML = grama_to_stone;

    //grama to arroba
    var grama_to_arroba = round((valor * 0.00006807351940095303), 3);
    var setLabel = document.getElementById("td_arroba").innerHTML = grama_to_arroba;

    // kg to onca
    var grama_to_oz = round((valor * 0.0352739619496), 3);
    var setLabel = document.getElementById("td_oz").innerHTML = grama_to_oz;

  } else if (peso1 == "libra") {

    var libra_to_tonelada = round((valor * 0.000571887247053), 3);
    var setLabel = document.getElementById("td_tonelada").innerHTML = libra_to_tonelada;

    var libra_to_kg = round((valor * 0.45359237), 3);
    var setLabel = document.getElementById("td_quilograma").innerHTML = libra_to_kg;

    var setLabel = document.getElementById("td_libra").innerHTML = "-";

    var libra_to_grama = round((valor * 453.59237), 3);
    var setLabel = document.getElementById("td_grama").innerHTML = libra_to_libra;

    var libra_to_stone = round((valor * 0.07142857), 3);
    var setLabel = document.getElementById("td_stone").innerHTML = libra_to_stone;

    var liba_to_arroba = round((valor * 0.0308776289993), 3);
    var setLabel = document.getElementById("td_arroba").innerHTML = libra_to_arroba;

    var libra_to_oz = round((valor * 16), 3);
    var setLabel = document.getElementById("td_oz").innerHTML = libra_to_oz;

  }

  else if (peso1 == "stone") {

    var stone_to_tonelada = round((valor * 0.00635029318), 3);
    var setLabel = document.getElementById("td_tonelada").innerHTML = stone_to_tonelada;

    var stone_to_kg = round((valor * 6.35029318), 3);
    var setLabel = document.getElementById("td_quilograma").innerHTML = stone_to_kg;

    var setLabel = document.getElementById("td_stone").innerHTML = "-";

    var stone_to_grama = round((valor * 6350.29318), 3);
    var setLabel = document.getElementById("td_grama").innerHTML = stone_to_grama;

    var stone_to_libra = round((valor * 14), 3);
    var setLabel = document.getElementById("td_stone").innerHTML = stone_to_libra;

    var stone_to_arroba = round((valor * 0.43228680599), 3);
    var setLabel = document.getElementById("td_arroba").innerHTML = stone_to_arroba;

    var stone_to_oz = round((valor * 224), 3);
    var setLabel = document.getElementById("td_oz").innerHTML = stone_to_oz;

  }

}
