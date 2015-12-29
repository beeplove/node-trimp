# node-trimp
Training Impulse (trimp) based on heart rate, which often referred as TRIMP^exp.

# what is trimp?
'training impulse' (TRIMP) is a method to quantify training load that can be used in various endurance sports, such as running, swimming, cycling.

# code snippet to use trimp

```javascript
var Trimp = require('trimp')({sex: 'male', rest: 55, max: 194});
var hr = 135;
var duration = 60; // minutes
var trimp = Trimp.calcuate(hr, duration);
console.log("Total TRIMP for this workout is: " + trimp);
```

