#!/bin/bash

set -e

echo "Building locus-ui..."
npm run build:ui

echo "Linking locus-ui globally..."
cd packages/locus-ui
npm link

echo "Linking locus-ui in docs app..."
cd ../../apps/docs
npm link locus-ui

echo "Starting docs app..."
npm run dev