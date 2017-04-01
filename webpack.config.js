var config = {
   entry: './main.js',
  
   output: {
      path:'/Users/verma/development/react',
      filename: 'index.js',
   },
  
   devServer: {
      inline: true,
      port: 8080
   },
  
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;