document.getElementById("send").addEventListener("click", myFunction);
document.getElementById("demo").addEventListener("click", myFunctionOld);
var troopCountLS = localStorage.getItem('troopFormCount00aeffff');
if(troopCount!=null){
	document.getElementById("troops").value = troopCountLS;
}
		
function myFunction() {
	var x = document.getElementsByName("fav");
	var troopCount = document.getElementById("troops")
	localStorage.setItem('troopFormCount00aeffff', troopCount.value);
	for (var i = 0; i < x.length; i++) {
		if (x[i].checked == true) {
		var result = percentCalc(x[i].value,troopCount.value);
		document.getElementById("COF").innerHTML = result[0];
		document.getElementById("FEF").innerHTML = result[1];
		document.getElementById("FOF").innerHTML = result[2];
		document.getElementById("WEF").innerHTML = result[3];
		document.getElementById("COM").innerHTML = result[4];
		document.getElementById("CEM").innerHTML = result[5];
		document.getElementById("FEM").innerHTML = result[6];
		document.getElementById("WOM").innerHTML = result[7];
		document.getElementById("CEB").innerHTML = result[8];
		document.getElementById("FOB").innerHTML = result[9];
		document.getElementById("WOB").innerHTML = result[10];
		document.getElementById("WEB").innerHTML = result[11];
		document.getElementById("zombies").innerHTML = result[12];
		document.getElementById("Front").innerHTML = result[13];
		document.getElementById("Mid").innerHTML = result[14];
		document.getElementById("Back").innerHTML = result[15];
		document.getElementById("total").innerHTML = result[16];
		}
	}
}

function percentCalc(type,max){
var distr = ["Null"];
var weights = [1,10,5,2,1,1,5,1,1,5,5,10,1]
	if (type=="MoD"){ 	distr = [00,00,00,00,99,99,99,99,99,99,99,99,100,0,100,100];}
	if (type=="DIG"){ 	distr = [01,01,00,01,01,01,01,01,25,25,25,25,100,01,01,98];}
	if (type=="Doom1"){ distr = [00,20,20,00,00,00,20,00,00,20,00,20,100,40,20,40];}
	if (type=="Doom2"){ distr = [00,20,10,00,00,00,20,00,10,20,00,20,100,30,20,50];}
	if (type=="PvP"){ 	distr = [01,01,20,01,01,01,01,01,30,25,25,11,001,20,01,79];}
	if (type=="SOS"){ 	distr = [01,15,01,01,01,01,01,01,42,01,01,43,100,15,42,42];}
	if (type=="MG"){ 	distr = [01,01,01,01,01,01,01,01,01,01,00,99,100,01,01,98];}
	if (type=="UG"){ 	distr = [01,01,01,01,01,01,01,01,01,01,00,99,100,01,01,98];}
	if (type=="EZ"){ 	distr = [01,01,01,01,01,01,01,01,99,01,01,01,001,01,01,98];}
	if (type=="Mon"){ 	distr = [01,01,01,01,01,01,01,01,99,01,01,01,001,01,01,98];}
	if (type=="Med"){ 	distr = [01,01,00,01,01,01,01,01,25,25,25,25,200,01,01,98];}

	distr[16]=0;
	for(var i=0;i<12;i++){
		if(distr[i]>1){
			distr[i]*=max/100;
			distr[i]-=distr[i]%weights[i]
		} else {
			distr[i]*=weights[i]
		}
		distr[16] = distr[16] + distr[i];
		distr[i]/=weights[i]
	}
	distr[16]=max.toString() +" - "+ distr[16].toString() + " = " + (max-distr[16]).toString()
	for(var i=12;i<16;i++){
		distr[i]=distr[i].toString() + "%";
	}
	return distr;
}
function myFunctionOld() {var x = document.getElementsByName("fav");for (var i = 0; i < x.length; i++) {if (x[i].checked == true) {document.getElementById("demo2").innerHTML = x[i].value;}}}
