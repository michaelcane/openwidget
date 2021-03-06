;
(function (a, b, c, d) {
    a.fn.openwidgets = function (e) {
        e = a.extend({}, a.fn.openwidgets.options, e);
        return this.each(function () {
            function jb(a) {
                if (w === true) {
                    a.parents(k).find(".openwidget-loader").stop(true, true).fadeIn(100).delay(x).fadeOut(100)
                }
            }

            function kb() {
                if (a("#openwidget-fullscreen-mode").length) {
                    var c = a(b).height();
                    var d = a("#openwidget-fullscreen-mode").find(k).children("header").height();
                    a("#openwidget-fullscreen-mode").find(k).children("div").height(c - d - z)
                }
            }

            function ob() {
                if (Y && m) {
                    var b = [];
                    f.find(k).each(function () {
                        var c = {};
                        c["id"] = a(this).attr("id");
                        c["style"] = a(this).attr("data-widget-attstyle");
                        c["title"] = a(this).children("header").children("h2").text();
                        c["hidden"] = a(this).is(":hidden") ? 1 : 0;
                        c["collapsed"] = a(this).hasClass("openwidget-collapsed") ? 1 : 0;
                        b.push(c)
                    });
                    var c = JSON.stringify({
                        widget: b
                    });
                    if (_ != c) {
                        localStorage.setItem(Z, c)
                    }
                }
            }

            function pb() {
                if (Y && m) {
                    var b = [];
                    f.find(l + ".sortable-grid").each(function () {
                        var c = [];
                        a(this).children(k).each(function () {
                            var b = {};
                            b["id"] = a(this).attr("id");
                            c.push(b)
                        });
                        var d = {
                            section: c
                        };
                        b.push(d)
                    });
                    var c = JSON.stringify({
                        grid: b
                    });
                    if (bb != c) {
                        localStorage.setItem(ab, c)
                    }
                }
            }
            var f = a(this);
            var g = f.attr("id");
            var h = ".openwidget-ctrls";
            var i = f.find(e.widgets);
            var j = f.find(e.widgets + " > header");
            var k = e.widgets;
            var l = e.grid;
            var m = e.localStorage;
            var n = e.deleteSettingsKey;
            var o = e.settingsKeyLabel;
            var p = e.deletePositionKey;
            var q = e.positionKeyLabel;
            var r = e.sortable;
            var s = e.editPlaceholder;
            var t = e.editSpeed;
            var u = e.buttonOrder;
            var v = e.buttonsHidden;
            var w = e.indicator;
            var x = e.indicatorTime;
            var y = e.toggleSpeed;
            var z = e.fullscreenDiff;
            var A = e.labelDelete;
            var B = e.deleteSpeed;
            var C = e.placeholderClass;
            var D = e.opacity;
            var E = e.dragHandle;
            var F = e.ajax;
            var G = e.loadingLabel;
            var H = e.timestampFormat;
            var I = e.timestampPlaceholder;
            var J = e.refreshButton;
            var K = e.refreshButtonClass;
            var L = e.labelError;
            var M = e.labelRefresh;
            var N = e.deleteClass;
            var O = e.toggleClass.split("|");
            var P = e.editClass.split("|");
            var Q = e.fullscreenClass.split("|");
            var R = e.customClass.split("|");
            var S = e.toggleButton;
            var T = e.customButton;
            var U = e.deleteButton;
            var V = e.editButton;
            var W = e.fullscreenButton;
            var X = e.rtl;
            var Y = !! function () {
                    var a, b = +(new Date);
                    try {
                        localStorage.setItem(b, b);
                        a = localStorage.getItem(b) == b;
                        localStorage.removeItem(b);
                        return a
                    } catch (c) {}
                }() && localStorage;
            if (Y && m) {
                var Z = "openwidgets_settings_" + location.pathname + "_" + g;
                var _ = localStorage.getItem(Z);
                var ab = "openwidgets_position_" + location.pathname + "_" + g;
                var bb = localStorage.getItem(ab)
            }
            if (!g.length) {
                alert("It looks like your using a class instead of an ID, dont do that!")
            }
            if (X === true) {
                a("body").addClass("rtl")
            }
            a(l).each(function () {
                if (a(this).children(k).length) {
                    a(this).addClass("sortable-grid")
                }
            });
            if ("ontouchstart" in b || b.DocumentTouch && c instanceof DocumentTouch) {
                var cb = "click tap"
            } else {
                var cb = "click"
            } if (Y && m && bb) {
                var db = JSON.parse(bb);
                for (var eb in db.grid) {
                    var fb = f.find(l + ".sortable-grid").eq(eb);
                    for (var gb in db.grid[eb].section) {
                        fb.append(a("#" + db.grid[eb].section[gb].id))
                    }
                }
            }
            if (Y && m && _) {
                var hb = JSON.parse(_);
                for (var eb in hb.widget) {
                    var ib = a("#" + hb.widget[eb].id);
                    if (hb.widget[eb].style) {
                        ib.addClass(hb.widget[eb].style).attr("data-widget-attstyle", "" + hb.widget[eb].style + "")
                    }
                    if (hb.widget[eb].hidden == 1) {
                        ib.hide(1)
                    } else {
                        ib.show(1).removeAttr("data-widget-hidden")
                    } if (hb.widget[eb].collapsed == 1) {
                        ib.addClass("openwidget-collapsed").children("div").hide(1)
                    }
                    if (ib.children("header").children("h2").text() != hb.widget[eb].title) {
                        ib.children("header").children("h2").text(hb.widget[eb].title)
                    }
                }
            }
            i.each(function () {
                var b = a(this).children("header");
                if (a(this).data("widget-hidden") === true) {
                    a(this).hide()
                }
                if (a(this).data("widget-collapsed") === true) {
                    a(this).addClass("openwidget-collapsed").children("div").hide()
                }
                if (a(this).data("widget-icon")) {
                    b.prepend('<span class="openwidget-icon"/>').children().addClass(a(this).data("widget-icon"))
                }
                if (T === true && a(this).data("widget-custombutton") === d) {
                    var c = '<a href="#" class="btn btn-mini button-icon openwidget-custom-btn"><span class="' + R[0] + '"></span></a>'
                } else {
                    c = ""
                } if (U === true && a(this).data("widget-deletebutton") === d) {
                    var e = '<a href="#" class="btn btn-mini button-icon openwidget-delete-btn"><span class="' + N + '"></span></a>'
                } else {
                    e = ""
                } if (V === true && a(this).data("widget-editbutton") === d) {
                    var f = '<a href="#" class="btn btn-mini button-icon openwidget-edit-btn"><span class="' + P[0] + '"></span></a>'
                } else {
                    f = ""
                } if (W === true && a(this).data("widget-fullscreenbutton") === d) {
                    var g = '<a href="#" class="btn btn-mini button-icon openwidget-fullscreen-btn"><span class="' + Q[0] + '"></span></a>'
                } else {
                    g = ""
                } if (S === true && a(this).data("widget-togglebutton") === d && !(a(this).data("widget-fullscreenbutton") === d)) {
                    if (a(this).data("widget-collapsed") === true || a(this).hasClass("openwidget-collapsed")) {
                        var h = O[1]
                    } else {
                        h = O[0]
                    }
                    var i = '<a href="#" class="btn btn-mini button-icon openwidget-toggle-btn"><span class="' + h + '"></span></a>'
                } else {
                    i = ""
                } if (J === true && a(this).data("widget-refreshbutton") != false && a(this).data("widget-load")) {
                    var j = '<a href="#" class="btn btn-mini button-icon openwidget-refresh-btn"><span class="' + K + '"></span></a>'
                } else {
                    j = ""
                }
                var k = u.replace(/%refresh%/g, j).replace(/%delete%/g, e).replace(/%custom%/g, c).replace(/%fullscreen%/g, g).replace(/%edit%/g, f).replace(/%toggle%/g, i);
                if (j != "" || e != "" || c != "" || g != "" || f != "" || i != "") {
                    b.append('<div class="openwidget-ctrls">' + k + "</div>")
                }
                if (r === true && a(this).data("widget-sortable") === d) {
                    a(this).addClass("openwidget-sortable")
                }
                if (a(this).find(s).length) {
                    a(this).find(s).find("input").val(b.children("h2").text())
                }
                a(this).attr("role", "widget").children("div").attr("role", "content").prev("header").attr("role", "heading").children("div").attr("role", "menu")
            });
            if (v === true) {
                a(h).hide();
                j.hover(function () {
                    a(this).children(h).stop(true, true).fadeTo(100, 1)
                }, function () {
                    a(this).children(h).stop(true, true).fadeTo(100, 0)
                })
            }
            j.append('<span class="openwidget-loader"/>');
            i.on(cb, ".openwidget-toggle-btn", function (b) {
                //alert(12);
                jb(a(this));
                if (a(this).parents(k).hasClass("openwidget-collapsed")) {
                    a(this).children().removeClass(O[1]).addClass(O[0]).parents(k).removeClass("openwidget-collapsed").children("div:first").slideDown(y, function () {
                        ob()
                    })
                } else {
                    a(this).children().removeClass(O[0]).addClass(O[1]).parents(k).addClass("openwidget-collapsed").children("div:first").slideUp(y, function () {
                        ob()
                    })
                } if (typeof e.onToggle == "function") {
                    e.onToggle.call(this)
                }
                b.preventDefault()
            });
            i.on(cb, ".openwidget-fullscreen-btn", function (b) {
                var c = a(this).parents(k);
                var d = c.children("div");
                jb(a(this));
                if (a("#openwidget-fullscreen-mode").length) {
                    a(".nooverflow").removeClass("nooverflow");
                    c.unwrap("<div>").children("div").removeAttr("style").end().find(".openwidget-fullscreen-btn").children().removeClass(Q[1]).addClass(Q[0]).parents(h).children("a").show();
                    if (d.hasClass("openwidget-visible")) {
                        d.hide().removeClass("openwidget-visible")
                    }
                } else {
                    a("body").addClass("nooverflow");
                    c.wrap('<div id="openwidget-fullscreen-mode"/>').parent().find(".openwidget-fullscreen-btn").children().removeClass(Q[0]).addClass(Q[1]).parents(h).children("a:not(.openwidget-fullscreen-btn)").hide();
                    if (d.is(":hidden")) {
                        d.show().addClass("openwidget-visible")
                    }
                }
                kb();
                if (typeof e.onFullscreen == "function") {
                    e.onFullscreen.call(this)
                }
                b.preventDefault()
            });
            a(b).resize(function () {
                kb()
            });
            i.on(cb, ".openwidget-edit-btn", function (b) {
                jb(a(this));
                if (a(this).parents(k).find(s).is(":visible")) {
                    a(this).children().removeClass(P[1]).addClass(P[0]).parents(k).find(s).slideUp(t, function () {
                        ob()
                    })
                } else {
                    a(this).children().removeClass(P[0]).addClass(P[1]).parents(k).find(s).slideDown(t)
                } if (typeof e.onEdit == "function") {
                    e.onEdit.call(this)
                }
                b.preventDefault()
            });
            a(s).find("input").keyup(function () {
                a(this).parents(k).children("header").children("h2").text(a(this).val())
            });
            i.on(cb, "[data-widget-setstyle]", function (b) {
                var c = a(this).data("widget-setstyle");
                var d = "";
                a(this).parents(s).find("[data-widget-setstyle]").each(function () {
                    d += a(this).data("widget-setstyle") + " "
                });
                a(this).parents(k).attr("data-widget-attstyle", "" + c + "").removeClass(d).addClass(c);
                jb(a(this));
                ob();
                b.preventDefault()
            });
            i.on(cb, ".openwidget-custom-btn", function (b) {
                jb(a(this));
                if (a(this).children("." + R[0]).length) {
                    a(this).children().removeClass(R[0]).addClass(R[1]);
                    if (typeof e.customStart == "function") {
                        e.customStart.call(this)
                    }
                } else {
                    a(this).children().removeClass(R[1]).addClass(R[0]);
                    if (typeof e.customEnd == "function") {
                        e.customEnd.call(this)
                    }
                }
                ob();
                b.preventDefault()
            });
            i.on(cb, ".openwidget-delete-btn", function (b) {
                var c = a(this).parents(k).attr("id");
                var d = a(this).parents(k).children("header").children("h2").text();
                var f = confirm(A + ' "' + d + '"');
                if (f) {
                    jb(a(this));
                    a("#" + c).fadeOut(B, function () {
                        a(this).remove();
                        if (typeof e.onDelete == "function") {
                            e.onDelete.call(this)
                        }
                    })
                }
                b.preventDefault()
            });
            if (r === true) {
                var lb = f.find(".sortable-grid").not("[data-widget-excludegrid]");
                lb.sortable({
                    items: lb.find(".openwidget-sortable").not(""),
                    connectWith: lb,
                    placeholder: C,
                    cursor: "move",
                    revert: true,
                    opacity: D,
                    delay: 200,
                    cancel: ".button-icon, #openwidget-fullscreen-mode > div",
                    zIndex: 1e4,
                    handle: E,
                    forcePlaceholderSize: true,
                    forceHelperSize: true,
                    stop: function (a, b) {
                        jb(b.item.children());
                        pb()
                    }
                })
            }
            if (F === true) {
                function mb(a) {
                    var b = new Date(a);
                    c = b.getMonth() + 1;
                    d = b.getDate();
                    tsYear = b.getFullYear();
                    e = b.getHours();
                    f = b.getMinutes();
                    g = b.getUTCSeconds();
                    if (c < 10) {
                        var c = "0" + c
                    }
                    if (d < 10) {
                        var d = "0" + d
                    }
                    if (e < 10) {
                        var e = "0" + e
                    }
                    if (f < 10) {
                        var f = "0" + f
                    }
                    if (g < 10) {
                        var g = "0" + g
                    }
                    var h = H.replace(/%d%/g, d).replace(/%m%/g, c).replace(/%y%/g, tsYear).replace(/%h%/g, e).replace(/%i%/g, f).replace(/%s%/g, g);
                    return h
                }

                function nb(b, c, d, f, g) {
                    b.find(".openwidget-ajax-placeholder").load(c, function (b, c, d) {
                        if (c == "error") {
                            a(this).html('<div class="inner-spacer">' + L + "<b>" + d.status + " " + d.statusText + "</b></div>")
                        }
                        if (c == "success") {
                            var f = a(this).parents(k).find(I);
                            if (f.length) {
                                f.html(mb(new Date))
                            }
                            if (typeof e.afterLoad == "function") {
                                e.afterLoad.call(this)
                            }
                        }
                    });
                    jb(d);
                    return true
                }
                f.find("[data-widget-load]").each(function () {
                    var b = a(this);
                    var c = b.data("widget-load");
                    var d = b.data("widget-timestamp");
                    var e = b.data("widget-refreshbutton");
                    var f = b.data("widget-refresh") * 1e3;
                    var g = b.children();
                    b.children("div:first").append('<div class="openwidget-ajax-placeholder"><span style="margin:10px">' + G + "</span></div>");
                    nb(b, c, b, d, e);
                    if (b.data("widget-refresh") > 0) {
                        setInterval(function () {
                            nb(b, c, g, d, e)
                        }, f)
                    } else {
                        nb(b, c, g, d, e)
                    }
                });
                i.on(cb, ".openwidget-refresh-btn", function (b) {
                    var c = a(this).parents(k);
                    var d = c.data("widget-load");
                    var e = c.children();
                    var f = c.data("widget-timestamp");
                    var g = c.data("widget-refreshbutton");
                    nb(c, d, e, f, g);
                    b.preventDefault()
                })
            }
            a("body").on(cb, n, function (a) {
                if (Y && m) {
                    var b = confirm(o);
                    if (b) {
                        localStorage.removeItem(Z)
                    }
                }
                a.preventDefault()
            });
            a("body").on(cb, p, function (a) {
                if (Y && m) {
                    var b = confirm(q);
                    if (b) {
                        localStorage.removeItem(ab)
                    }
                }
                a.preventDefault()
            });
            if (Y && m) {
                if (_ === null || _.length < 1) {
                    ob()
                }
                if (bb === null || bb.length < 1) {
                    pb()
                }
            }
        })
    };
    a.fn.openwidgets.options = {
        grid: "",
        widgets: ".openwidget",
        localStorage: true,
        deleteSettingsKey: "",
        settingsKeyLabel: "Reset settings?",
        deletePositionKey: "",
        positionKeyLabel: "Reset position?",
        sortable: true,
        buttonsHidden: false,
        toggleButton: true,
        toggleClass: "fa fa-chevron-up | fa fa-chevron-down",
        toggleSpeed: 200,
        onToggle: function () {},
        deleteButton: false,
        deleteClass: "fa fa-trash-o",
        deleteSpeed: 200,
        onDelete: function () {},
        editButton: true,
        editPlaceholder: "",
        editClass: "fa fa-edit | fa fa-edit",
        editSpeed: 200,
        onEdit: function () {},
        fullscreenButton: true,
        fullscreenClass: "fa fa-expand | fa fa-compress",
        fullscreenDiff: 3,
        onFullscreen: function () {},
        customButton: false,
        customClass: "",
        customStart: function () {},
        customEnd: function () {},
        buttonOrder: "%refresh% %delete% %custom% %edit% %fullscreen% %toggle%",
        opacity: 1,
        dragHandle: "> header",
        placeholderClass: "openwidget-placeholder",
        indicator: true,
        indicatorTime: 600,
        ajax: true,
        loadingLabel: "loading...",
        timestampPlaceholder: "",
        timestampFormat: "Last update: %m%/%d%/%y% %h%:%i%:%s%",
        refreshButton: false,
        refreshButtonClass: "fa fa-repeat",
        labelError: "Sorry but there was a error:",
        labelUpdated: "Last Update:",
        labelRefresh: "Refresh",
        labelDelete: "Delete widget:",
        afterLoad: function () {},
        rtl: false
    }
})(jQuery, window, document)
