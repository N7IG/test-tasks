class Path {
    constructor(svgLink, frequency, line) {
        this.data = [];
        this.frequency = frequency;
        this.svgPath = svgLink;
        this.line = line;
    }

    render() {

        this.svgPath
            // .transition()
            // .duration(this.frequency)
            // .ease(d3.easeLinear)
            .attr("d", this.line(this.data));
    }

    updateData(value) {
        this.data.push(value);

        // this.svgPath
        //     // .transition()
        //     // .duration(this.frequency)
        //     // .ease(d3.easeLinear)
        //     .attr("d", this.line(this.data));
    }
}