var img;
var filterBuffer = "";
var grayscale=sepia=invert=saturate=opacity=blur=contrast=brightness=rotate= "";

window.onload = function(){
	img = document.getElementById("img");
	img.style.filter = 'none';
}

function applyFilter(){
	filterBuffer = grayscale + sepia + invert + saturate + opacity + blur + contrast + brightness + rotate;
	img.style.filter = filterBuffer;
	console.log(filterBuffer);
}

function setGrayscale(percentage){
	grayscale = "grayscale("+percentage+"%) ";
	applyFilter();
}

function setSepia(percentage){
	sepia = "sepia("+percentage+"%) ";
	applyFilter();	
}

function setInvert(percentage){
	invert = "invert("+percentage+"%) ";
	applyFilter();
}

function setSaturate(percentage){
	invert = "saturate("+percentage+"%) ";
	applyFilter();
}

function setOpacity(percentage){
	opacity = "opacity("+percentage+"%) ";
	applyFilter();
}

function setBlur(percentage){
	blur = "blur("+percentage+"px) ";
	applyFilter();
}

function setContrast(percentage){
	contrast = "contrast("+percentage+"%) ";
	applyFilter();
}

function setBrightness(percentage){
	brightness = "brightness("+percentage+"%) ";
	applyFilter();
}

function setRotate(percentage){
	rotate = "hue-rotate("+percentage+"deg) ";
	applyFilter();
}

function reset(){
	img.style.filter = 'none';
	filterBuffer = "";
	grayscale=sepia=invert=saturate=opacity=blur=contrast=brightness=rotate= "";
	document.getElementById("grayscale").value = "0";
	document.getElementById("sepia").value = "0";
	document.getElementById("invert").value = "0";
	document.getElementById("saturate").value = "100";
	document.getElementById("opacity").value = "100";
	document.getElementById("blur").value = "0";
	document.getElementById("contrast").value = "100";
	document.getElementById("brightness").value = "100";
	document.getElementById("rotate").value = "0";			
}