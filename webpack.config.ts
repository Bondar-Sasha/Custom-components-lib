// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
      extensions: ['.ts', '.tsx', '.css'],
   },
   externals: {
      react: 'react',
      'react-dom': 'react-dom',
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: 'index.css',
      }),
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
         },
         {
            test: /\.tsx?$/,
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
}
