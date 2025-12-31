# BitterrootGG Website

This repository contains the static website for BitterrootGG, deployed via GitHub Pages at [bitterrootgg.com](https://bitterrootgg.com).

## Quick Deployment

To publish the website, follow these steps:

### Option 1: Merge to Main Branch (Recommended)
1. Merge this PR into the `main` branch
2. The GitHub Actions workflow will automatically deploy the site
3. The site will be live at https://bitterrootgg.com in a few minutes

### Option 2: Manual Workflow Trigger
1. Go to the [Actions tab](https://github.com/BitterrootGG/BGG-Website/actions)
2. Select "Deploy static content to Pages" workflow
3. Click "Run workflow" and select the `main` branch
4. The site will deploy automatically

### First-Time Setup

If this is the first deployment, ensure GitHub Pages is configured:

1. Go to repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Save the settings

The website will be available at https://bitterrootgg.com (as configured in the CNAME file).

## Local Development

To preview the site locally, simply open `index.html` in your web browser.

## File Structure

- `index.html` - Main website page
- `CNAME` - Custom domain configuration for GitHub Pages
- `.github/workflows/static.yml` - GitHub Actions workflow for deployment
