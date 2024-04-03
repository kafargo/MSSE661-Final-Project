const express = require('express');
const app = express();

app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/src'));
app.use('/html', express.static(__dirname + '/public/html'));
app.use('/images', express.static(__dirname + '/public/images'));


app.listen(3001, function(){
    console.log('Server started running at http://localhost:%s', 3001);
});