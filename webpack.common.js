const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		vendor: "./src/vendor.js",
		main: "./src/index.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				type: "asset/resource",
			},
		],
	},
};
