module.exports = {
	entry: "./index.js",
	output:{
		filename:"./bundle.js"
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_componets)/,
				loader: "babel",
				query:{
					presets: ['es2015','react']
				}
			}
		]
	}
}