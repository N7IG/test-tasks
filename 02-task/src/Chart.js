class Chart {

    constructor(initX, height) {
        // this.svg = d3.select("svg");

        this.height = height;

        this.svg = d3.select("body").append("svg")
            .attr("width", 1300)
            .attr("height", 900);
        
        this.initialX = initX;
        this.timeArray = [];

        this.axes = {};

        // this.x = null;
        // this.y = null;
        // this.xAxisG = null;
        // this.yAxisG = null;
        // this.xScale = null;
        // this.yScale = null;
    }

    initializeAxes() {

        // this.startXMargin = 0;
        // this.startYMargin = 0;//////////

        // this.initDate = new Date();
        // this.startDate = new Date(this.initDate.getTime() + 1000); //////NOT 1000 

        this.axes.y = d3.scaleLinear().domain([0, 1]).range([this.height, 0]);
        this.axes.yScale = d3.axisLeft().scale(this.axes.y).tickSize(10);

        this.axes.x = d3.scaleTime().domain([new Date(), new Date()]).range([0, 1200]); ///////start end
        this.axes.xScale = d3.axisBottom().scale(this.axes.x);

        this.axes.yAxisG = this.svg.append('g')
            // .attr("transform", `translate(${this.startXMargin}, ${this.startYMargin})`)
            .call(this.axes.yScale);

        this.axes.xAxisG = this.svg.append('g')
            .attr("transform", `translate(0, ${this.height})`)
            // .transition()
            // .duration(10)
            // .ease(d3.easeLinear)
            .call(this.axes.xScale);
    }

    renderXAxis() {
        // console.log("render Axis");
        this.axes.xAxisG.call(this.axes.xScale);
    }

    updateTime(){
        this.timeArray.push(new Date());
        // console.log("push time");
    };
    
    initializePath(color, strokeWidth) {
        // this.dataArray = [0, 0.5];
        // this.timeArray = [this.startDate, this.initDate];

        // this.dataArray = [];
        // this.timeArray = [];

        // var line = d3.line()
        //     .x((d, i) => {return this.startXMargin + this.x(this.timeArray[i])})
        //     .y((d, i) => {return 800 + this.startYMargin - d*800});

        var path = this.svg.append('path')
            .attr('fill', 'none')
            .attr('stroke', color)
            .attr('stroke-width', strokeWidth)
            // .attr('d', line(this.dataArray));
            

        return path;
    }

    updateXDomain() {
        this.axes.x.domain([this.timeArray[0] || new Date(), new Date()]);
    }

    getLine() {
        // var array = this.timeArray
        return d3.line()
            .x((d, i) => {return this.axes.x(this.timeArray[i])})
            .y((d, i) => {return this.height - d*this.height});
            // .curve(d3.curveCardinal);;
    }

    // renderPath(path, value) {
    //     // console.log("render Path");
    //     this.dataArray.push(value);
    //     this.timeArray.push(new Date());

    //     var line = d3.line()
    //         // .x((d, i) => {return this.startXMargin + this.x(this.timeArray[i])})
    //         .x((d, i) => {return this.x(this.timeArray[i])})
    //         .y((d, i) => {return 800 - d*800});
    
    //     this.x.domain([this.startDate, new Date()]);
    //     path.transition()
    //         .duration(1000)///NOT 1000
    //         .ease(d3.easeLinear)
    //         .attr("d", line(this.dataArray));
    // }
} 