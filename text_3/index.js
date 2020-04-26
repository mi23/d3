const canvas = d3.select(".canvas");

const svg = canvas.append('svg')
svg.attr('height', 600)
svg.attr('width', 600);


//append shapes tosvg container
svg.append('rect')
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', '#47694f')
    .attr('x', 100)
    .attr('y',100);

svg.append('circle')
.attr('r', 50)
.attr('cx', 300)
.attr('cy', 70)
.attr('fill', 'pink');

svg.append('line')
.attr('x1', 370)
.attr('y1', 20)
.attr('x2', 400)
.attr('y2', 120)
.attr('stroke', '#475469');

svg.append('text')
.attr('x', 150)
.attr('y', 400)
.attr('fill','grey')
.text('Hello D3!')
.style('font-family', 'arial');