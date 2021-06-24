let mode = "development";

if (process.env.NODE_ENV === "production") {
	mode = "production";
}

module.exports = {
	mode: mode,

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
							],
						},
					},
				],
			},
		]
	},
	devtool: "source-map",
	devServer: {
		contentBase: './dist',
	}
}
