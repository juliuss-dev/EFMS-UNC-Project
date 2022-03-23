//life tells if we are in the development or in production
//we are not in live thats why it is false
const LIVE = false;

if(LIVE){
    module.exports = require('./prod.js')
}
//it will run because we stated that the live will be false
else{
    module.exports = require('./dev.js')
}