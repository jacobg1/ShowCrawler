(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,a){},177:function(e,t,a){e.exports=a(349)},344:function(e,t,a){e.exports=a.p+"static/media/album_icon.e3f8ea40.png"},349:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(12),i=a.n(o),c=a(54),s=a(55),l=a(58),u=a(56),m=a(57),h=a(16),f=a(35),d=a.n(f),p=(a(157),a(36)),g=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"start",value:function(){this.props.getSearch(),d()("audio").attr("src",this.props.songUrl)}},{key:"next",value:function(){this.nextSong()}},{key:"nextSong",value:function(){this.props.getSearch()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{id:"button"},r.a.createElement(p.b,{id:"buttons",vertical:!0},r.a.createElement(p.a,{onClick:function(){return e.start()}},"start / next"))),r.a.createElement("div",{id:"player"}),r.a.createElement("audio",{type:"audio/mp3",controls:!0,autoPlay:!0,src:this.props.songUrl,onEnded:function(){return e.next()},color:"red"}))}}]),t}(n.Component),y={"String Cheese Incident":["2017","2016","2015","2014","2013","2012","2011","2010","2009","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995"],"Grateful Dead":["1995","1994","1993","1992","1991","1990","1989","1988","1987","1986","1985","1984","1983","1982","1981","1980","1979","1978","1977","1976","1975","1974","1973","1972","1971","1970","1969","1968","1967","1966","1965"],"Phil Lesh and Friends":["2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998"],Ratdog:["2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995"],"Keller Williams":["2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994"],"Yonder Mountain String Band":["2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1996"],Lotus:["2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002"],"Sound Tribe Sector 9":["2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998"],Particle:["2016","2015","2014","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000"],"moe.":["2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992"],"Umphreys McGee":["2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998"],"Disco Biscuits":["2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997"],"Joe Russos Almost Dead":["2016","2015","2014","2013"],"Perpetual Groove":["2016","2015","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002"],Ween:["2016","2015","2014","2013"],"Schooley Mountain Band":["2016","2015","2014"]},b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={artistArray:Object.entries(y),artistYear:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.artistArray.map(function(e,t){return r.a.createElement("option",{key:t+1,value:e[0]},e[0])});t.unshift(r.a.createElement("option",{key:"0"},"Please Select a band"));var a=this.props.years.map(function(e,t){return r.a.createElement("option",{key:t+1,value:e},e)});return a.unshift(r.a.createElement("option",{key:"0"},"Please Select a year")),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){return e.props.submitArtistName(t)}},r.a.createElement("select",{id:"artistOption",onChange:function(t){return e.props.setArtistName(t)}},t)),r.a.createElement("form",{onSubmit:function(t){return e.props.submitYearChoice(t)}},r.a.createElement("select",{id:"yearOption",value:this.props.yearChoice,onChange:function(t){return e.props.setYearChoice(t)}},a)),r.a.createElement("p",{className:"station"}))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={playList:[],historyMp3Url:[],newPlayList:[{name:"",src:"",album:""}],mp3Url:null,historyArray:[],concertArray:[],concertId:null,dropDownChoices:y,artistName:" ",years:[" "],yearChoice:" ",currentSongTitle:"",currentSong:{}},a.nextSong=a.nextSong.bind(Object(h.a)(Object(h.a)(a))),a.getSearch=a.getSearch.bind(Object(h.a)(Object(h.a)(a))),a.setArtistName=a.setArtistName.bind(Object(h.a)(Object(h.a)(a))),a.submitArtistName=a.submitArtistName.bind(Object(h.a)(Object(h.a)(a))),a.setYearChoice=a.setYearChoice.bind(Object(h.a)(Object(h.a)(a))),a.submitYearChoice=a.submitYearChoice.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"setArtistName",value:function(e){this.setState({artistName:e.target.value,yearChoice:" "},function(){var e=y[this.state.artistName]||[" "];this.setState({years:e})})}},{key:"submitArtistName",value:function(e){e.preventDefault()}},{key:"setYearChoice",value:function(e){this.setState({yearChoice:e.target.value},function(){console.log(this.state.yearChoice)})}},{key:"submitYearChoice",value:function(e){e.preventDefault()}},{key:"playListSong",value:function(e){console.log(e),d()("audio").attr("src",e.src),d()(".currentSongName").text(e.name),d()(".currentSongAlbum").text(e.album)}},{key:"getSearch",value:function(){var e=this,t="https://archive.org/advancedsearch.php?q=creator%3A"+(this.state.artistName.replace(/ /g,"_")+"+AND+year%3A"+this.state.yearChoice.replace(/\//g,""))+"&fl%5B%5D=avg_rating&fl%5B%5D=backup_location&fl%5B%5D=btih&fl%5B%5D=call_number&fl%5B%5D=collection&fl%5B%5D=contributor&fl%5B%5D=coverage&fl%5B%5D=creator&fl%5B%5D=date&fl%5B%5D=description&fl%5B%5D=downloads&fl%5B%5D=external-identifier&fl%5B%5D=foldoutcount&fl%5B%5D=format&fl%5B%5D=headerImage&fl%5B%5D=identifier&fl%5B%5D=imagecount&fl%5B%5D=language&fl%5B%5D=licenseurl&fl%5B%5D=mediatype&fl%5B%5D=members&fl%5B%5D=month&fl%5B%5D=num_reviews&fl%5B%5D=oai_updatedate&fl%5B%5D=publicdate&fl%5B%5D=publisher&fl%5B%5D=related-external-id&fl%5B%5D=reviewdate&fl%5B%5D=rights&fl%5B%5D=scanningcentre&fl%5B%5D=source&fl%5B%5D=stripped_tags&fl%5B%5D=subject&fl%5B%5D=title&fl%5B%5D=type&fl%5B%5D=volume&fl%5B%5D=week&fl%5B%5D=year&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=1000&page=1&output=json&callback=callback&save=yes";d.a.ajax({headers:{"Content-Type":"application/x-www-form-urlencoded"},url:t,method:"GET",dataType:"jsonp"}).then(function(t){e.setState({concertArray:t.response.docs})}).then(function(){var t=e.state.concertArray.map(function(e,t){return e.identifier}),a=t[Math.floor(Math.random()*t.length)];e.setState({concertId:a}),e.getConcert()})}},{key:"getConcert",value:function(){var e=this,t="https://archive.org/metadata/"+this.state.concertId;d.a.ajax({headers:{"Content-Type":"application/x-www-form-urlencoded"},url:t,method:"GET",dataType:"jsonp"}).then(function(t){console.log("get concert",t);var a=t.files.filter(function(e){return"VBR MP3"===e.format}),n=a[Math.floor(Math.random()*a.length)],r="https://"+t.d1,o=t.dir,i=n.name,c=e.state.newPlayList,s=n.title,l=e.state.historyMp3Url.concat(r+o+"/"+i);e.setState({mp3Url:r+o+"/"+i,currentSong:n,historyMp3Url:l,newPlayList:c.concat({name:s,src:r+o+"/"+i,album:n.album})},function(){console.log("newPlayList",this.state.newPlayList)})})}},{key:"nextSong",value:function(){this.getSearch()}},{key:"render",value:function(){var e=this,t=this.state.newPlayList.map(function(t,a){return r.a.createElement("p",{className:"songsList",key:a,onClick:function(){return e.playListSong(t)}},t.name)}),n=r.a.createElement("div",null,r.a.createElement("h3",{className:"songInfoTitle"},"Song Info"),r.a.createElement("p",{className:"currentSongName"},this.state.currentSong.title),r.a.createElement("p",{className:"currentSongAlbum"},this.state.currentSong.album));return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"flameCd1Container"},r.a.createElement("img",{className:"cdImg",src:a(344)})),r.a.createElement("h2",{className:"title"},r.a.createElement("span",null,"CRUNCH")," FM"),r.a.createElement(p.d,null,r.a.createElement("div",{className:"mainContainer"},r.a.createElement(p.c,{sm:4},r.a.createElement("h3",{className:"station"},"Station"),r.a.createElement("div",{className:"filter"},r.a.createElement(b,{dropDownChoices:this.state.dropDownChoices,years:this.state.years,yearChoice:this.state.yearChoice,setArtistName:this.setArtistName,submitArtistName:this.submitArtistName,setYearChoice:this.setYearChoice,submitYearChoice:this.submitYearChoice})),r.a.createElement(g,{getSearch:this.getSearch,nextSong:this.nextSong,songUrl:this.state.mp3Url}),r.a.createElement("p",{className:"crunchyGrooves"},"Stay crunchy!")),r.a.createElement(p.c,{sm:4},r.a.createElement("h3",{className:"playListTitle"},"Playlist"),r.a.createElement("div",{className:"playList"},r.a.createElement("div",{className:"playListSongs"},t))),r.a.createElement(p.c,{sm:4},r.a.createElement("div",{className:"station"},r.a.createElement("div",{className:"songInfo"},n))))))}}]),t}(n.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(345),a(347);i.a.render(r.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/CRUNCHfm",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/CRUNCHfm","/service-worker.js");D?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):E(e)})}}()}},[[177,2,1]]]);
//# sourceMappingURL=main.cbe7c3cc.chunk.js.map