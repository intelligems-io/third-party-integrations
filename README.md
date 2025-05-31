# @intelligems/third-party-integrations

A TypeScript library for managing third-party integrations in the Intelligems ecosystem. This package provides tools and utilities for seamless integration with various third-party services and platforms.

## Installation

```bash
yarn add @intelligems/third-party-integrations
```

## Features

- **Candy Rack Integration**: Tools and utilities for integrating with the Candy Rack platform
- **iFrame Messenger**: Secure communication between parent and child iframes
- **TypeScript Support**: Full TypeScript support with type definitions

## Usage

### Candy Rack Integration

#### From Candy Rack to Intelligems

```typescript
import { CandyRackToIntelligemsMessenger } from '@intelligems/third-party-integrations/candy-rack';

// Initialize the messenger from Candy Rack to Intelligems
const messenger = new CandyRackToIntelligemsMessenger(
  'https://intelligems.io', // parent origin
  (event) => {
    // Handle messages from Intelligems
    console.log('Received message:', event);
  }
);
```

#### From Intelligems to Candy Rack

```typescript
import { IntelligemsToCandyRackMessenger } from '@intelligems/third-party-integrations/candy-rack';

// Initialize the messenger from Intelligems to Candy Rack
const messenger = new IntelligemsToCandyRackMessenger(
  '#candy-rack-iframe', // iframe selector
  'https://candy-rack.com' // target origin
);

// Send a message to Candy Rack
messenger.postMessage({
  type: 'INTELLIGEMS_TO_CANDY_RACK',
  data: {
    path: 'some.function.path',
    payload: { /* your data */ }
  }
});
```

### iFrame Messenger

```typescript
import { IframeMessenger } from '@intelligems/third-party-integrations/core/iframe-messenger';

// Initialize the iframe messenger
const messenger = new IframeMessenger({
  // configuration options
});i
```

## Development

### Prerequisites

- Node.js (Latest LTS version recommended)
- Yarn package manager

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```

### Available Scripts

- `yarn dev` - Start development mode with watch
- `yarn build:dev` - Build for development
- `yarn build:prod` - Build for production
- `yarn deploy` - Deploy to CDN

## Project Structure

```
src/
├── core/           # Core functionality and utilities
├── integrations/   # Third-party integration implementations
├── types/         # TypeScript type definitions
└── examples/      # Example implementations
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact the Intelligems team or open an issue in the repository. 