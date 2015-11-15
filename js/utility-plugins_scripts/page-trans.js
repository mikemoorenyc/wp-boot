
function theHistory() {

  var $document = $(document);

  if (!History.enabled) {

      return false;
  }

  var root = History.getRootUrl();

  $.expr.filters.internal = function (elem) {
      return (elem.hostname == window.location.hostname && /(\/|\.html)$/i.test(elem.pathname)) || false;
  };

  function find_all($html, selector) {
      return $html.filter(selector).add($html.find(selector));
  }

  function parse_html(html) {
      return $($.parseHTML(html, document, true));
  }

  function parse_response(html) {
      var
          head = /<head[^>]*>([\s\S]+)<\/head>/.exec(html),
          body = /<body[^>]*>([\s\S]+)<\/body>/.exec(html),

          $head = head ? parse_html(head[1]) : $(),
          $body = body ? parse_html(body[1]) : $(),

          title = $.trim(find_all($head, 'title').last().html()),
          $content = $.trim(find_all($body, '#ajax-catcher').first().html());
          description = $.trim(find_all($head, 'meta[name="description"]').last().attr('content'));

      return {
          'title': title,
          '$content': $content,
          'description': description
      }
  }

  $document.ready(function () {
      $document.on('click', 'a.internal', function (event) {
        if($('html').hasClass('__page-loading') == true) {
          return false;
        }
        $('html').removeClass('__menu-opened').addClass('__menu-closed');

          if (event.which == 2 || event.ctrlKey || event.metaKey) {
              return true;
          }

          History.pushState(null, null, $(this).attr('href'));
          event.preventDefault();

          return false;
      });
  });

  $(window).on('statechange', function () {

      //INITIATE LOADING ANIMATION

      $('html').addClass("__page-loading");

      //$('html').addClass('__mobile-nav-closed').removeClass('__mobile-nav-opened');

      var loading = true;







/*
      $('.page-content').velocity({opacity:0}, {
        duration: ts*1.5,
        complete: function(){
          runner();
        }
      });
*/
      var thenext = History.getState().url,
       therel = thenext.replace(root, '/');


      $('title').last().html(pageTitle);


//      $("html").velocity("scroll", { offset: '0px', mobileHA: false});
      function runner(){
        var
            url = History.getState().url,
            rel = url.replace(root, '/');

        $.get(rel).done(function (date) {
            loading = false;
            var response = parse_response(date);

            if (!response.$content.length) {
                document.location.href = url;

                return false;
            }


            var newStuff = response.$content;




            if (response.title.length) {
                $('title').last().html(response.title);
                $('meta[name="description"]').attr('content', response.description);
            }

            //NEW LOAD



            var newSlug = $(newStuff).data('slug');

            //var pinAssemblage = $(newStuff).find('#top-header');

            $('.page-content').empty();
            $('.page-content').html($(newStuff).find('.page-content').html());
            //$('.page-content').velocity({opacity:1}, {duration: ts*1.5});
            pageLoader(newSlug, pinAssemblage);

            $("html").removeClass('__page-loading');


        }).fail(function () {
          console.log('fail');
            document.location.href = url;

            return false;
        });
      }


  });
}


function pageReady() {

}
