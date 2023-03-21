import { absurdWebBackend } from "@kikko-land/absurd-web-backend";

// @ts-expect-error
import sqlWasmUrl from "@kikko-land/sql.js/dist/sql-wasm.wasm";
import { IInitDbClientConfig, migrationsPlugin, reactiveQueriesPlugin } from "@kikko-land/react";

export { sqlWasmUrl };

export const config: IInitDbClientConfig = {
	dbName: "db-name",
	dbBackend: absurdWebBackend({
		wasmUrl: sqlWasmUrl,
	}),
	plugins: [migrationsPlugin({ migrations: [] }), reactiveQueriesPlugin()],
};
