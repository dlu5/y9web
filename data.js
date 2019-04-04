function search() {
    console.log("HI")
    let input = document.getElementById("txtAutoComplete");
    
    var bal = [];
    var country = {
        name: "",
        bal: ""
    }
    
    function createCountry(name, bal) {
        return {
            name: name,
            bal: bal
        }
    }
    
    for(let i = 0; i < data.length; i++) {
         bal.push(createCountry(data[i].dims.COUNTRY, data[i].Value));
    }
    console.log(bal);
    
    let resultText = document.getElementById("result");
    for(let i = 0; i < bal.length; i++) {
        if(bal[i].name == input.value) {
            resultText.innerHTML = "The legal Blood Alchohol Content (BAC) Limit for Young/Novice Drivers in " + bal[i].name + " is: " + bal[i].bal;
        }
    }
//    resultText.innerHTML = 
    
    
    for(let i = 0; i < data.length; i++) {
//        console.log(data[i].dims.COUNTRY, input.value);
        if(data[i].dims.COUNTRY == currentCountry || data[i].dims.COUNTRY == input.value) {
            console.log("HI THERE ib is god")
        }
    }
}


    
/* <script type="text/javascript"> */
    var currentCountry;


  var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bosnia and Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cabo Verde","Central African Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Saint Kitts and Nevis","St Lucia","Saint Vincent and the Grenadines","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela (Bolivarian Republic of)","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]; 

  var options = '';

  for(var i = 0; i < countries.length; i++)
    options += '<option value="'+countries[i]+'" />';

  document.getElementById('dlAutoComplete').innerHTML = options;
    
    
                    
    

     function cd()
       { for (i = 0; i<data.length; i = i++) {
            cname = data[i].dims.COUNTRY; }
            if (cname == txtAutoComplete) {
            numdead = parseInt(data[i].Value);
            return numdead;
                
                }          
            } 

    
function showLimit(limit) {
    
    mydiv = document.getElementById("demo");
    mydiv.innerHTML = data[i].dims.Value}



/* window.onload = function() {
  document.getElementById('txtAutoComplete').value = '';
  } */



