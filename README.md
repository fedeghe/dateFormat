[![Coverage Status](https://coveralls.io/repos/github/fedeghe/validatedate/badge.svg?branch=master)](https://coveralls.io/github/fedeghe/validatedate?branch=master)
![noai](https://www.jmvc.org/img/HumanCoded100.png?x=2)

# validatedate

Two straight functions both returning a boolean to check the validity of a string date against a format.


``` js
const {
    isValidDate,
    isValidFormat
} = require('validatedate'),

dateValidity= isValidDate(
    '12-13-2013',
    'MM-DD-YYYY',  // def= YYYY-MM-DD
    ['-'],         // def= ["/","-","."] 
    ['YYYY', 'YY', 'MM', 'DD'] // def= $defaults.pleaceholders$ 
),

formatValidity= isValidFormat(
    'MM-DD-YYYY',  // def= YYYY-MM-DD
    ['-'],         // def= ["/","-","."] 
    ['YYYY', 'YY', 'MM', 'DD'] // def= $defaults.pleaceholders$ 
);
```


23/5/2024