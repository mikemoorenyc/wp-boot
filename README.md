quick startup for WP development on a local LAMP server

put in the themes folder and push into a directory and push into a seperate directory called BUILD.

name all templates 'template-whateverthetemplateisfor.php'

RUN NPM INSTALL FIRST
=====================


Steps to set up wordpress site
==============================

1. In `gulpfile.js`, change the `buildDir` variable to the appropriate folder name. I usually do something like `<nameofproject>-build`.
2. Site directory is generated in `footer.php` to be used in scripting.
3. In `header.php`, change the `<title>` copy to the name of the site you are building.
4. Set up your variables for width breaks in `less/variables.less` & `js/site.js`.
5. Create your favicons.
6. In `style.css`, change the content up at the top so it relates to the site you're building.
7. Run `gulp build` once to create the new build directory / theme.
8. Manually copy & paste `style.css` & `screenshot.png` into the new created build directory.

Generator I use for favicons
----------------------------

I use [this generator](http://www.favicomatic.com/). Make sure you select "Every damn size, sir!" to get all the different sizes made.


Notes
-----

* I usually keep my fonts in a `font` folder in the `assets` folder. The `imgmin` gulp task will fail if you keep those files in there, so put the fonts manually into the build folder and leave them out of the dev folder.
* When you're done and ready to go live, put your analytics in `footer.php` and also drop the `.htaccess` file into your site's `wp-content` directory.
