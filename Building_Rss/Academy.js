	let elements = [
	["LVL","Food","Oil","Steel","Minerals","Uranium","Buildings"],
		[ 1   ,"FREE","FREE","FREE","FREE","FREE"],
		[ 2   ,0,       "650",        "0",        "0",0,"Main Hall, Lvl:2" ],
		[ 3   ,0,     "1,050",        "0",        "0",0,"Main Hall, Lvl:3" ],
		[ 4   ,0,     "1,650",        "0",        "0",0,"Main Hall, Lvl:4" ],
		[ 5   ,0,     "2,600",        "0",        "0",0,"Main Hall, Lvl:5" ],
		[ 6   ,0,     "4,800",        "0",        "0",0,"Main Hall, Lvl:6" ],
		[ 7   ,0,     "9,850",        "0",        "0",0,"Main Hall, Lvl:7" ],
		[ 8   ,0,    "16,400",        "0",        "0",0,"Main Hall, Lvl:8" ],
		[ 9   ,0,    "22,600",        "0",        "0",0,"Main Hall, Lvl:9" ],
		[10   ,0,    "42,000",        "0",        "0",0,"Main Hall, Lvl:10"],
		[11   ,0,    "80,000",        "0",        "0",0,"Main Hall, Lvl:11"],
		[12   ,0,   "160,000",        "0",        "0",0,"Main Hall, Lvl:12"],
		[13   ,0,   "323,000",        "0",        "0",0,"Main Hall, Lvl:13"],
		[14   ,0,   "656,000",        "0",        "0",0,"Main Hall, Lvl:14"],
		[15   ,0, "1,058,400",        "0",        "0",0,"Main Hall, Lvl:15"],
		[16   ,0, "1,100,800",   "55,040",        "0",0,"Main Hall, Lvl:16"],
		[17   ,0, "1,252,090",  "107,320",        "0",0,"Main Hall, Lvl:17"],
		[18   ,0, "1,395,240",  "186,030",        "0",0,"Main Hall, Lvl:18"],
		[19   ,0, "1,511,500",  "302,300",        "0",0,"Main Hall, Lvl:19"],
		[20   ,0, "1,768,500",  "353,700",        "0",0,"Main Hall, Lvl:20"],
		[21   ,0, "1,839,240",  "367,840",   "91,960",0,"Main Hall, Lvl:21"],
		[22   ,0, "2,092,160",  "418,430",  "179,320",0,"Main Hall, Lvl:22"],
		[23   ,0, "2,774,200",  "554,840",  "237,780",0,"Main Hall, Lvl:23"],
		[24   ,0,          "",         "",         "",0,"Main Hall, Lvl:24"],
		[25   ,0,          "",         "",         "",0,"Main Hall, Lvl:25"],
		[26   ,0,          "",         "",         "",0,"Main Hall, Lvl:26"],
		[27   ,0, "7,324,290","1,464,850",  "976,570",0,"Main Hall, Lvl:27"],
		[28   ,0, "9,521,550","1,904,310","1,269,540",0,"Main Hall, Lvl:28"],
		[29   ,0,"12,377,880","2,475,570","1,650,380",0,"Main Hall, Lvl:29"],
		[30   ,0,"16,091,190","3,218,230","2,145,490",0,"Main Hall, Lvl:30"]
	];
function dataRunner(){
	let table = document.getElementById("table").children[0]
	console.log(table)//ACADEMY?
	for(var j=0;j<elements.length;j++){
		for(var i=0;i<elements[j].length;i++){
//			const classId = ["White", "red", "Wh0", "re0", "blank", "header"]
			const classId = ["s8","s12","s15","s13","s10","s6"]
			var isZero = 1-Math.sign(parseInt(elements[j][i]))>-2 ? 1-Math.sign(parseInt(elements[j][i])) : 0 ;
			var isBlank = (elements[j][i]==="") ? 4-((j-1)%2+2*isZero) : 0 ;
			var colStyle = ( (j-1)%2+2*isZero ) + 6*(1-Math.sign(j)) + isBlank
			let cell = table.children[j+Math.sign(j)].children[i+1]
			
			cell.className = classId[colStyle]
			cell.innerHTML = elements[j][i]
			
			//console.log(isZero,colStyle,classId[colStyle])
			//console.log(j,i,cell,elements[j][i])
		}
	}
}
