	let elements = [
	["LVL","Food","Oil","Steel","Minerals","Uranium","Buildings"],
		[ 1   ,"Free","Free","Free","Free","Free"],
		[ 2   ,       "180",       "180",        "0",        "0",     "0","Main Hall, Lvl:2"],
		[ 3   ,       "260",       "260",        "0",        "0",     "0","Main Hall, Lvl:3"],
		[ 4   ,       "450",       "450",        "0",        "0",     "0","Main Hall, Lvl:4"],
		[ 5   ,       "740",       "740",        "0",        "0",     "0","Main Hall, Lvl:5"],
		[ 6   ,     "1,440",     "1,440",        "0",        "0",     "0","Main Hall, Lvl:6"],
		[ 7   ,     "2,870",     "2,870",        "0",        "0",     "0","Main Hall, Lvl:7"],
		[ 8   ,     "4,890",     "4,890",        "0",        "0",     "0","Main Hall, Lvl:8"],
		[ 9   ,     "7,400",     "7,400",        "0",        "0",     "0","Main Hall, Lvl:9"],
		[10   ,    "11,940",    "11,940",        "0",        "0",     "0","Main Hall, Lvl:10"],
		[11   ,    "24,060",    "24,060",        "0",        "0",     "0","Main Hall, Lvl:11"],
		[12   ,    "49,590",    "49,590",        "0",        "0",     "0","Main Hall, Lvl:12"],
		[13   ,   "100,440",   "100,440",        "0",        "0",     "0","Main Hall, Lvl:13"],
		[14   ,   "204,760",   "204,760",        "0",        "0",     "0","Main Hall, Lvl:14"],
		[15   ,   "322,490",   "322,490",        "0",        "0",     "0","Main Hall, Lvl:15"],
		[16   ,   "335,390",   "335,390",   "33,530",        "0",     "0","Main Hall, Lvl:16"],
		[17   ,   "381,500",   "381,500",   "65,400",        "0",     "0","Main Hall, Lvl:17"],
		[18   ,   "495,970",   "495,970",   "85,020",        "0",     "0","Main Hall, Lvl:18"],
		[19   ,   "577,530",   "577,530",  "119,000",        "0",     "0","Main Hall, Lvl:19"],
		[20   ,   "671,750",   "671,750",  "138,420",        "0",     "0","Main Hall, Lvl:20"],
		[21   ,   "688,040",   "688,040",  "142,900",   "55,570",     "0","Main Hall, Lvl:21"],
		[22   ,   "777,080",   "777,080",  "181,320",   "77,700",     "0","Main Hall, Lvl:22"],
		[23   ,          "",          "",         "",         "",     "0","Main Hall, Lvl:23"],
		[24   ,          "",          "",         "",         "",     "0","Main Hall, Lvl:24"],
		[25   ,          "",          "",         "",         "",     "0","Main Hall, Lvl:25"],
		[26   ,          "",          "",         "",         "",     "0","Main Hall, Lvl:26"],
		[27   , "2,479,610", "2,479,610",  "694,290",  "396,730",     "0","Main Hall, Lvl:27"],
		[28   , "3,223,510", "3,223,510",  "902,580",  "515,760",     "0","Main Hall, Lvl:28"],
		[29   ,          "",          "",         "",         "",     "0","Main Hall, Lvl:29"],
		[30   , "5,447,730", "5,447,730","1,525,360",  "871,630",     "0","Main Hall, Lvl:30"],
		[31   , "7,436,130", "7,436,130","2,082,110","1,189,770", "7,440","Main Hall, Lvl:31"],
		[32   , "9,971,450", "9,971,450","2,791,990","1,595,410","12,300","Main Hall, Lvl:32"],
		[33   ,"13,135,200","13,135,200","3,677,830","2,101,600","21,390","Main Hall, Lvl:33"],
		[34   ,"16,995,840","16,995,840","4,758,800","2,719,290","32,400","Main Hall, Lvl:34"],
		[35   ,"21,952,950","21,952,950","6,146,780","3,512,410","48,050","Main Hall, Lvl:35"],
		[36   ,"24,403,340","24,403,340","6,832,880","3,904,460","57,190","Main Hall, Lvl:36"],
		[37   ,          "",          "",         "",         "",      "","Main Hall, Lvl:37"],
		[38   ,          "",          "",         "",         "",      "","Main Hall, Lvl:38"]
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
			
			console.log(isZero,colStyle,classId[colStyle])
			console.log(j,i,cell,elements[j][i])
		}
	}
}
