#! /usr/bin/env sh
cd srs/
pandoc -s -o ../srs.pdf --latex-engine xelatex --toc *.md
