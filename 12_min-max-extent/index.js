//select svg container first
const svg = d3.select('svg');

d3.json('menu.json').then(data => {


const y =d3.scaleLinear()
.domain([0,d3.max  (data, d => d.orders)])
.range([0,500]);

// const max = d3.max  (data, d => d.orders);
// const min = d3.min (data, d => d.orders);
// const extent = d3.extent (data, d => d.orders);

// console.log(max, min)
// console.log(extent)


//join the data to rects
const rects = svg.selectAll('rect')
.data(data)

//give attributes to the first element in dom
rects.attr('width', 50)
.attr('height', d=> y(d.orders))
.attr('fill', 'orange')
.attr('x', (d,i) => i*70);

rects.enter()
.append('rect')
.attr('width', 50)
.attr('height', d=> y(d.orders))
.attr('fill', 'orange')
.attr('x', (d,i) => i*70);


})