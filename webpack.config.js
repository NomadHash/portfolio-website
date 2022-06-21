module.exports = function (env) {
  return require(`./webpack.${env.prod ? 'prod' : env.dev ? 'dev' : 'server'}.js`);
};
