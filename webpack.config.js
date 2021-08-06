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

	output: {
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

	plugins: [new MiniCssExtractPlugin()],

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	devtool: "source-map",
	devServer: {
		contentBase: "./dist",
		hot: true,
	},
};
