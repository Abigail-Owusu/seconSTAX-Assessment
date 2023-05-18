var menuToggle = document.getElementById("menu-toggle");
var menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
});

//user dropdown
const userButton = document.getElementById('user-button');
const dropdownContent = document.getElementById('dropdown-content');

//show logout button when user clicks on user icon
userButton.addEventListener('click', function () {
    dropdownContent.classList.toggle('show');
});

window.addEventListener('click', function (event) {
    if (!event.target.matches('.user-button')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});

// historical data for the last five days
//dollars
const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
const dollarRates = [1.20, 1.22, 1.25, 1.23, 1.21];

new Chart("dollarRates", {
    type: "line",
    data: {
        labels: days,
        datasets: [{

            label: "Dollar Rates",
            fill: false,
            lineTension: 0,
            backgroundColor: '#2977B7',
            borderColor: "#BAD1E4",
            data: dollarRates
        }]
    },
    options: {
        legend: { display: true},
       
    }
    
});

//dollars

const poundRates = [0.88, 0.89, 0.87, 0.86, 0.90];

new Chart("poundRates", {
    type: "line",
    data: {
        labels: days,
        datasets: [{
            label: "Pound Rates",
            fill: false,
            lineTension: 0,
            backgroundColor: "#2977B7",
            borderColor: "#BAD1E4",
            data: poundRates
        }]
    },
    options: {
        legend: { display: true },
    }
});

//Euros
const euroRates = [1.10, 1.12, 1.15, 1.13, 1.11];
new Chart("euroRates", {
    type: "line",
    data: {
        labels: days,
        datasets: [{
            label: "Euro Rates",
            fill: false,
            lineTension: 0,
            backgroundColor: "#2977B7",
            borderColor: "#BAD1E4",
            data: euroRates
        }]
    },
    options: {
        
        legend: { display: true },
        
    }
});