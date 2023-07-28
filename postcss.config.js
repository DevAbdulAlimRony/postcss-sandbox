//Install PostCSS using node package manager(npm) for javascript and nodejs
//Create All Base.. Folders and style.css, tailwind.config.js file manually
//Install Plugin and add it Here
//In package.json, write script - what will happen if we run postcss:watch command
// --watch flag ensures if any change in input, output file will be changed instantly

module.exports = {
    plugins: [
        require('postcss-import'),
    ]
}