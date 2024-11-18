let In_Built_Tips = `Author_S Ogfline onr Author_E
Quote_S   So offline1 Quote_E

Author_S Ogfline 2 Author_E
Quote_S   So offline2 Quote_E`;

let raw_Tips = "Nothing ";


//Ads in buult
let In_Built_Ads = `
Ads_Img_S  2 Ads_Img_E
Ads_Url_S  HttpRequest Ads_Url_E
Ads_Alt_S  Big alt Ads_Alt_E
Ads_Owner_S  Big Ads_Owner_E

Ads_Img_S  https://drive.google.com/thumbnail?id=1pWNAILBLChQPHl2wtwi1WVPmXfhdjdV2  Ads_Img_E
Ads_Url_S    https://uuu.wordpress.com  Ads_Url_E
Ads_Alt_S   Ads1  Ads_Alt_E
Ads_Owner_S   Owner1  Ads_Owner_E


Ads_Img_S  4 Ads_Img_E
Ads_Url_S  HttpRequest Ads_Url_E
Ads_Alt_S  Big alt Ads_Alt_E
Ads_Owner_S  Big Ads_Owner_E
`;

let raw_Ads = "Nothing ";

//Finish the ads js later
/*
if (navigator.onLine) {
    requestTips("https://github.com/onlinewithbeta/Tips-/blob/main/Tips.json");
    //ad ads own
  //  requestAds("https://github.com/onlinewithbeta/Tips-/blob/main/Tips.json");
} else {
    //update Tips whenever user comes onLine
    window.addEventListener('online', ()=> {
        requestTips("https://github.com/onlinewithbeta/Tips-/blob/main/Tips.json");
            //ad ads own
      //      requestAds("https://github.com/onlinewithbeta/Tips-/blob/main/Tips.json");
    });
}

*/
//requestTips
function requestTips(address) {
    app.HttpRequest("GET", address, null, null, handleReply);
    function handleReply(error, reply) {
        if (error) {
            console.log("Error");
        } else {
            // Extract data between the specified markers
            let rawData = reply.slice(reply.indexOf("Start_Of_Code") + 13, reply.indexOf("End_Of_Code"));

            // Clean up the raw data
            raw_data = rawData.replace(/","/g, '');
            raw_data = raw_data.replace(/\\/g, '');
            arrayTips(raw_data);
        }
    }
}
//requestAds
function requestAds(address) {
    app.HttpRequest("GET", address, null, null, handleReply);
    function handleReply(error, reply) {
        if (error) {
            console.log("Error");
        } else {
            // Extract data between the specified markers
            let rawData = reply.slice(reply.indexOf("Start_Of_Code") + 13, reply.indexOf("End_Of_Code"));

            // Clean up the raw data
            raw_Ads = rawData.replace(/","/g, '');
            raw_Ads = raw_Ads.replace(/\\/g, '');
            arrayAds(raw_Ads);
        }
    }
}

//get Random Item
function getRandomItem(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

//Arrange the Tips and their authors in an array
function arrayTips(raw_text) {
    /*Create and array of authors*/
    //Use regex to find everything between "Author_S" and "Author_E"
    let processing_Author_S = raw_text.match(/Author_S (.*?) Author_E/g);
    let Authors;
    // Extract the matched results and remove unnecessary parts
    if (processing_Author_S) {
        // Capitalize to use the matches properly and trim spaces
        Authors = processing_Author_S.map(processing_Author_S => processing_Author_S.replace(/Author_S | Author_E/g, '').trim());
    }
    /*Create and array of Quoutes*/
    //Use regex to find everything between "Quote_S" and "Quote_E"
    let processing_Quote_S = raw_text.match(/Quote_S (.*?) Quote_E/g);
    let Quoutes;
    // Extract the matched results and remove unnecessary parts
    if (processing_Quote_S) {
        // Capitalize to use the matches properly and trim spaces
        Quoutes = processing_Quote_S.map(processing_Quote_S => processing_Quote_S.replace(/Quote_S | Quote_E/g, '').trim());
    }

    //Create our tips array
    let newTips = []
    for (let i = 0; i < Quoutes.length; i++) {
        newTips.push({
            Author: Authors[i], Quoute: Quoutes[i]
        });
    } //Store it locally
    localStorage.setItem('NewTips', JSON.stringify(newTips));
}

//Arrange the Ads and store them locally
function arrayAds(raw_text) {
    /*Create and array of Image Url*/
    //Use regex to find everything between "Ads_Img_S" and "Ads_Img_E"
    let processing_Img_S = raw_text.match(/Ads_Img_S (.*?) Ads_Img_E/g);
    //Initiating the variable outside the if block
    let Imgs;
    // Extract the matched results and remove unnecessary parts
    if (processing_Img_S) {
        // Capitalize to use the matches properly and trim spaces
        Imgs = processing_Img_S.map(processing_Img_S => processing_Img_S.replace(/Ads_Img_S | Ads_Img_E/g, '').trim());
    }

    /*Create and array of Owner' Url*/
    //Use regex to find everything between "Ads_Url_S" and "Ads_Url_E"
    let processing_Url_S = raw_text.match(/Ads_Url_S (.*?) Ads_Url_E/g);
    let Urls;
    // Extract the matched results and remove unnecessary parts
    if (processing_Url_S) {
        // Capitalize to use the matches properly and trim spaces
        Urls = processing_Url_S.map(processing_Url_S => processing_Url_S.replace(/Ads_Url_S | Ads_Url_E/g, '').trim());
    }

    /*Create and array of Ads alt*/
    //Use regex to find everything between "Ads_Alt_S" and "Ads_Alt_E"
    let processing_Arl_S = raw_text.match(/Ads_Alt_S (.*?) Ads_Alt_E/g);
    let Alts;
    // Extract the matched results and remove unnecessary parts
    if (processing_Arl_S) {
        // Capitalize to use the matches properly and trim spaces
        Alts = processing_Arl_S.map(processing_Arl_S => processing_Arl_S.replace(/Ads_Alt_S | Ads_Alt_E/g, '').trim());
    }


    /*Create and array of Ads Owner name*/
    //Use regex to find everything between "Ads_Owner_S" and "Ads_Owner_E"
    let processing_Owner_S = raw_text.match(/Ads_Owner_S (.*?) Ads_Owner_E/g);
    let Owners;
    // Extract the matched results and remove unnecessary parts
    if (processing_Owner_S) {
        // Capitalize to use the matches properly and trim spaces
        Owners = processing_Owner_S.map(processing_Owner_S => processing_Owner_S.replace(/Ads_Owner_S | Ads_Owner_E/g, '').trim());
    }


    //Create our tips array
    let adsTips = []
    for (let i = 0; i < Owners.length; i++) {
        adsTips.push({
            Img: Imgs[i], Url: Urls[i], Alt: Alts[i], Owner: Owners[i]
        });
    }

    //Store it locally
    localStorage.setItem('NewAds', JSON.stringify(adsTips));
}




//function to display tips
function displayTips() {
    //Assign the localStorage tips to a variable
    let Tips = localStorage.getItem("NewTips");

    if (Tips) {
        Tips = JSON.parse(Tips);

        //get a Random tips
        let current_Tip = getRandomItem(Tips);
        //displayTips
        /*    Id('author').innerText = `~${current_Tip.Author}`;
        Id('tip').innerText = current_Tip.Quoute;*/
    } else {
        //No stored
        arrayTips(In_Built_Tips);
        displayTips();
    }
}

//function to display Ads
function displayAds() {
    //Assign the localStorage tips to a variable
    let Ads = localStorage.getItem("NewAds");

    if (Ads) {
        Ads = JSON.parse(Ads);

        //get a Random tips
        let current_Ad = getRandomItem(Ads);
        console.log(Ads);
        //displayTips
        /*     Id('author').innerText = `~${current_Tip.Author}`;
        Id('tip').innerText = current_Tip.Quoute;*/

    } else {
        //No stored
        arrayAds(In_Built_Ads);
        displayAds();
    }
}

displayAds();

localStorage.clear();