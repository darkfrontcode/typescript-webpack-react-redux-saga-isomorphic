import { Application } 		from 'express'
import { Request as req } 	from 'express'
import { Response as res } 	from 'express'
import * as path 			from 'path'
import * as chalk 			from 'chalk'
import * as express 		from 'express'
import * as react 			from 'react'


/* ==========================================================================
	-- Utils
========================================================================== */


const port 			= process.env.PORT || 80
const environment 	= process.env.NODE_ENV || 'development'
const log 			= console.log
const success 		= chalk.green


/* ==========================================================================
	-- Configs
========================================================================== */


const app : Application = express()
app.set('views', path.join(__dirname, '../pug'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '../../public')))


/* ==========================================================================
	-- Routes
========================================================================== */


app.get('/', (req:req, res:res) => res.render('index'))


/* ==========================================================================
	-- Server
========================================================================== */


app.listen(port, () => {
	log(success(`Express server listening on port ${port} in ${environment} mode`))
})