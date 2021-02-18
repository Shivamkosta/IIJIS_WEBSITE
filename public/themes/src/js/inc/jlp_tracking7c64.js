/*###########################################################################
  Initialises mixpanel tracking for JLP.
  ########################################################################### */

(function ($, Drupal) {
  var initialized;

  function init(context, settings) {
    if (!initialized) {
      initialized = true;

      // Get current URL
      var url = window.location.href;
      // Get current page title
      var title = document.title;

      var tbc = $("#tbc");
      var gsa = $("#gsa");
      var subs = $("#subs");
      var btnPaper = $("#btn-paper");

      /* console.log(btnPaper);
      console.log(subs);
      console.log(gsa);
      console.log(tbc);
      console.log(url);
      console.log(title); */

      if (mixpanel) {
        mixpanel.track_links(tbc, "User clicks on Table of Content", {
          "Base url": url,
          "Page title": title,
        });
        mixpanel.track_links(gsa, "User clicks on get a sample article", {
          "Base url": url,
          "Page title": title,
        });
        mixpanel.track_links(
          subs,
          "User clicks on how to subscibe & buy option",
          {
            "Base url": url,
            "Page title": title,
          }
        );
        mixpanel.track_links(
          btnPaper,
          "User clicks on call for papers option",
          {
            "Base url": url,
            "Page title": title,
          }
        );
        mixpanel.track("Search", {
          "Search term": "{{ exposed.search_api_fulltext['#value'] }}",
          "Results found": "{{ total_items_count }}",
          "Page number": "{{ page_num }}"
        });
        // mixpanel.track("Find a Journal", {
        //   "Search term": "{{ exposed.searchfor['#value'] }}",
        //   "Results found": "{{ pager_total_items }}",
        //   "Page number": "{{ page_num }}",
        //   "Category": "{{ exposed.tid['#value'] }}"
        // });
      }
    }
  }

  Drupal.behaviors.jplTracking = {
    attach: function (context, settings) {
      init(context, settings);
    },
  };
})(jQuery, Drupal);
