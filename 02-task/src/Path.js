class Path {
    constructor(pathSelection, lineFunction) {
        this.data = [];
        this.pathSelection = pathSelection;
        this.line = lineFunction;
    }

    render() {
        // var t = d3.transition()
        //     .duration(1000)
        //     .ease(d3.easeLinear);
    
        this.pathSelection
            // .transition(t)
            .attr("d", this.line(this.data))
        ;
    }

    addData(value) {
        this.data.push(value);
    }

    changeColor(color) {
        this.pathSelection.attr('stroke', color);
    }

    hide() {
        this.pathSelection.style("opacity", 0);
    }

    makeVisible() {
        this.pathSelection.style("opacity", 1);
    }
}


    // interruptTransition() {

    //     this.pathSelection.selectAll("*").interrupt();interrupt()
    //     ;
    // }