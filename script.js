var staticUrl = 'https://api.covid19india.org/data.json';
        $.getJSON(staticUrl, function(data) {
       
            var j = data.statewise[0].confirmed
            var k = data.statewise[0].deaths
            var l = data.statewise[0].recovered
            var m = data.statewise[0].active

            console.log(j,k,l,m)
            document.getElementById("confirmed").innerText = j;
            document.getElementById("active").innerText = m;
            document.getElementById("deaths").innerText = k;
            document.getElementById("recovered").innerText = l;
        })

        var url = 'https://api.covid19india.org/state_district_wise.json'
$.getJSON(url,data=>{
 
  for(key in data.Karnataka.districtData){
      console.log(key)
    
  }
})


