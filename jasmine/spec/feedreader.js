$(function() {

    describe('RSS Feeds', function() { //suite to check if feeds meet critera
        it('are defined', function() { // spec to check if i have feeds at all
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        it('has url', function() { // spec to make sure all feeds have url
          allFeeds.forEach(function(page) {
            expect(page.url).toBeDefined();
            expect(page.length).not.toBe(0);
          });
        });
        it('has name', function() { //spec to make sure all feeds have a name
          allFeeds.forEach(function(page) {
            expect(page.name).toBeDefined();
            expect(page.length).not.toBe(0);
          });
        });
    });

    describe('The menu', function() { // suite that checks all states of the menu
         it('hidden menu', function() { // initially expects menu to be hidden
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });
          it('visible menu', function() { //spec to change state of menu
            $('.menu-icon-link').click(); //makes menu visible
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
        });

//suite when loaded there needs to be at least a single entry
    describe('Initial Entries', function() {
         beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
         });

         it('has one entry', function() {
            var numberEntries = $('.entry');
            expect(numberEntries.length).not.toBe(0);
         });
	});

  describe('New Feed Selection', function() { //suite when loaded the content changes

        var oldURL, newURL;

        beforeEach(function(done) {
          loadFeed(0,function(){
            oldURL = $('.feed').html();
            loadFeed(1, done);
          });
        });

        it('loading new content', function(done) {
          newURL = $('.feed').html();
          expect(newURL).not.toBe(oldURL);
          done();
        });
  });
}());
