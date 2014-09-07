var fs   = require('fs');
var sass = require('node-sass');

/**
 * Compile scss file by node-sass
 * @param string src  : source scss file path
 * @param Array includePaths : scss include path array
 * @param string outputStyle : compiled css style [default: compressed]
 * @return string : compiled css string buffer
 */
function _compile(src, includePaths, outputStyle) {
    var buffer = fs.readFileSync(src);

    return sass.renderSync({
        data: buffer,
        includePaths: includePaths,
        outputStyle: outputStyle
    });
}

module.exports = {
    compile: _compile
};