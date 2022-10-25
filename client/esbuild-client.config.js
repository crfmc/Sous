require('esbuild').buildSync({
    entryPoints: {
        hydrate: './src/hydrate.jsx',
        App2Client: '../server/scripts/components/App2.jsx',
        AppClient: '../server/scripts/App.jsx',
    },
    bundle: true,
    sourcemap: true,
    outdir: 'public/js',
    platform: "browser",
    jsxFactory: "h",
    jsxFragment: "Fragment",
    allowOverwrite: true,
    format: "esm" // Loads the app entry as an ESM file
});