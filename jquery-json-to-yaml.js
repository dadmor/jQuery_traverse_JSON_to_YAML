function json_to_yaml(jsonObj){

	var gstr='---<br>';
	var prefix = 0;
	var pre='  ';
	var suf='<br>';

	function render_prefix(nr){

		var __prefix = '';
		for (var i = 0; i <= nr; i++) {
			__prefix += pre;
		}
		return __prefix;

	}
	var traverse = function(key, jsonObj) {

		if( jsonObj != null && typeof jsonObj == "object") {

			$.each(jsonObj, function(k,v) {

				if( v != null && typeof v == "object" ){
					gstr += render_prefix(prefix) + k + suf;
					prefix++;
					traverse(k, v);
					prefix--;
				} else{
					if(typeof v == "string"){
						gstr += render_prefix(prefix) +  k + ': \"' + v + '\"' + suf;
					}
					if(typeof v == "number"){
						gstr += render_prefix(prefix) + '- ' + v + suf;
					}
				}
			});
		}
	}

	traverse("",jsonObj);
	return gstr;
	
}
