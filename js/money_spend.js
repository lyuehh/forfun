/* global d3, _*/

var margin = {
  top: 20,
  right: 20,
  bottom: 30,
  left: 200
},
  width = 1000 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y-%m-%d").parse;

var div = d3.select("body").append("div") .attr("class", "tooltip") .style("opacity", 0);

var x = d3.time.scale()
  .range([0, width]);


var y = d3.scale.linear()
  .range([height, 0]);

var xAxis = d3.svg.axis()
  .scale(x)
  .tickFormat(function(d) {
    return d.getFullYear() + '.' +  (d.getMonth()+1);
  })
  .ticks(d3.time.months, 2)
  .orient("bottom");

var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left");

var line = d3.svg.line()
  .interpolate('basic')
  .x(function(d) {
    return x(d.date);
  })
  .y(function(d) {
    return y(d.money);
  });

var svg = d3.select(".here").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g");
  //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.csv("/js/money2012_2013.csv", function(error, data) {
  data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.money = parseFloat(d.money);
    if (d.money > 250) {
      d.money = 200;
    }
  });

  var allDays = d3.time.days(new Date(2012,7,0), new Date(2013,9,4), 1);
  var allDaysData = [];
  var ad = [];
  window.allDays = allDays;
  window.data = data;
  window.allDaysData = allDaysData;
  window.ad = ad;
  for (var i = allDays.length - 1; i >= 0; i--) {
    ad.push({date: allDays[i], money: 0}); // 先置空
  }

  _.each(ad, function(d1) {
    _.each(data, function(d2) {
      if(d1.date.getFullYear() === d2.date.getFullYear() && d1.date.getMonth() === d2.date.getMonth() && d1.date.getDate() === d2.date.getDate()) {
        d1.money = d2.money;
      }
    });
  });

  x.domain([d3.time.format('%Y-%m').parse('2012-08'), d3.time.format('%Y-%m').parse('2013-10')]);
  y.domain(d3.extent(ad, function(d) {
    return d.money;
  }));


  if(!d3.select('.axis')[0][0]) {
    svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

    svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
  }

  svg.append("path")
    .datum(ad)
    .attr("class", "send")
    .attr("d", line);

  d3.select('.tips').remove();
});
