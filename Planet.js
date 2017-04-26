///CONSTANTS
var MAXWIDTH = 400;
var MINWIDTH = 200;
///
function Planet(x, y){
    this.position = createVector(x, y);
    this.width = random(MAXWIDTH, MINWIDTH);
    this.color = [random(255), random(255), random(255)];
    this.rotation = 0;
    this.decor = [];

    this.initDecor = function(){
        var nbDecor = random(100, 250);
        for(var i = 0; i < nbDecor; i++){
            this.decor.push([random(3, 10), random(5, 20), random(0, TWO_PI)]);
        }
    };

    this.update = function(){
        this.rotation += 0.001
    }

    this.initDecor();
}
