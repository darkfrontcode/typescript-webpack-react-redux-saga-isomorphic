import * as path 				from 'path'
import * as webpack 			from 'webpack'
// import * as HtmlWebpackPlugin 	from 'html-webpack-plugin'

export default <any>{

	devtool: 'cheap-module-source-map',

	entry: [

		// 'react-hot-loader/patch',
		'webpack-dev-server/client',
		'webpack/hot/only-dev-server',
		path.resolve(__dirname, '../react/index')

	],

	output: {

		path: path.join(__dirname, '../../public'),
		publicPath: 'http://localhost:80/',
		filename: "[name].js",

	},

	resolve: {

		extensions: ['.js', '.ts', '.tsx']

	},

	module: {

		loaders: [

			{
				test: /\.(ts|tsx)$/,
				loader: ['awesome-typescript-loader']
				// loader: ['react-hot-loader/webpack', 'ts-loader']
			}

		]

	},

	plugins: [

		new webpack.HotModuleReplacementPlugin()

		// new HtmlWebpackPlugin({
		// 	environment: process.env.NODE_ENV || 'development',
		// 	template: path.join(__dirname, "../pug/template.pug"),
		// 	filename: 'index.html',
		// 	inject: 'body'
		// })

	]

}