# BGG-Website

A modern, responsive website for BitterrootGG built with GitHub, VS Code, and Copilot support.

## Features

- 🎨 Modern, responsive design
- 🚀 GitHub Pages deployment
- 💻 VS Code optimized development environment
- 🤖 GitHub Copilot ready
- ⚡ Fast and lightweight

## Getting Started

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Copilot](https://github.com/features/copilot) (optional but recommended)
- A modern web browser

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/BitterrootGG/BGG-Website.git
   cd BGG-Website
   ```

2. Open in VS Code:
   ```bash
   code .
   ```

3. Install recommended extensions when prompted (includes GitHub Copilot)

4. Open `index.html` with a local server:
   - Use VS Code Live Server extension (recommended)
   - Or open directly in your browser

### VS Code Configuration

The project includes optimized VS Code settings:

- **Auto-save**: Enabled on focus change
- **Format on save**: Enabled with Prettier
- **GitHub Copilot**: Pre-configured for all file types
- **Recommended extensions**: Automatically suggested on first open

### GitHub Copilot Support

This project is fully configured to work with GitHub Copilot:

- Enabled for HTML, CSS, and JavaScript
- Auto-completions enabled
- Chat support available

## Deployment

The website automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

You can also trigger deployment manually:
1. Go to the "Actions" tab in GitHub
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"

## Project Structure

```
BGG-Website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── .vscode/
│   ├── extensions.json         # Recommended VS Code extensions
│   ├── launch.json            # Debug configuration
│   └── settings.json          # VS Code settings
├── index.html                 # Main HTML file
├── styles.css                 # Stylesheet
├── script.js                  # JavaScript functionality
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, please open an issue in the GitHub repository.
