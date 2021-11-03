var isScrolling = false;

        window.addEventListener("scroll", throttleScroll, false);

        function throttleScroll(e) {
            if (isScrolling == false) {
                requestAnimationFrame(function() {
                    scrolling(e);
                    isScrolling = false;
                });
            }
            isScrolling = true;
        } 

        document.addEventListener("DOMContentLoaded", scrolling, false);

        var listItems = document.querySelectorAll("#mainContent ol li");
        var firstBox = document.querySelector("#firstBox");
        var secondBox = document.querySelector("#secondBox");

        function scrolling(e) {
            const animatedElements = document.querySelectorAll('.animated-component');
            const animatedListItem = document.querySelectorAll('.animated-list > div, .animated-list > li');
            const components = [ ...animatedElements, ...animatedListItem];
            for (element of components) {
                if (isPartiallyVisible(element))
                    element.classList.add("respond");
            }
        }


        function isPartiallyVisible(el) {
            var elementBoundary = el.getBoundingClientRect();
            
            var top = elementBoundary.top;
            var bottom = elementBoundary.bottom;
            var height = elementBoundary.height;

            return ((top + height >= 0) && 
            (height + window.innerHeight >= bottom));
        }

        function isFullyVisible(el) {
            var elementBoundary = el.getBoundingClientRect();

            var top = elementBoundary.top;
            var bottom = elementBoundary.bottom;

            return ((top >= 0) && (bottom <= window.innerHeight));

        }