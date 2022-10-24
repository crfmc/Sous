require('esbuild').buildSync({
    entryPoints: {
        App2Server: './scripts/components/App2.jsx',
        AppServer: './scripts/App.jsx',
    },
    bundle: true,
    minify: false,
    sourcemap: true,
    outdir: 'dist',
    platform: "node",
    jsxFactory: "h",
    jsxFragment: "Fragment",
    allowOverwrite: true,
    format: "cjs" // Loads the app entry as a CJS file
});