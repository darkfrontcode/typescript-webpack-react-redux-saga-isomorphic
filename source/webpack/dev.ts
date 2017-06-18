import path   from 'path'
import merge  from 'webpack-merge'
import commom from './common'

export default merge(commom, {

	devtool: "cheap-module-eval-source-map",

	output: {
		path: path.join(__dirname, '../../public'),
		publicPath: 'http://localhost:80/',
		filename: "[name].js",
		chunkFilename: '[id].chunk.js'
	},

	devServer: {
		historyApiFallback: true,
		stats: 'minimal'
	}

})