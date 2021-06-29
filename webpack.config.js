const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let target = 'web';

if (process.env.NODE_ENV === "production") {
	mode = "production";
	target = 'browserslist';
}

module.exports = {
	mode,
	target,

	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
						},
					},
				],
			},
		],
	},

	plugins: [new MiniCssExtractPlugin()],

	devtool: "source-map",
	devServer: {
		contentBase: "./dist",
		hot: true,
	},
};
