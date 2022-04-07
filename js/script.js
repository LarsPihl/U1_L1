var input1Elem, input2Elem, resultElem, i;//Deklarerar globala variabler.

function init() {//Funktion som aktiveras när sidan laddats.

    input1Elem = document.getElementById("input1");
	input2Elem = document.getElementById("input2");
	resultElem = document.getElementById("result");
	document.getElementById("runBtn").onclick = areaCalculations;

}//end init

window.onload = init;//När sidan laddats anropas funktionen 'init'.

function areaCalculations() {
    var length;		// Längd i meter
	var width;		// bredd i meter
    var area;		// Yta i kvadratmeter
    var input1ElemValue = input1Elem.value;//Lägger inmatningar i egna variabler för genomsökning i en loop.
    var input2ElemValue = input2Elem.value;

    /*Inmatningarna söks igenom från början till slut. Om ett kommatecken hittas ersätts det med punkt för att 
    omvandling till ett nummer ska ske korrekt. Om annat än siffror, punkter eller kommatecken matas in skrivs
    ett felmeddelande ut och funktionen bryts.*/

    for (i = 0; i < input1ElemValue.length; i++) {
        if (input1ElemValue[i] == ',') {
            input1ElemValue = input1ElemValue.replace(',','.');
        }

        if (isNaN(input1ElemValue[i]) && input1ElemValue[i] != ',' && input1ElemValue[i] != '.') {
            resultElem.innerHTML = "Skriv endast in siffror, decimaltecken eller punkter.";
            return;
        }

    }

    for (i = 0; i < input2ElemValue.length; i++) {
        if (input2ElemValue[i] == ',') {
            input2ElemValue = input2ElemValue.replace(',','.');
        }

        if (isNaN(input2ElemValue[i]) && input2ElemValue[i] != ',' && input2ElemValue[i] != '.') {
            resultElem.innerHTML = "Skriv endast in siffror, decimaltecken eller punkter.";
            return;
        }

    }

    /*Inmatningarna omvandas till nummer och sparas i variablerna 'length' och 'width'.*/
	length = Number(input1ElemValue);
	width = Number(input2ElemValue);
    area = (length * width).toFixed(2);//Arean skrivs ut med 2 decimaler.
	resultElem.innerHTML = "<p>Rektangelns area: " + area + " m<sup>2</sup>.</p>";
    area = (3.14 * length * width / 4).toFixed(2);//Arean för en rektangel skrivs ut med 2 decimaler på en ny
    //rad i utskriftsparagrafen.
    resultElem.innerHTML += "<p>Elipsens area: " + area + " m<sup>2</sup>.</p>";
    area = ((length + 5) * width).toFixed(2);//Area för en rektangel med längden förlängd med 5 meter.
    resultElem.innerHTML += "<p>Längden + 5 ger rektangels area: " + area + " m<sup>2</sup>.</p>";
    area = (length * 1.5 * (width +3)).toFixed(2);//Area när längd ökas med 50 % och bredd ökas med 3 meter.
    resultElem.innerHTML += "<p>Rektangelns area när längden ökar med 50 % och bredden ökar med 3 meter: " + area + " m<sup>2</sup>.</p>";
    area = (length*3.28 * width*3.28/2).toFixed(2);//Area för en triangel i kvadratfot.
    resultElem.innerHTML += "<p>Triangelns area: " + area + " kvadratfot.</p>";

}

