/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        it('has url', function() {
          allFeeds.forEach(function(page) {
            expect(page.url).toBeDefined();
            expect(page.length).not.toBe(0);
          });
        });
        it('has name', function() {
          allFeeds.forEach(function(page) {
            expect(page.name).toBeDefined();
            expect(page.length).not.toBe(0);
          });
        });
    });

    describe('The menu', function() {
         it('hidden menu', function() {
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });
          it('visible menu', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
        });

    describe('Initial Entries', function() {
         beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
         });

         it('has one entry', function() {
            var numberEntries = $('.entry').length;
            expect(numberEntries).toBeGreaterThan(0);
         });
	});

  describe('New Feed Selection', function() {

        var oldURL;
        var newURL;

        beforeEach(function(done) {
          oldURL = $('.entry-link').attr('href');
          loadFeed(1, done);
        });

        it('loading new content', function(done) {
          newURL = $('.entry-link').attr('href');
          expect(newURL).not.toBe(oldURL);
          done();
        });
  });
}());
