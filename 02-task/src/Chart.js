class Chart {

    constructor(initX, height) {
        this.svg = d3.select("div.svg-container").append("svg")        
        this.initialX = initX;
        this.timeArray = [];
        this.paddingBottom = 50;
        this.axes = {};
    }

    initializeAxes() {

        this.axes.y = d3.scaleLinear().domain([0, 1]).range([parseInt(this.svg.style("height"), 10) - this.paddingBottom, 0]);
        this.axes.yScale = d3.axisLeft().scale(this.axes.y).tickSize(10);
        this.axes.yAxisG = this.svg.append('g')
            .call(this.axes.yScale);

        this.axes.x = d3.scaleTime().domain([new Date(), new Date()]); 
        this.axes.xScale = d3.axisBottom().scale(this.axes.x);     
        this.axes.xAxisG = this.svg.append('g')
            .attr("transform", `translate(0, ${parseInt(this.svg.style("height"), 10) - this.paddingBottom})`)
            .call(this.axes.xScale);
    }

    updateTime(){
        this.timeArray.push(new Date());
    };
    
    initializePath(color, strokeWidth) {
        var path = this.svg.append('path')
            .attr('fill', 'none')
            .attr('stroke', color)
            .attr('stroke-width', strokeWidth)            

        return path;
    }

    updateXAxis() {
        this.axes.x.domain([this.timeArray[0] || new Date(), new Date()]).range([0, parseInt(this.svg.style("width"), 10)]); 
        this.axes.xAxisG.call(this.axes.xScale);
    }

    getLine() {
        let actualHeight = parseInt(this.svg.style("height"), 10) - this.paddingBottom;
        return d3.line()
            .x((d, i) => {return this.axes.x(this.timeArray[i])})
            .y((d, i) => {return actualHeight - d*actualHeight});
            // .curve(d3.curveCardinal);
    }
} 