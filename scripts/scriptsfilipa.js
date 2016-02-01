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

}
else if (unidade_comprimento == "milha") {
var setLabel = document.getElementById("td_milha").innerHTML = "-";

var milha_to_m = round((valor * 1609.344), 3);
var setLabel = document.getElementById("td_m").innerHTML = milha_to_m;

var milha_to_km = round((valor * 1.609344, 3);
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

}
else if (unidade_comprimento == "jarda") {
var setLabel = document.getElementById("td_jarda").innerHTML = "-";

var jarda_to_m = round((valor * 0.9144), 3);
var setLabel = document.getElementById("td_m").innerHTML = jarda_to_m;

var jarda_to_km = round((valor * 0.0009144, 3);
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
}
else if (unidade_comprimento == "pe") {
var setLabel = document.getElementById("td_pe").innerHTML = "-";

var pe_to_m = round((valor * 0.3048), 3);
var setLabel = document.getElementById("td_m").innerHTML = pe_to_m;

var pe_to_km = round((valor * 0.0003048, 3);
var setLabel = document.getElementById("td_km").innerHTML = pe_to_km;

var pe_to_mm = round((valor * 304.8), 3);
var setLabel = document.getElementById("td_mm").innerHTML = pe_to_mm;

var pe_to_cm = round((valor * 30.48), 3);
var setLabel = document.getElementById("td_cm").innerHTML = pe_to_cm;

var pe_to_legua = round((valor * 0,0000725714285714), 3);
var setLabel = document.getElementById("td_legua").innerHTML = pe_to_legua;

var pe_to_milha = round((valor * 0.0001893939393939394), 3);
var setLabel = document.getElementById("td_milga").innerHTML = pe_to_milha;

var pe_to_jarda = round((valor * 0.3333333333333333), 3);
var setLabel = document.getElementById("td_jarda").innerHTML = pe_to_jarda;

var pe_to_polegada = round((valor * 12), 3);
var setLabel = document.getElementById("td_polegada").innerHTML = pe_to_polegada;
}
else if (unidade_comprimento == "polegada") {
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
}
