
const less = require('less');





less.render(
    '.name {width: 1 + 1; height: 2*3;}', 
    (er, css) => console.log(css)
);
