// var initDate = new Date();
// var startDate = new Date(initDate.getTime()-1000); ////////NNNNNNNN/////N

// var dataArray = [0, 0.5];
// var timeArray = [startDate, initDate];

// var svg = d3.select("svg");

// var y = d3.scaleLinear().domain([0, 1]).range([800, 0]);
// var yAxis = d3.axisLeft().scale(y).tickSize(10);

// var x = d3.scaleTime().domain([startDate, initDate]).range([0, 1200]);
// var xAxis = d3.axisBottom().scale(x);

// var startXMargin = 80;
// var startYMargin = 30;

// var line = d3.line()
//     .x((d, i) => {return startXMargin + x(timeArray[i])})
//     .y((d, i) => {return 800 + startYMargin - d*800});

// svg.append('g')
//     .attr("transform", `translate(${startXMargin}, ${startYMargin})`)
//     .call(yAxis);

// var xAxisElement = svg.append('g')
//     .attr("transform", `translate(${startXMargin}, ${800 + startYMargin})`)
//     .transition()
//     .duration(200)/////////////////////////////SOMTH LIKE N///////N
//     .ease(d3.easeLinear)
//     .call(xAxis);

// var path = svg.append('path')
//     .attr('fill', 'none')
//     .attr('stroke-width', '2')
//     .attr('d', line(dataArray));
    
