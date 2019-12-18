const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname+'/webpack-configurations/babel-example/dist/js'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
    console.log('path html ---->', path.resolve(__dirname, '/webpack-configurations/babel-example/dist/index.html') )
  res.sendFile(path.resolve(__dirname, '/webpack-configurations/babel-example/dist/index.html'));
});

app.listen(port);