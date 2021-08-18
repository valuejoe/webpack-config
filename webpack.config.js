const path = require("path");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let target = 'web';
const plugins = [
	new CleanWebpackPlugin(),
	new MiniCssExtractPlugin(),
	new HtmlWebpackPlugin({
		template: "./src/index.html",
	}),
];

if (process.env.NODE_ENV === "production") {
	mode = "production";
	target = 'browserslist';
}

if (process.env.SERVE) {
	plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
	mode,
	target,

	entry: "./src/index.js",

	output: {
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "images/[hash][ext][query]",
	},

	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset",
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: '' },
					},
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
							presets: [
								"@babel/preset-env",
								["@babel/preset-react", { runtime: "automatic" }],
							],
						},
					},
				],
			},
		],
	},

	plugins,

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	devtool: "source-map",
	devServer: {
		contentBase: "./dist",
		hot: true,
	},
};
