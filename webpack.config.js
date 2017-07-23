// const path = require("path");
const commonConfig = require("./build-utils/webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = (env) => {
    console.log("ENV: ", env);

    const envConfig = require(`./build-utils/webpack.${env.env}.js`);

    return webpackMerge(commonConfig, envConfig);
}

// module.exports = {
//     entry: "./src/",
//     output: {
//         filename: "bundle.js",
//         path: path.join(__dirname, "dist")
//     }
// };

// module.exports = (env) => {
//     console.log("ENV: ", env);
//     return {
//         entry: "./src/",
//         output: {
//             filename: "bundle.js",
//             path: path.join(__dirname, "dist")
//         }
//     }
// }