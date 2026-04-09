# Auto Deployment Setup

This project is configured for automatic deployment to Vercel on every push to `main`.

## Setup Instructions

### 1. Get Vercel Secrets

Run these commands in your terminal to get the required secrets:

```bash
# Get Vercel Token
vercel tokens create

# Get Project and Org IDs
cd /home/my_pc/blessingjoseph
cat .vercel/project.json
```

### 2. Add GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions → New repository secret

Add these 3 secrets:

| Secret Name | Value |
|-------------|-------|
| `VERCEL_TOKEN` | Your Vercel token from step 1 |
| `VERCEL_ORG_ID` | Your org ID from .vercel/project.json |
| `VERCEL_PROJECT_ID` | Your project ID from .vercel/project.json |

### 3. Manual Deploy Script

For manual deployment, use:

```bash
# Deploy to production
vercel --prod

# Or with confirmation
vercel --prod --yes
```

## GitHub Actions Workflow

The workflow file at `.github/workflows/deploy.yml` will:
1. Trigger on every push to `main`
2. Install dependencies
3. Build the project
4. Deploy to Vercel automatically

## Current Deployment URLs

- **Production:** https://blessing-joseph-7taybssir-callmeweirdos-projects.vercel.app
- **Alias:** https://blessing-joseph.vercel.app
