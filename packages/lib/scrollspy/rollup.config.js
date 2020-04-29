
    import babel from 'rollup-plugin-babel';
    import minify from 'rollup-plugin-babel-minify';
    import { eslint } from 'rollup-plugin-eslint';
    const minifyConfig = { comments: false };

    export default [
      {
        input: 'src/index.js',
        output: {
          name: 'index',
          file: 'dist/index.min.js',
          format: 'umd'
        },
        interop: false,
        plugins: [
          eslint(),
          babel(),
          minify(minifyConfig),
        ]
      }
    ]
    
