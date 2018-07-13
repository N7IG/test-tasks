class Path {
    constructor(svgLink, frequency) {
        this.data = [];
        this.frequency = frequency;
        this.svgPath = svgLink;
    }

    render(value, line) {
        this.data.push(value);

        this.svgPath.transition()
            .duration(this.frequency)
            .ease(d3.easeLinear)
            .attr("d", line(this.data));
    }
}