//to define one json array of 3 array objects having properties name and age sort this object according to age .if user requests sorted names in url then all names along with age according to descending order of age also display this sorted values 'sort page' and display json object on home page```javascript
const express = require('express');
const app = express();

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

app.get('/', (req, res) => {
  res.send(people);
});

app.get('/sort', (req, res) => {
  res.set('content-type','text/html');
  var des=people.sort((a, b) => b.age - a.age);
  // res.write(des)
  for(k of des){
    res.write(k.name + " " + k.age + "<br>"+JSON.stringify(des)+"<br>");
  }
  res.end();
});

app.listen(5000)