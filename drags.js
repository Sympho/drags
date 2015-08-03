/*
 * Drags 0.0.1
 * http://azim.com.ua/
 * MIT license
 */
 ;(function($){
    $.fn.drags = function() {
        $(this).on('mousedown',function(e){
            var self = {};
            self.that = $(this);
            self.shiftX = e.pageX-$(this).offset().left;
            self.shiftY = e.pageY-$(this).offset().top;
            self.endX = $(document).width()-$(this).outerWidth();
            self.endY = $(document).height()-$(this).outerHeight();
            $(this).addClass("drags_active");
            $(document).on('mousemove',toMoveBox);
            $('html,body').addClass('drags_time');
            function toMoveBox(e){
                var X = e.pageX - self.shiftX;
                var Y = e.pageY - self.shiftY;
                if(X<5) X = 0;
                if(Y<5) Y = 0;
                if(X>=self.endX) X = self.endX;
                if(Y>=self.endY) Y = self.endY;
                self.that.css({'left':X+'px','top':Y+'px'});
            };
            $(document).on('mouseup',function(){
                self.that.removeClass("drags_active");
                $(document).off('mousemove',toMoveBox);
                $('html,body').removeClass('drags_time');
            });
        });
    };
})(jQuery);