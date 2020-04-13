#!/bin/bash

echo "=== START: postinstall script to fix path references to scully-routes.json ==="

echo "pwd"
pwd

echo "show files with the problem"
grep -ril "'/assets/scully-routes.json" node_modules/@scullyio/

echo "test file"
grep -ri "scully-routes.json" node_modules/@scullyio/ng-lib/esm5/lib/

find node_modules/@scullyio/ -type f -exec sed -i "s/\/assets\/scully-routes\.json/\.\/assets\/scully-routes\.json/g" {} ';'

echo "show files with the problem"
grep -ril "'/assets/scully-routes.json" node_modules/@scullyio/

echo "show files with fixed problem"
grep -ril "'./assets/scully-routes.json" node_modules/@scullyio/

echo "test file"
grep -ri "scully-routes.json" node_modules/@scullyio/ng-lib/esm5/lib/

echo "=== END: postinstall === "