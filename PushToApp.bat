@ECHO OFF
git add *
set /p changes="Enter Changes: "
git commit im "%changes%"
git push master