!# /usr/bin/env sh
cd srs/
pandoc -o ../srs.pdf --latex-engine xelatex --toc -V documentclass=report --chapters *.md
