const { FuseBox, QuantumPlugin } = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "src",
    target: "browser@es5",
    output: "dist/$name.js",
    shim: {
        'cross-fetch/polyfill': true
    },
    plugins: [
        QuantumPlugin({
            target: 'browser',
            uglify: false
        })
    ],
});

fuse
    .bundle("app")
    .instructions(" > index.js");

fuse.run();