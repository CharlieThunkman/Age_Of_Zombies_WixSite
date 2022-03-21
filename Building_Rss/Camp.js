	let elements = [
	["LVL","Food","Oil","Steel","Minerals","Uranium","Buildings"],
		[ 1   ,"FREE","FREE","FREE","FREE","FREE"],
		[ 2   ,       "670",       "450",           0,           0,        0,"Main Hall, Lvl:2",],
		[ 3   ,       "980",       "650",           0,           0,        0,"Main Hall, Lvl:3",],
		[ 4   ,     "1,660",     "1,100",           0,           0,        0,"Main Hall, Lvl:4",],
		[ 5   ,     "2,720",     "1,810",           0,           0,        0,"Main Hall, Lvl:5",],
		[ 6   ,     "5,300",     "3,530",           0,           0,        0,"Main Hall, Lvl:6",],
		[ 7   ,    "10,530",     "7,020",           0,           0,        0,"Main Hall, Lvl:7",],
		[ 8   ,    "17,960",    "11,970",           0,           0,        0,"Main Hall, Lvl:8",],
		[ 9   ,    "27,130",    "18,080",           0,           0,        0,"Main Hall, Lvl:9",],
		[10   ,    "43,800",    "29,200",           0,           0,        0,"Main Hall, Lvl:10"],
		[11   ,    "88,220",    "58,810",           0,           0,        0,"Main Hall, Lvl:11"],
		[12   ,   "181,830",   "121,220",           0,           0,        0,"Main Hall, Lvl:12"],
		[13   ,   "257,800",   "171,860",           0,           0,        0,"Main Hall, Lvl:13"],
		[14   ,   "525,530",   "350,350",           0,           0,        0,"Main Hall, Lvl:14"],
		[15   ,   "945,940",   "630,632",           0,           0,        0,"Main Hall, Lvl:15"],
		[16   , "1,152,850",   "806,990",    "69,170",           0,        0,"Main Hall, Lvl:16"],
		[17   , "1,498,750",   "999,160",   "166,520",           0,        0,"Main Hall, Lvl:17"],
		[18   , "1,818,520", "1,212,350",   "259,780",           0,        0,"Main Hall, Lvl:18"],
		[19   , "2,138,960", "1,336,850",   "374,310",           0,        0,"Main Hall, Lvl:19"],
		[20   , "2,487,940", "1,554,960",   "435,390",           0,        0,"Main Hall, Lvl:20"],
		[21   , "2,587,480", "1,617,170",   "436,630",   "169,800",        0,"Main Hall, Lvl:21"],
		[22   , "2,869,050", "1,879,720",   "554,020",   "237,430",        0,"Main Hall, Lvl:22"],
		[23   , "3,443,680", "2,213,790",   "688,730",   "319,770",        0,"Main Hall, Lvl:23"],
		[24   , "4,401,570", "2,771,360",   "912,910",   "456,450",        0,"Main Hall, Lvl:24"],
		[25   , "5,832,080", "3,672,050", "1,209,610",   "604,800",        0,"Main Hall, Lvl:25"],
		[26   , "7,438,620", "4,577,610", "1,602,160",   "858,300",        0,"Main Hall, Lvl:26"],
		[27   , "9,849,370", "6,061,150", "2,121,400", "1,134,460",        0,"Main Hall, Lvl:27"],
		[28   ,"12,311,810", "7,387,080", "2,757,840", "1,575,910",        0,"Main Hall, Lvl:28"],
		[29   ,"16,005,290", "9,603,170", "3,585,180", "2,048,670",        0,"Main Hall, Lvl:29"],
		[30   ,"20,806,877","12,484,121", "4,660,734", "2,663,271",        0,"Main Hall, Lvl:30"],
		[31   ,"27,049,030","16,229,410", "6,058,970", "3,462,270", "12,980","Main Hall, Lvl:31"],
		[32   ,"34,622,730","20,773,620", "7,755,470", "4,431,700", "21,430","Main Hall, Lvl:32"],
		[33   ,"43,624,620","26,174,750", "9,771,880", "5,583,940", "37,270","Main Hall, Lvl:33"],
		[34   ,"54,094,460","32,456,650","12,117,110", "6,924,070", "63,550","Main Hall, Lvl:34"],
		[35   ,"67,077,080","40,246,210","15,025,200", "8,585,840", "76,610","Main Hall, Lvl:35"],
		[36   ,"73,425,960","44,055,530","16,447,340", "9,398,490", "99,670","Main Hall, Lvl:36"],
		[37   ,"79,228,520","47,537,060","17,747,100","10,141,210","118,050","Main Hall, Lvl:37"],
		[38   ,"85,157,890","51,094,670","19,075,270","10,900,160","139,750","Main Hall, Lvl:38"]
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
