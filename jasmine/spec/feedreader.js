$(function() {

    describe('RSS Feeds', function() {

        /* TestCase 1: checking URLs feed
         */
        it('The feeds are defined...', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TestCase 2: URL should not be empty or blank
         */
         it('The URL should not be empty or blank....', function() {
           allFeeds.forEach(function(feedreader) {
             var fed = feedreader.url;
             expect(fed).toBeDefined();

            expect(fed.length).not.toBe(0);

         });
         });
        /* TestCase 3: Name of URL should not be empty or blank
         */
         it('The name of URL should not be empty or blank ...', function() {
           allFeeds.forEach(function(feedreader) {
             var fed = feedreader.name;
            expect(fed.length).not.toBe(0);
            expect(fed).toBeDefined();

         });
         });
    });//End feed

        /* TestCase 4: The menu should be hidden by default
         */
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

    describe('The menu', function() {
      it('The menu item should  be hidden  ...', function() {
       var bodyConnten = $("body");
       var menu = $(".menu-icon-link");
         expect(bodyConnten.hasClass("menu-hidden")).toBe(true);

      });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('The menu icon is clicked ...', function() {
           var bodyConnten = $("body");
           var menu = $(".menu-icon-link");
           menu.trigger("click");
           expect(bodyConnten.hasClass("menu-hidden")).not.toBe(true);
           menu.trigger("click");
           expect(bodyConnten.hasClass("menu-hidden")).toBe(true);


          });



                  });//End menu
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         describe('Initial Entries should be created ...', function() {
           it('Ensures when the loadFeed is completed and loaded  ...', function() {
              beforEach(function(done){
          var  InitialFeed=  loadFeed(0 , done);
              });

            });


    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
            loadFeed(1, function() {
                var Afterloaded = $('.feed').html();
                expect(InitialFeed).not.toBe(Afterloaded);
                done();
            });


        });//Entries

}());
