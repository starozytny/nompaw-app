module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          "envName": "APP_ENV",
          "moduleName": "@env",
          "path": ".env",
          "safe": false,
          "allowUndefined": true,
          "verbose": false
        }
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', 'jsx', '.json'],
          alias: {
            "@screens": "./src/screens",
          }
        }
      ]
    ]
  };
};
