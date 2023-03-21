// Declares a type for importing .wasm files
declare module "*.wasm" {
	const url: string;
	export default url;
}
