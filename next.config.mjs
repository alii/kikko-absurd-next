// @ts-check

/** @type {import("next").NextConfig} */
const config = {
	webpack: config => {
		config.module.rules.push({
			test: /\.wasm$/,
			type: "asset/resource",
			generator: {
				filename: "static/chunks/[path][name].[hash][ext]",
			},
		});

		return config;
	},
};

export default config;
