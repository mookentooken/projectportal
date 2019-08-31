class Element {

    // Constructor.
    constructor(currentTemp, heatConstant) {
        this.currentTemp = currentTemp;
        this.heatConstant = heatConstant;
    }


    // Draw rectangle element.
    drawElement(width, height) {

        // Declare colour.
        var blue = 255;
        var colour = "fill:rgb(0,0,"+blue+")";

        // Create svg element.
        var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg1.setAttribute("width", 56);
        svg1.setAttribute("height", 56);

        // Create rectangle shape.
        var rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rectangle.setAttribute("width", width - 1);
        rectangle.setAttribute("height", height - 1);
        rectangle.setAttribute("style", colour);

        // Attach shape to svg1(canvas type thing).
        svg1.appendChild(rectangle);

        // Connect shape to html div.
        document.getElementById("elements").appendChild(svg1);

    }

}

for (i = 0; i < screen.height; i++) {
        const element = new Element();
        element.drawElement(55, 55);
}

