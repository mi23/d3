const data= [
    {width: 200, height: 100, fill: 'pink'},
    {width: 100, height: 60, fill: 'orange'},
    {width: 60, height: 30, fill: 'yellow'}

];

const svg = d3.select('svg');

const rect = svg.selectAll('rect')
.data(data )
//on the same line but few parameters
.attr('width', (d, i, n)=> d.width)
//on the same line but one parameter
.attr('height', d => d.height)
//on several lines passing one parameter, keep curly braces
.attr('fill', d => d.fill);

console.log(rect);