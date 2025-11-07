import {Server} from '@modelcontextprotocol/sdk/server/index.js';
// @ts-expect-error - JSON import with type assertion
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

