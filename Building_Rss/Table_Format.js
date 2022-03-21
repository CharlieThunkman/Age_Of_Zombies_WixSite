/*
Example input
	var elements = [[0,1],[2,3,4]]
	var header = ["Sr. No.","Name","Company"]
*/

table(elements);
var appendTable = true
function newTimer(){ // button or update old timer
	let newLabel = document.getElementById("label");if(newLabel.value==""){newLabel.value="`~nULL~`";};console.log(newLabel.value)
	let newTable = document.getElementById("countdownTable");console.log(newTable)
	let newTimer = document.getElementById("timer");
	appendTable = true;
	getChildren(newTable,1,newLabel,newTimer);
	if(appendTable){
		var secret = document.getElementById('secretValue').max
		secret = secret+1
		console.log(newLabel,newTimer)
		var data = [newLabel.value,newTimer.value];console.log(data,newLabel,newTimer)
		tableRow(secret,data,newTable.children[1])
		newTable.appendChild(newTable.children[1]);
	}
	if(newLabel.value=="`~nULL~`"){newLabel.value="";}
}

function getChildren(host,loop,label,timer){
	for(var i=0;i<host.children.length;i++){
		var space = "";
		for(var j=0;loop>j;j++){
			space = space + " ";
		}
		console.log(space,host.children[i],i)
		getChildren(host.children[i],loop+1,label,timer)
	}
	if (label.value==host.innerHTML&&host.id=="label"){
		console.log(host.parentNode.id,host.id,host.innerHTML,"-",host.value)
		host.parentNode.children[1].innerHTML = timer.value
		appendTable = false
	///} else {
	//	console.log(label,host.innerHTML)
	}
}

function table(data){
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');
	table.id = "countdownTable"
	// Creating and adding data to first row of the table
	let row_1 = document.createElement('tr');
	for(var i=0;i<data[0].length;i++){
		let heading_1 = document.createElement('th');
		heading_1.innerHTML = data[0][i];
		row_1.appendChild(heading_1);
	}
	thead.appendChild(row_1);
	for(var j=1;j<data.length;j++){ //How many sub-arrays
		tableRow(j,data[j],tbody)
		console.log(data,data[j],data[j][1])
	}
	
	table.appendChild(thead);
	table.appendChild(tbody);
	document.getElementById('tableJS').appendChild(table);

}

function tableRow(j,data,tbody){
	const classId = ["s8","s12","s15","s13","s10","s6"]
	var row_2 = document.createElement('tr');
	//var data_1 = ["1.","James Clerk","Netflix"]
	for(var i=0;i<data.length;i++){ // How many elements in sub-array
		row_2.id = j
		let row_2_data_1 = document.createElement('td');
		if (data.length>i){
			row_2_data_1.innerHTML = data[i];
			var labelType = ['label','timer']
			row_2_data_1.id = labelType[Math.sign(i)]
		} else { row_2_data_1.innerHTML = "";}
		var isZero = 1-Math.sign(parseInt(elements[j][i]))>-2 ? 1-Math.sign(parseInt(elements[j][i])) : 0 ;
		var isBlank = (elements[j][i]==="") ? 4-((j-1)%2+2*isZero) : 0 ;
		var colStyle = ( (j-1)%2+2*isZero ) + 6*(1-Math.sign(j)) + isBlank
		row_2_data_1.className = classId[colStyle]
		row_2.appendChild(row_2_data_1);
	}
	tbody.appendChild(row_2);
}
