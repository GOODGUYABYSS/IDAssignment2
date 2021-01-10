var main_url = 'https://cors-anywhere.herokuapp.com/http://data.fixer.io/api/latest?access_key=91b8b58aa17e185bec0821d38d28785f'
var symbols_url = 'https://cors-anywhere.herokuapp.com/http://data.fixer.io/api/symbols?access_key=91b8b58aa17e185bec0821d38d28785f'
var filter_url = 'https://cors-anywhere.herokuapp.com/http://data.fixer.io/api/latest?access_key=91b8b58aa17e185bec0821d38d28785f&symbols='

// setting default option for filterResults
var myselectedRate = 'AED';

// filter results feature
$(document).ready(function(){
    $('.type').change(function(){
        myselectedRate = $(this).find("option:selected").text();
    })
})

// functions that runs after the button is clicked, and setting some buttons so that they can only clicked once
$('#selectRate').on("click", filterResults)
$('#display-table').one("click", displayTable)
$('#display-rate').one("click", displayRate)
$('#historical-rate').on("click", historicalRate)

// this function load upon the opening of filterResults.html so that the options would be ready once the webpage loads
function optionBox(){
    fetch(main_url)
    .then((res) => res.json())
    .then(function (data) {
        const rates = data.rates;
        //  keys for the dropdown menu
        var selectBox, option, prop;

        selectBox = document.getElementById("type");
         
        for (prop in rates) {
            option = document.createElement("option");
            option.textContent = prop;
            option.value = rates[prop];
            selectBox.add(option);
        }
    })
}

// this function takes the option selected by the user, and sends a request to the API, and return only one result (feature by fixer.io API)
function filterResults(){
    fetch(filter_url+myselectedRate)
    .then((res) => res.json())
    .then(function (data) {
        const rates = data.rates;
        var table = document.getElementById('filter-table');
        var tbody = document.getElementById('filter-result');
        for (const [key, value] of Object.entries(rates)) {
            let row = tbody.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.textContent = key;
            cell2.textContent = value;

        const success = data.success;
        const timestamp = data.timestamp;
        const base = data.base;
        const date = data.date;
        document.getElementById('output').innerHTML = `<strong>Results: </strong> <br> Success: ${success} <br> Timestamp: ${timestamp} <br> Base: ${base} <br> Date: ${date}`;
        }
        })
    }

// this function sends a request to the API, and return the results (feature by fixer.io API)
function displayTable(){
    fetch(symbols_url)
    .then((res) => res.json())
    .then(function (data) {
        const symbols = data.symbols;
        var table = document.getElementById('symbols-table');
        var tbody = document.getElementById('symbols-result');
        for (const [key, value] of Object.entries(symbols)) {
            let row = tbody.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.textContent = key;
            cell2.textContent = value;
        }
        })
    }

// this function sends a request to the API, and return the results (main feature by fixer.io API)
function displayRate(){
    fetch(main_url)
    .then((res) => res.json())
    .then(function (data) {
        const rates = data.rates;
        var table = document.getElementById('rate-table');
        var tbody = document.getElementById('rate-result');
        for (const [key, value] of Object.entries(rates)) {
            let row = tbody.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.textContent = key;
            cell2.textContent = value;
        
        const success = data.success;
        const timestamp = data.timestamp;
        const base = data.base;
        const date = data.date;
        document.getElementById('output').innerHTML = `<strong>Results: </strong> <br> Success: ${success} <br> Timestamp: ${timestamp} <br> Base: ${base} <br> Date: ${date}`;
        }
        })
    }

// this function requires the user to input a date, sends a request to the API, and return the results (feature by fixer.io API) 
function historicalRate(){
    $("#historical-result").empty(); 
    var date = document.getElementById('date').value;
    var url = 'https://cors-anywhere.herokuapp.com/http://data.fixer.io/api/'+date+'?access_key=91b8b58aa17e185bec0821d38d28785f'
    fetch(url)
    .then((res) => res.json())
    .then(function (data) {
        const rates = data.rates;
        var table = document.getElementById('historical-table');
        var tbody = document.getElementById('historical-result');
        for (const [key, value] of Object.entries(rates)) {
            let row = tbody.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.textContent = key;
            cell2.textContent = value;
        
        const success = data.success;
        const timestamp = data.timestamp;
        const base = data.base;
        const date = data.date;
        document.getElementById('output').innerHTML = `<strong>Results: </strong> <br> Success: ${success} <br> Timestamp: ${timestamp} <br> Base: ${base} <br> Date: ${date}`;
        }
        })
    }
