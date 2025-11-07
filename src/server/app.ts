import {Server} from '@modelcontextprotocol/sdk/server/index.js';
// JSON import using ECMAScript import attributes (newer than resolveJsonModule)
// @ts-expect-error - TS doesn't fully support import attributes yet
import packageJson from '../../package.json' with { type: 'json' };
import {AppleDevDocsClient} from '../apple-client.js';
import {ServerState} from './state.js';
import {registerTools} from './tools.js';

export const createServer = () => {
	const server = new Server(
		{
			name: 'apple-dev-docs-mcp',
			version: packageJson.version,
		},
		{
			capabilities: {
				tools: {},
			},
		},
	);

	const client = new AppleDevDocsClient();
	const state = new ServerState();

	registerTools(server, {client, state});

	return server;
};

