#!/bin/sh
gitbook build --output .. >> build.compile

echo "copy files start..." >> build.compile
cp -r _book/* ../site
echo "copy files finished" >> build.compile
