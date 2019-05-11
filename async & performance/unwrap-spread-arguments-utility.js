function spread(fn) {
	return Function.apply.bind( fn, null );
}

