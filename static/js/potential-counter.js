!(function(d) {
    'use strict';
    (d.fn.fusion_draw_circles = function() {
        var e = d(this);
        var r = e.children(".counter-circle").attr("data-countdown");
        var t = e.children(".counter-circle").attr("data-filledcolor");
        var i = e.children(".counter-circle").attr("data-unfilledcolor");
        var c = e.children(".counter-circle").attr("data-scale");
        var a = e.children(".counter-circle").attr("data-size");
        var n = e.children(".counter-circle").attr("data-speed");
        var o = e.children(".counter-circle").attr("data-strokesize");
        var s = e.children('.counter-circle').attr('data-percent-original');
        (c = c && d('body').css('color')),
        r
            ?
            (e.children('.counter-circle').attr('data-percent', 100),
                e.children('.counter-circle').easyPieChart({ barColor: t, trackColor: i, scaleColor: c, scaleLength: 5, lineCap: 'round', lineWidth: o, size: a, rotate: 0, animate: { duration: n, enabled: !0 } }),
                e.children('.counter-circle').data('easyPieChart').enableAnimation(),
                e.children('.counter-circle').data('easyPieChart').update(s)) :
            e.children('.counter-circle').easyPieChart({ barColor: t, trackColor: i, scaleColor: c, scaleLength: 5, lineCap: 'round', lineWidth: o, size: a, rotate: 0, animate: { duration: n, enabled: !0 } })
    }),
    (d.fn.fusion_recalc_circles = function(e) {
        var r;
        var t;
        var i = d(this)
        i.is(':hidden') ||
            (i.attr('data-currentsize', i.width()),
                i.removeAttr('style'),
                i.children().removeAttr('style'),
                (r = i.data('originalsize')),
                (t = i.parent().width()) < i.data('currentsize') ?
                (i.css({ width: t, height: t }),
                    i.find('.fusion-counter-circle').each(function() {
                        d(this).css({ width: t, height: t, 'font-size': (50 * t) / 220 }),
                            d(this).data('size', t),
                            d(this).data('strokesize', (t / 220) * 11),
                            e || d(this).data('animate', !1),
                            d(this).attr('data-size', t),
                            d(this).attr('data-strokesize', (t / 220) * 11)
                    })) :
                (i.css({ width: r, height: r }),
                    i.find('.fusion-counter-circle').each(function() {
                        d(this).css({ width: r, height: r, 'font-size': (50 * r) / 220 }),
                            d(this).data('size', r),
                            d(this).data('strokesize', (r / 220) * 11),
                            e || d(this).data('animate', !1),
                            d(this).attr('data-size', r),
                            d(this).attr('data-strokesize', (r / 220) * 11)
                    })))
    }),
    (d.fn.fusion_redraw_circles = function() {
        var e = d(this)
        e.is(':hidden') || (e.fusion_recalc_circles(!1), e.find('canvas').remove(), e.find('.counter-circle').removeData('easyPieChart'), e.fusion_draw_circles())
    })
})(jQuery),
jQuery(window).load(function() {
        jQuery('.counter-circle-wrapper')
            .not('.fusion-accordian .counter-circle-wrapper, .fusion-tabs .counter-circle-wrapper, .fusion-modal .counter-circle-wrapper')
            .each(function() {
                var e = getWaypointOffset(jQuery(this))
                jQuery(this).waypoint(
                    function() {
                        jQuery(this).fusion_recalc_circles(!0), jQuery(this).fusion_draw_circles()
                    }, { triggerOnce: !0, offset: e }
                )
            }),
            jQuery('.counter-circle-wrapper')
            .not('.fusion-modal .counter-circle-wrapper')
            .each(function() {
                var i = jQuery(window).width();
                var c = jQuery(window).height();
                var e = getWaypointOffset(jQuery(this))
                "top-out-of-view" === e && (e = getAdminbarHeight() + ('function' === typeof getStickyHeaderHeight ? getStickyHeaderHeight() : '0')),
                    jQuery(this).waypoint(
                        function() {
                            var t = jQuery(this)
                            jQuery(window).on('resize', function(e, r) {
                                (void 0 !== r && 'modal-open' === r) || ((jQuery(window).width() != i || (jQuery(window).width() != i && jQuery(window).height() != c)) && t.fusion_redraw_circles())
                            })
                        }, { triggerOnce: !0, offset: e }
                    )
            }),
            jQuery('.fusion-accordian .counter-circle-wrapper, .fusion-tabs .counter-circle-wrapper, .fusion-modal .counter-circle-wrapper').on('appear', function() {
                jQuery(this).fusion_draw_circles()
            })
    }),
    jQuery(window).on('fusion-element-render-fusion_counter_circle', function(e, r) {
        jQuery('div[data-cid="' + r + '"]').fusion_redraw_circles()
    })