(function(ngIframeResizer) {
    'use strict';

    angular
        .module(ngIframeResizer, [])
        .directive(ngIframeResizer, function () {
            return {
                restrict: 'A',
                scope: {
                    options: '='
                },
                link: function (scope, element) {
                    iFrameResize(scope.options || {}, element[0]);
                    
                    element.on('$destroy', function () {
                        element[0].iFrameResizer.close();
                    });
                }
            };
        });

}('ngIframeResizer'));
