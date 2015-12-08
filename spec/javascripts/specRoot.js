const requireAll = (requireContext) => { requireContext.keys().map(requireContext); };
 
requireAll(require.context('./helpers/', true, /\.js$/));
requireAll(require.context('./jasmine_examples/', true, /[sS]pec\.js$/));
requireAll(require.context('./ana/', true, /[sS]pec\.js$/));
