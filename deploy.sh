#!/bin/bash

# Deploy script for Blessing Joseph Portfolio

echo "🚀 Deploying Blessing Joseph Portfolio..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project directory?"
    exit 1
fi

# Deploy to Vercel
echo "📦 Deploying to Vercel..."
vercel --prod --yes

echo "✅ Deployment complete!"
echo "🌐 Your site is live at: https://blessing-joseph.vercel.app"
