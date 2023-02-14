function lengthConverter(source,valNul){
    valNul = parseFloat(valNul);
    let inputCm = document.getElementById("inputCm");
    let inputMm = document.getElementById("inputMm");
    let inputIn = document.getElementById("inputIn");
    let inputPc = document.getElementById("inputPc");
    let inputPt = document.getElementById("inputPt");
    let inputPx = document.getElementById("inputPx");
    let inputpx = document.getElementById("inputpx");
    let inputRem = document.getElementById("inputRem");
    let inputEm = document.getElementById("inputEm");

    if(source == "inputCm"){
        inputMm.value = (valNul*10).toFixed(2);
        inputIn.value = (valNul/2.54).toFixed(4);
        inputPc.value = (valNul*2.36220).toFixed(2);
        inputPt.value = (valNul*28.34645).toFixed(2);
        inputPx.value = (valNul*37.79527).toFixed(2);
    }
    if(source == "inputMm"){
        inputCm.value = (valNul/0.1).toFixed(2);
        inputIn.value = (valNul*0.039370).toFixed(2);
        inputPc.value = (valNul*0.2362204).toFixed(2);
        inputPt.value = (valNul*2.83464).toFixed(2);
        inputPx.value = (valNul*3.77952).toFixed(2);
    }
    
    if(source == "inputIn"){
        inputCm.value = (valNul*2.54).toFixed(2);
        inputMm.value = (valNul*25.4).toFixed(2);
        inputPc.value = (valNul*6).toFixed(2);
        inputPt.value = (valNul*72).toFixed(2);
        inputPx.value = (valNul*96).toFixed(2);
    }
    if(source == "inputPc"){
        inputCm.value = (valNul*0.42175176).toFixed(2);
        inputMm.value = (valNul*4.2175176).toFixed(2);
        inputIn.value = (valNul*0.1660).toFixed(2);
        inputPt.value = (valNul*11.9551).toFixed(2);
        inputPx.value = (valNul*15.9402).toFixed(2);
    }
    if(source == "inputPt"){
        inputCm.value = (valNul*0.035277777).toFixed(2);
        inputMm.value = (valNul*0.352777).toFixed(2);
        inputIn.value = (valNul*0.0138888889).toFixed(2);
        inputPc.value = (valNul*0.0833333333).toFixed(2);
        inputPx.value = (valNul*1.3333333333).toFixed(2);
    }
    if(source == "inputPx"){
        inputCm.value = (valNul*0.0264583333).toFixed(2);
        inputMm.value = (valNul*0.2645833333).toFixed(2);
        inputIn.value = (valNul*0.0104166667).toFixed(2);
        inputPc.value = (valNul*0.0625).toFixed(2);
        inputPt.value = (valNul*0.75).toFixed(2);
    }
    if(source == "inputpx"){
        inputRem.value = (valNul*1/16).toFixed(2);
        inputEm.value = (valNul*0.0625).toFixed(2);
    }
    if(source == "inputRem"){
        inputpx.value = (valNul*16).toFixed(2);
        inputEm.value = (valNul*0.0625).toFixed(2);
    }
    if(source == "inputEm"){
        inputRem.value = (valNul*1).toFixed(2);
        inputpx.value = (valNul*16).toFixed(2);
    }
}