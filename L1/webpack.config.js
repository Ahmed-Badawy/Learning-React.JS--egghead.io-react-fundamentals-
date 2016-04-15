module.exports = {
	entry: "./main.js", //main web component
	output:{ //file output after operations
		path: "./",
		filename:"index.js"
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: { //what to do with the file data
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel",
				query:{
					presets: ['es2015','react']
				}
			}
		]
	}
}