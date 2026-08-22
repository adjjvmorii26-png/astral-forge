#!/usr/bin/env bash
# Astral Forge boot sequence

set -e
cd "$(dirname "$0")"

echo "═══════════════════════════════════════"
echo "  ASTRAL FORGE — initiating lattice"
echo "═══════════════════════════════════════"

node astral_shell/shell.js
