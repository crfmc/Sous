require('esbuild').buildSync({
    entryPoints: {
        hydrate: './src/hydrate.js',
        App2Client: '../server/scripts/components/App2.jsx',
        AppClient: '../server/scripts/App.jsx',
    },
    bundle: true,
    minify: false,
    sourcemap: true,
    outdir: 'public/js',
    platform: "node",
    jsxFactory: "h",
    jsxFragment: "Fragment",
    allowOverwrite: true,
    format: "esm" // Loads the app entry as an ESM file
});