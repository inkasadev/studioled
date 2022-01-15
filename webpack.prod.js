const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge(common, {
	mode: "production",
	devtool: "source-map",
	entry: {
		main: "./lib/index.js",
	},
	output: {
		filename: "studioled.umd.js",
		path: path.resolve(__dirname, "dist"),
		libraryTarget: "umd",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	optimization: {
		minimize: false,
	},
});
