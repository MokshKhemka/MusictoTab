#!/bin/bash

# Exit on error
set -e

echo "Starting git repository cleanup..."

# Create backup
echo "Creating backup..."
BACKUP_DIR="../notetotabs-backup-$(date +%Y%m%d-%H%M%S)"
cp -r . "$BACKUP_DIR"
echo "Backup created at: $BACKUP_DIR"

# Remove large files from git history
echo "Removing large files from git history..."
git filter-branch --force --index-filter \
  "git rm -rf --cached --ignore-unmatch node_modules/ .next/" \
  --prune-empty --tag-name-filter cat -- --all

# Clean up and optimize repository
echo "Cleaning up repository..."
git reflog expire --expire=now --all
git gc --prune=now --aggressive

echo "Cleanup complete! You can now force push to GitHub with:"
echo "git push --force" 