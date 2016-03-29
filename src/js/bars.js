
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

//left hand side of bar scale
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var url = 'http://localhost:5000/sales';
//fetch data from rest API
d3.json( url,  function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d.name; }));
  y.domain([0, d3.max(data, function(d) { return d.subtotal; })]);

//X Axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

//Y Axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Sales");

//populate bars from data returned from rest API
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      
      //on x axis plot using product names
      .attr("x", function(d) { return x(d.name); })
      //.attr("x", "")
      .attr("width", x.rangeBand())

      //on y axis plot using subtotal
      .attr("y", function(d) { return y(d.subtotal); })
      .attr("height", function(d) { return height - y(d.subtotal); });
});

function type(d) {
  d.frequency = + Math.random();
  return d;
}
