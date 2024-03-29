const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const UnminifiedWebpackPlugin = require("unminified-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	devtool: "source-map",
	/* entry: {
		main: "./dist/studioled.umd.min.js",
	}, */
	output: {
		filename: "studioled.umd.min.js",
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
	plugins: [new UnminifiedWebpackPlugin()],
});
