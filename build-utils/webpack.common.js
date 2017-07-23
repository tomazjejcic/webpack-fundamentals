// const path = require("path");
const commonPaths = require("./common-paths");

const config = {
    entry: "./src/",
    output: {
        filename: "bundle.js",
        path: commonPaths.outputPath
    }
};

module.exports = config;