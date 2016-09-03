
document.getElementById('form').onsubmit = function() {
     var search_code = document.getElementById("form").s_code.value;
     console.log(search_code);
     return false;
};

var elements = document.getElementsByClassName("salsChart");
var graph_label = '売上'
var graph_date = [1,2,1,1,1]

var salesChart = new Chart(elements, {
    type: 'bar',
    data: {
        labels: ["2011年3月期", "2012年3月期", "2013年3月期","2014年3月期","2015年3月期"],
        datasets: [{
            label:graph_label,
            data: graph_date,
              borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


var elements = document.getElementsByClassName("cashFlowChart");
var cashFlowChart = new Chart(elements, {
    type: 'bar',
    data: {
        labels: ["2011年3月期", "2012年3月期", "2013年3月期","2014年3月期","2015年3月期"],
        datasets: [{
            label:['営業キャッシュフロー'],
            data: [78103,-94955,-40390,-23114,60293],
              borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



