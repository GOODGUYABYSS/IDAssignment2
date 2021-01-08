var main_url = 'https://cors-anywhere.herokuapp.com/http://data.fixer.io/api/latest?access_key=91b8b58aa17e185bec0821d38d28785f'
var symbols_url = 'https://cors-anywhere.herokuapp.com/http://data.fixer.io/api/symbols?access_key=91b8b58aa17e185bec0821d38d28785f'
var filter_url = 'https://cors-anywhere.herokuapp.com/http://data.fixer.io/api/latest?access_key=91b8b58aa17e185bec0821d38d28785f&symbols='

// setting default option for filterResults
var myselectedRate = 'AED';

$(document).ready(function(){
    $('.type').change(function(){
        myselectedRate = $(this).find("option:selected").text();
    })
})

$('#selectRate').on("click", filterResults)
$('#display-table').one("click", displayTable)
$('#display-rate').one("click", displayRate)
$('#historical-rate').on("click", historicalRate)

function optionBox(){
    fetch(main_url)
    .then((res) => res.json())
    .then(function (data) {
        const rates = data.rates;
        // Object.entries(rates).forEach(([key, value]) => {
        //     console.log(key, value);
        //  });
        
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

function historicalRate(){
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
