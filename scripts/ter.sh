#!/bin/sh

for file in diagrams/*.pu
do
  echo "$file"
  node scripts/plantuml.js "$file"
done

