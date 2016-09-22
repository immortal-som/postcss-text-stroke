var postcss = require('postcss');

var pluginName = 'postcss-text-stroke';

module.exports = postcss.plugin(pluginName, function (opts) {
	opts = opts || {};

	return function (css) {
		css.walkDecls('text-stroke', function (decl) {
			var stroke = postcss.list.space(decl.value);
			var cssSize = stroke[0];
			var cssColor = stroke[1];
			var cssSmooth = stroke[2];
			var cssTextshadow = '';

			for (var w = cssSize*-1; w <= cssSize; w++) {
				for (var h = cssSize*-1; h <= cssSize; h++) {
					if (cssSmooth === 'smooth') {
			    		cssTextshadow += w + 'px ' + h + 'px 1px ' + cssColor + ',';
			    	} else {
			    		cssTextshadow += w + 'px ' + h + 'px 0 ' + cssColor + ',';
			    	}
			    }
			}

			cssTextshadow = cssTextshadow.slice(0, -1);

			decl.cloneBefore({
				prop: 'text-shadow', value: cssTextshadow
			});

			decl.remove();
		});
	};
});
