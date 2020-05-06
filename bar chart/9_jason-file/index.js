//select svg container first
const svg = d3.select('svg');

d3.json('planets.json').then(data => {

    const circs = svg.selectAll('circle')
    .data(data);

    //add aatrs to cirs already in the DOM
    circs.attr('cy', 200)
    .attr('cx', d => d.distance)
    .attr('r', d => d.radius)
    .attr('fill', d=> d.fill);

    circs.enter()
    .append('circle')
    .attr('cy', 200)
    .attr('cx', d => d.distance)
    .attr('r', d => d.radius)
    .attr('fill', d=> d.fill);
    


})