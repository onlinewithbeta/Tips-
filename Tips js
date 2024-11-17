let In_Built_Tips = `Author_S Ogfline onr Author_E
Quote_S   So offline1 Quote_E

Author_S Ogfline 2 Author_E
Quote_S   So offline2 Quote_E`;

let raw_Tips = "Nothing ";


if (navigator.onLine) {
    requestTips("https://github.com/onlinewithbeta/Tips-/blob/main/Tips.json");
} else {
    //update Tips whenever user comes onLine
    window.addEventListener('online', ()=> {
        requestTips("https://github.com/onlinewithbeta/Tips-/blob/main/Tips.json");
    });
}


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
            raw_Tips = rawData.replace(/","/g, '');
            raw_Tips = raw_Tips.replace(/\\/g, '');
            arrayTips(raw_Tips);
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


//function to display tips
function displayTips() {
    //Assign the localStorage tips to a variable
    let Tips = localStorage.getItem("NewTips");

    if (Tips) {
        Tips = JSON.parse(Tips);

        //get a Random tips
        let current_Tip = getRandomItem(Tips);

        //displayTips
        Id('author').innerText = `~${current_Tip.Author}`;
        Id('tip').innerText = current_Tip.Quoute;
    } else {
        //No stored
        arrayTips(In_Built_Tips);
        displayTips();
    }
}

window.addEventListener('click', ()=> {
    displayTips();
});