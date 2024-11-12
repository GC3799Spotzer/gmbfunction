export function replaceLocationWithEntityID1(rowObject: { name: string }): Promise<object> {
  // Mapping of GMB Location Name to Entity ID
  const entityIdMapping: { [key: string]: string } = {
"accounts/108560480937976210544/locations/5564573866690953936": "1001",
"accounts/108560480937976210544/locations/13966389458821864052": "1002",
"accounts/108560480937976210544/locations/12444786211426044352": "1003",
"accounts/108560480937976210544/locations/1082382294673102046": "1004",
"accounts/108560480937976210544/locations/11328832114430435468": "1005",
"accounts/108560480937976210544/locations/8911944247919336703": "1006",
"accounts/108560480937976210544/locations/17681685657352156976": "1014",
"accounts/108560480937976210544/locations/877103192401800358": "1024",
"accounts/108560480937976210544/locations/4456095365674184856": "1025",
"accounts/108560480937976210544/locations/175830890200003008": "1026",
"accounts/108560480937976210544/locations/10232616450113802981": "1027",
"accounts/108560480937976210544/locations/10220231968762361416": "1028",
"accounts/108560480937976210544/locations/1608971476724208393": "1029",
"accounts/108560480937976210544/locations/1414513057226376089": "1030",
"accounts/108560480937976210544/locations/14065235590522658618": "1031",
"accounts/108560480937976210544/locations/6151713577268184520": "1032",
"accounts/108560480937976210544/locations/4637933545713221806": "1033",
"accounts/108560480937976210544/locations/14285541885768558216": "1034",
"accounts/108560480937976210544/locations/4785674623014337875": "1036",
"accounts/108560480937976210544/locations/10011497218367025233": "1037",
"accounts/108560480937976210544/locations/17256324964881023417": "1038",
"accounts/108560480937976210544/locations/10570739746434274100": "1039",
"accounts/108560480937976210544/locations/9311509889288232123": "110",
"accounts/108560480937976210544/locations/7097695330809730754": "111",
"accounts/108560480937976210544/locations/14452446015661830690": "114",
"accounts/108560480937976210544/locations/9585211485423138290": "122",
"accounts/108560480937976210544/locations/6808851816750561847": "137",
"accounts/108560480937976210544/locations/9584389415709427635": "139",
"accounts/108560480937976210544/locations/9237106970981709496": "148",
"accounts/108560480937976210544/locations/449673557207225269": "151",
"accounts/108560480937976210544/locations/7387751703980001917": "157",
"accounts/108560480937976210544/locations/14830544577476984442": "179",
"accounts/108560480937976210544/locations/4343674238467057047": "183",
"accounts/108560480937976210544/locations/1892343354651294175": "196",
"accounts/108560480937976210544/locations/12072669557890905086": "206",
"accounts/108560480937976210544/locations/1694872491716274919": "208",
"accounts/108560480937976210544/locations/5341255580295310036": "21",
"accounts/108560480937976210544/locations/16583359557677847917": "222",
"accounts/108560480937976210544/locations/14528702485346774876": "225",
"accounts/108560480937976210544/locations/15227392179162313507": "226",
"accounts/108560480937976210544/locations/5950406502334917576": "228",
"accounts/108560480937976210544/locations/5399520114089673334": "229",
"accounts/108560480937976210544/locations/3243027503428275126": "233",
"accounts/108560480937976210544/locations/5262143761464146271": "234",
"accounts/108560480937976210544/locations/9338833969135984394": "236",
"accounts/108560480937976210544/locations/18111276172276796706": "237",
"accounts/108560480937976210544/locations/3661297145887330047": "243",
"accounts/108560480937976210544/locations/10473286115027320828": "260",
"accounts/108560480937976210544/locations/6046963699785874633": "262",
"accounts/108560480937976210544/locations/4650162076810709549": "27",
"accounts/108560480937976210544/locations/1987861100483542404": "273",
"accounts/108560480937976210544/locations/13818411791106716677": "279",
"accounts/108560480937976210544/locations/10142959812986174352": "295",
"accounts/108560480937976210544/locations/2902662388728417590": "306",
"accounts/108560480937976210544/locations/13751125875604778688": "314",
"accounts/108560480937976210544/locations/2565540535642716579": "319",
"accounts/108560480937976210544/locations/18183559203658315004": "321",
"accounts/108560480937976210544/locations/10252914237215708928": "332",
"accounts/108560480937976210544/locations/13158540267901174311": "344",
"accounts/108560480937976210544/locations/4951600157590015501": "350",
"accounts/108560480937976210544/locations/1182486928904125886": "363",
"accounts/108560480937976210544/locations/4204045478413649924": "365",
"accounts/108560480937976210544/locations/17652905653049498169": "369",
"accounts/108560480937976210544/locations/4867955060809919132": "370",
"accounts/108560480937976210544/locations/9834182169664908266": "373",
"accounts/108560480937976210544/locations/4213320270105072800": "374",
"accounts/108560480937976210544/locations/3367843734826711038": "375",
"accounts/108560480937976210544/locations/7991590339370371670": "376",
"accounts/108560480937976210544/locations/7065424883058640416": "382",
"accounts/108560480937976210544/locations/14550153008173089534": "388",
"accounts/108560480937976210544/locations/2281070295687114120": "392",
"accounts/108560480937976210544/locations/13786539156435494738": "4",
"accounts/108560480937976210544/locations/8765854839000913219": "407",
"accounts/108560480937976210544/locations/13535042035530161109": "411",
"accounts/108560480937976210544/locations/17495501015049836932": "420",
"accounts/108560480937976210544/locations/9661612731709366000": "442",
"accounts/108560480937976210544/locations/12735382306654154297": "443",
"accounts/108560480937976210544/locations/10008147971410999238": "447",
"accounts/108560480937976210544/locations/1095762200141499036": "459",
"accounts/108560480937976210544/locations/12402369725000924484": "46",
"accounts/108560480937976210544/locations/5039630408120705204": "492",
"accounts/108560480937976210544/locations/10081727102831853961": "493",
"accounts/108560480937976210544/locations/14009619421062310041": "496",
"accounts/108560480937976210544/locations/13286468945186761504": "497",
"accounts/108560480937976210544/locations/7088720774087721068": "501",
"accounts/108560480937976210544/locations/2041722901169278466": "503",
"accounts/108560480937976210544/locations/13078761635046765687": "506",
"accounts/108560480937976210544/locations/18383269585997029036": "515",
"accounts/108560480937976210544/locations/14609733473192275510": "517",
"accounts/108560480937976210544/locations/9619239970208460401": "521",
"accounts/108560480937976210544/locations/5884562537320049070": "528",
"accounts/108560480937976210544/locations/13382053012117838220": "530",
"accounts/108560480937976210544/locations/9838029545687433630": "531",
"accounts/108560480937976210544/locations/7118508037478423908": "534",
"accounts/108560480937976210544/locations/9683278058411879726": "535",
"accounts/108560480937976210544/locations/526697849315618116": "537",
"accounts/108560480937976210544/locations/7640869834708894135": "541",
"accounts/108560480937976210544/locations/20175024390187390": "543",
"accounts/108560480937976210544/locations/7087628473771461437": "549",
"accounts/108560480937976210544/locations/3157496579517825329": "550",
"accounts/108560480937976210544/locations/7754349086704040624": "553",
"accounts/108560480937976210544/locations/9461972491302934520": "554",
"accounts/108560480937976210544/locations/11226708040129102959": "557",
"accounts/108560480937976210544/locations/2269112529855056505": "560",
"accounts/108560480937976210544/locations/14390454210779695169": "561",
"accounts/108560480937976210544/locations/7694278502869464541": "563",
"accounts/108560480937976210544/locations/9778212619043355085": "568",
"accounts/108560480937976210544/locations/4385295591747822140": "570",
"accounts/108560480937976210544/locations/1417552543348500382": "575",
"accounts/108560480937976210544/locations/4016786742546169150": "577",
"accounts/108560480937976210544/locations/9269707133316266169": "581",
"accounts/108560480937976210544/locations/1142044080420162791": "586",
"accounts/108560480937976210544/locations/5892675377866233463": "594",
"accounts/108560480937976210544/locations/13356697815956210921": "595",
"accounts/108560480937976210544/locations/4369389863274884642": "596",
"accounts/108560480937976210544/locations/9160058007650156123": "598",
"accounts/108560480937976210544/locations/466735270760460059": "600",
"accounts/108560480937976210544/locations/13802013961316328112": "602",
"accounts/108560480937976210544/locations/9270512512588563892": "603",
"accounts/108560480937976210544/locations/13709830399115179396": "606",
"accounts/108560480937976210544/locations/6680038490065321555": "621",
"accounts/108560480937976210544/locations/3673490148592221018": "625",
"accounts/108560480937976210544/locations/2411177882028608555": "626",
"accounts/108560480937976210544/locations/7723215177624675410": "627",
"accounts/108560480937976210544/locations/12085557804603095404": "628",
"accounts/108560480937976210544/locations/11133342100289360741": "641",
"accounts/108560480937976210544/locations/15293539836334827301": "648",
"accounts/108560480937976210544/locations/4762051793755601603": "650",
"accounts/108560480937976210544/locations/10670657046998465780": "651",
"accounts/108560480937976210544/locations/7901029115100641596": "655",
"accounts/108560480937976210544/locations/1061053087857119153": "657",
"accounts/108560480937976210544/locations/14858459894480408186": "658",
"accounts/108560480937976210544/locations/18405739051321147079": "660",
"accounts/108560480937976210544/locations/13701749741597086500": "668",
"accounts/108560480937976210544/locations/3608479442543511972": "670",
"accounts/108560480937976210544/locations/5653241287585388297": "672",
"accounts/108560480937976210544/locations/10255489260400606018": "673",
"accounts/108560480937976210544/locations/7997930525586959417": "675",
"accounts/108560480937976210544/locations/16248520689038726623": "678",
"accounts/108560480937976210544/locations/8694783414455236809": "679",
"accounts/108560480937976210544/locations/7544489127168255229": "680",
"accounts/108560480937976210544/locations/12232751398131783835": "682",
"accounts/108560480937976210544/locations/1102605159474073509": "683",
"accounts/108560480937976210544/locations/2043933390514599905": "684",
"accounts/108560480937976210544/locations/6302345693249989199": "685",
"accounts/108560480937976210544/locations/4928712204733415983": "686",
"accounts/108560480937976210544/locations/3963387198908378160": "688",
"accounts/108560480937976210544/locations/10119558630285102153": "690",
"accounts/108560480937976210544/locations/16224648315281206163": "691",
"accounts/108560480937976210544/locations/16131623309453274899": "692",
"accounts/108560480937976210544/locations/3566847566569077494": "693",
"accounts/108560480937976210544/locations/12603262065594965301": "694",
"accounts/108560480937976210544/locations/13230662623015928160": "695",
"accounts/108560480937976210544/locations/3485568329939106489": "705",
"accounts/108560480937976210544/locations/18132795467370084178": "706",
"accounts/108560480937976210544/locations/10460510302153708335": "707",
"accounts/108560480937976210544/locations/17067106555593195573": "722",
"accounts/108560480937976210544/locations/9167428549544999402": "725",
"accounts/108560480937976210544/locations/16925370162912648081": "726",
"accounts/108560480937976210544/locations/9589861377144668000": "737",
"accounts/108560480937976210544/locations/15963525414866612852": "743",
"accounts/108560480937976210544/locations/1326976025247900388": "744",
"accounts/108560480937976210544/locations/3080840810785374492": "746",
"accounts/108560480937976210544/locations/12584602733556969589": "748",
"accounts/108560480937976210544/locations/4048777202811037130": "750",
"accounts/108560480937976210544/locations/17835838986754408188": "754",
"accounts/108560480937976210544/locations/13343915274406605707": "757",
"accounts/108560480937976210544/locations/15618834138462821805": "758",
"accounts/108560480937976210544/locations/3364120566803757147": "769",
"accounts/108560480937976210544/locations/17781334857658077861": "787",
"accounts/108560480937976210544/locations/7307292306647258791": "790",
"accounts/108560480937976210544/locations/11709261424200116845": "820",
"accounts/108560480937976210544/locations/14219413342771486666": "835",
"accounts/108560480937976210544/locations/1350306229899375089": "838",
"accounts/108560480937976210544/locations/14769199282526949578": "839",
"accounts/108560480937976210544/locations/10474015854513111376": "840",
"accounts/108560480937976210544/locations/1416779583776775277": "841",
"accounts/108560480937976210544/locations/5588568801302187725": "843",
  };

  // Get the Entity ID for the given GMB Location Name in the 'name' field
  const entityId = entityIdMapping[rowObject.name] || null;

  // Return the Entity ID to replace the original name
  return Promise.resolve({
    name: entityId  // Replace name with the Entity ID
  });
}
