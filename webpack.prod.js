const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	// devtool: 'inline-source-map',
	output: {
		filename: "scripts/[name]-[contenthash].bundle.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/[name]-[hash][ext]",
		clean: true,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name]-[contenthash].css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	optimization: {
		minimizer: [`...`, new CssMinimizerPlugin()],
	},
});
