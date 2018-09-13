//terminal syntax to install jQuery is: npm install -S jquery
//then rerun: webpack
// we install jquery and initialize jQuery in this page so all my jquery lives in here
// but not in the broswer
var $ = require('jquery');
$('h1').html("Jquery Live in here but not in broswer");
