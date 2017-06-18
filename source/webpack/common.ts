import path 				from 'path'
import webpack 				from 'webpack'
import HtmlWebpackPlugin 	from 'html-webpack-plugin'

export default = {

	entry: {
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		'main': path.join(__dirname, '../react/index')
	},

	resolve: {
		extensions: [ '.js', '.ts', 'tsx']
	},

	module: {
		exprContextCritical: false,

		rules: [
			{
				test: /\.ts$/,
				use: ['awesome-typescript-loader', 'react-hmre']
			},
			{
				test: /\.(png|jpe?g|gif|ico|css|svg)$/,
				use: 'file-loader?name=assets/[name].[ext]'
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/,
				use: 'file-loader?name=fonts/[name].[ext]'
			}
		]
	},

	plugins: [

		new webpack.optimize.CommonsChunkPlugin({
			name: ['main']
		}),

		new HtmlWebpackPlugin({
			environment: process.env.NODE_ENV || 'development',
			template: path.join(__dirname, "../pug/index.pug"),
			filename: 'index.html',
			inject: 'body'
		})
	]
};


============================

import path from 'path'
import webpack from 'webpack'

export default {

	devtool: 'eval-source-map',

	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		path.join(__dirname, '../react/main.js')
	],

	output: {
		path: path.join(__dirname, '../../public'),
		filename: "app.js"
	},

	resolve: {
		extensions: ['', '.js', '.styl']
	},

	module: {

		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query:{
					presets: ['react-hmre']
				}
			}
		]

	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]

}