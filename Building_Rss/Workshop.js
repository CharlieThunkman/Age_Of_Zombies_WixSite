	let elements = [
	["LVL","Food","Oil","Steel","Minerals","Uranium","Buildings"],
		[ 1   ,"FREE","FREE","FREE","FREE","FREE","Main Hall, Lvl:13"],
		[ 2   ,"FREE","FREE","FREE","FREE","FREE","Main Hall, Lvl:13"],
		[ 3   ,"FREE","FREE","FREE","FREE","FREE","Main Hall, Lvl:13"],
		[ 4   ,"FREE","FREE","FREE","FREE","FREE","Main Hall, Lvl:13"],
		[ 5   ,"FREE","FREE","FREE","FREE","FREE","Main Hall, Lvl:13"],
		[ 6   ,"FREE","FREE","FREE","FREE","FREE","Main Hall, Lvl:13"],
		[ 7   ,"FREE","FREE","FREE","FREE","FREE","Main Hall, Lvl:13"],
		[ 8   ,"FREE","FREE","FREE","FREE","FREE","Main Hall, Lvl:13"],
		[ 9   ,"FREE","FREE","FREE","FREE","FREE","Main Hall, Lvl:13"],
		[10   ,"FREE","FREE","FREE","FREE","FREE","Main Hall, Lvl:13"],
		[11   ,"FREE","FREE","FREE","FREE","FREE","Main Hall, Lvl:13"],
		[12   ,"FREE","FREE","FREE","FREE","FREE","Main Hall, Lvl:13"],
		[13   ,"FREE","FREE","FREE","FREE","FREE","Main Hall, Lvl:13"],
		[14   ,    "788,310",   "525,540",           0,           0,        0,"Main Hall, Lvl:14"],
		[15   ,  "1,418,920",   "945,950",           0,           0,        0,"Main Hall, Lvl:15"],
		[16   ,  "1,729,300", "1,210,510",   "103,750",           0,        0,"Main Hall, Lvl:16"],
		[17   ,  "2,248,120", "1,498,750",   "249,790",           0,        0,"Main Hall, Lvl:17"],
		[18   ,  "2,727,790", "1,818,520",   "389,680",           0,        0,"Main Hall, Lvl:18"],
		[19   ,  "3,208,450", "2,005,280",   "561,470",           0,        0,"Main Hall, Lvl:19"],
		[20   ,  "3,731,910", "2,332,440",   "653,080",           0,        0,"Main Hall, Lvl:20"],
		[21   ,  "3,881,220", "2,425,760",   "654,950",          "",        0,"Main Hall, Lvl:21"],
		[22   ,  "4,303,580", "2,819,580",   "831,030",   "356,150",        0,"Main Hall, Lvl:22"],
		[23   ,  "5,165,520", "3,320,690", "1,033,100",   "479,650",        0,"Main Hall, Lvl:23"],
		[24   ,  "6,602,360", "4,157,040", "1,369,370",   "684,680",        0,"Main Hall, Lvl:24"],
		[25   ,  "8,748,120", "5,508,080", "1,814,420",   "907,200",        0,"Main Hall, Lvl:25"],
		[26   , "11,157,930", "6,866,420", "2,403,240", "1,287,450",        0,"Main Hall, Lvl:26"],
		[27   , "14,774,060", "9,091,730", "3,182,100", "1,704,700",        0,"Main Hall, Lvl:27"],
		[28   , "18,467,720","11,080,630", "4,136,760", "2,363,860",        0,"Main Hall, Lvl:28"],
		[29   , "24,007,940","14,404,760", "5,377,770", "3,073,010",        0,"Main Hall, Lvl:29"],
		[30   , "31,210,370","18,726,220", "6,991,120", "3,994,920",       "","Main Hall, Lvl:30"],
		[31   , "40,573,540","24,344,110", "9,088,450", "5,193,400", "15,570","Main Hall, Lvl:31"],
		[32   , "51,934,090","31,160,430","11,633,200", "6,647,550", "25,710","Main Hall, Lvl:32"],
		[33   , "65,326,930","39,262,120","14,657,820", "8,375,910", "44,720","Main Hall, Lvl:33"],
		[34   , "81,141,690","48,684,970","18,175,660","10,386,100", "67,720","Main Hall, Lvl:34"],
		[35   ,"100,615,620","60,369,310","22,537,800","12,878,760", "98,220","Main Hall, Lvl:35"],
		[36   ,"110,138,940","66,083,290","24,671,010","14,097,730","119,600","Main Hall, Lvl:36"],
		[37   ,"118,842,780","71,305,590","26,620,650","15,211,810","141,660","Main Hall, Lvl:37"],
		[38   ,"127,736,830","76,642,000","28,612,900","16,350,240","176,500","Main Hall, Lvl:38"]
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
