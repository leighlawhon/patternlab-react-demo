module.exports = function() {
    return {
        componentsRootPath: './build/app/components',
        saveSourcemapPath: './build/app/patternlab-sourcemap.js',
        skipFiles: [
            '.ds_store',
            '/_',
            '/layouts'
        ],
        defaultOrder: [
            'atoms',
            'molecules',
            'organisms',
            'templates',
            'pages'
        ]
    }
}