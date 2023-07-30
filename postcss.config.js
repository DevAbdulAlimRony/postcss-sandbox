 /*
|--------------------------------------------------------------------------
| POSTCSS Configure
|--------------------------------------------------------------------------
|
| 1. Install PostCSS using node package manager(npm) for javascript and nodejs
| 2. Create All Base.. Folders and style.css, tailwind.config.js file manually
| 3. Install Plugin and add it Here
| 4. In package.json, write script - what will happen if we run postcss:watch command
*/

module.exports = {
    plugins: [
        //To import file from our architecture- base, components, utilities
        require('postcss-import'),
        
        //Using Future CSS
        require('postcss-preset-env')({
            stage: 1,
        }),

        /*Minify the CSS, Written in Nodejs
        Combining gzip compression with minification leads to the best reduction in file size.
        we can divide cssnano's responsibilities between many plugins, each performing a small optimisation.*/
        require('cssnano'),

        require('autoprefixer'),

        require('precss'),

        require('postcss-assets')({
            loadPaths: ['imgs'],
        }),
    ]
}