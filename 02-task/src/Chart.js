class Chart {

    constructor(initX, height) {
        this.height = height;

        this.svg = d3.select("body").append("svg")
            .attr("width", 1300)
            .attr("height", 900);
        
        this.initialX = initX;
        this.timeArray = [];

        this.axes = {};
    }

    initializeAxes() {

        this.axes.y = d3.scaleLinear().domain([0, 1]).range([this.height, 0]);
        this.axes.yScale = d3.axisLeft().scale(this.axes.y).tickSize(10);

        this.axes.x = d3.scaleTime().domain([new Date(), new Date()]).range([0, 1200]); 
        this.axes.xScale = d3.axisBottom().scale(this.axes.x);

        this.axes.yAxisG = this.svg.append('g')
            .call(this.axes.yScale);

        this.axes.xAxisG = this.svg.append('g')
            .attr("transform", `translate(0, ${this.height})`)
            .call(this.axes.xScale);
    }

    renderXAxis() {
        this.axes.xAxisG.call(this.axes.xScale);
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

    updateXDomain() {
        this.axes.x.domain([this.timeArray[0] || new Date(), new Date()]);
    }

    getLine() {
        return d3.line()
            .x((d, i) => {return this.axes.x(this.timeArray[i])})
            .y((d, i) => {return this.height - d*this.height});
            // .curve(d3.curveCardinal);;
    }
} 