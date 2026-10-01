# Deployment Guide

## Overview
This project is automatically deployed to Vercel via GitHub integration.

## Deployment Process
1. **GitHub Push**: Every push to the `main` branch triggers a new deployment.
2. **Vercel Build**: Vercel detects the changes and deploys the static HTML file.
3. **Live URL**: The site is accessible via the Vercel production domain.

## Manual Deployment (if needed)
If auto-deploy is disabled, you can deploy using the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Project Structure
- `Tour Management.html`: Main entry point and application logic.
