const centimeter = document.querySelector("#cm"),inch = document.querySelector("#in");

window.addEventListener("load",() => centimeter.focus());

centimeter.addEventListener("input", () =>{
    inch.value = (centimeter.value * 0.3937).toFixed(4);
    if(!centimeter.value) inch.value = "";
});
inch.addEventListener("input", () =>{
    centimeter.value = (inch.value * 2.54).toFixed(4);
    if(!inch.value) centimeter.value = "";
});

const celsius = document.querySelector("#c"),fahrenhoit = document.querySelector("#f");
celsius.addEventListener("input", () =>{
    fahrenhoit.value = (celsius.value * 9/5 + 32.0000).toFixed(4);
    if(!celsius.value) fahrenhoit.value = "";
});
fahrenhoit.addEventListener("input", () =>{
    celsius.value = ((fahrenhoit.value -32.0000) * 5/9 ).toFixed(4);
    if(!inch.value) centimeter.value = "";
});