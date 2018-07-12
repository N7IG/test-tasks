class Path {
    constructor(svgLink, frequency) {
        // this.delay = iDelay;
        this.data = [];
        this.frequency = frequency;
        this.svgPath = svgLink;
    }

    render(value, line) {
        // console.log("render Path");
        this.data.push(value);
        // console.log("PUSH VALUE");
        // this.timeArray.push(new Date());

        // var line = d3.line()
        //     .x((d, i) => {return this.x(this.timeArray[i])})
        //     .y((d, i) => {return 800 + this.startYMargin - d*800}); //800
    
        // this.x.domain([this.startDate, new Date()]);
        // console.log('AZAZAZAZZAZAZAZAZAZA');
        this.svgPath.transition()
            .duration(this.frequency)
            .ease(d3.easeLinear)
            .attr("d", line(this.data));
    }
}