const { override, addLessLoader } = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');

module.exports = override(
  addReactRefresh(),
  addLessLoader({
    lessOptions: {
      modifyVars: {
        '@primary-color': '#389e0d',
      },
      javascriptEnabled: true,
    },
  }),
);
