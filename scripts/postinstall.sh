#!/bin/bash

echo "=== running postinstall script to fix path references to scully-routes.json ==="

find node_modules/@scullyio/ -type f -exec sed -i "s/\/assets\/scully-routes\.json/\.\/assets\/scully-routes\.json/g" {} ';'