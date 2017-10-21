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
    }); //End feed

    /* TestCase 4: The menu should be hidden by default
     */
    describe('The menu', function() {
        it('The menu item should  be hidden  ...', function() {
            var bodyConnten = $("body");
            var menu = $(".menu-icon-link");
            expect(bodyConnten.hasClass("menu-hidden")).toBe(true);

        });
        /* TestCase 5: The menu should display when clicked and does it hide when clicked again.
        */
        it('The menu icon is clicked ...', function() {
            var bodyConnten = $("body");
            var menu = $(".menu-icon-link");
            menu.trigger("click");
            expect(bodyConnten.hasClass("menu-hidden")).toBe(false);
            menu.trigger("click");
            expect(bodyConnten.hasClass("menu-hidden")).toBe(true);

        });

    }); //End menu

    /* TestCase 6: Initial Entries should be created and loaded
     */

describe('Ensures when the loadFeed is completed and loaded  ...', function() {
var Afterloaded;
var InitialFeed;


beforeEach(function (done){
        loadFeed(0, function(feed1) {
        InitialFeed = $('.feed').html();
        loadFeed(1, function(feed2) {
        Afterloaded = $('.feed').html();
            done();
        });
  });
      });
        it('Initial Entries should be created and loaded...', function() {
                expect(InitialFeed).not.toEqual(Afterloaded);
 // console.log("InitialFeed--"+InitialFeed);
 // console.log("Afterloaded--"+Afterloaded);

        });
}); //Entries


//end



}());
