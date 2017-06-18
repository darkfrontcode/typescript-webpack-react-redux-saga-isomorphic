import * as path 				from 'path'
import * as webpack 			from 'webpack'
import * as HtmlWebpackPlugin 	from 'html-webpack-plugin'

export default {

	devtool: 'cheap-module-source-map',

	entry: [

		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		'react-hot-loader/patch',
		path.resolve(__dirname, '../react/index')

	],

	output: {

		path: path.join(__dirname, '../../public'),
		publicPath: 'http://localhost:80/',
		filename: "[name].js",

	},

	resolve: {

		extensions: ['.ts', '.tsx']

	},

	module: {

		loaders: [

			{
				test: /\.(ts|tsx)$/,
				loader: ['react-hot-loader/webpack', 'ts-loader']
			}

		]

	},

	plugins: [

		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			environment: process.env.NODE_ENV || 'development',
			template: path.join(__dirname, "../pug/index.pug"),
			filename: 'index.html',
			inject: 'body'
		})

	],

	devServer: {

		hot: true,
		historyApiFallback: true,
		stats: 'minimal'

	}

}