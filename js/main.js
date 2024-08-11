
const properties = [
    { id: "property-1", view: "Bay View", bedrooms: 6 },
    { id: "property-2", view: "Ocean View", bedrooms: 3 }
];


function findPropertyByBedrooms(bedrooms) {
    return properties.find(property => property.bedrooms === bedrooms);
}


function findPropertyByView(view) {
    return properties.find(property => property.view === view);
}


function searchPropertiesByBedrooms() {
    const bedrooms = parseInt(document.getElementById("bedrooms-input").value, 10);

    
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = 'none';
    });
    document.querySelectorAll('.rent-button').forEach(button => {
        button.style.display = 'none';
    });

    
    document.getElementById("no-results-message").style.display = 'none';
    document.getElementById("confirmation-message").style.display = 'none';

    if (!isNaN(bedrooms)) {
        const foundProperty = findPropertyByBedrooms(bedrooms);

        if (foundProperty) {
           
            const propertyElement = document.getElementById(foundProperty.id);
            propertyElement.style.display = 'block';

            
            const rentButton = propertyElement.querySelector('.rent-button');
            rentButton.style.display = 'block';

            
            rentButton.addEventListener('click', function() {
                localStorage.setItem('rentedProperty', JSON.stringify(foundProperty));
                document.getElementById("confirmation-message").style.display = 'block';
            });
        } else {
            
            document.getElementById("no-results-message").style.display = 'block';
        }
    } else {
        alert("Please enter a valid number of bedrooms.");
    }
}


function searchPropertiesByView() {
    const selectedView = document.getElementById("view-select").value;

    
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = 'none';
    });
    document.querySelectorAll('.rent-button').forEach(button => {
        button.style.display = 'none';
    });

    
    document.getElementById("no-results-message").style.display = 'none';
    document.getElementById("confirmation-message").style.display = 'none';

    if (selectedView) {
        const foundProperty = findPropertyByView(selectedView);

        if (foundProperty) {
            
            const propertyElement = document.getElementById(foundProperty.id);
            propertyElement.style.display = 'block';

            
            const rentButton = propertyElement.querySelector('.rent-button');
            rentButton.style.display = 'block';

            
            rentButton.addEventListener('click', function() {
                localStorage.setItem('rentedProperty', JSON.stringify(foundProperty));
                document.getElementById("confirmation-message").style.display = 'block';
            });
        } else {
            
            document.getElementById("no-results-message").style.display = 'block';
        }
    } else {
        alert("Please select a view.");
    }
}


window.addEventListener('load', function() {
    const rentedProperty = JSON.parse(localStorage.getItem('rentedProperty'));

    if (rentedProperty) {
        
        const propertyElement = document.getElementById(rentedProperty.id);
        if (propertyElement) {
            propertyElement.style.display = 'block';
            propertyElement.querySelector('.rent-button').style.display = 'block';
            document.getElementById("confirmation-message").style.display = 'block';
        }
    }
});


document.getElementById("bedrooms-search-button").addEventListener("click", searchPropertiesByBedrooms);


document.getElementById("view-search-button").addEventListener("click", searchPropertiesByView);
