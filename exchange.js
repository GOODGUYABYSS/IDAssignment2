var url = 'http://data.fixer.io/api/latest?access_key=91b8b58aa17e185bec0821d38d28785f'

document.getElementById('getData').addEventListener("click", getData)
document.getElementById('selectRate').addEventListener('click', testing)

function getData(){
    fetch(url)
    .then((res) => res.json())
    .then(function (data) {
        const rate = data.rates;
        Object.entries(rate).forEach(([key, value]) => {
            console.log(key, value);
         });
        
        //  keys for the dropdown menu
        var selectBox, option, prop;

        selectBox = document.getElementById("type");
         
        for (prop in rate) {
            option = document.createElement("option");
            option.textContent = prop;
            option.value = rate[prop];
            selectBox.add(option);
        }

    })
}

function testing(){
    let type = document.getElementById('type').value;
    console.log(type);
    document.getElementById('output').innerHTML = type
}
