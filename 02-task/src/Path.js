class Path {
    constructor(iDelay) {
        this.delay = iDelay;
        this.data = [];
    }

    initPath() {
        var path = this.svg.append('path')
            .attr('fill', 'none')
            .attr('stroke-width', '2')
            // .attr('d', line(this.dataArray));
            
        return path;
    }

    updatePath(path, value) {
        // console.log("render Path");
        this.data.push(value);
        this.timeArray.push(new Date());

        var line = d3.line()
            .x((d, i) => {return this.startXMargin + this.x(this.timeArray[i])})
            .y((d, i) => {return 800 + this.startYMargin - d*800});
    
        this.x.domain([this.startDate, new Date()]);
        path.transition()
            .duration(1000)///NOT 1000
            .ease(d3.easeLinear)
            .attr("d", line(this.data));
    }
}