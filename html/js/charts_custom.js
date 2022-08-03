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


// LEFT TO SPEND 1 MONTH

var options = {
  chart: {
    type: "area",
    height: 300,
    foreColor: "#999",
    stacked: true,
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06
    }
  },
  colors: ['#22384d', '#acacac'],
  stroke: {
    curve: "smooth",
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  series: [{
    name: 'Total Views',
    data: generateDayWiseTimeSeries(0, 18)
  }, {
    name: 'Unique Views',
    data: generateDayWiseTimeSeries(1, 18)
  }],
  markers: {
    size: 0,
    strokeColor: "#fff",
    strokeWidth: 3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6
    }
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      offsetX: 14,
      offsetY: -5
    },
    tooltip: {
      enabled: true
    }
  },
  grid: {
    padding: {
      left: -5,
      right: 5
    }
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy"
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  },
  fill: {
    type: "solid",
    fillOpacity: 0.7
  }
};

var chart = new ApexCharts(document.querySelector("#timeline-chart"), options);

chart.render();

function generateDayWiseTimeSeries(s, count) {
  var values = [[
    4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5
  ], [
    2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2
  ]];
  var i = 0;
  var series = [];
  var x = new Date("11 Nov 2012").getTime();
  while (i < count) {
    series.push([x, values[s][i]]);
    x += 86400000;
    i++;
  }
  return series;
}