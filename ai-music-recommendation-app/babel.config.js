module.exports = (api) => {
	api.cache(true);
	return {
		presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }]],
		plugins: ["@babel/plugin-syntax-flow"],
	};
};
