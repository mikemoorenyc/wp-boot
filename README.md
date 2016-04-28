REMOVE IMAGEMIN (MAKE SURE SVG ARE COMPRESSED OTHER WAY)
CONVERT TO CLEAN CSS

quick startup for WP development on a local LAMP server

put in the themes folder.

name all templates 'template-whateverthetemplateisfor.php'

RUN NPM INSTALL FIRST
=====================


Steps to set up wordpress site
==============================
1. Run `sudo npm install` to install all the needed gulp modules.
1. In `gulpfile.js`, change the `buildDir` variable to the appropriate folder name. I usually do something like `<nameofproject>-build`.
4. Set up your variables for width breaks in `scss/variables.scss` & `js/site.js`.
5. Create your favicons.
6. In `style.css`, change the meta content up top so it relates to the site you're building.
6. If you want, make a new `screenshot.png`. Dimensions are `300x225`.
7. Run `gulp build` once to create the new build directory / theme.
8. Run `gulp watch` to live update.

Generator I use for favicons
----------------------------

**DONT DO THIS ANYMORE!** As of Wordpress 4.3, favicons will be handled through the wordpress site icon API. [more info](https://make.wordpress.org/core/2015/07/27/site-icon/)

~~I use [this generator](http://www.favicomatic.com/). Make sure you select "Every damn size, sir!" to get all the different sizes made.~~


Notes
-----


* When you're done and ready to go live, put your analytics in `footer.php` and also drop the `.htaccess` file into your site's `wp-content` directory.
