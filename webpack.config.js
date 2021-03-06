module.exports = {
	entry: './main.js',
	devtool: "source-map",
	output: {
		path: './',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 4444
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{ 
				test: /\.scss$/,
				loaders: ["style", "css?modules", "sass"]
    		},
    		{
		        test: /\.js$/,
		        loader: "source-map-loader"
		    }
		]
	}
}