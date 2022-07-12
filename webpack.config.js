module.exports = {
  mode: "production",
  optimization: {
    minimize: true,
    splitChunks: {
      /* Allows optimizations for both initial and async chunks. Defaults to 'async'. */
      /* Note: if your experience shows blank page with no errors in console, override this value
         in your experience's webpack config file to 'async' */
      chunks: "all",
      /* Chunk splitting options. */
      minSize: 1,
      // minChunks: 1,
      // maxAsyncRequests: 1,
      // maxInitialRequests: 1,
      cacheGroups: {
        // resolvers: {
        //   test: /resolvers/,
        //   chunks: "all",
        // },
      },
    },
  },
};
