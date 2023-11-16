/* 
*  @author Hanna Zuellig, zuellig@internauta.ch
*  class importSVG enables you to load svg files in p5.js and preserve/manipulate their path informations

*  NOTE:: this class handles only SVG files that contain only <path> elements
*  SVG elements like <circle>, <rect> should be drawn in p5 using p5.js functions like rect, ellipse

*  you can extract all <path> elements and manipulate size, color, u.a. through p5 sketches 

---*/

class importSVG {
    constructor(ctx) {
        //this.data = data;
        this.shapes = [];
        this.isvalid;
        this.context = ctx;
        this.svgContent;
        this.paths = [];
        this.overallBoxSize={};
    }
    async loadSVGFile(filePath) {
        try {
            const response = await fetch(filePath);
            return await response.text();
        } catch (error) {
            console.error('Error loading SVG:', error);
        }
    }
    async extractPathsFromSVG(svgContent) {
        try {
            this.svgContent = svgContent;
            const parser = new DOMParser(svgContent);
            const doc = parser.parseFromString(svgContent, 'image/svg+xml');
            const pathElements = doc.querySelectorAll('path');


            pathElements.forEach(pathElement => {
                const pathData = pathElement.getAttribute('d');
                this.paths.push(pathData);


            });
            return this.paths;
        }
        catch (error) {
            console.error('Error extracting paths:', error);
        }



    }
    test(svgPath) {
        const svgPathPattern = /^([MmZzLlHhVvCcSsQqTtAa]|[\d.\s,-]+)+$/;

        return svgPathPattern.test(svgPath);
    }
    makesShapes() {
        for (let s = 0; s < this.paths.length; s++) {
            if(this.test(this.paths[s])){
                this.shapes.push(new Path2D(this.paths[s]));
            }
           
        }
    }
    makeShape() {
        return new Path2D(this.data);
    }
  //red 0-255, green 0-255, blue 0-255, alpha 0-255
    fill(r,g,b,a) {
        this.context.fillStyle = "rgba(" + r+ "," + g+ "," + b+ "," + a/255+ ")";
    }
  //red 0-255, green 0-255, blue 0-255, alpha 0-255
    stroke(r,g,b,a) {
        this.context.strokeStyle = "rgba(" + r+ "," + g+ "," + b+ "," + a/255+ ")";
    }
    strokeWidth(n) {
        this.context.lineWidth = n;
    }
    draw(p) {
        this.context.stroke(p);
        this.context.fill(p);
    }

    drawShapes(xpos, ypos) {
      this.context.translate(xpos, ypos);
        for (let s = 0; s < this.shapes.length; s++) {
           this.draw(this.shapes[s]);
        }
       this.context.translate(-1*xpos, -1*ypos);
    }
    getSVGBoundingBox() {
        const parser = new DOMParser();
        const doc = parser.parseFromString(this.svgContent, 'image/svg+xml');
        const svgElements = doc.querySelectorAll('svg > g *');
        const svgRoot = doc.querySelector('svg');
        this.overallBoxSize.width=parseInt(svgRoot.getAttribute('width'));
        this.overallBoxSize.height=parseInt(svgRoot.getAttribute('height'));
      
        
      }

}



function loadSVGFile(svgFilePath){

  shape = new importSVG(this.drawingContext);

  shape.loadSVGFile(svgFilePath)
    .then(svgContent => {
      shape.extractPathsFromSVG(svgContent);
      //console.log('Extracted paths:', shape.paths);
    })
    .then(paths => {
      shape.makesShapes();
      shape.getSVGBoundingBox();
      //console.log(shape.overallBoxSize)
      //console.log('Extracted shapes:', shape.shapes);
     
    })
    .catch(error => {
      console.error('Error:', error);
    });

  return shape;
    
}

