const data= [

    {width: 600, height: 300, fill: 'pink'},
    {width: 400, height: 200, fill: 'blue'},
    {width: 200, height: 100, fill: 'pink'},
    {width: 100, height: 60, fill: 'orange'},
    {width: 60, height: 30, fill: 'yellow'}

];

const svg = d3.select('svg');

//joins data to svg
const rects = svg.selectAll('rect')
.data(data )
//add attr to rects in the DOM
.attr('width', (d, i, n)=> d.width)
.attr('height', d => d.height)
.attr('fill', d => d.fill);

//append the enter selection to DOM
rects.enter()
    .append('rect')
//on the same line but few parameters
.attr('width', (d, i, n)=> d.width)
//on the same line but one parameter
.attr('height', d => d.height)
//on several lines passing one parameter, keep curly braces
.attr('fill', d => d.fill);

console.log(rect);