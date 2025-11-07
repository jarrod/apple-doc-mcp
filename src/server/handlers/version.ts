// @ts-expect-error - JSON import with type assertion
import packageJson from '../../../package.json' with { type: 'json' };

export const buildVersionHandler = () => async () => ({
	content: [
		{
			type: 'text' as const,
			text: `Apple Doc MCP Server Version Information:

📦 Package Version: ${packageJson.version}
🏷️  Server Name: ${packageJson.name}
📝 Description: ${packageJson.description}
👤 Author: ${packageJson.author}
🔗 Repository: ${packageJson.repository?.url ?? 'N/A'}

The server version now dynamically reads from package.json instead of being hardcoded.`,
		},
	],
});
