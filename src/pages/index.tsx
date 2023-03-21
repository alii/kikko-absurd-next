import { sqlWasmUrl } from "../kikko";

export default function Home() {
	return (
		<div>
			<b>wasm file exists @</b> <code>{sqlWasmUrl}</code>
		</div>
	);
}
