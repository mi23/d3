//for graph and visualisation
const  dims = {height: 300, width: 300, radius: 150};
const cent = {x: (dims.width/2 +5) , Y: ( dims.height/2 + 5 )};

const svg = d3.select('.canvas')
.append('svg')
.attr('width', dims.width + 150)
.attr('height', dims.height +150);

const graph =svg.append('g')
.attr('transform',`translate(${cent.x},${cent.y})`);

//pie generator
const pie = d3.pie()
.sort(null)//re-sort data based on angles. we dont want that
.value(d=> d.cost); //angles will be based on the cost property

//dummy data
/* const angles = pie([
    {name: 'rent', cost: 500},
    {name: 'bills', cost: 300},
    {name: 'gaming', cost: 200},
]) */

//update function

const update = (data) => {
    console.log(data)
}


//connect to the database
//data array and firestoreS
var data = [];

db.collection('expenses').onSnapshot(res => {

    res.docChanges().forEach(change => {
        const doc = { ...change.doc.data(), id: change.doc.id};
        switch (change.type) {
            case 'added':
                data.push(doc);
                break;
            case 'modified':
                const index = data.findIndex(item => item.id ==doc.id);
                data[index] = doc;
                break;
            case 'removed':
                data = datya.filter(item => item.id !==doc.id);
                break;
                defoult:
                break;
            
        }

    })

    update (data)
})


//arc generator needs to know start and end values of angles
const arcPath = d3.arc()
.outerRadius(dims.radius)
.innerRadius(dims.radius / 2);

