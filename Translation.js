const data = {
    name: 'Juan',
    age: 18,
    customer: true,
    address: [
     {
       street: 'Street 1',
       city: 'New York'
     },
     {
       street: 'Street 2',
       city: 'CY'
     }
    ]
   }

let count = 0;
for (x in data) {
    if (typeof Object.values(data)[count] === 'object') {
        console.log("address:");
        for (let i = 0; i < Object.values(data)[count].length; i++) {
            let crazy = Object.values(data)[count];
            console.log(`   street: ${crazy[i].street} \n   city: ${crazy[i].city}`);
        }       
    } else {
        console.log(`${x}: ${Object.values(data)[count]}`);
    }
    count++;
}  