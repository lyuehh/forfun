#! /bin/sh

# 本脚本用来替换所有html页面中的js和css还有首页链接的url
# /js/ -> /forfun/js/
# /css/ -> /forfun/css/
# /movie/ -> /forfun/movie/
# href="/" -> href="/forfun/"

# files=`find . -name "*.html"`
# 
# for i in $files; do
#   sed -i '' 's/\/js\//\/forfun\/js\//g' $i
#   sed -i '' 's/\/css\//\/forfun\/css\//g' $i
#   sed -i '' 's/\/movie\//\/forfun\/movie\//g' $i
#   sed -i '' 's/\/life\//\/forfun\/life\//g' $i
#   sed -i '' 's/href=\"\/\"/href=\"\/forfun\/\"/g' $i
# done
# 
# js_files=`find . -name "*.js"`
# 
# for i in $js_files; do
#   sed -i '' 's/\/js\//\/forfun\/js\//g' $i
# done

git checkout movie/2013/06/02/50-rich-movie-character.html
git checkout movie/2013/06/21/25-disaster-movies.html
git checkout movie/2013/06/24/101-us-uk-dramas.html
git checkout movie/2013/08/01/25-robots-movies.html
git checkout movie/2013/08/18/50-top-super-hero-movies.html
