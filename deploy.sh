#!/bin/bash

# Simple deployment script
# Usage: ./deploy.sh "Your commit message"

if [ -z "$1" ]; then
  echo "Error: Please provide a commit message"
  echo "Usage: ./deploy.sh \"Your commit message\""
  exit 1
fi

echo "📦 Staging changes..."
git add .

echo "💾 Committing changes..."
git commit -m "$1

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

echo "🚀 Pushing to GitHub..."
git push

echo "✅ Done! Your site will update in ~1 minute at:"
echo "   https://devashish-bansal.vercel.app"
