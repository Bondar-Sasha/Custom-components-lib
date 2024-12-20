const path = require('path')

module.exports = {
   mode: 'production',
   entry: './src/index.ts',
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      clean: true,
   },
   resolve: {
      extensions: ['.ts', '.tsx', '.scss', '.css'],
   },
   externals: {
      react: 'react',
      'react-dom': 'react-dom',
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },

         {
            test: /\.(ts|tsx)?$/,
            use: [
               {
                  loader: 'ts-loader',
                  options: {
                     transpileOnly: false,
                     compilerOptions: {
                        declaration: true,
                     },
                  },
               },
            ],
            exclude: /node_modules/,
         },
      ],
   },
   plugins: [],
   devtool: 'source-map',
}
