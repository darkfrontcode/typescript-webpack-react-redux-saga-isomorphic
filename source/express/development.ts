import { Application } 				from 'express'
import { Request as req } 			from 'express'
import { Response as res } 			from 'express'
import * as path 					from 'path'
import * as chalk 					from 'chalk'
import * as express 				from 'express'
import * as webpack 				from 'webpack'
// import * as react 				from 'react'
// import { renderToString }		from 'react-dom/server'
import webpack_config 				from '../webpack/development'
import * as webpack_dev_middleware 	from 'webpack-dev-middleware'
import * as webpack_hot_middleware 	from 'webpack-hot-middleware'

// import Provider 					from '../react/provider/provider'
// import friends					from '../resources/friends'


/* ==========================================================================
	-- Utils
========================================================================== */


const port 				= process.env.PORT || 80
const environment 		= process.env.NODE_ENV || 'development'
const log 				= console.log
const success 			= chalk.green


/* ==========================================================================
	-- Configs
========================================================================== */


const app : Application = express()
const webpack_compiler 	= webpack(webpack_config)

app.set('views', path.join(__dirname, '../pug'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '../../public')))


/* ==========================================================================
	-- Webpack and React Hot Loader
========================================================================== */


app.use(webpack_dev_middleware(webpack_compiler, <any>{
	stats: { colors: true },
	publicPath: webpack_config.output.publicPath,
	historyApiFallback: true,
	hot: true
}))
app.use(webpack_hot_middleware(webpack_compiler))


/* ==========================================================================
	-- Routes
========================================================================== */


app.get('*', (req:req, res:res) => res.render('template'))


/* ==========================================================================
	-- Server
========================================================================== */


app.listen(port, () => {
	log(success(`Express server listening on port ${port} in ${environment} mode`))
})