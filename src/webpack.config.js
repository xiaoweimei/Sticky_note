const webpack = require('webpack')
const path = require('path')

module.exports = {
	mode: 'production',
	entry: path.join(__dirname,'js/app/index.js'),
	output: {
	  filename: 'index.js',
	  path: path.resolve(__dirname, '../public/js')
	},
	module:{
		rules:[{
			test:/\.less$/,
			use:[{
				loader:'style-loader'
			},{
				loader:'css-loader'
			},{
				loader:'less-loader'
			}]
		}]
	},
	resolve:{
		alias:{
			jquery:path.join(__dirname,'js/libs/jquery-3.4.1.min.js'),
			mod:path.join(__dirname,'js/mod'),
			less:path.join(__dirname,'less')
		}
	},
	plugins:[
		new webpack.ProvidePlugin({
			$:"jquery"
		}),
	]
}