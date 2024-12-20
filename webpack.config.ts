import { resolve } from 'path'
import webpack from 'webpack'

export default {
   mode: 'production',
   entry: './src/index.ts',
   output: {
      filename: 'index.js',
      path: resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      clean: true,
   },
   resolve: {
      extensions: ['.ts', '.tsx', '.css', '.scss'],
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
   optimization: {
      usedExports: true,
      splitChunks: {
         chunks: 'all',
      },
   },
} as webpack.Configuration
