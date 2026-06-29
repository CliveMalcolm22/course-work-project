/*
 create a simple function that
 when called it alerts
 you on the current time
 */

function timeAlert() {
    const date = new Date();
    alert('time stamp: ${date.toISostring()}');
}

/*
 call a function use the function name then
 ()-> brackets
 */
timeAlert(); 
//calling a function

/*
 Area of a triangle 
 0.5*L*w
 */
//base=undefined , height=undefined
function areaOfTriangle(base,height) {
    console.log('base, height is ${base} its type ${typeof base}');
    console.log('height is ${height} its type ${typeof height}');
    const area = 0.5 * base * height;
    console.log('For triangle with base &{base} and height ${height} area is ${area}');
}

areaOfTriangle(); 

    let base = ("20");
    areaOfTriangle(base);

    let height = ("30");
    areaOfTriangle(base, height1);

    let base1 = (50);
    let height1 =(60);
    areaOfTriangle(base1, height1);

    let base2 = "hello";
    let height2 = "true";
    areaOfTriangle(base2, height2);
    