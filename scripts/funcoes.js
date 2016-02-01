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

  } else if (unidade_comprimento == "mm") {
    var setLabel = document.getElementById("td_mm").innerHTML = "-";

    var mm_to_m = round((valor * 0.001), 3);
    var setLabel = document.getElementById("td_m").innerHTML = mm_to_m;

    var mm_to_km = round((valor * 0.000001), 3);
    var setLabel = document.getElementById("td_km").innerHTML = mm_to_km;

    var mm_to_cm = round((valor * 0.1), 3);
    var setLabel = document.getElementById("td_cm").innerHTML = mm_to_cm;

    var mm_to_legua = round((valor * 0.000000239268794563813), 3);
    var setLabel = document.getElementById("td_legua").innerHTML = mm_to_legua;

    var mm_to_milha = round((valor * 0.000000621371192237334), 3);
    var setLabel = document.getElementById("td_milha").innerHTML = mm_to_milha;

    var mm_to_jarda = round((valor * 0.0010936132983377078), 3);
    var setLabel = document.getElementById("td_jarda").innerHTML = mm_to_jarda;

    var mm_to_pe = round((valor * 0.0032808398950131233), 3);
    var setLabel = document.getElementById("td_pe").innerHTML = mm_to_pe;

    var mm_to_polegada = round((valor * 0.03937007874015748), 3);
    var setLabel = document.getElementById("td_polegada").innerHTML = mm_to_polegada;

  } else if (unidade_comprimento == "cm") {
    var setLabel = document.getElementById("td_cm").innerHTML = "-";

    var cm_to_m = round((valor * 0.01), 3);
    var setLabel = document.getElementById("td_m").innerHTML = cm_to_m;

    var cm_to_km = round((valor * 0.00001), 3);
    var setLabel = document.getElementById("td_km").innerHTML = cm_to_km;

    var cm_to_mm = round((valor * 10), 3);
    var setLabel = document.getElementById("td_mm").innerHTML = cm_to_mm;

    var cm_to_legua = round((valor * 0.0000023809523809523808), 3);
    var setLabel = document.getElementById("td_legua").innerHTML = cm_to_legua;

    var cm_to_milha = round((valor * 0.00000621371192237), 3);
    var setLabel = document.getElementById("td_milha").innerHTML = cm_to_milha;

    var cm_to_jarda = round((valor * 0.010936132983377079), 3);
    var setLabel = document.getElementById("td_jarda").innerHTML = cm_to_jarda;

    var cm_to_pe = round((valor * 0.03280839895013123), 3);
    var setLabel = document.getElementById("td_pe").innerHTML = cm_to_pe;

    var cm_to_polegada = round((valor * 0.39370078740157477), 3);
    var setLabel = document.getElementById("td_polegada").innerHTML = cm_to_polegada;

  } else if (unidade_comprimento == "legua") {
    var setLabel = document.getElementById("td_legua").innerHTML = "-";

    var legua_to_m = round((valor * 4200), 3);
    var setLabel = document.getElementById("td_m").innerHTML = legua_to_m;

    var legua_to_km = round((valor * 4.2), 3);
    var setLabel = document.getElementById("td_km").innerHTML = legua_to_km;

    var legua_to_mm = round((valor * 4233400), 3);
    var setLabel = document.getElementById("td_mm").innerHTML = legua_to_mm;

    var legua_to_cm = round((valor * 420000), 3);
    var setLabel = document.getElementById("td_cm").innerHTML = legua_to_cm;

    var legua_to_milha = round((valor * 4.15075956415), 3);
    var setLabel = document.getElementById("td_milha").innerHTML = legua_to_milha;

    var legua_to_jarda = round((valor * 21432141.6297), 3);
    var setLabel = document.getElementById("td_jarda").innerHTML = legua_to_jarda;

    var legua_to_pe = round((valor * 13779.5275591), 3);
    var setLabel = document.getElementById("td_pe").innerHTML = legua_to_pe;

    var legua_to_polegada = round((valor * 165354.330709), 3);
    var setLabel = document.getElementById("td_polegada").innerHTML = legua_to_polegada;

  } else if (unidade_comprimento == "milha") {
    var setLabel = document.getElementById("td_milha").innerHTML = "-";

    var milha_to_m = round((valor * 1609.344), 3);
    var setLabel = document.getElementById("td_m").innerHTML = milha_to_m;

    var milha_to_km = round((valor * 1.609344), 3);
    var setLabel = document.getElementById("td_km").innerHTML = milha_to_km;

    var milha_to_mm = round((valor * 1609344), 3);
    var setLabel = document.getElementById("td_mm").innerHTML = milha_to_mm;

    var milha_to_cm = round((valor * 160934.4), 3);
    var setLabel = document.getElementById("td_cm").innerHTML = milha_to_cm;

    var milha_to_legua = round((valor * 0.385065798919), 3);
    var setLabel = document.getElementById("td_legua").innerHTML = milha_to_legua;

    var milha_to_jarda = round((valor * 1760), 3);
    var setLabel = document.getElementById("td_jarda").innerHTML = milha_to_jarda;

    var milha_to_pe = round((valor * 5280), 3);
    var setLabel = document.getElementById("td_pe").innerHTML = milha_to_pe;

    var milha_to_polegada = round((valor * 63360), 3);
    var setLabel = document.getElementById("td_polegada").innerHTML = milha_to_polegada;

  } else if (unidade_comprimento == "jarda") {
    var setLabel = document.getElementById("td_jarda").innerHTML = "-";

    var jarda_to_m = round((valor * 0.9144), 3);
    var setLabel = document.getElementById("td_m").innerHTML = jarda_to_m;

    var jarda_to_km = round((valor * 0.0009144), 3);
    var setLabel = document.getElementById("td_km").innerHTML = jarda_to_km;

    var jarda_to_mm = round((valor * 914.4), 3);
    var setLabel = document.getElementById("td_mm").innerHTML = jarda_to_mm;

    var jarda_to_cm = round((valor * 91.44), 3);
    var setLabel = document.getElementById("td_cm").innerHTML = jarda_to_cm;

    var jarda_to_legua = round((valor * 0.0000000466588928571), 3);
    var setLabel = document.getElementById("td_legua").innerHTML = jarda_to_legua;

    var jarda_to_milha = round((valor * 0.0005681818181818182), 3);
    var setLabel = document.getElementById("td_milga").innerHTML = jarda_to_milha;

    var jarda_to_pe = round((valor * 3), 3);
    var setLabel = document.getElementById("td_pe").innerHTML = jarda_to_pe;

    var jarda_to_polegada = round((valor * 36), 3);
    var setLabel = document.getElementById("td_polegada").innerHTML = jarda_to_polegada;
  } else if (unidade_comprimento == "pe") {
    var setLabel = document.getElementById("td_pe").innerHTML = "-";

    var pe_to_m = round((valor * 0.3048), 3);
    var setLabel = document.getElementById("td_m").innerHTML = pe_to_m;

    var pe_to_km = round((valor * 0.0003048), 3);
    var setLabel = document.getElementById("td_km").innerHTML = pe_to_km;

    var pe_to_mm = round((valor * 304.8), 3);
    var setLabel = document.getElementById("td_mm").innerHTML = pe_to_mm;

    var pe_to_cm = round((valor * 30.48), 3);
    var setLabel = document.getElementById("td_cm").innerHTML = pe_to_cm;

    var pe_to_legua = round((valor * 0.0000725714285714), 3);
    var setLabel = document.getElementById("td_legua").innerHTML = pe_to_legua;

    var pe_to_milha = round((valor * 0.0001893939393939394), 3);
    var setLabel = document.getElementById("td_milga").innerHTML = pe_to_milha;

    var pe_to_jarda = round((valor * 0.3333333333333333), 3);
    var setLabel = document.getElementById("td_jarda").innerHTML = pe_to_jarda;

    var pe_to_polegada = round((valor * 12), 3);
    var setLabel = document.getElementById("td_polegada").innerHTML = pe_to_polegada;
  } else if (unidade_comprimento == "polegada") {
    var setLabel = document.getElementById("td_polegada").innerHTML = "-";

    var polegada_to_m = round((valor * 0.0254), 3);
    var setLabel = document.getElementById("td_m").innerHTML = polegada_to_m;

    var polegada_to_km = round((valor * 0.0000254), 3);
    var setLabel = document.getElementById("td_km").innerHTML = polegada_to_km;

    var polegada_to_mm = round((valor * 25.4), 3);
    var setLabel = document.getElementById("td_mm").innerHTML = polegada_to_mm;

    var polegada_to_cm = round((valor * 2.54), 3);
    var setLabel = document.getElementById("td_cm").innerHTML = polegada_to_cm;

    var polegada_to_legua = round((valor * 0.00000604761904762), 3);
    var setLabel = document.getElementById("td_legua").innerHTML = polegada_to_legua;

    var polegada_to_milha = round((valor * 0.000015782828282828283), 3);
    var setLabel = document.getElementById("td_milga").innerHTML = polegada_to_milha;

    var polegada_to_jarda = round((valor * 0.027777777777777776), 3);
    var setLabel = document.getElementById("td_jarda").innerHTML = polegada_to_jarda;

    var polegada_to_pe = round((valor * 0.08333333333333333), 3);
    var setLabel = document.getElementById("td_pe").innerHTML = polegada_to_pe;
  } else {
    alert("Introduza uma unidade de medida");
  }

}
// CONVERSOR DE VELOCIDADE

function conv_velocidade() {
  //Ir buscar os ids das unidades a converter;
  var unidade_velocidade = document.getElementById("select_unidade_velocidade").value;

  //var peso2 =  document.getElementById("selectpeso2").value;
  var valor = document.getElementById("valorvelocidade").value;
  if (unidade_velocidade == "kmh") {
    var setLabel = document.getElementById("td_kmh").innerHTML = "-";

    var kmh_to_mph = round((valor * 0.621371192237), 3);
    var setLabel = document.getElementById("td_mph").innerHTML = kmh_to_mph;

    var kmh_to_mps = round((valor * 0.2777777777777778), 3);
    var setLabel = document.getElementById("td_mps").innerHTML = kmh_to_mps;
  } else if (unidade_velocidade == "mph") {

    var setLabel = document.getElementById("td_mph").innerHTML = "-";

    var mph_to_kmh = round((valor * 1.609344), 3);
    var setLabel = document.getElementById("td_kmh").innerHTML = mph_to_kmh;

    var mph_mps = round((valor * 0.44704), 3);
    var setLabel = document.getElementById("td_mps").innerHTML = mph_mps;

  } else if (unidade_velocidade == "mps") {

    var setLabel = document.getElementById("td_mps").innerHTML = "-";

    var mps_to_mph = round((valor * 2.2369362920544025), 3);
    var setLabel = document.getElementById("td_mph").innerHTML = mps_to_mph;

    var mps_to_kmh = round((valor * 3.6), 3);
    var setLabel = document.getElementById("td_kmh").innerHTML = mps_to_kmh;

  } else {
    alert("Introduza uma unidade de medida");
  }
}

//FORMULA RESOLVENTE
<!--

//Quadratic Calculator, by Taydron
//http://www.taydron-domain.net
//Visit JavaScript Kit (http://javascriptkit.com) for script

function quadData1() {
  var valA = document.quadCalc.valA.value;
  var valB = document.quadCalc.valB.value;
  var valC = document.quadCalc.valC.value;
  var disc = (valB * valB) - (4 * valA * valC);
  var r_disc = Math.sqrt(disc);
  var vax1 = (-valB + r_disc) / (2 * valA);
  var vax2 = (-valB - r_disc) / (2 * valA);
  var ing1 = ((valA * vax1 * vax1 * vax1) / 3) + ((valB * vax1 * vax1) / 2) + (valC * vax1);
  var ing2 = ((valA * vax2 * vax2 * vax2) / 3) + ((valB * vax2 * vax2) / 2) + (valC * vax2);
  var inte = ing1 - ing2;
  var sec_dx = (-valB) / (2 * valA);
  var sec_dy = (valA * sec_dx * sec_dx) + (valB * sec_dx) + (1 * valC);
  var e_val;
  vax1 = Math.round(vax1 * 100) / 100;
  vax2 = Math.round(vax2 * 100) / 100;
  inte = Math.round(inte * 100) / 100;
  sec_dx = Math.round(sec_dx * 100) / 100;
  sec_dy = Math.round(sec_dy * 100) / 100;
  if (valA == 0) {
    document.quadCalc.answer1.value = "Esta curva não é quadrática. Digite um valor diferente de zero na primeira caixa.";
  } else {
    if (disc > 0) {
      document.quadCalc.answer1.value = "A área limitada pela curva acima do eixo x é: " + vax1 + " e " + vax2 + "."; {
        if (inte > 0) {
          document.quadCalc.answer2.value = inte;
        }
        if (inte < 0) {
          document.quadCalc.answer2.value = -inte;
        }
        if (inte = 0) {
          document.quadCalc.answer2.value = 0;
        }
      }
    }
    if (disc < 0) {
      document.quadCalc.answer1.value = "A curva não tem raízes reais, porque não intercepta o eixo x real.";
      document.quadCalc.answer2.value = "N/A";
    }
    if (disc = 0) {
      document.quadCalc.answer1.value = "A curva toca o eixo x em: " + vax1 + ".";
      document.quadCalc.answer2.value = "N/A";
    }
    document.quadCalc.answer3.value = (2 * valA) + "x+" + valB;
    if (valA < 0) {
      e_val = "máximo";
    }
    if (valA > 0) {
      e_val = "mínimo";
    }
    document.quadCalc.answer4.value = e_val;
    document.quadCalc.answer5.value = sec_dx + " , " + sec_dy;
  }
}
