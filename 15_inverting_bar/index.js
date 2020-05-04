//select svg container first
const svg = d3.select('.canvas')
.append('svg')
.attr('width', 600)
.attr('height', 600);
//create margins and dimensions
const margin = { top: 20, right: 50, bottom: 100, left: 100}
const graphWidth = 600 - margin.left-margin.right;
const graphHeight= 600 - margin.top - margin.bottom;

const graph = svg.append('g')
.attr('width', graphWidth)
.attr('height', graphHeight)
.attr('transform', `translate(${margin.left},${margin.top})`)

const xAxisGroup =graph.append('g')
//axis going down on the page
.attr('transform', `translate(0, ${graphHeight}) `);
const yAxisGroup =graph.append('g')

d3.json('menu.json').then(data => {


const y =d3.scaleLinear()
.domain([0,d3.max  (data, d => d.orders)])
.range([0,graphHeight]);

const x = d3.scaleBand()
.domain(data.map(item=>item.name))
.range([0,graphWidth])
.padding([0.2]);
//.paddingInner(0.2)
//.paddingOuter(0.2);

// const max = d3.max  (data, d => d.orders);
// const min = d3.min (data, d => d.orders);
// const extent = d3.extent (data, d => d.orders);

// console.log(max, min)
// console.log(extent)


//join the data to rects
const rects = graph.selectAll('rect')
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

// create and call axes. at the bottom as dependednt on data
const xAxis = d3.axisBottom(x)

const yAxis = d3.axisLeft(y);

xAxisGroup.call(xAxis);
yAxisGroup.call(yAxis);

})