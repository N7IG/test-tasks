class Chart {

    constructor(container, minValue, maxValue) {
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.timeArray = [];
        this.axes = {};
        this.paddingBottom = 50;
        this.svg = d3.select(container).append("svg");
        this.drawXAxis();
        this.drawYAxis();
    }

    drawXAxis() {
        if(!this.axes.x) {
            this.axes.x = d3.scaleTime().domain([new Date(), new Date()]); 
            this.axes.xScale = d3.axisBottom().scale(this.axes.x);     
            this.axes.xAxisG = this.svg.append('g')
                .attr("transform", `translate(0, ${parseInt(this.svg.style("height"), 10) - this.paddingBottom})`)
                .call(this.axes.xScale);
        }
    }

    drawYAxis() {
        if(!this.axes.y) {
            this.axes.y = d3.scaleLinear().domain([0, 1]).range([parseInt(this.svg.style("height"), 10) - this.paddingBottom, 0]);
            this.axes.yScale = d3.axisLeft().scale(this.axes.y).tickSize(10);
            this.axes.yAxisG = this.svg.append('g')
                .call(this.axes.yScale);
        }
    }
    
    appendPath(color = 'white', strokeWidth = 2) {
        return this.svg.append('path')
            .attr('fill', 'none')
            .attr('stroke-width', strokeWidth)
            .attr('stroke', color);
    }

    updateTimeAxis(date) {
        this.timeArray.push(date);
        this.axes.x.domain([this.timeArray[0] || new Date(), new Date()]).range([0, parseInt(this.svg.style("width"))]); 
        this.axes.xAxisG.call(this.axes.xScale);
    }

    getLineFunction() {
        let actualHeight = parseInt(this.svg.style("height")) - this.paddingBottom;

        return d3.line()
            .x((d, i) => {return this.axes.x(this.timeArray[i])})
            .y((d, i) => {return actualHeight - d*actualHeight});
            // .curve(d3.curveCardinal);
    }
} 

// updateTime(date){
//     this.timeArray.push(date);
// };

// initializeAxes() {
//     if(!this.axes.y) {
//         this.axes.y = d3.scaleLinear().domain([0, 1]).range([parseInt(this.svg.style("height"), 10) - this.paddingBottom, 0]);
//         this.axes.yScale = d3.axisLeft().scale(this.axes.y).tickSize(10);
//         this.axes.yAxisG = this.svg.append('g')
//             .call(this.axes.yScale);

//         this.axes.x = d3.scaleTime().domain([new Date(), new Date()]); 
//         this.axes.xScale = d3.axisBottom().scale(this.axes.x);     
//         this.axes.xAxisG = this.svg.append('g')
//             .attr("transform", `translate(0, ${parseInt(this.svg.style("height"), 10) - this.paddingBottom})`)
//             .call(this.axes.xScale);
//     }
// }


///Link PATH to CHART so that user will call only CHART methods