Session.set("profLimit", 6);
let lastScrollTop = 0;

   $(window).scroll(function(event){
       // check if we are near the bottom of the page
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100){
        //  where are we on the page?
        let scrollTop= $(this).scrollTop();
        // check if we are scrolling down
        if (scrollTop > lastScrollTop){
            // yes we are scrolling down increase number of results
            Session.set("profLimit", Session.get("profLimit") + 3);
        }
            // Record the last scrollTop
            lastScrollTop = scrollTop;
    }
});