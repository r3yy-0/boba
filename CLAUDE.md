# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a beginner-friendly Hello World website designed for learning web development fundamentals. The project demonstrates HTML structure, CSS styling, and interactive JavaScript in a simple, educational format.

## Key Architecture

- **Static Website**: Pure HTML/CSS/JavaScript with no build process or frameworks
- **Single Page Application**: All content on one page (`index.html`)
- **CSS Custom Properties**: Color theming system using CSS variables in `:root`
- **Vanilla JavaScript**: DOM manipulation with event listeners, no external libraries
- **Educational Structure**: Heavy commenting and clear naming for learning purposes

## File Structure

```
boba/
├── index.html      # Main webpage with semantic HTML structure
├── styles.css      # Complete styling with CSS custom properties
├── script.js       # Interactive functionality with educational comments
└── README.md       # Comprehensive learning guide for beginners
```

## Development Workflow

### Local Development
- Open `index.html` directly in any web browser (no server required)
- Make changes to files and refresh browser to see updates
- Use browser Developer Tools (F12) for debugging

### GitHub Pages Deployment
- Repository is configured for GitHub Pages deployment from main branch
- Site deploys automatically at: `https://username.github.io/boba`
- Enable in repository Settings > Pages > Deploy from main branch

### Customization Areas
- **Colors**: Modify CSS custom properties in `:root` selector
- **Content**: Update text in HTML without breaking structure
- **Interactivity**: Extend JavaScript functionality in `script.js`

## Educational Context

This project is designed for parent-child coding collaboration with:
- Beginner-friendly code structure and extensive comments
- Progressive difficulty suggestions in README.md
- GitHub workflow examples for learning version control
- Interactive elements that demonstrate JavaScript concepts

When making changes, preserve the educational nature and clear commenting style that makes the code accessible to beginners.