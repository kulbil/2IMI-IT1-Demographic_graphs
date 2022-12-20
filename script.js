var values = [
    {
        årstall: "2011",
        gutter: 31006,
        jenter: 29214
    },
    {
        årstall: "2012",
        gutter: 30933,
        jenter: 29322
    },
    {
        årstall: "2013",
        gutter: 30138,
        jenter: 28857
    },
    {
        årstall: "2014",
        gutter: 30370,
        jenter: 28714
    },
    {
        årstall: "2015",
        gutter: 30369,
        jenter: 28689
    },
    {
        årstall: "2016",
        gutter: 29173,
        jenter: 27460
    },
    {
        årstall: "2017",
        gutter: 29173,
        jenter: 27460
    },
    {
        årstall: "2018",
        gutter: 28430,
        jenter: 26690
    },
    {
        årstall: "2019",
        gutter: 28042,
        jenter: 26453
    },
    {
        årstall: "2020",
        gutter: 27063,
        jenter: 25916
    }
    ]
    
    var xValues = [];
    var yValues1 = [];
    var yValues2 = [];
    
    for (var i = 0; i < values.length; i++) {
        xValues.push(values[i].årstall);
        yValues1.push(values[i].gutter);
        yValues2.push(values[i].jenter);
    }
    

/*
var select1El = document.getElementById("select1");
var select2El = document.getElementById("select2");
var regnUtEl = document.getElementById("regnUt");

var select1ElSelected = select1El.selectedIndex;
var select2ElSelected = select2El.selectedIndex;

regnUtEl.addEventListener("click", regn);
*/

var Chart = new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
                label: "Gutt",
                backgroundColor: "blue",
                data: yValues1
            },
            {
                label: "Jente",
                backgroundColor: "red",
                data: yValues2
            }
        ] 
    },
    options: {
        barValueSpacing: 20,
        scales: {
            yAxes: [{
                ticks: {
                    min: 20000,
                }
            }]
        }
    }
});


/*
function regn(select1, select2, values) {
    var a = 0;
    var b = 0;
    var values = values
    for (var i = 0; i > values.length; i++) {
        console.log(i);
        if(values[i].årstall == select1) {
            a = values[i].gutter + values[i].jenter
        }
        if(values[i].årstall == select2) {
            b = values[i].gutter + values[i].jenter
        }
    }
}

console.log(regn(select1ElSelected, select2ElSelected, values));
*/