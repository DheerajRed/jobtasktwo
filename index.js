
var Name = document.getElementById('name')
var email = document.getElementById('email')
var organization = document.getElementById('organization')
var mobilenum = document.getElementById('number')
var title = document.getElementById('titletwo')
var city = document.getElementById('city')
var group = document.getElementById('groupone')
var date = document.getElementById('dateone')
var submit = document.getElementById('submit')
var table = document.getElementById('table')
var gridid = document.getElementById('gridid')
var statusof =document.getElementById('status')
var arrname=[]
var arrtitle = []
var arrorg = []
var arrgroup = []
var arremail=[]
var arrcity=[]
var arrmobile=[]
var zero = 0;
var zeroarr = []
submit.addEventListener('click',function(e){
    e.preventDefault();
    if(Name.value!="" && email.value!="" && organization.value!="" && title.value!="" && mobilenum.value!="" && title.value!="" && city.value!="" && group.value!="" && date.value!=""){

    
    var divgrid = document.createElement('div')
    var gridzero = document.createElement('button')
    gridzero.textContent=zero
    var zerotd = document.createElement('td')
    zerotd.textContent=zero.toString()
    zeroarr.push(zero.toString())
    zero+=1
    console.log(zeroarr)
   arrname.push(Name.value)
   arremail.push(email.value)
   arrtitle.push(title.value)
   arrorg.push(organization.value)
   arrgroup.push(group.value)
   arrmobile.push(mobilenum.value)
arrcity.push(city.value)
    var trnine = document.createElement('tr')
    var trone = document.createElement('td')
    trone.textContent = Name.value
    trnine.appendChild(zerotd)
    trnine.appendChild(trone)
    trone.className="tdname"
    zerotd.className="tdname"
   var trfive = document.createElement('td')
   trfive.textContent=title.value
   trnine.appendChild(trfive)
   var trthree = document.createElement('td')
   trthree.textContent = organization.value
   trnine.appendChild(trthree)
   var trsix = document.createElement('td')
   trsix.textContent = city.value
   trnine.appendChild(trsix)
   var trfour = document.createElement('td')
    trfour.textContent = mobilenum.value
    trnine.appendChild(trfour)
    var trtwo = document.createElement('td')
    trtwo.textContent = email.value
    trnine.appendChild(trtwo)
    var trsevern = document.createElement('td')
    trsevern.textContent = group.value
    trnine.appendChild(trsevern)
    var treight = document.createElement('td')
    treight.textContent = date.value
    trnine.appendChild(treight)
    table.appendChild(trnine)
    trnine.style.margin="20px"
    trnine.className="bodytrclass"
    var trten = document.createElement('td')
    if(statusof.value=="ACTIVE"){
      trten.textContent="🟢"
      trnine.appendChild(trten)
    }
    else{
      trten.textContent="🔴"
      trnine.appendChild(trten)
    }
   var gridname = document.createElement('p')
   gridname.innerHTML="👨"+" "+Name.value
   divgrid.appendChild(gridname)
   gridname.style.marginLeft="10px"
   gridname.style.fontWeight="bold"
   gridname.style.fontSize="25px"
   var gridposition = document.createElement('p')
   gridposition.textContent="🟠"+" "+title.value;
   divgrid.appendChild(gridposition)
   gridposition.className="gridposition"
   gridposition.style.marginLeft="10px"
   gridposition.style.fontSize="15px"
   gridposition.style.borderBottomStyle="groove"
   var gridorg = document.createElement('p')
   gridorg.textContent="🏢"+" "+organization.value;
   divgrid.appendChild(gridorg)
   gridorg.className="gridorg"
   gridorg.style.marginLeft="20px"
   //gridorg.style.fontSize="20px"
   var gridmobilenum = document.createElement('p')
   gridmobilenum.textContent="📱"+" "+mobilenum.value;
   divgrid.appendChild(gridmobilenum)
   gridmobilenum.className="gridmobilenum"
   gridmobilenum.style.marginLeft="20px"
   //gridmobilenum.style.fontSize="20px"
   divgrid.style.border='1px solid black'
   divgrid.style.margin ="10px"
   divgrid.className="gridmodel"
   var gridemail = document.createElement('p')
   gridemail.textContent="✉"+" "+email.value;
   divgrid.appendChild(gridemail)
   gridemail.className="gridemail"
   gridemail.style.marginLeft="20px"
   gridemail.style.fontSize="15px"
   var Dateone = new Date();
   var day = Dateone.getDay()
   var month=Dateone.getMonth()
   var year = Dateone.getFullYear()
   var hours = Dateone.getHours()
   var minutes=Dateone.getMinutes()
   var gridtime = document.createElement('p')
   gridtime.textContent="⏲"+" "+day+"-"+month+"-"+year+" "+hours+":"+minutes
   divgrid.appendChild(gridtime)
   gridtime.style.marginLeft="20px"
   gridtime.style.fontSize="15px"
   gridtime.className='gridtime'
   var gridcity = document.createElement('p')
   gridcity.className="fas fa-band-aid"
   //var gridtext = city.value
   gridcity.textContent="📌"+" "+city.value
   divgrid.appendChild(gridcity)
   gridcity.style.position='absolute'
   gridcity.style.top="30px"
   gridcity.style.marginLeft="170px"
   //gridcity.style.fontSize="20px"
    document.getElementById('gridid').appendChild(divgrid)
    gridname.className="myname"
    gridposition.className="mypos"
    gridorg.className="myorg"
    gridmobilenum.className="mymobilen"
    gridemail.className="myemail"
    gridcity.className="mycity"
    divgrid.className="mygriddiv"
    divgrid.appendChild(gridzero)
    gridzero.style.width="300px"
    gridzero.style.position="relative"
    //gridzero.style.top="px"
    //gridzero.style.height="200px"
    gridzero.style.opacity="0%"
    //gridzero.style.fontSize="150px"
    gridzero.style.display="inline-block"
    gridzero.style.top="-200px"
    gridzero.style.height="250px"
    divgrid.style.height="300px"
    Name.value=""
    title.value=""
    organization.value=""
    email.value=""
    city.value=""
    group.value=""
    date.value=""
    mobilenum.value=""
    }
    else{
      alert('please enter all details')
    }
    
})
document.getElementById('createcontact').addEventListener('click',function(e){
    document.getElementById('form').style.display="block"
    table.style.display="none"
    document.getElementById('gridid').style.display="none"
    document.getElementById('table').style.display="none"
    document.getElementById('gridid').style.display="none"
    document.getElementById('detailspage').style.display="none"
    
})
var btnone = document.getElementById('gridbutton')
var btntwo  = document.getElementById('tablebutton')
function switchbutton(){
  if(btntwo.style.visibility=="hidden"){
    btntwo.style.visibility="visible"
    btnone.style.visibility="hidden"
    document.getElementById('table').style.display="none"
    document.getElementById('gridid').style.display="block"
    document.getElementById('form').style.display="none"
    document.getElementById('detailspage').style.display="none"
    
  }
  else{
    btnone.style.visibility="visible"
    btntwo.style.visibility="hidden"
    document.getElementById('table').style.display="block"
    document.getElementById('detailspage').style.display="none"
    document.getElementById('gridid').style.display='none'
    document.getElementById('form').style.display="none"
    
  }
}
var detailsname = document.getElementById('detailsname')
var detailstitle = document.getElementById('detailstitle')
var detailsorg = document.getElementById('detailsorg')
var detailscity = document.getElementById('detailscity')
var detailsgroup = document.getElementById('detailsgroup')
var detailsmobile = document.getElementById('detailsmobile')
var detailsemail = document.getElementById('detailsemail')
var pname = document.createElement('p')
var ptitle =document.createElement('p')
var porg = document.createElement('p')
var pgroup = document.createElement('p')
var pmobile = document.createElement('p')
var pcity = document.createElement('p')
var pemail = document.createElement('p')

document.getElementById('table').addEventListener('click',function(e){
  console.log(e.target.textContent)
  console.log(zeroarr)
  if(zeroarr.includes(e.target.textContent)){

    console.log(zeroarr.indexOf(e.target.textContent))
    var index = zeroarr.indexOf(e.target.textContent)
    var indexnameofperson = arrname[index]
    var indexemail = arremail[index]
    var indexcity = arrcity[index]
    var indextitle = arrtitle[index]
    var indexorg =arrorg[index]
    var indexgroup = arrgroup[index]
    var indexmobile = arrmobile[index]
    pname.textContent=indexnameofperson
    detailsname.appendChild(pname)
    pname.style.fontSize="30px"
    pname.style.color="black"
    ptitle.textContent=indextitle
    ptitle.style.color="black"
    detailstitle.appendChild(ptitle)
    pemail.textContent=indexemail
    pemail.style.color="black"
    detailsemail.appendChild(pemail)
    pcity.textContent=indexcity
    pcity.style.color="black"
    detailscity.appendChild(pcity)
    porg.textContent=indexorg
    porg.style.color="black"
    detailsorg.appendChild(porg)
    pgroup.textContent=indexgroup
    pgroup.style.color="black"
    detailsgroup.appendChild(pgroup)
    pmobile.textContent=indexmobile
    pmobile.style.color="black"
    detailsmobile.appendChild(pmobile)
    document.getElementById('detailspage').style.display="block"
    document.getElementById('table').style.display="none"
   document.getElementById('body').style.display="none"
  }
})
document.getElementById('X').addEventListener('click',function(e){
  document.getElementById('table').style.display=""
  document.getElementById('detailspage').style.display="none"
  document.getElementById('body').style.display=""
  detailsname.removeChild(pname)
  detailstitle.removeChild(ptitle)
  detailsorg.removeChild(porg)
  detailsmobile.removeChild(pmobile)
  detailsgroup.removeChild(pgroup)
  detailsemail.removeChild(pemail)
  detailscity.removeChild(pcity)
  document.getElementById('gridbutton').style.display=""
  //document.getElementById('view').style.display=""
  
})
var pnametwo = document.createElement('p')
var ptitletwo =document.createElement('p')
var porgtwo = document.createElement('p')
var pgrouptwo = document.createElement('p')
var pmobiletwo = document.createElement('p')
var pcitytwo = document.createElement('p')
var pemailtwo = document.createElement('p')
document.getElementById('gridid').addEventListener('click',function(e){
console.log(e.target.textContent)
var strtext = e.target.textContent
if(zeroarr.includes(strtext)){
var index = zeroarr.indexOf(strtext)
    var indexnameofperson = arrname[index]
    var indexemail = arremail[index]
    var indexcity = arrcity[index]
    var indextitle = arrtitle[index]
    var indexorg =arrorg[index]
    var indexgroup = arrgroup[index]
    var indexmobile= arrmobile[index]
    pnametwo.textContent=indexnameofperson
    detailsname.appendChild(pnametwo)
    pnametwo.style.fontSize="30px"
    pnametwo.style.color="black"
    ptitletwo.textContent=indextitle
    ptitletwo.style.color="black"
    detailstitle.appendChild(ptitletwo)
    pemailtwo.textContent=indexemail
    pemailtwo.style.color="black"
    detailsemail.appendChild(pemailtwo)
    pcitytwo.textContent=indexcity
    pcitytwo.style.color="black"
    detailscity.appendChild(pcitytwo)
    porgtwo.textContent=indexorg
    porgtwo.style.color="black"
    detailsorg.appendChild(porgtwo)
    pgrouptwo.textContent=indexgroup
    pgroup.style.color="black"
    detailsgroup.appendChild(pgrouptwo)
    pmobiletwo.textContent=indexmobile
    pmobiletwo.style.color="black"
    detailsmobile.appendChild(pmobiletwo)
    document.getElementById('detailspage').style.display="block"
    document.getElementById('table').style.display="none"
   document.getElementById('body').style.display="none"
   document.getElementById('gridid').style.display="none"
}
})
document.getElementById('X').addEventListener('click',function(e){
  document.getElementById('gridid').style.display="none"
  document.getElementById('detailspage').style.display="none"
  document.getElementById('body').style.display=""
  document.getElementById('table').style.display="none"
  detailsname.removeChild(pnametwo)
  detailstitle.removeChild(ptitletwo)
  detailsorg.removeChild(porgtwo)
  detailsmobile.removeChild(pmobiletwo)
  detailsgroup.removeChild(pgrouptwo)
  detailsemail.removeChild(pemailtwo)
  detailscity.removeChild(pcitytwo)
  
  //document.getElementById('gridbutton').style.display=""
})
