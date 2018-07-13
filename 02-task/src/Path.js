class Path {
    constructor(svgLink, line) {
        this.data = [];
        this.svgPath = svgLink;
        this.line = line;
    }

    render() {
        this.svgPath.attr("d", this.line(this.data));
    }

    updateData(value) {
        this.data.push(value);
    }

    changeColor(color) {
        this.svgPath.attr('stroke', color);
    }
}