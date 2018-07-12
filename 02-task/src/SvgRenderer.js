class SvgHandler {

    constructor() {
        // this.svg = d3.select("svg");

        this.svg = d3.select("body").append("svg")
            // .attr("width", 1200)
            // .attr("height", 800);

        this.x = null;
        this.y = null;
        this.xAxisG = null;
        this.yAxisG = null;
        this.xScale = null;
        this.yScale = null;
    }

    initializeAxes() {

        this.startXMargin = 0;
        this.startYMargin = 0;//////////

        this.initDate = new Date();
        this.startDate = new Date(this.initDate.getTime() + 1000); //////NOT 1000 

        this.y = d3.scaleLinear().domain([0, 1]).range([800, 0]);
        this.yScale = d3.axisLeft().scale(this.y).tickSize(10);

        this.x = d3.scaleTime().domain([this.initDate, this.startDate]).range([0, 1200]); ///////start end
        this.xScale = d3.axisBottom().scale(this.x);

        this.yAxisG = this.svg.append('g')
            .attr("transform", `translate(${this.startXMargin}, ${this.startYMargin})`)
            .call(this.yScale);

        this.xAxisG = this.svg.append('g')
            .attr("transform", `translate(${this.startXMargin}, ${800 + this.startYMargin})`)
            // .transition()
            // .duration(10)
            // .ease(d3.easeLinear)
            .call(this.xScale);
    }

    renderXAxis() {
        // console.log("render Axis");
        this.xAxisG.call(this.xScale);
    }
    
    initializePath(delay) {
        // this.dataArray = [0, 0.5];
        // this.timeArray = [this.startDate, this.initDate];

        this.dataArray = [];
        this.timeArray = [];

        // var line = d3.line()
        //     .x((d, i) => {return this.startXMargin + this.x(this.timeArray[i])})
        //     .y((d, i) => {return 800 + this.startYMargin - d*800});

        var path = this.svg.append('path')
            .attr('fill', 'none')
            .attr('stroke-width', '2')
            // .attr('d', line(this.dataArray));
            

        return path;
    }

    renderPath(path, value) {
        // console.log("render Path");
        this.dataArray.push(value);
        this.timeArray.push(new Date());

        var line = d3.line()
            .x((d, i) => {return this.startXMargin + this.x(this.timeArray[i])})
            .y((d, i) => {return 800 + this.startYMargin - d*800});
    
        this.x.domain([this.startDate, new Date()]);
        path.transition()
            .duration(1000)///NOT 1000
            .ease(d3.easeLinear)
            .attr("d", line(this.dataArray));
    }
} 