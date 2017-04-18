var webpack = require("webpack");
var path = require("path");
module.exports={
	entry:'./app.js',
	output:{
		path:path.resolve(__dirname,"./build"),
		filename:'bundle.js'
	}
	
}