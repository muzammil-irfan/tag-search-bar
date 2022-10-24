import React,{useState} from 'react';
import './App.css';
import {AiFillCloseCircle} from 'react-icons/ai'

function App() {
  const [values,setValues] = useState("");
  const [focus,setFocus] = useState(false);
  const [filteredData,setFilteredData] = useState(data);
  const [tags,setTags] = useState([]);
  const handleChange = (e)=>{
    const {value} = e.target;
    setValues(value);
    const newData = data.filter(item=>{
      const smallItem = item.toLowerCase();
      const smallValues = value.toLowerCase();
      
      if(smallValues.includes(" ")){
        return smallValues.split(" ").map(newItem =>{
          const smallNewItem = newItem.toLowerCase();
          return smallValues.includes(smallNewItem);
        }).length > 0;
      } else {
        return smallItem.includes(smallValues);
      }
    });
    setFilteredData(newData);
    if(focus && value.length === 0){
      setFocus(false)
    } else{
      setFocus(true)
    }
  };
  const handleFocus = (e)=>{
    if(values.length > 0){
      setFocus(true);
    }
  }

  function getHighlightedText(text, highlight) {
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span>{parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <b key={part}>{part}</b> : part)}</span>;
}
  const handleClick = (item=>{
    const newTagData = [...tags];
    newTagData.push(item);
    setTags(newTagData);
    setFilteredData(prevData=>prevData.filter(dataItem=>dataItem!==item));
    setFocus(false)
    setValues("")
  })
  return (
    <div className="App" style={{padding:"20px"}}>
      <div>
        <div className='searchbardiv'>
          {
            tags.length>0 && 
            tags.map(item=>{
              return <Tag key={item} name={item} setTags={setTags} />
            })
          }
          <input type="text" className='searchbar' value={values} onChange={handleChange} onFocus={handleFocus}  />

          {
            focus &&
            <div className='searchbarlist'>
              {filteredData.length> 0  ? filteredData.map(item=>{
                return(
                  <div className='list-item' onClick={()=>{handleClick(item)}}>{getHighlightedText(item,values)}</div>
                )
              }) : <div className='list-item' >No match found</div>}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
const Tag = ({name,setTags})=>{
  const handleClick = ()=>{
    setTags(prevValue=>prevValue.filter((item)=>item!== name))
  }
  return (
    <div className='tag' onClick={handleClick}>
      {name.length>30? name.slice(0,30)+"...":name} <AiFillCloseCircle size="24px" />
    </div>
  )
}
const data = `777 Brockton Avenue, Abington MA 2351
30 Memorial Drive, Avon MA 2322
250 Hartford Avenue, Bellingham MA 2019
700 Oak Street, Brockton MA 2301
66-4 Parkhurst Rd, Chelmsford MA 1824
591 Memorial Dr, Chicopee MA 1020
55 Brooksby Village Way, Danvers MA 1923
137 Teaticket Hwy, East Falmouth MA 2536
42 Fairhaven Commons Way, Fairhaven MA 2719
374 William S Canning Blvd, Fall River MA 2721
121 Worcester Rd, Framingham MA 1701
677 Timpany Blvd, Gardner MA 1440
337 Russell St, Hadley MA 1035
295 Plymouth Street, Halifax MA 2338
1775 Washington St, Hanover MA 2339
280 Washington Street, Hudson MA 1749
20 Soojian Dr, Leicester MA 1524
11 Jungle Road, Leominster MA 1453
301 Massachusetts Ave, Lunenburg MA 1462
780 Lynnway, Lynn MA 1905
70 Pleasant Valley Street, Methuen MA 1844
830 Curran Memorial Hwy, North Adams MA 1247
1470 S Washington St, North Attleboro MA 2760
506 State Road, North Dartmouth MA 2747
742 Main Street, North Oxford MA 1537
72 Main St, North Reading MA 1864
200 Otis Street, Northborough MA 1532
180 North King Street, Northhampton MA 1060
555 East Main St, Orange MA 1364
555 Hubbard Ave-Suite 12, Pittsfield MA 1201
300 Colony Place, Plymouth MA 2360
301 Falls Blvd, Quincy MA 2169
36 Paramount Drive, Raynham MA 2767
450 Highland Ave, Salem MA 1970
1180 Fall River Avenue, Seekonk MA 2771
1105 Boston Road, Springfield MA 1119
100 Charlton Road, Sturbridge MA 1566
262 Swansea Mall Dr, Swansea MA 2777
333 Main Street, Tewksbury MA 1876
550 Providence Hwy, Walpole MA 2081
352 Palmer Road, Ware MA 1082
3005 Cranberry Hwy Rt 6 28, Wareham MA 2538
250 Rt 59, Airmont NY 10901
141 Washington Ave Extension, Albany NY 12205
13858 Rt 31 W, Albion NY 14411
2055 Niagara Falls Blvd, Amherst NY 14228
101 Sanford Farm Shpg Center, Amsterdam NY 12010
297 Grant Avenue, Auburn NY 13021
4133 Veterans Memorial Drive, Batavia NY 14020
6265 Brockport Spencerport Rd, Brockport NY 14420
5399 W Genesse St, Camillus NY 13031
3191 County rd 10, Canandaigua NY 14424
30 Catskill, Catskill NY 12414
161 Centereach Mall, Centereach NY 11720
3018 East Ave, Central Square NY 13036
100 Thruway Plaza, Cheektowaga NY 14225
8064 Brewerton Rd, Cicero NY 13039
5033 Transit Road, Clarence NY 14031
3949 Route 31, Clay NY 13041
139 Merchant Place, Cobleskill NY 12043
85 Crooked Hill Road, Commack NY 11725
872 Route 13, Cortlandville NY 13045
279 Troy Road, East Greenbush NY 12061
2465 Hempstead Turnpike, East Meadow NY 11554
6438 Basile Rowe, East Syracuse NY 13057
25737 US Rt 11, Evans Mills NY 13637
901 Route 110, Farmingdale NY 11735
2400 Route 9, Fishkill NY 12524
10401 Bennett Road, Fredonia NY 14063
1818 State Route 3, Fulton NY 13069
4300 Lakeville Road, Geneseo NY 14454
990 Route 5 20, Geneva NY 14456
311 RT 9W, Glenmont NY 12077
200 Dutch Meadows Ln, Glenville NY 12302
100 Elm Ridge Center Dr, Greece NY 14626
1549 Rt 9, Halfmoon NY 12065
5360 Southwestern Blvd, Hamburg NY 14075
103 North Caroline St, Herkimer NY 13350
1000 State Route 36, Hornell NY 14843
1400 County Rd 64, Horseheads NY 14845
135 Fairgrounds Memorial Pkwy, Ithaca NY 14850
2 Gannett Dr, Johnson City NY 13790
233 5th Ave Ext, Johnstown NY 12095
601 Frank Stottile Blvd, Kingston NY 12401
350 E Fairmount Ave, Lakewood NY 14750
4975 Transit Rd, Lancaster NY 14086
579 Troy-Schenectady Road, Latham NY 12110
5783 So Transit Road, Lockport NY 14094
7155 State Rt 12 S, Lowville NY 13367
425 Route 31, Macedon NY 14502
3222 State Rt 11, Malone NY 12953
200 Sunrise Mall, Massapequa NY 11758
43 Stephenville St, Massena NY 13662
750 Middle Country Road, Middle Island NY 11953
470 Route 211 East, Middletown NY 10940
3133 E Main St, Mohegan Lake NY 10547
288 Larkin, Monroe NY 10950
41 Anawana Lake Road, Monticello NY 12701
4765 Commercial Drive, New Hartford NY 13413
1201 Rt 300, Newburgh NY 12550
255 W Main St, Avon CT 6001
120 Commercial Parkway, Branford CT 6405
1400 Farmington Ave, Bristol CT 6010
161 Berlin Road, Cromwell CT 6416
67 Newton Rd, Danbury CT 6810
656 New Haven Ave, Derby CT 6418
69 Prospect Hill Road, East Windsor CT 6088
150 Gold Star Hwy, Groton CT 6340
900 Boston Post Road, Guilford CT 6437
2300 Dixwell Ave, Hamden CT 6514
495 Flatbush Ave, Hartford CT 6106
180 River Rd, Lisbon CT 6351
420 Buckland Hills Dr, Manchester CT 6040
1365 Boston Post Road, Milford CT 6460
1100 New Haven Road, Naugatuck CT 6770
315 Foxon Blvd, New Haven CT 6513
164 Danbury Rd, New Milford CT 6776
3164 Berlin Turnpike, Newington CT 6111
474 Boston Post Road, North Windham CT 6256
650 Main Ave, Norwalk CT 6851
680 Connecticut Avenue, Norwalk CT 6854
220 Salem Turnpike, Norwich CT 6360
655 Boston Post Rd, Old Saybrook CT 6475
625 School Street, Putnam CT 6260
80 Town Line Rd, Rocky Hill CT 6067
465 Bridgeport Avenue, Shelton CT 6484
235 Queen St, Southington CT 6489
150 Barnum Avenue Cutoff, Stratford CT 6614
970 Torringford Street, Torrington CT 6790
844 No Colony Road, Wallingford CT 6492
910 Wolcott St, Waterbury CT 6705
155 Waterford Parkway No, Waterford CT 6385
515 Sawmill Road, West Haven CT 6516
2473 Hackworth Road, Adamsville AL 35005
630 Coonial Promenade Pkwy, Alabaster AL 35007
2643 Hwy 280 West, Alexander City AL 35010
540 West Bypass, Andalusia AL 36420
5560 Mcclellan Blvd, Anniston AL 36206
1450 No Brindlee Mtn Pkwy, Arab AL 35016
1011 US Hwy 72 East, Athens AL 35611
973 Gilbert Ferry Road Se, Attalla AL 35954
1717 South College Street, Auburn AL 36830
701 Mcmeans Ave, Bay Minette AL 36507
750 Academy Drive, Bessemer AL 35022
312 Palisades Blvd, Birmingham AL 35209
1600 Montclair Rd, Birmingham AL 35210
5919 Trussville Crossings Pkwy, Birmingham AL 35235
9248 Parkway East, Birmingham AL 35206
1972 Hwy 431, Boaz AL 35957
10675 Hwy 5, Brent AL 35034
2041 Douglas Avenue, Brewton AL 36426
5100 Hwy 31, Calera AL 35040
1916 Center Point Rd, Center Point AL 35215
1950 W Main St, Centre AL 35960
16077 Highway 280, Chelsea AL 35043
1415 7Th Street South, Clanton AL 35045
626 Olive Street Sw, Cullman AL 35055
27520 Hwy 98, Daphne AL 36526
2800 Spring Avn SW, Decatur AL 35603
969 Us Hwy 80 West, Demopolis AL 36732
3300 South Oates Street, Dothan AL 36301
4310 Montgomery Hwy, Dothan AL 36303
600 Boll Weevil Circle, Enterprise AL 36330
3176 South Eufaula Avenue, Eufaula AL 36027
7100 Aaron Aronov Drive, Fairfield AL 35064
10040 County Road 48, Fairhope AL 36533
3186 Hwy 171 North, Fayette AL 35555
3100 Hough Rd, Florence AL 35630
2200 South Mckenzie St, Foley AL 36535
2001 Glenn Bldv Sw, Fort Payne AL 35968
340 East Meighan Blvd, Gadsden AL 35903
890 Odum Road, Gardendale AL 35071
1608 W Magnolia Ave, Geneva AL 36340
501 Willow Lane, Greenville AL 36037
170 Fort Morgan Road, Gulf Shores AL 36542
11697 US Hwy 431, Guntersville AL 35976
42417 Hwy 195, Haleyville AL 35565
1706 Military Street South, Hamilton AL 35570
1201 Hwy 31 NW, Hartselle AL 35640
209 Lakeshore Parkway, Homewood AL 35209
2780 John Hawkins Pkwy, Hoover AL 35244
5335 Hwy 280 South, Hoover AL 35242
1007 Red Farmer Drive, Hueytown AL 35023
2900 S Mem PkwyDrake Ave, Huntsville AL 35801
11610 Memorial Pkwy South, Huntsville AL 35803
2200 Sparkman Drive, Huntsville AL 35810
330 Sutton Rd, Huntsville AL 35763
6140A Univ Drive, Huntsville AL 35806
4206 N College Ave, Jackson AL 36545
1625 Pelham South, Jacksonville AL 36265
1801 Hwy 78 East, Jasper AL 35501
8551 Whitfield Ave, Leeds AL 35094
8650 Madison Blvd, Madison AL 35758
145 Kelley Blvd, Millbrook AL 36054
1970 S University Blvd, Mobile AL 36609
6350 Cottage Hill Road, Mobile AL 36609
101 South Beltline Highway, Mobile AL 36606
2500 Dawes Road, Mobile AL 36695
5245 Rangeline Service Rd, Mobile AL 36619
685 Schillinger Rd, Mobile AL 36695
3371 S Alabama Ave, Monroeville AL 36460
10710 Chantilly Pkwy, Montgomery AL 36117
3801 Eastern Blvd, Montgomery AL 36116
6495 Atlanta Hwy, Montgomery AL 36117
851 Ann St, Montgomery AL 36107
15445 Highway 24, Moulton AL 35650
517 West Avalon Ave, Muscle Shoals AL 35661
5710 Mcfarland Blvd, Northport AL 35476
2453 2Nd Avenue East, Oneonta AL 35121  205-625-647
2900 Pepperrell Pkwy, Opelika AL 36801
92 Plaza Lane, Oxford AL 36203
1537 Hwy 231 South, Ozark AL 36360
2181 Pelham Pkwy, Pelham AL 35124
165 Vaughan Ln, Pell City AL 35125
3700 Hwy 280-431 N, Phenix City AL 36867
1903 Cobbs Ford Rd, Prattville AL 36066
4180 Us Hwy 431, Roanoke AL 36274
13675 Hwy 43, Russellville AL 35653
1095 Industrial Pkwy, Saraland AL 36571
24833 Johnt Reidprkw, Scottsboro AL 35768
1501 Hwy 14 East, Selma AL 36703
7855 Moffett Rd, Semmes AL 36575
150 Springville Station Blvd, Springville AL 35146
690 Hwy 78, Sumiton AL 35148
41301 US Hwy 280, Sylacauga AL 35150
214 Haynes Street, Talladega AL 35160
1300 Gilmer Ave, Tallassee AL 36078
34301 Hwy 43, Thomasville AL 36784
1420 Us 231 South, Troy AL 36081
1501 Skyland Blvd E, Tuscaloosa AL 35405
3501 20th Av, Valley AL 36854
1300 Montgomery Highway, Vestavia Hills AL 35216
4538 Us Hwy 231, Wetumpka AL 36092
2575 Us Hwy 43, Winfield AL 35594`.split("\n");