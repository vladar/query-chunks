module.exports = {
  mode: "production",
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
      // enforce chunking:
      minSize: 1,
      minChunks: 2,
    },
  },
};
