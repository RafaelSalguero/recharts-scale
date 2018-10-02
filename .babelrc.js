const BABEL_ENV = process.env.BABEL_ENV;

const plugins = [
  "@babel/plugin-proposal-export-default-from",
  "@babel/plugin-proposal-export-namespace-from",
  ["@babel/plugin-proposal-class-properties", { "loose": true }]
];

if (BABEL_ENV === 'umd') {
  plugins.push('@babel/plugin-external-helpers');
}

module.exports = {
  plugins: plugins,
  presets: [
    [ "@babel/preset-env", {
      modules: BABEL_ENV === 'commonjs' ? 'commonjs': false,
      targets: {
        "browsers": ["last 2 versions"]
      }
    } ]
  ],
};
