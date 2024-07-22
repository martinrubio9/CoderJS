

let lead = {};


function needMoreHelpPrompt() {
    let userResponse = prompt("Need more help? (yes/no)").toLowerCase();
    
    if (userResponse === "yes") {
        alert("Our Travel Advisors will contact you as soon as possible");
        lead.needsMoreHelp = true; 
    } else if (userResponse === "no") {
        alert("If you need more help, please do not hesitate to contact us. Thank you!");
        lead.needsMoreHelp = false; 
    } else {
        alert("Please enter a valid response (yes/no).");
        needMoreHelpPrompt();
    }
}


needMoreHelpPrompt();

console.log(lead);


const property1 = {
    view: "bay view",
    bedrooms: 6,
    baths: 6.5,

}

const property2 = {
    view: "ocean view",
    bedrooms: 3,
    baths: 3.5,
}

const properties = [property1,property2]

for(const property of properties) {
    console.log(property)
}

function welcomeMessage(username = "Guest") {
    return `Welcome to our website, ${username}! We hope you have a great experience.`;
}


let message = welcomeMessage("Martin");
console.log(message); 



const findProperties = [property1, property2];

function findPropertyByBedrooms() {
    let bedrooms = parseInt(prompt("How many bedrooms do you need?"), 10);

   
    if (isNaN(bedrooms)) {
        alert("Please enter a valid number.");
        return;
    }

    let foundProperty = findProperties.find(property => property.bedrooms === bedrooms);

    if (foundProperty) {
        alert(`We have a property with ${bedrooms} bedrooms. View: ${foundProperty.view}, Baths: ${foundProperty.baths}`);
    } else {
        alert("We do not have availability at the moment.");
    }
}

findPropertyByBedrooms();

function findPropertyByBaths() {
    let baths = parseFloat(prompt("How many bathrooms do you need?"));

    
    if (isNaN(baths)) {
        alert("Please enter a valid number.");
        return;
    }

    let foundProperty = findProperties.find(property => property.baths === baths);

    if (foundProperty) {
        alert(`We have a property with ${baths} bathrooms. View: ${foundProperty.view}, Bedrooms: ${foundProperty.bedrooms}`);
    } else {
        alert("We do not have availability at the moment.");
    }
}

findPropertyByBaths();









