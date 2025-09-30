#!/bin/bash

STATIC_FOLDER=${WGER_STATIC_FOLDER:-../server/wger/core/static/react}

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

if [ -d "$STATIC_FOLDER" ]; then
    cp build/main.js $STATIC_FOLDER/main.js
    cp build/main.js.map $STATIC_FOLDER/main.js.map
    cp build/assets/index-*.css $STATIC_FOLDER/main.css
    cp -r build/locales $STATIC_FOLDER/
    cp -r build/muscles $STATIC_FOLDER/
    echo -e "${GREEN}*** SUCCESS ***: Build files copied to django static folder: ${STATIC_FOLDER} ${NC}"
else
  echo -e "${RED}*** ERROR ***: Django static folder ${STATIC_FOLDER} not found"
  echo -e "Build files could not be copied${NC}"
fi