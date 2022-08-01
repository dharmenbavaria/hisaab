var options = {
    colors : ['#9e128f'],
    series: [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2]
}],
    chart: {
    height: 350,
    type: 'bar',
},
plotOptions: {
    bar: {
    borderRadius: 0,
    columnWidth: '40%',
    dataLabels: {
        position: 'top', // top, center, bottom
    },
    }
},
dataLabels: {
    enabled: true,
    formatter: function (val) {
    return val + "%";
    },
    offsetY: -20,
    style: {
    fontSize: '12px',
    colors: ["#9e128f"]
    }
},

xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    position: 'top',
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    crosshairs: {
    fill: {
        colors: ['#000000']
    }
    },
    tooltip: {
    enabled: true,
    }
},
yaxis: {
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false,
    },
    labels: {
    show: false,
    formatter: function (val) {
        return val + "%";
    }
    }

},
title: {
    text: '',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
    color: '#444444'
    }
}
};

var chart = new ApexCharts(document.querySelector("#average-month6-chart"), options);
chart.render();




// 12 MONTH CHART

var options = {
    colors : ['#9e128f'],
    series: [{
    name: '',
    data: [30, 60, 54, 15, 45, 26]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '40%'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#average-month12-chart"), options);
  chart.render();