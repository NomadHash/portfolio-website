const path = require('path');

const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage', // 폴리필 사용 방식 지정
      corejs: {
        // 폴리필 버전 지정
        version: 2,
      },
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',
];

const plugins = [
  // '@emotion',
  // [
  //   '@babel/plugin-transform-runtime',
  //   {
  //     regenerator: true,
  //   },
  // ],
  // require.resolve('react-refresh/babel'),
  [
    'module-resolver',
    {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@myclassroom/src': path.resolve('src/'),
        '@api': path.resolve('src/api/'),
        '@components': path.resolve('src/components/'),
        '@containers': path.resolve('src/containers/'),
        '@lib': path.resolve('src/lib/'),
        '@organism': path.resolve('src/organism/'),
        '@store': path.resolve('src/store/'),
        '@shared': '../shared/src/',
      },
    },
  ],
];

module.exports = { presets, plugins };
