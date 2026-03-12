#!/bin/bash
# Rollback rayvise.ca to a previous version
# Usage: ./rollback.sh v1.0.3

set -e

TARGET_VERSION="$1"

if [ -z "$TARGET_VERSION" ]; then
  echo "❌ Error: Target version required"
  echo ""
  echo "Available versions:"
  git tag -l "v*" | sort -V | tail -10
  echo ""
  echo "Usage: ./rollback.sh v1.0.3"
  exit 1
fi

cd "$(dirname "$0")"

# Verify version exists
if ! git rev-parse "$TARGET_VERSION" >/dev/null 2>&1; then
  echo "❌ Error: Version $TARGET_VERSION not found"
  echo ""
  echo "Available versions:"
  git tag -l "v*" | sort -V | tail -10
  exit 1
fi

CURRENT_VERSION=$(git describe --tags --abbrev=0)

echo "⏪ Rolling back rayvise.ca..."
echo "📦 Current: $CURRENT_VERSION → Target: $TARGET_VERSION"
echo ""
read -p "Are you sure? (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "❌ Rollback cancelled"
  exit 1
fi

# Checkout main and reset to target
git checkout main
git reset --hard "$TARGET_VERSION"

# Create new rollback tag
IFS='.' read -r -a parts <<< "${CURRENT_VERSION#v}"
MAJOR="${parts[0]:-0}"
MINOR="${parts[1]:-0}"
PATCH="${parts[2]:-0}"
NEW_PATCH=$((PATCH + 1))
ROLLBACK_VERSION="v${MAJOR}.${MINOR}.${NEW_PATCH}"

git tag -a "$ROLLBACK_VERSION" -m "Rollback to $TARGET_VERSION"

# Force push main
git push origin main --force --tags

echo "✅ Main branch rolled back"

# Rebuild
echo "🏗️  Building from version $TARGET_VERSION..."
npm install 2>&1 | grep -v "npm warn" || true
npm run build

# Redeploy to gh-pages
echo "🚀 Redeploying to GitHub Pages..."
git checkout gh-pages
rm -rf assets *.html *.jpg *.png *.css *.js 2>/dev/null || true
cp -r dist/* .
rm -rf dist

git add -A
git commit -m "Rollback to $TARGET_VERSION (tagged as $ROLLBACK_VERSION)"
git push origin gh-pages --force

git checkout main

# Update VERSION.md
{
  echo "## $ROLLBACK_VERSION - $(date +%Y-%m-%d)"
  echo "**Type:** Rollback"
  echo "- Reverted to $TARGET_VERSION"
  echo "- Requested by: Raymond"
  echo ""
  cat VERSION.md
} > VERSION.md.tmp
mv VERSION.md.tmp VERSION.md

git add VERSION.md
git commit -m "Document rollback to $TARGET_VERSION"
git push origin main

echo ""
echo "════════════════════════════════════════"
echo "⏪ ROLLBACK SUCCESSFUL"
echo "════════════════════════════════════════"
echo "📦 Reverted to: $TARGET_VERSION"
echo "📦 Current version: $ROLLBACK_VERSION (rollback snapshot)"
echo "🌐 Live: https://sixspeedpaul.github.io/rayvise/"
echo ""
echo "✅ Site restored to state from version $TARGET_VERSION"
echo "════════════════════════════════════════"
