!# /usr/bin/env sh
cd srs/
pandoc -o ../srs.pdf --latex-engine xelatex --toc --top-level-division=chapter *.md
