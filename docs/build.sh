#!/bin/sh
# gitbook install
gitbook build  >> build.compile

echo "copy files start..." >> build.compile
cp -r _book/* ../docs
echo "copy files finished" >> build.compile
