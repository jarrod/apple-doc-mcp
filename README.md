# Apple Developer Documentation MCP Server

[![npm version](https://badge.fury.io/js/apple-doc-mcp-server.svg)](https://badge.fury.io/js/apple-doc-mcp-server)

MCP server providing seamless access to Apple Developer Documentation with smart search and wildcard support.

## Features

- **Real-time Search**: Get instant search results from the Apple Developer Documentation.
- **Wildcard Support**: Use wildcards in your queries for more flexible search.
- **Easy Integration**: Simple to set up and use with any MCP-compatible client.
- **Powered by Bun**: Fast, efficient, and can be compiled into a single executable.

## Prerequisites

- [Bun](https://bun.sh/) runtime

## Installation

You can install the server globally using Bun:

```bash
bun install -g apple-doc-mcp-server
```

## Usage

Once installed, you can start the server with the following command:

```bash
apple-doc-mcp-server
```

The server will start and be available for your AI coding agent to connect to.

## Development

### Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/jarrod/apple-doc-mcp.git
    cd apple-doc-mcp
    ```

2.  **Install dependencies**:
    ```bash
    bun install
    ```

### Running in Development

To run the server in development mode with hot-reloading:

```bash
bun dev
```

### Linting

To lint the code:

```bash
bun lint
```

To automatically fix linting issues:

```bash
bun lint:fix
```

### Build

To build the project for production:

```bash
bun build
```

This will create a production-ready build in the `dist` directory.

### Compile to Standalone Executable

To compile the server into a single standalone executable:

```bash
bun compile
```

The executable will be created in the `dist` directory. The name will be based on your OS and architecture (e.g., `apple-doc-mcp-server-darwin-arm64`).

## How it works

The server uses the `@modelcontextprotocol/sdk` to create an MCP server. It fetches data from the Apple Developer Documentation and provides it to any connected MCP client.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
