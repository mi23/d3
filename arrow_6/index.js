const data= [
    {width: 200, height: 100, fill: 'purple'}

];

const svg = d3.select('svg');

const rect = svg.select('rect')
.data(data )
//on the same line but few parameters
.attr('width', (d, i, n)=> d.width)
//on the same line but one parameter
.attr('height', d => d.height)
//on several lines passing one parameter, keep curly braces
.attr('fill', d   => {
     d.fill});

console.log(rect)