// Função para Fechar a aplicação a partir do menu superior
function exitFromApp() {
  console.log("A Fechar Aplicação");
  navigator.app.exitApp();
}

// Funcao para arrendondar um valor com N casas decimais.

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

  } else if (peso1 == "stone") {

    var stone_to_tonelada = round((valor * 0.00635029318), 3);
    var setLabel = document.getElementById("td_tonelada").innerHTML = stone_to_tonelada;

    var stone_to_kg = round((valor * 6.35029318), 3);
    var setLabel = document.getElementById("td_quilograma").innerHTML = stone_to_kg;

    var setLabel = document.getElementById("td_stone").innerHTML = "-";

    var stone_to_grama = round((valor * 6350.29318), 3);
    var setLabel = document.getElementById("td_grama").innerHTML = stone_to_grama;

    var stone_to_libra = round((valor * 14), 3);
    var setLabel = document.getElementById("td_libra").innerHTML = stone_to_libra;

    var stone_to_arroba = round((valor * 0.43228680599), 3);
    var setLabel = document.getElementById("td_arroba").innerHTML = stone_to_arroba;

    var stone_to_oz = round((valor * 224), 3);
    var setLabel = document.getElementById("td_oz").innerHTML = stone_to_oz;

  } else if (peso1 == "arroba") {

    var arroba_to_tonelada = round((valor * 0.0185210868058), 3);
    var setLabel = document.getElementById("td_tonelada").innerHTML = arroba_to_tonelada;

    var arroba_to_kg = round((valor * 14.69), 3);
    var setLabel = document.getElementById("td_quilograma").innerHTML = arroba_to_kg;

    var setLabel = document.getElementById("td_arroba").innerHTML = "-";

    var arroba_to_grama = round((valor * 14690), 3);
    var setLabel = document.getElementById("td_grama").innerHTML = arroba_to_grama;

    var arroba_to_libra = round((valor * 32.385906315), 3);
    var setLabel = document.getElementById("td_libra").innerHTML = arroba_to_libra;

    var arroba_to_stone = round((valor * 2.3132790225), 3);
    var setLabel = document.getElementById("td_stone").innerHTML = arroba_to_stone;

    var arroba_to_oz = round((valor * 518.174501039), 3);
    var setLabel = document.getElementById("td_oz").innerHTML = arroba_to_oz;

  } else if (peso1 == "oz") {
    var oz_to_tonelada = round((valor * 0.000028349523125), 3);
    var setLabel = document.getElementById("td_tonelada").innerHTML = oz_to_tonelada;

    var oz_to_kg = round((valor * 0.028349523125), 3);
    var setLabel = document.getElementById("td_quilograma").innerHTML = oz_to_kg;

    var setLabel = document.getElementById("td_oz").innerHTML = "-";

    var oz_to_grama = round((valor * 28.349523125), 3);
    var setLabel = document.getElementById("td_grama").innerHTML = oz_to_grama;

    var oz_to_libra = round((valor * 0.0625), 3);
    var setLabel = document.getElementById("td_libra").innerHTML = oz_to_libra;

    var oz_to_stone = round((valor * 0.004464285714285714), 3);
    var setLabel = document.getElementById("td_stone").innerHTML = oz_to_stone;

    var oz_to_arroba = round((valor * 0.00192985181246), 3);
    var setLabel = document.getElementById("td_arroba").innerHTML = oz_to_arroba;
  } else {

    Alert("Por favor seleccione uma unidade de conversão!")
  }
}
// FIM DO CONVERSOR DE PESO

function conv_comprimento() {
  //Ir buscar os ids das unidades a converter;
  var unidade_comprimento = document.getElementById("select_unidade_comprimento").value;
  //var peso2 =  document.getElementById("selectpeso2").value;
  var valor = document.getElementById("valorcomprimento").value;

  if (unidade_comprimento == "km") {
    var setLabel = document.getElementById("td_km").innerHTML = "-";

    var km_to_m = round((valor * 1000), 3);
    var setLabel = document.getElementById("td_m").innerHTML = km_to_m;

    var km_to_cm = round((valor * 100000), 3);
    var setLabel = document.getElementById("td_cm").innerHTML = km_to_cm;

    var km_to_mm = round((valor * 1000000), 3);
    var setLabel = document.getElementById("td_mm").innerHTML = km_to_mm;

    var km_to_legua = round((valor * 0.23809523809523808), 3);
    var setLabel = document.getElementById("td_legua").innerHTML = km_to_legua;

    var km_to_milha = round((valor * 0.621371192237), 3);
    var setLabel = document.getElementById("td_milha").innerHTML = km_to_milha;

    var km_to_jarda = round((valor * 1093.61329834), 3);
    var setLabel = document.getElementById("td_jarda").innerHTML = km_to_jarda;

    var km_to_pe = round((valor * 3280.83989501), 3);
    var setLabel = document.getElementById("td_pe").innerHTML = km_to_pe;

    var km_to_polegada = round((valor * 39370.07874015748), 3);
    var setLabel = document.getElementById("td_polegada").innerHTML = km_to_polegada;

  } else if (unidade_comprimento == "m")

  {
    var setLabel = document.getElementById("td_m").innerHTML = "-";

    var m_to_km = round((valor * 0.001), 3);
    var setLabel = document.getElementById("td_km").innerHTML = m_to_km;

    var m_to_cm = round((valor * 100), 3);
    var setLabel = document.getElementById("td_cm").innerHTML = m_to_cm;

    var m_to_mm = round((valor * 1000), 3);
    var setLabel = document.getElementById("td_mm").innerHTML = m_to_mm;

    var m_to_legua = round((valor * 0.0002380952380952381), 3);
    var setLabel = document.getElementById("td_legua").innerHTML = m_to_legua;

    var m_to_milha = round((valor * 0.000621371192237), 3);
    var setLabel = document.getElementById("td_milha").innerHTML = m_to_milha;

    var m_to_jarda = round((valor * 1.0936132983377078), 3);
    var setLabel = document.getElementById("td_jarda").innerHTML = m_to_jarda;

    var m_to_pe = round((valor * 3.280839895013123), 3);
    var setLabel = document.getElementById("td_pe").innerHTML = m_to_pe;

    var m_to_polegada = round((valor * 39.37007874015748), 3);
    var setLabel = document.getElementById("td_polegada").innerHTML = m_to_polegada;
    
  } else if (unidade_comprimento == "cm") {

  }
}
