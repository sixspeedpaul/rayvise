#!/bin/bash
# Automated deployment with version tracking for rayvise.ca
# Usage: ./deploy-version.sh "Brief description" "- Detail 1\n- Detail 2"
#
# Internal docs: ~/.openclaw/workspace/projects/rayvise-internal-docs/
# (kept private, not in Git repo)

set -e

DESCRIPTION="$1"
DETAILS="$2"

if [ -z "$DESCRIPTION" ]; then
  echo "❌ Error: Description required"
  echo "Usage: ./deploy-version.sh \"Brief description\" \"- Detail 1\n- Detail 2\""
  exit 1
fi

cd "$(dirname "$0")"

# Get current version
CURRENT_VERSION=$(git describe --tags --abbrev=0 2>/dev/null || echo "v0.0.0")

# Auto-increment patch version
IFS='.' read -r -a parts <<< "${CURRENT_VERSION#v}"
MAJOR="${parts[0]:-0}"
MINOR="${parts[1]:-0}"
PATCH="${parts[2]:-0}"
NEW_PATCH=$((PATCH + 1))
NEW_VERSION="v${MAJOR}.${MINOR}.${NEW_PATCH}"

echo "🔄 Deploying rayvise.ca..."
echo "📦 Current: $CURRENT_VERSION → New: $NEW_VERSION"
echo ""

# Commit changes on main
git add -A
git commit -m "[Raymond] $DESCRIPTION

$DETAILS

Requested by: Raymond via Telegram
Request date: $(date +%Y-%m-%d)" || echo "No changes to commit"

# Tag version
git tag -a "$NEW_VERSION" -m "$DESCRIPTION"

# Push to main
git push origin main --tags

echo "✅ Main branch updated and tagged"

# Build production
echo "🏗️  Building site..."
npm run build

# Deploy to gh-pages
echo "🚀 Deploying to GitHub Pages..."
git checkout gh-pages

# Preserve CNAME file if it exists
if [ -f CNAME ]; then
  cp CNAME /tmp/rayvise-CNAME
  CNAME_EXISTS=true
else
  CNAME_EXISTS=false
fi

# Clean old build
rm -rf assets *.html *.jpg *.png *.css *.js 2>/dev/null || true

# Copy new build (skip node_modules, dist, etc.)
cp -r dist/* .

# Restore CNAME file
if [ "$CNAME_EXISTS" = true ]; then
  mv /tmp/rayvise-CNAME CNAME
fi

# Remove dist directory from gh-pages
rm -rf dist

# Commit deployment
git add -A
git commit -m "Deploy $NEW_VERSION: $DESCRIPTION

$DETAILS"

# Push gh-pages
git push origin gh-pages

# Return to main
git checkout main

# Update VERSION.md
if [ ! -f VERSION.md ]; then
  echo "# Rayvise Website - Version History" > VERSION.md
  echo "" >> VERSION.md
fi

{
  echo "## $NEW_VERSION - $(date +%Y-%m-%d)"
  echo "**Type:** Content Update"
  echo -e "$DETAILS"
  echo "- Requested by: Raymond"
  echo ""
  cat VERSION.md
} > VERSION.md.tmp
mv VERSION.md.tmp VERSION.md

git add VERSION.md
git commit -m "Update VERSION.md for $NEW_VERSION" || echo "No VERSION.md changes"
git push origin main || echo "No VERSION.md to push"

echo ""
echo "════════════════════════════════════════"
echo "✅ DEPLOYMENT SUCCESSFUL"
echo "════════════════════════════════════════"
echo "📦 Version: $NEW_VERSION (was $CURRENT_VERSION)"
echo "🌐 Live: https://sixspeedpaul.github.io/rayvise/"
echo "📝 Changes: $DESCRIPTION"
echo ""
echo "⏪ Rollback: git reset --hard $CURRENT_VERSION"
echo "🔗 View: https://github.com/sixspeedpaul/rayvise/releases/tag/$NEW_VERSION"
echo "════════════════════════════════════════"
