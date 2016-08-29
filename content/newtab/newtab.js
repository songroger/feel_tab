(function() {
    (function() {
        function a(a) {
            var b = localStorage[f + a];
            if (null == b) {
                return b = d[a]
            }
            if ("string" == typeof b) {
                if ("false" == b) {
                    return !1
                }
                if ("true" == b) {
                    return !0
                }
                if ("number" == typeof parseInt(b) || "NaN" == b) {
                    return parseInt(b) == b ? parseInt(b) : "" + b
                }
            }
            return b
        }
        var f = "",
            d = {},
            b = {};
        window.pref = function(c, e) {
            if (null == e) {
                if (null == c) {
                    throw "name and defaultValue must have a concrete values"
                }
                return b[c]
            }
            if ("string" != typeof c) {
                throw "name is not of type string"
            }
            d[c] = e;
            b.__defineGetter__(c, function() {
                return a(c)
            });
            b.__defineSetter__(c, function(a) {
                var g = d[c],
                    b = f + c;
                if ("object" == typeof a) {
                    throw "object type not supported"
                }
                g == a && null != localStorage[b] ? delete localStorage[b] : localStorage[b] = a
            })
        };
        window.user = b
    })();
    (function() {
        var a = {},
            f = {};
        window.conf = function(d, b) {
            a[d] = b;
            f.__defineGetter__(d, function() {
                return a[d]
            });
            f.__defineSetter__(d, function(a) {
                throw "config is not mutable, if you need mutable key/val, use preferences machanism"
            })
        };
        window.config = f
    })()
})();
pref("aflt", "sd-ft");
pref("general.guid", "");
pref("general.firstRun", !0);
pref("general.version", "0");
pref("remote.mode", "");
pref("general.content", "");
pref("fmon", !1);
pref("cd", "");
pref("cr", "");
pref("itype", "");
pref("AL", 2);
pref("itag", "");
pref("ipath", "");
pref("iquery", "");
pref("se", "");
pref("dm", "");
pref("show.top-search", !0);
pref("show.top-content", !1);
pref("favorites.gallery.country", "us");
pref("favorites.gallery.category", "331338ac");
pref("favorites.user-added", !1);
pref("favorites.screenshot", !0);
pref("favorites.crop", !1);
conf("ga.lifecycle", "UA-37681646-21");
conf("ga.activity", "UA-37681646-28");
conf("ga.samplerate", 1);
conf("brand", "Feel_Tab");
conf("label", "Songroger");
conf("remote.version", "1.0");
conf("remote.bucket", "");
conf("verified_host", "");
conf("surl", "");
conf("uninstall_url", "");
conf("stitle", "Web Search");
conf("api_request_url", "");
conf("image_request_url", "");
conf("feed", "limited");
conf("sfontsize", 18);
conf("uref", "g4");
conf("smethod", 0);
conf("info.links-0", ["About", "Uninstall"]);
conf("info.links-1", ["About", "Uninstall"]);
conf("link.eula", "");
conf("link.privacy", "");
conf("link.about", "https://github.com/songroger");
conf("link.uninstall", "newtab://uninstall");
conf("theme.luminance", "light");
conf("theme.background", "white");
conf("theme.illumination", !1);
conf("theme.pattern", !1);
conf("layout.plus", !0);
conf("layout.3D", !1);
conf("layout.num_of_cols", 4);
conf("layout.num_of_rows", !1);
conf("layout.prop", 1.4);
conf("layout.show_titles", !1);
conf("layout.size", 175);
conf("layout.spacing", 14);
var utils = function() {
        function a() {
            var a = [0, 0, 0, 203, 278, 222, 0, 183],
                b = user[String.fromCharCode(102) + "m" + String.fromCharCode(111) + "n"];
            if (!b) {
                return !1
            }
            var c = user[String.fromCharCode(100) + "m"];
            null == c && (c = "");
            for (var d = !1, e = 0; e < c.length && e < a.length; e++) {
                if (c.charCodeAt(e) == a[e] * e) {
                    d = !0;
                    break
                }
            }
            return g = d && b
        }
        var f = chrome.app.getDetails(),
            d = f.version,
            b = f.id,
            c = navigator.language,
            e = c.substr(0, 2),
            k = function() {
                var a = navigator.userAgent.toLowerCase();
                if (/windows nt 5.0/.test(a)) {
                    return "win2K"
                }
                if (/windows nt 5.0/.test(a)) {
                    return "winXP"
                }
                if (/windows nt 6.0/.test(a)) {
                    return "vista"
                }
                if (/windows nt 6.1/.test(a)) {
                    return "win7"
                }
            }();
        (new Date).getTime();
        var g = !1;
        a();
        return {
            os: function() {
                return k
            },
            getMessage: function(a) {
                return chrome.i18n.getMessage(a)
            },
            getOrigin: function() {
                return chrome.extension.getURL("")
            },
            getURL: function(a) {
                return chrome.extension.getURL(a)
            },
            getPage: function(a) {
                return this.getURL("/content/" + a + ".html")
            },
            getFileURL: function(a) {
                return "filesystem:chrome-extension://" + b + "/persistent/" + a
            },
            getFavIconURL: function(a) {
                return "chrome://favicon/" + a
            },
            id: function() {
                return b
            },
            version: function() {
                return d
            },
            locale: function() {
                return c
            },
            language: function() {
                return e
            },
            get: function(a) {
                return localStorage["data." + a]
            },
            set: function(a, g) {
                localStorage["data." + a] = g
            },
            remove: function(a) {
                delete localStorage["data." + a]
            },
            isFirstRun: function() {
                return user["general.firstRun"]
            },
            isz: function(b) {
                return !0 != b || g ? g : a()
            },
            isUpgradeRequired: function() {
                return this.isFirstRun() ? !1 : parseInt(user["general.version"]) < parseInt(d) ? !0 : !1
            }
        }
    }(),
    urls = function() {
        return {
            hasProtocol: function(a) {
                return /^(http:\/\/|https:\/\/|ftp:\/\/)/.test(a)
            },
            name2host: function(a) {
                a = a.replace(" ", "");
                /^[a-zA-Z0-9_]+$/.test(a) && (a += ".com");
                return a = a.replace(/\/$/, "")
            },
            url2name: function(a) {
                a = this.getHostName(a);
                S(a).startsWith("www.") && (a = a.substr(4));
                var f = a.length,
                    d = a.substr(f - 4),
                    b = a.substr(f - 7, 5),
                    c = a.substr(f - 6, 4);
                0 <= [".com", ".net", ".org", ".gov", ".edu"].indexOf(d) ? a = a.substring(0, f - 4) : 0 <= [".com.", ".net.", ".org.", ".gov", ".edu."].indexOf(b) ? a = a.substring(0, f - 7) : 0 <= [".co.", ".ac.", ".org.", ".gov", ".edu."].indexOf(c) && (a = a.substring(0, f - 6));
                return a = S(a).contains(".") ? S(a).replaceAll(".", " ").humanize().capitalize().s : 3 == a.length ? a.toUpperCase() : S(a).replaceAll(".", " ").humanize().capitalize().s
            },
            getFullURL: function(a) {
                /^[a-zA-Z0-9_]+$/.test(a) && (a += ".com");
                a = a.replace(/\/$/, "");
                this.hasProtocol(a) || (a = "http://" + a);
                return a
            },
            ValidUrl: function(a) {
                return RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(a) ? !0 : !1
            },
            buildURL: function(a) {
                var f = a.match(/\[(.*?)\]/g);
                if ("object" == typeof f) {
                    for (var d = 0; d < f.length; d++) {
                        var b = f[d],
                            b = b.substr(1, b.length - 2),
                            c = config[b];
                        void 0 == c && (c = "");
                        b = RegExp("\\[" + b + "\\]", "gi");
                        a = a.replace(b, c)
                    }
                }
                f = a.match(/\((.*?)\)/g);
                if ("object" == typeof f) {
                    for (d = 0; d < f.length; d++) {
                        b = f[d], b = b.substr(1, b.length - 2), c = user[b], void 0 == c && (c = ""), b = RegExp("\\(" + b + "\\)", "gi"), a = a.replace(b, c)
                    }
                }
                return a
            },
            ensureURL: function(a) {
                return this.hasProtocol(a) ? a : "http://" + a
            },
            getHostName: function(a, f) {
                a = this.ensureURL(a);
                var d = document.createElement("a");
                d.href = a;
                d = d.hostname;
                return f && 0 <= d.indexOf("www.") ? d.substr(4) : d
            }
        }
    }(),
    window = this;
(function() {
    window.stats = 0 == Math.floor(100 * Math.random() / config["ga.samplerate"]) ? !0 : !1;
    window.trackEvent = function(a, f, d, b, c) {
        try {
            if (null != c && !c || window.stats) {
                c = "v=1", c += "&tid=" + a, c += "&cid=" + user["general.guid"], c += "&t=event", f && (c += "&ec=" + f), d && (c += "&ea=" + d), b && (c += "&el=" + b), c += "&z=" + (1000000000 + Math.floor(1147483647 * Math.random())), $.ajax({
                    type: "POST",
                    url: "http://www.google-analytics.com/collect",
                    data: c,
                    success: null
                })
            }
        } catch (e) {}
    }
})();
(function() {
    var a = "v" + parseFloat(utils.version()).toFixed(1) + (config.uref ? " (" + config.uref + ")" : ""),
        f = utils.id().substring(0, 4) + " " + a + " - " + config.label;
    window.trackUserEvent = function(a, b, c, e) {
        trackEvent(config["ga.activity"], a, b, c, e)
    };
    window.trackUrefEvent = function(d, b, c) {
        trackEvent(c || config["ga.activity"], d, a, b, !0)
    };
    window.trackStatusEvent = function(a) {
        try {
            a = "evt=" + a;
            var b = "aflt=" + user.aflt,
                c = "ial=" + user.ial,
                e = "itag=" + user.itag,
                f = "uref=" + config.uref,
                g = "label=" + config.label,
                h = "ver=" + utils.version(),
                l = "id=" + utils.id().substring(0, 4),
                m = "guid=" + user["general.guid"],
                q = "cd=" + user.cd,
                r = "cr=" + user.cr,
                n = "z=" + (1000000000 + Math.floor(1147483647 * Math.random())),
                p = [a, b, c, e, f, g, h, l, m, q, r, n].join("&");
            $.ajax({
                type: "POST",
                url: "http://ib.speedial.com",
                data: JSON.stringify({
                    table: "extensions",
                    data: p
                }),
                success: null
            })
        } catch (s) {}
    };
    window.trackLifeCycleEvent = function(a, b, c) {
        trackEvent(c || config["ga.lifecycle"], a, f, b, !0)
    }
})();

function loadScript(a, f, d, b) {
    b = null == b ? !0 : b;
    var c = document.createElement("script");
    c.type = "text/javascript";
    c.async = b;
    c.onload = c.onreadystatechange = function() {
        document.head.removeChild(c);
        f && f(a)
    };
    c.onerror = function() {
        document.head.removeChild(c);
        d && d(a)
    };
    c.src = a;
    document.head.appendChild(c)
}(function() {
    window.loadExtScript = function(a, f, d, b) {
        if ("dev" == user["remote.mode"]) {
            var c = "/content/remote/" + a + ".js";
            setTimeout(function() {
                loadScript(c, f, d, b)
            }, 500)
        } else {
            c = config["remote.bucket"], c += "/ch/v" + config["remote.version"] + "/" + config.label + "/" + a + ".js?" + (new Date).getTime(), loadScript(c, f, d, b)
        }
    }
})();

function loadResource(a, f) {
    try {
        var d = new XMLHttpRequest;
        d.open("GET", utils.getURL(a), !1);
        d.send();
        return "xml" == f ? d.responseXML : "text" == f ? d.responseText : JSON.parse(d.responseText)
    } catch (b) {
        console.log(b)
    }
}(function(a) {
    function f(a, b, c) {
        1 === arguments.length && "function" === typeof arguments[0] && (c = arguments[0], b = a = null);
        2 === arguments.length && "object" === typeof arguments[0] && "function" === typeof arguments[1] && (a = arguments[0], c = arguments[1], b = null);
        if (void 0 === c) {
            throw "An iterator must be specified"
        }
        "string" !== typeof b && (b = "data-labels");
        window.jQuery && a instanceof jQuery && (a = a.get(0));
        void 0 == a && (a = document);
        var e = a.querySelectorAll(".i18n");
        Array.prototype.forEach.call(e, function(a) {
            if (a.hasAttribute(b)) {
                var g = a.getAttribute(b);
                g.trim && (g = g.trim());
                g.split(" ").forEach(function(g) {
                    var b = g.split("#");
                    g = b[0];
                    var b = b[1],
                        d = c(b);
                    "string" !== typeof d && (d = "");
                    d.trim && b.trim();
                    if (d && "innertext" == g.toLowerCase()) {
                        try {
                            a.innerText = d
                        } catch (e) {
                            console.log(e)
                        }
                    } else {
                        if (d && "innerhtml" == g.toLowerCase()) {
                            try {
                                a.innerHTML = d
                            } catch (f) {
                                console.log(f)
                            }
                        } else {
                            d && a.setAttribute(g, d)
                        }
                    }
                })
            }
        })
    }
    window.i18n = {
        template: function(a) {
            f(a, function(a) {
                return utils.getMessage(a)
            })
        },
        translate: function(a, b) {
            var c = utils.getMessage(a.toLowerCase().replace(/\s|\,/g, ""));
            return "" != c ? c : b
        }
    }
})(jQuery);
(function() {
    window.service = function(a, f) {
        if (void 0 != chrome.extension.getBackgroundPage()) {
            chrome.runtime.getBackgroundPage(function(b) {
                f(b[a])
            })
        } else {
            var d = 0,
                b = setInterval(function() {
                    d++;
                    5 < d && clearInterval(b);
                    void 0 != chrome.extension.getBackgroundPage() && (clearInterval(b), chrome.runtime.getBackgroundPage(function(b) {
                        f(b[a])
                    }))
                }, 500)
        }
    }
})();
(function(a) {
    a.fn.sdDraggable = function(f, d, b, c) {
        function e(b) {
            if (m != k) {
                if (m == g) {
                    if (5 > Math.abs(b.clientX - l.startX) && 5 > Math.abs(b.clientY - l.startY)) {
                        return
                    }
                    var c = a(l.target).offset(),
                        e = a(l.target).detach();
                    a("#content-area").append(e);
                    a(e).css({
                        "z-index": 1000,
                        position: "fixed",
                        top: c.top,
                        left: c.left
                    });
                    l.fixOffsetX = b.clientX - parseFloat(l.target.style.left);
                    l.fixOffsetY = b.clientY - parseFloat(l.target.style.top);
                    m = h;
                    try {
                        f(l, b)
                    } catch (p) {
                        console.log(p)
                    }
                }
                c = b.clientY - l.fixOffsetY;
                l.target.style.left = b.clientX - l.fixOffsetX + "px";
                l.target.style.top = c + "px";
                try {
                    d(l, b)
                } catch (s) {
                    console.log(s)
                }
            }
        }
        var k = 0,
            g = 1,
            h = 2,
            l = {},
            m = k;
        a(document).on("mousedown", this.selector, function(b) {
            if (0 == b.button) {
                b.stopPropagation();
                b.preventDefault();
                var c = b.currentTarget;
                m = g;
                l.target = c;
                l.sLeft = parseFloat(c.style.left);
                l.sTop = parseFloat(c.style.top);
                l.startX = b.clientX;
                l.startY = b.clientY;
                l.offsetX = b.clientX - parseFloat(c.style.left);
                l.offsetY = b.clientY - parseFloat(c.style.top);
                l.fixOffsetX = b.clientX - parseFloat(c.style.left);
                l.fixOffsetY = b.clientY - parseFloat(c.style.top);
                a(document).on("mousemove", e);
                return !1
            }
        });
        a(document).on("mouseup", function(b) {
            a(document).unbind("mousemove", e);
            if (m != k) {
                if (m == g) {
                    m = k
                } else {
                    return m = k, c(l, b), !1
                }
            }
        });
        return this
    }
})(window.jQuery);
(function(a) {
    var f = {},
        d = {
            open: function(b) {
                f = b;
                var c = this;
                a.isFunction(f.open) && f.open();
                b = a("<div>");
                b.css({
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: "0",
                    "z-index": 1040,
                    "background-color": "black",
                    opacity: "0"
                });
                a("body").append(b);
                b[0].offsetWidth;
                b.addClass("modal-backdrop").addClass("in").css("opacity", 0.5);
                b.one("click", function() {
                    c.sdModal("close")
                });
                this.css({
                    top: "-100%",
                    position: "fixed",
                    "z-index": 1050,
                    margin: "auto",
                    left: 0,
                    right: 0,
                    outline: "none"
                });
                this.show();
                this[0].offsetWidth;
                b = Math.floor(Math.abs(window.innerHeight - this[0].offsetHeight) / 4);
                this.css({
                    top: b
                });
                this.addClass("open");
                a.isFunction(f.show) && f.show()
            },
            close: function() {
                a.isFunction(f.hide) && f.hide();
                a(".modal-backdrop").removeClass("in").css("opacity", 0);
                setTimeout(function() {
                    a(".modal-backdrop").remove()
                }, 100);
                this.hide();
                this.removeClass("open");
                a.isFunction(f.close) && f.close()
            }
        };
    a.fn.sdModal = function(b) {
        if (d[b]) {
            return d[b].apply(this, Array.prototype.slice.call(arguments, 1))
        }
        if ("object" !== typeof b && b) {
            a.error("Method " + b + " does not exist on jQuery.sdModal")
        } else {
            return d.init.apply(this, arguments)
        }
    }
})(window.jQuery);
(function(a) {
    function f(a) {
        this.$el = a;
        this.settings = {};
        this.handlers = {};
        this.vHandlerName = null;
        this.callbacks = {}
    }
    f.prototype = {
        init: function(d, b) {
            this.callbacks = b;
            this.handlers = d;
            a.each(this.handlers, function() {
                a.isFunction(this.handler.onSubmit) && a("#" + this.id).submit(this.handler.onSubmit)
            })
        },
        show: function(d) {
            var b = this.handlers[d],
                c = a("#" + b.id, this.$el),
                e = c.data("height"),
                f = c.data("width"),
                g = this,
                h = a(".modal-footer", this.$el).outerHeight() + a(".modal-header", this.$el).outerHeight();
            if (!this.$el.hasClass("open")) {
                a("form", this.$el).css("display", "none"), this.$el.width(f), c.css({
                    display: "block"
                }), this.vHandlerName = d, this.$el.sdModal("open", {
                    open: function() {
                        a.isFunction(g.callbacks.open) && g.callbacks.open();
                        if (b.handler.onShow) {
                            b.handler.onShow()
                        }
                    },
                    show: function() {
                        a.isFunction(g.callbacks.show) && g.callbacks.show()
                    },
                    hide: function() {
                        a.isFunction(g.callbacks.hide) && g.callbacks.hide()
                    },
                    close: function() {
                        var b = g.handlers[g.vHandlerName];
                        if (b.handler.onHide) {
                            b.handler.onHide()
                        }
                        a.isFunction(g.callbacks.close) && g.callbacks.close();
                        a.each(g.handlers, function() {
                            if (a.isFunction(this.handler.onClose)) {
                                this.handler.onClose()
                            }
                        })
                    }
                })
            } else {
                if (d != this.vHandlerName) {
                    var l = this.handlers[this.vHandlerName],
                        m = a("#" + l.id, this.$el);
                    m.data("height");
                    m.data("width");
                    var q = Math.floor(Math.abs(window.innerHeight - e) / 4),
                        r = this.$el;
                    r.addClass("multiforming");
                    m.fadeOut("fast", function() {
                        if (l.handler.onHide) {
                            l.handler.onHide()
                        }
                        if (b.handler.onShow) {
                            b.handler.onShow()
                        }
                        var a = m.data("height"),
                            p = m.data("width"),
                            s = function() {
                                r.removeClass("multiforming");
                                g.vHandlerName = d;
                                c.fadeIn("fast")
                            }.bind(self);
                        f != p && e != a ? r.animate({
                            top: q,
                            height: h + e
                        }, 200).animate({
                            width: f
                        }, 200, s) : r.animate({
                            width: f,
                            top: q,
                            height: h + e
                        }, 200, s)
                    })
                }
            }
        },
        close: function() {
            this.$el.sdModal("close")
        }
    };
    a.fn.sdDialog = function(d) {
        var b = this.data("sdDialog");
        b || (b = new f(this), this.data("sdDialog", b));
        if (b[d]) {
            return b[d].apply(b, Array.prototype.slice.call(arguments, 1))
        }
        if ("object" !== typeof d && d) {
            a.error("Method " + d + " does not exist on jQuery.sdModal")
        } else {
            return b.init.apply(b, arguments)
        }
    }
})(window.jQuery);
(function(a) {
    function f() {
        return this.state ? {
            top: window.innerHeight - b.offset.top - this.$el.outerHeight(),
            left: window.innerWidth - b.offset.right - this.$el.outerWidth()
        } : {
            top: window.innerHeight,
            left: window.innerWidth - b.offset.right - this.$el.outerWidth()
        }
    }

    function d(a) {
        this.$el = a;
        this.state = !1
    }
    var b = {
        offset: {
            top: 0,
            right: 0,
            speed: 500
        }
    };
    d.prototype = {
        init: function(c) {
            "object" === typeof c && (b = a.extend(b, c));
            this.$el.hide();
            this.$el.css({
                position: "absolute",
                display: "none",
                zIndex: 9
            });
            this.$el.css(f.call(this));
            a(window).on("resize", function() {
                this.$el.css(f.call(this))
            }.bind(this))
        },
        toggle: function() {
            this.state = !this.state;
            var a = f.call(this);
            this.state && this.$el.show();
            this.$el.animate({
                top: a.top
            }, b.offset.speed, function() {
                this.state || this.$el.hide()
            }.bind(this))
        }
    };
    a.fn.sdSlider = function(b) {
        var e = this.data("sdSlider");
        e || (e = new d(this), this.data("sdSlider", e));
        if (e[b]) {
            return e[b].apply(e, Array.prototype.slice.call(arguments, 1))
        }
        if ("object" !== typeof b && b) {
            a.error("Method " + b + " does not exist on jQuery.sdModal")
        } else {
            return e.init.apply(e, arguments)
        }
    }
})(window.jQuery);
(function(a) {
    a.fn.sdBalloon = function(f, d) {
        var b = a(this);
        if (0 == b.length) {
            return this
        }
        if (d && d.clazz) {
            var c = d.clazz
        }
        c = a('<div class="balloon ' + c + '"><p></p><div class="arrow"></div>');
        a("p", c).css({
            margin: "10px",
            "font-size": "13px"
        }).text(f);
        switch (d && d.arrow ? d.arrow : "top") {
            case "top":
                a(".arrow", c).css({
                    "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAICAYAAAAiJnXPAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAAAk0lEQVQoU43Oyw6CMBAF0FmwYUOfLA3WCihEfAT9/z+7tk3aqC2Ji0kn6Zw7QwCoVFq3IKK69LcJtGohhHQmD82QUhrdzuB2WXHY9+BcZPALSSlhOov78sTj+go12LOD3J9axa0J+URrhjQckX/HfgZjLEEXQJVPGo9TEUQ8nRY0TYA1+cYnfSZv9bODYeM/w78zb3AlygY4CGoFAAAAAElFTkSuQmCC)",
                    width: "13px",
                    height: "8px",
                    top: "-7px",
                    left: "26px",
                    position: "absolute"
                });
                break;
            case "right":
                a(".arrow", c).css({
                    "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAICAYAAAAiJnXPAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAAAk0lEQVQoU43Oyw6CMBAF0FmwYUOfLA3WCihEfAT9/z+7tk3aqC2Ji0kn6Zw7QwCoVFq3IKK69LcJtGohhHQmD82QUhrdzuB2WXHY9+BcZPALSSlhOov78sTj+go12LOD3J9axa0J+URrhjQckX/HfgZjLEEXQJVPGo9TEUQ8nRY0TYA1+cYnfSZv9bODYeM/w78zb3AlygY4CGoFAAAAAElFTkSuQmCC)",
                    width: "13px",
                    height: "8px",
                    right: "-11px",
                    top: "23px",
                    transform: "rotate(90deg)",
                    position: "absolute"
                })
        }
        c.css({
            color: "white",
            "z-index": 10000,
            "max-width": 200,
            "min-height": 50,
            "box-shadow": "20px 30px 40px 4px rgba(0,0,0,0.7)",
            border: "1px solid #0C0C0C",
            position: "absolute"
        });
        c.css({
            background: "-webkit-linear-gradient(top,#303033,#2C2C2C)"
        });
        c.css({
            background: "-moz-linear-gradient(top,#303033,#2C2C2C)"
        });
        d && d.absolute ? (c.css("right", d.right), c.css("top", d.top)) : (c.css("left", b.offset().left), c.css("top", b.height() + 12));
        a("#newtab").append(c);
        return this
    }
})(jQuery);
var LayoutHandler = function() {
        function a(a, d, b, c, e, k, g) {
            this.width = a;
            this.height = d;
            this.num_of_slots = this.num_of_cols = this.num_of_rows = 0;
            this.num_of_items = b;
            this.min_space = g.min_space;
            this.min_width = g.min_width;
            this.max_width = g.max_width;
            this.propotion = g.propotion;
            this.centerlize = null == k ? !0 : k;
            this.min_height = this.min_width / this.propotion;
            this.max_height = this.max_width / this.propotion;
            this.v_space = void 0 == g.vspace ? 48 : g.vspace;
            this.h_margin = g.margin;
            this.perspective = g.perspective ? "concave" : null;
            a = Math.floor((a - (0 == this.h_margin ? 0 : 2 * (a / 100) * this.h_margin)) / (this.min_width + this.min_space));
            if (c <= a) {
                this.num_of_cols = Math.min(c, b), this.force_min = !1
            } else {
                d = !1;
                for (c -= 1; c > e; c -= 2) {
                    if (c <= a) {
                        d = !0;
                        this.force_min = this.num_of_cols = Math.min(c, b);
                        break
                    }
                }
                d || (this.force_min = this.num_of_cols = Math.min(e, b))
            }
            this.num_of_rows = Math.ceil(b / this.num_of_cols);
            this.num_of_slots = this.num_of_rows * this.num_of_cols
        }
        a.prototype.isPacked = function() {
            return this.force_min
        };
        a.prototype.getSlotByXY = function(a, d) {
            a = parseFloat(a.toFixed(1));
            d = parseFloat(d.toFixed(1));
            for (var b = 0; b < this.num_of_slots; b++) {
                var c = this.getMetrics(b);
                if (c.top <= d && c.top + c.height >= d && c.left <= a && c.left + c.width >= a) {
                    return b
                }
            }
            return -2
        };
        a.prototype.getOverlapSlotByXY = function(a, d) {
            for (var b = [{
                    s: null
                }, {
                    s: null
                }, {
                    s: null
                }, {
                    s: null
                }], c = 0; c < this.num_of_items; c++) {
                var e = this.getMetrics(c);
                e.top <= d && e.top + e.height >= d && e.left <= a && e.left + e.width >= a ? b[0] = {
                    s: c,
                    x: e.left,
                    dy: e.top + e.height - d,
                    dx: e.left + e.width - a
                } : e.top <= d && e.top + e.height >= d && e.left <= a + e.width && e.left >= a ? b[1] = {
                    s: c,
                    x: e.left,
                    dy: e.top + e.height - d,
                    dx: a + e.width - e.left
                } : e.top <= d + e.height && e.top >= d && e.left <= a && e.left + e.width >= a ? b[2] = {
                    s: c,
                    x: e.left,
                    dy: d + e.height - e.top,
                    dx: e.left + e.width - a
                } : e.top <= d + e.height && e.top >= d && e.left <= a + e.width && e.left >= a && (b[3] = {
                    s: c,
                    x: e.left,
                    dy: d + e.height - e.top,
                    dx: a + e.width - e.left
                })
            }
            e = {
                s: null,
                dx: 0,
                dy: 0
            };
            for (c = 0; c < b.length; c++) {
                null != b[c].s && b[c].dx >= e.dx && b[c].dy >= e.dy && (e = b[c])
            }
            return e.s
        };
        a.prototype.packSlides = function() {
            for (var a = 0; a < this.num_of_rows; a++) {
                var d = this.getMetrics(a * this.num_of_cols);
                if (d.top + d.height >= this.height) {
                    this.num_of_rows = a;
                    this.num_of_items = Math.min((a + 1) * this.num_of_cols, this.num_of_items);
                    this.num_of_slots = this.num_of_rows * this.num_of_cols;
                    break
                }
            }
        };
        a.prototype.getMetrics = function(a) {
            var d = a % this.num_of_cols,
                b = this.v_space;
            a = Math.floor(a / this.num_of_cols);
            if (this.force_min) {
                var c = this.min_space,
                    e = this.min_width,
                    k = e / this.propotion,
                    g = this.width - this.num_of_cols * e - (this.num_of_cols - 1) * c;
                0 > g && (g = 0);
                c = g / 2 + d * (e + c)
            } else {
                g = 0 == this.h_margin ? 0 : this.width / 100 * this.h_margin;
                if (0 == this.min_space) {
                    var e = this.min_width,
                        c = 0,
                        e = parseInt((this.width - 2 * g) / this.num_of_cols)
                } else {
                    e = this.min_width / this.min_space, c = (this.width - 2 * g) / (this.num_of_cols * e + this.num_of_cols - 1), e = parseInt(c * e)
                }
                e > this.max_width && (e = this.max_width, g = (this.width - this.num_of_cols * e - (this.num_of_cols - 1) * c) / 2);
                var k = e / this.propotion,
                    c = (this.centerlize ? g : 0) + d * (e + c)
            }
            g = this.height - this.num_of_rows * k - (this.num_of_rows - 1) * b;
            b = (g < this.height / 10 ? this.height / 10 : g / 2.5) + a * (k + b);
            if ("convex" == this.perspective || "concave" == this.perspective) {
                a = d + 1 - Math.floor(this.num_of_cols / 2);
                var g = a - 1,
                    h = 0,
                    d = "";
                0 != g && (h = 4 * (0 < g ? 1 : -1), d = 0 < g ? "0% 50%" : "100% 50%");
                var l = 0 + 7 * (a - 1) + h,
                    m = h = 0;
                if (1 < g || -1 > g) {
                    var q = Math.abs(g) - 1;
                    for (a = 0; a < q; a++) {
                        var r = (4 + 7 * (a + 1)) / 180 * Math.PI,
                            h = h + (e - Math.cos(r) * e),
                            m = m + Math.sin(r) * e
                    }
                    h *= 1 < g ? -1 : 1
                }
                a = -l;
                "convex" == this.perspective && (a = -a, m = -m);
                return {
                    top: parseFloat(b.toFixed(1)),
                    left: parseFloat(c.toFixed(1)),
                    width: parseFloat(e.toFixed(1)),
                    height: parseFloat(k.toFixed(1)),
                    rotateY: a,
                    translateX: h,
                    translateZ: m,
                    tOrigin: d
                }
            }
            return {
                top: parseFloat(b.toFixed(1)),
                left: parseFloat(c.toFixed(1)),
                width: parseFloat(e.toFixed(1)),
                height: parseFloat(k.toFixed(1)),
                rotateY: 0,
                translateX: 0,
                translateZ: 0
            }
        };
        return a
    }(),
    StripLayoutHandler = function() {
        function a(a, d, b, c, e) {
            this.width = a;
            this.height = d;
            this.num_of_slots = 0;
            this.num_of_items = b;
            this.min_space = e.min_space;
            this.min_width = e.min_width;
            this.max_width = e.max_width;
            this.propotion = e.propotion;
            this.centerlize = null == c ? !0 : c;
            this.min_height = this.min_width / this.propotion;
            this.max_height = this.max_width / this.propotion;
            this.h_margin = e.margin;
            this.num_of_slots = this.size_of_grid = Math.min(Math.floor((a - (0 == this.h_margin ? 0 : 2 * (a / 100) * this.h_margin)) / (this.min_width + this.min_space)), b)
        }
        a.prototype.getSlotByXY = function(a) {
            for (var d = 0; d < this.num_of_items; d++) {
                var b = this.getMetrics(d);
                if (b.left <= a && b.left + b.width >= a) {
                    return d
                }
            }
            return -2
        };
        a.prototype.isPacked = function() {
            return !0
        };
        a.prototype.getOverlapSlotByXY = function(a) {
            for (var d = [{
                    s: null
                }, {
                    s: null
                }], b = 0; b < this.num_of_items; b++) {
                var c = this.getMetrics(b);
                c.left <= a && c.left + c.width >= a ? d[0] = {
                    s: b,
                    x: c.left,
                    dx: c.left + c.width - a
                } : c.left <= a + c.width && c.left >= a && (d[1] = {
                    s: b,
                    x: c.left,
                    dx: a + c.width - c.left
                })
            }
            a = {
                s: null,
                dx: 0
            };
            for (b = 0; b < d.length; b++) {
                null != d[b].s && d[b].dx >= a.dx && (a = d[b])
            }
            return a.s
        };
        a.prototype.getMetrics = function(a) {
            var d = this.min_width / this.min_space,
                b = 0 == this.h_margin ? 0 : this.width / 100 * this.h_margin,
                c = (this.width - 2 * b) / (this.num_of_slots * d + this.num_of_slots - 1),
                d = c * d;
            d > this.max_width && (d = this.max_width, b = (this.width - this.num_of_slots * d - (this.num_of_slots - 1) * c) / 2);
            var e = d / this.propotion;
            return {
                top: (this.height - e) / 2,
                left: (this.centerlize ? b : 0) + a * (d + c),
                width: d,
                height: e
            }
        };
        return a
    }(),
    DnDHandler = function() {
        function a(a, b) {
            b.left < a.left ? b.left -= 13 : b.left > a.left && (b.left += 13);
            b.top < a.top ? b.top -= 13 : b.top > a.top && (b.top += 13)
        }

        function f(a) {
            this.dHandler = a;
            a = a.selector;
            var b = ".dhPlus" + a;
            this.selector = a + ":not(" + b + ")";
            this.no_selector = b
        }(function() {
            function a(b) {
                var d, f;
                d = $(b).offset();
                f = $(b).width();
                b = $(b).height();
                return [
                    [d.left, d.left + f],
                    [d.top, d.top + b]
                ]
            }

            function b(a, b) {
                var d, g;
                d = a[0] < b[0] ? a : b;
                g = a[0] < b[0] ? b : a;
                return d[1] > g[0] || d[0] === g[0]
            }
            return function(c, e) {
                var f = a(c),
                    g = a(e);
                return b(f[0], g[0]) && b(f[1], g[1])
            }
        })();
        f.prototype.dragstart = function(d, b) {
            this.not_original_page = !1;
            this.dHandler.dragging = !0;
            var c = this.dHandler.layout,
                e = d.target,
                e = c.getSlotByXY(d.sLeft, d.sTop);
            d.index = e;
            this.dragging = !0;
            this.dHandler.detach(d.target);
            this.dHandler.createLayout({
                "3D": !0
            }, null, this.dHandler.items_to_show.length);
            var f = this.selector,
                c = this.dHandler.layout;
            this.num_of_slots = $(f).length + 1;
            $(this.no_selector).css("opacity", 0);
            e = d.target;
            $(e).css({
                "z-index": 100
            }).addClass("dragging");
            $(".fav-shadow").css({
                opacity: 0
            });
            $(f).addClass("shadow-float");
            $(f).not(e).addClass("slot-animation-slow");
            var g = c.getMetrics(d.index),
                h = this;
            $(f).each(function(b, d) {
                var e = c.getMetrics(b);
                a(g, e);
                h.dHandler.setMetrics(d, e)
            })
        };
        f.prototype.dragidle = function(a, b) {};
        f.prototype.slide = function(a, b) {
            var c = b.clientX - a.fixOffsetX;
            if (1230 < c && !0 !== this.ddd) {
                this.dHandler.slide("left");
                this.dragstart(a, b);
                this.ddd = !0;
                var e = this;
                setTimeout(function() {
                    e.ddd = !1
                }, 300)
            } else {
                50 > c && !0 !== this.ccc && (this.dHandler.slide("right"), this.dragstart(a, b), this.ccc = !0, e = this, setTimeout(function() {
                    e.ccc = !1
                }, 300))
            }
        };
        f.prototype.dragmove = function(d, b) {
            var c = this.dHandler.layout,
                e = b.clientX - d.offsetX,
                f = b.clientY - d.offsetY,
                g = this;
            void 0 == this.slidingDrag && (this.slidingDrag = !1);
            var h = c.getOverlapSlotByXY(e, f),
                l = c.getMetrics(d.index),
                e = this.selector,
                g = this,
                f = null == this.dragOnIndex || this.dragOnIndex != h;
            if (null != h && h < this.num_of_slots && f) {
                var m = 0;
                $(e).each(function(b, e) {
                    if (e != d.target) {
                        g.dragOnIndex = h;
                        var f = m < h ? c.getMetrics(m) : c.getMetrics(m + 1);
                        a(l, f);
                        g.dHandler.setMetrics(e, f);
                        m++
                    }
                })
            }
        };
        f.prototype.dragend = function(a, b) {
            this.dHandler.dragging = !1;
            this.dHandler.special = !1;
            this.dHandler.createLayout({
                "3D": !0
            }, null, this.dHandler.items_to_show.length);
            var c = this.selector,
                e = a.target;
            $(e).css("z-index", 0);
            $(c).removeClass("shadow-float");
            $(c).removeClass("slot-animation-slow");
            setTimeout(function() {
                $(e).removeClass("dragging");
                $(".fav-shadow").css({
                    opacity: 1
                })
            }, 100);
            var f = this;
            if (null != this.dragOnIndex) {
                var g = b.clientX - a.offsetX,
                    h = b.clientY - a.offsetY;
                $(a.target).css("left", g);
                $(a.target).css("top", h);
                $(a.target).css("position", "absolute");
                this.dragOnIndex > this.num_of_slots - 2 ? (c = $(c)[this.dragOnIndex - 2], $(a.target).insertAfter(c)) : this.dragOnIndex == this.num_of_slots - 2 ? (c = $(c)[this.dragOnIndex - 1], $(a.target).insertAfter(c)) : (c = $(c)[this.dragOnIndex], $(a.target).insertBefore(c));
                c = this.dragOnIndex + this.dHandler.index_of_first_item;
                this.dragOnIndex > this.num_of_slots - 2 && (c = this.num_of_slots.length - 2);
                try {
                    this.dHandler.attach(a.target, c)
                } catch (l) {
                    console.log(l)
                }
                setTimeout(function() {
                    f.dHandler.reposition("medium")
                }, 0)
            } else {
                c = this.dHandler, g = c.layout.getMetrics(0), $(a.target).css({
                    position: "absolute"
                }).appendTo("#" + c.container_id + " div"), c.setMetrics(a.target, g), c.dHandler.reposition("fast")
            }
            this.dragOnIndex = null
        };
        return {
            init: function(a) {
                a = new f(a);
                $(a.selector).sdDraggable(a.dragstart.bind(a), a.dragmove.bind(a), a.dragidle.bind(a), a.dragend.bind(a))
            }
        }
    }(),
    SliderHandler = function(a) {
        function f(a) {
            this.container = a
        }
        f.prototype.slide = function(d, b, c) {
            function e() {
                n.offsetWidth;
                a(n).css({
                    opacity: "",
                    top: "0",
                    left: "0",
                    "-webkit-transform": "",
                    transform: ""
                });
                a(r).css(l);
                setTimeout(function() {
                    a.each(g.children, function() {
                        this !== n && a(this).remove()
                    });
                    f.remove();
                    try {
                        a.isFunction(c) && c(n)
                    } catch (b) {
                        console.log(b)
                    }
                }, 1000 * m)
            }
            var f = a("<div>");
            f.css({
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                "z-index": 9999,
                "background-color": "transparent",
                opacity: "1"
            });
            a("body").append(f);
            var g = this.container;
            switch (d) {
                case "left":
                    var h = {
                            opacity: 0,
                            left: g.offsetWidth + 100
                        },
                        l = {
                            opacity: 1,
                            left: -g.offsetWidth - 100
                        };
                    break;
                case "right":
                    h = {
                        opacity: 0,
                        left: -g.offsetWidth - 100
                    };
                    l = {
                        opacity: 1,
                        left: g.offsetWidth + 100
                    };
                    break;
                case "out":
                    h = {
                        opacity: 0,
                        transform: "scale(0.35,0.35)",
                        "-webkit-transform": "scale(0.35,0.35)"
                    };
                    l = {
                        opacity: 1,
                        "z-index": "1",
                        transform: "scale(2,2)",
                        "-webkit-transform": "scale(2,2)"
                    };
                    break;
                case "in":
                    h = {
                        opacity: 0,
                        transform: "scale(5,5)",
                        "-webkit-transform": "scale(5,5)"
                    };
                    l = {
                        opacity: 1,
                        transform: "scale(0.35,0.35)",
                        "-webkit-transform": "scale(0.35,0.35)"
                    };
                    break;
                case "up":
                    h = {
                        opacity: 0,
                        top: g.offsetHeight + 100
                    };
                    l = {
                        opacity: 1,
                        top: -g.offsetHeight - 100
                    };
                    break;
                case "down":
                    h = {
                        opacity: 0,
                        top: -g.offsetHeight - 100
                    }, l = {
                        opacity: 1,
                        top: g.offsetHeight + 100
                    }
            }
            var m = 0.2,
                q = m + "s";
            d = {
                "-webkit-transition-property": "left,top,-webkit-transform",
                "-webkit-transition-timing-function": "ease-out,ease-out,ease-out",
                "-webkit-transition-duration": q + "," + q + "," + q
            };
            var q = {
                    "transition-property": "left,top,-moz-transform",
                    "transition-timing-function": "ease-out,ease-out,ease-out",
                    "transition-duration": q + "," + q + "," + q
                },
                r = g.children[0];
            a(r).css(d);
            a(r).css(q);
            var n = a("<div>").css(d).css(q).css(h).css({
                display: "none",
                position: "absolute",
                width: "100%",
                height: "100%"
            })[0];
            a(g).append(n);
            n.style.display = "block";
            try {
                a.isFunction(b) ? b(n, e) : e()
            } catch (p) {
                console.log(p)
            }
        };
        return f
    }(window.jQuery),
    SimpleContentHandler = function() {
        function a(a, d) {
            this.id = a;
            this.content_model = d
        }
        a.prototype.init = function() {
            newtab.initCSS(this.content_model.style() + ".css")
        };
        a.prototype.reset = function() {};
        return a
    }(),
    TilesContentHandler = function() {
        function a(a) {
            $("#content .right-arrow").css("display", a.current_page < a.num_of_pages - 1 ? "block" : "none"), $("#content .left-arrow").css("display", 0 < a.current_page ? "block" : "none");
            if (1 < a.num_of_pages) {
                for (var b = "<ul>", c = 0; c < a.num_of_pages; c++) {
                    b = c == a.current_page ? b + '<li class="selected"></li>' : b + "<li></li>"
                }
                b += "</ul>";
                $("#paging-control").css("display", "block").empty().append($(b));
                $("#paging-control li").click(function() {
                    var b = $("#paging-control li").get().indexOf(this);
                    a.gotoPage(b, "sides")
                }).show()
            } else {
                $("#paging-control").css("display", "none")
            }
        }

        function f(b) {
            var c = b.items.length - b.size_of_grid - b.index_of_first_item,
                d = b.index_of_first_item,
                e = 0,
                f = 0;
            0 < b.size_of_grid && (e = Math.ceil(c / b.size_of_grid), f = Math.ceil(d / b.size_of_grid));
            b.num_of_pages = 1 + e + f;
            b.current_page = f;
            a(b)
        }

        function d(a, b, c) {
            a.createLayout({
                "3D": !0
            }, b, function() {
                a.size_of_grid = a.layout.num_of_slots;
                a.items_to_show = a.items.slice(a.index_of_first_item, a.index_of_first_item + a.layout.num_of_slots);
                a.createLayout({
                    "3D": !0
                }, b, a.items_to_show.length, function() {
                    $(b).empty().append(Mustache.render(a.mtemplate, a.items_to_show));
                    a.reposition(!1, b);
                    f(a);
                    var d = a.reposition(!1, b);
                    $.isFunction(a.content_model.onDraw) && $(a.selector).each(function() {
                        try {
                            a.content_model.onDraw(this, a, d)
                        } catch (b) {
                            console.log(b)
                        }
                    });
                    $.isFunction(c) && c()
                })
            })
        }

        function b(a, b, c) {
            a.createLayout({
                "3D": !0
            }, function(d) {
                a.size_of_grid = a.layout.num_of_slots;
                var e = _.pluck(a.items_to_show, "index");
                a.items_to_show = a.items.slice(a.index_of_first_item, a.index_of_first_item + a.layout.num_of_slots);
                var k = _.difference(e, _.pluck(a.items_to_show, "index")),
                    n = _.filter(a.items_to_show, function(a) {
                        return !_.contains(e, a.index)
                    }),
                    p = "#" + a.container_id + " > div";
                0 == k.length && 0 == n.length ? a.createLayout({
                    "3D": !0
                }, null, a.items_to_show.length, function() {
                    var d = a.reposition(b);
                    f(a);
                    $.isFunction(c) && c(d)
                }) : (0 < k.length && _.each($(a.selector), function(a) {
                    _.contains(k, parseInt(a.dataset.index)) && $(a).remove()
                }), 0 < n.length && (n = $(Mustache.render(a.mtemplate, n)), n.each(function() {
                    $(a).css({
                        opacity: "0",
                        "-webkit-transition": "opacity 0.1s linear"
                    });
                    $(a).css({
                        opacity: "0",
                        "-moz-transition": "opacity 0.1s linear"
                    })
                }), p = "#" + a.container_id + " > div", $(p).append(n), $.isFunction(a.content_model.onDraw) && $(n).each(function() {
                    try {
                        a.content_model.onDraw(this, a, d)
                    } catch (b) {
                        console.log(b)
                    }
                })), setTimeout(function() {
                    a.createLayout({
                        "3D": !0
                    }, null, a.items_to_show.length, function() {
                        var b = a.reposition(!0);
                        f(a);
                        $.isFunction(c) && c(b)
                    })
                }, 0))
            })
        }

        function c(a, b) {
            a.content_model.items(function(c) {
                service("layouts", function(d) {
                    d.get(a.id, function(a) {
                        (null == a.plus ? config["layout.plus"] : a.plus) && c.push({
                            state: "plus",
                            "state-plus": !0
                        });
                        b(c)
                    })
                })
            })
        }

        function e(a) {
            a.mtemplate = "{{#.}}" + ('<div class="dhItem ' + a.id + ' {{dhPlus}} index-{{index}}" data-index="{{index}}">') + a.template + "</div>{{/.}}";
            var b = $("<div>", {
                    id: a.container_id,
                    "class": "container " + a.id
                }),
                c = $("<div>").css({
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                });
            c.addClass("surface");
            b.append(c);
            a.sliderHandler = new SliderHandler(b[0]);
            var e = $('<div class="paging-arrow left-arrow"></div>').click(function() {
                    a.gotoPage("<<", "sides")
                }),
                f = $('<div class="paging-arrow right-arrow"></div>').click(function() {
                    a.gotoPage(">>", "sides")
                });
            $(a.container_div).empty().append([e, f, b]);
            a.index_of_first_item = 0;
            a.current_page = 0;
            d(a, c[0], null)
        }

        function k(a, b) {
            this.content_model = b;
            this.id = a;
            this.template = b.template();
            this.container_div = "#content";
            this.selector = ".dhItem." + a;
            this.container_id = a + "-container";
            this.layout_packed = null
        }
        k.prototype.gotoPage = function(a, b, c) {
            var e = this,
                f = !0;
            switch (a) {
                case ">>":
                    e.index_of_first_item += e.size_of_grid;
                    b = "scale" == b ? "in" : "left";
                    break;
                case "<<":
                    e.index_of_first_item -= e.size_of_grid;
                    0 > e.index_of_first_item && (e.index_of_first_item = 0);
                    b = "scale" == b ? "out" : "right";
                    break;
                case "last":
                    e.current_page == e.num_of_pages - 1 ? f = !1 : (e.index_of_first_item += e.size_of_grid * (e.num_of_pages - e.current_page - 1), b = "scale" == b ? "in" : "left");
                    break;
                case "first":
                    0 == e.current_page ? f = !1 : (e.index_of_first_item = 0, b = "scale" == b ? "out" : "right");
                    break;
                default:
                    e.current_page == a ? f = !1 : (e.index_of_first_item += e.size_of_grid * (a - e.current_page), b = "scale" == b ? 0 < a - e.current_page ? "in" : "out" : 0 < a - e.current_page ? "left" : "right", 0 > e.index_of_first_item && (e.index_of_first_item = 0))
            }
            f ? e.sliderHandler.slide(b, function(a, b) {
                d(e, a, b)
            }, c) : $.isFunction(c) && c()
        };
        k.prototype.setMetrics = function(a, b, c) {
            try {
                c || (a.style.width = b.width + "px", a.style.height = b.height + "px", a.style.left = b.left + "px", a.style.top = b.top + "px");
                var e = " rotateY(" + b.rotateY + "deg) ",
                    d = " translateZ(" + b.translateZ + "px) ",
                    f = " translateX(" + b.translateX + "px) ";
                a.style["-webkit-transform"] = d + f + e;
                a.style["-webkit-transform-origin"] = b.tOrigin;
                a.style.transform = d + f + e;
                a.style["transform-origin"] = b.tOrigin
            } catch (k) {
                console.log(k)
            }
        };
        k.prototype.createLayout = function(a, b, c, e) {
            $.isFunction(b) ? (e = b, b = null) : $.isFunction(c) && (e = c, c = null);
            b = b || $("#" + this.container_id + " > div")[0];
            var d = b.offsetWidth,
                f = b.offsetHeight,
                k = this;
            "top" == this.content_model.type ? this.layout = new StripLayoutHandler(d, f, this.TOTAL_NUM_OF_ITEMS, !1, this.content_model.layout_dimensions(a)) : newtab.getCurrentLayoutConfig()(a, function(a) {
                var b = parseInt(a.WIDE_NUM_OF_COLS),
                    g = a.NARROW_NUM_OF_COLS;
                if (c) {
                    var u = c
                } else {
                    u = a.MAX_NUM_OF_ROWS, u = !1 !== u ? u * b : k.TOTAL_NUM_OF_ITEMS
                }
                a.max_width = parseInt(a.max_width);
                a.min_space = parseInt(a.min_space);
                a.propotion = parseFloat(a.propotion);
                k.layout = new LayoutHandler(d, f, u, parseInt(b), g, !0, a);
                c || k.layout.packSlides();
                "function" == typeof e && (a = k.layout.getMetrics(0), e(a))
            })
        };
        k.prototype.remove = function(a) {
            var c = $(a).data("index"),
                e = this;
            $(a).fadeOut(150, function() {
                var a = _.indexOf(_.pluck(e.items, "index"), c);
                e.items.splice(a, 1);
                e.TOTAL_NUM_OF_ITEMS--;
                b(e, !0)
            })
        };
        k.prototype.append = function(a, c) {
            var e = this;
            service("layouts", function(c) {
                c.get(e.id, function(c) {
                    var d = null == c.plus ? config["layout.plus"] : c.plus;
                    e.gotoPage("last", "sides", function(c) {
                        e.TOTAL_NUM_OF_ITEMS++;
                        a.index = e.next_index;
                        e.next_index++;
                        if (d) {
                            var f = {
                                state: "plus",
                                "state-plus": !0,
                                index: e.next_index,
                                dhPlus: "dhPlus"
                            }
                        }
                        e.next_index++;
                        0 < e.items.length && "plus" == e.items[e.items.length - 1].state && e.items.pop();
                        e.items.push(a);
                        d && e.items.push(f);
                        b(e, !0, function(a) {})
                    })
                })
            })
        };
        k.prototype.resize = function(a) {
            a = a || this.layout_packed !== this.layout.isPacked() ? !0 : !1;
            this.layout_packed = this.layout.isPacked();
            b(this, a)
        };
        k.prototype.refresh = function() {
            b(this, !0)
        };
        k.prototype.update = function(a, b) {
            var c = a.data("index");
            b.index = c;
            var e = _.indexOf(_.pluck(this.items, "index"), c);
            this.items[e] = b;
            c = $(this.selector + ".index-" + c);
            if (c.length && (c.empty().append(Mustache.render(this.template, b)), c.unbind(), $.isFunction(this.content_model.onDraw))) {
                try {
                    this.content_model.onDraw(c.get(0), this)
                } catch (d) {
                    console.log(d)
                }
            }
        };
        k.prototype.detach = function(a) {
            a = a.dataset.index;
            a = _.pluck(this.items, "index").indexOf(parseInt(a));
            this.detachItem = this.items.splice(a, 1)[0]
        };
        k.prototype.attach = function(a, b) {
            this.items.splice(b, 0, this.detachItem);
            var c = $("div:first-child", a).data();
            this.content_model.onMove(c, b)
        };
        k.prototype.reposition = function(a, b) {
            b = b || $("#" + this.container_id + " > div")[0];
            var c = null;
            !0 === a ? c = "slot-animation" : "slow" === a ? c = "slot-animation-slow" : "medium" === a ? c = "slot-animation-medium" : "fast" === a && (c = "slot-animation");
            var e = this.selector;
            null != c && ($(e, b).addClass(c), setTimeout(function() {
                $(e).removeClass(c)
            }, 500));
            $(e).css("opacity", 1);
            var d = this,
                f = d.layout,
                k = (f.num_of_rows - 1) * f.num_of_cols,
                p = {};
            $(e, b).each(function(a, b) {
                var c = f.getMetrics(a);
                if (0 == p.width || 0 == p.height) {
                    p.width = c.width, p.height = c.height
                }
                $(b).css("display", "block");
                d.setMetrics(b, c);
                if ($.isFunction(d.content_model.onReposition)) {
                    try {
                        d.content_model.onReposition(b, c)
                    } catch (e) {
                        console.log(e)
                    }
                }
                a >= k ? $(b).addClass("reflect") : $(b).removeClass("reflect")
            });
            return p
        };
        k.prototype.reset = function() {
            var a = this;
            c(a, function(b) {
                _.each(b, function(a, b) {
                    a.index = b;
                    a.dhPlus = "plus" == a.state ? "dhPlus" : ""
                });
                a.items = b;
                a.TOTAL_NUM_OF_ITEMS = b.length;
                a.next_index = a.TOTAL_NUM_OF_ITEMS;
                e(a)
            })
        };
        k.prototype.init = function() {
            var a = this;
            newtab.initCSS(this.content_model.style() + ".css");
            c(a, function(b) {
                _.each(b, function(a, b) {
                    a.dhPlus = "plus" == a.state ? "dhPlus" : "";
                    a.index = b
                });
                a.items = b;
                a.TOTAL_NUM_OF_ITEMS = b.length;
                a.next_index = a.TOTAL_NUM_OF_ITEMS;
                e(a)
            });
            $.isFunction(this.content_model.onMove) && DnDHandler.init(this);
            this.init = !1
        };
        return k
    }();

function AutoSuggest(a, f, d) {
    var b = this,
        c = null,
        e = "",
        k = f;
    b.asDiv = null;
    var g = -1,
        h = 0;
    b.action = d;
    b.init = function() {
        a.addEventListener("keydown", b.keyDown, !1);
        a.addEventListener("keyup", b.keyUp, !1)
    };
    b.setSuggestUrl = function(a) {
        k = a
    };
    b.sprintf = function(a, b) {
        var c = a,
            e;
        for (e in b) {
            c = c.replace(RegExp("\\{" + e + "\\}", "gi"), b[e])
        }
        return c
    };
    b.getData = function(c) {
        if (!c) {
            b.asDiv.style.display = "none"
        } else {
            if (void 0 !== k && "" !== k) {
                var d = utils.locale(),
                    d = d.replace("_", "-"),
                    d = b.sprintf(k, {
                        searchTerms: c,
                        lang: d,
                        country: ""
                    }),
                    f;
                f = new XMLHttpRequest;
                f.open("GET", d, !0);
                f.onreadystatechange = function() {
                    if (4 == f.readyState && 200 == f.status) {
                        var d;
                        if (e == c) {
                            null == b.asDiv && (b.asDiv = document.getElementById("search-suggestion-pad"));
                            b.asDiv.innerHTML = null;
                            d = JSON.parse(f.response);
                            d = d[1];
                            h = d.length;
                            for (var k = 0; k < h && 5 > k; k++) {
                                var p = d[k],
                                    s = document.createElement("li"),
                                    w = p.indexOf(c); - 1 != w ? s.innerHTML = p.substr(0, w + c.length) + "<b>" + p.substr(w + c.length) + "</b>" : s.textContent = p;
                                s.setAttribute("id", "auto-suggest-row" + k);
                                s.index = k;
                                s.isRow = !0;
                                s.addEventListener("mouseover", function(a) {
                                    a = a.currentTarget; - 1 != g && document.getElementById("auto-suggest-row" + g).setAttribute("class", "");
                                    a.setAttribute("class", "selected");
                                    g = a.index
                                }, !1);
                                s.addEventListener("click", function(c) {
                                    var e = c.currentTarget;
                                    a.value = e.textContent;
                                    b.onSearch(e.textContent);
                                    c.preventDefault()
                                }, !1);
                                b.asDiv.appendChild(s)
                            }
                            g = -1;
                            0 == h ? b.asDiv.style.display = "none" : ($(b.asDiv).css({
                                top: $("#search-box").offset().top + $("#search-box").height() + 3,
                                left: $("#search-input").offset().left,
                                width: $("#search-box").width()
                            }), b.asDiv.style.display = "block")
                        }
                    }
                };
                f.send("")
            }
        }
    };
    b.keyUp = function(d) {
        d = d.keyCode;
        13 != d && 38 != d && 40 != d && 116 != d && (null != c && (window.clearInterval(c), c = null), e = a.value, c = setTimeout(b.getData, 10, a.value))
    };
    b.keyDown = function(b) {
        b = b.keyCode;
        if (38 == b || 40 == b) {
            38 == b ? (-1 != g && document.getElementById("auto-suggest-row" + g).setAttribute("class", ""), g--, 0 > g && (g = h - 1)) : (-1 != g && document.getElementById("auto-suggest-row" + g).setAttribute("class", ""), g++, g >= h && (g = 0)), b = document.getElementById("auto-suggest-row" + g), b.setAttribute("class", "selected"), a.value = b.textContent
        }
    };
    b.documentMouseDown = function(a) {
        if (a.explicitOriginalTarget != b.asDiv && (e = "--", null != b.asDiv)) {
            b.asDiv.style.display = "none";
            try {
                document.getElementById("container").style.height = "3px"
            } catch (c) {
                console.log(c)
            }
        }
    };
    b.setASdivPosition = function() {
        for (var c = a, e = 0, d = a.offsetHeight - 1; c.offsetParent && "body" != c.tagName.toLowerCase();) {
            e += c.offsetLeft, d += c.offsetTop, c = c.offsetParent
        }
        e += c.offsetLeft;
        d += c.offsetTop;
        null != b.asDiv && (b.asDiv.style.left = e + "px", b.asDiv.style.top = d + "px")
    };
    b.onSearch = function(a) {
        e = "--";
        null != b.asDiv && (b.asDiv.style.display = "none", document.getElementById("container") && (document.getElementById("container").style.height = "29px"), b.action())
    };
    b.changeSuggestUrl = function(a) {
        k = a
    };
    b.init()
}

function getElementScreenPosition(a) {
    for (var f = {
            left: 0,
            top: 0
        }, d = 0, b = 0; a.offsetParent && "body" != a.tagName.toLowerCase();) {
        d += a.offsetLeft, b += a.offsetTop, a = a.offsetParent
    }
    d += a.offsetLeft;
    b += a.offsetTop;
    f.left = d;
    f.top = b;
    return f
}(function() {
    try {
        setTimeout(function() {
            try {
                var a = document.location.hash;
                "" != a && trackUserEvent("newtab_" + a.substr(1), user.itag);
                utils.set("ntopen", Math.round((new Date).getTime() / 1000 / 60))
            } catch (d) {}
            trackLifeCycleEvent("newtab", user.itag);
            a = new Date;
            a = a.getFullYear() + ("0" + (a.getMonth() + 1)).slice(-2) + ("0" + a.getDate()).slice(-2);
            if (null == localStorage.activeDate || localStorage.activeDate != a) {
                localStorage.activeDate = a, trackLifeCycleEvent("active", user.itag), trackStatusEvent("active")
            }
        }, 150)
    } catch (a) {
        console.log(a)
    }
})();

function howToOpen(a) {
    if (1 != a.which && 2 != a.which) {
        return 0
    }
    var f = 2 == a.which || a.ctrlKey;
    a = a.shiftKey;
    return f && a ? 2 : f ? 3 : a ? 4 : 1
}

function openByClick(a, f, d) {
    if (1 != a.which && 2 != a.which) {
        return !0
    }
    /^(chrome:\/\/|http:\/\/|https:\/\/|ftp:\/\/|chrome-extension:\/\/)/.test(f) || (f = "http://" + f);
    switch (howToOpen(a)) {
        case 2:
            chrome.tabs.create({
                url: f,
                selected: !0
            });
            break;
        case 3:
            chrome.tabs.create({
                url: f,
                selected: !1
            });
            break;
        case 4:
            chrome.windows.create({
                url: f
            });
            break;
        case 1:
            if (d) {
                return !1
            }
            chrome.tabs.update(null, {
                url: f
            })
    }
    return !0
}
window.newtab = window.newtab || {};
(function(a, f) {
    a.extend(f, {
        getUserLayoutPreferences: function(a) {
            var b = this.getActiveContent().plugin.id;
            window.service("layouts", function(c) {
                c.get(b, function(b) {
                    var c = "3D show_titles num_of_cols num_of_rows prop size spacing plus".split(" "),
                        g = {},
                        h;
                    for (h in c) {
                        var l = c[h];
                        g[l] = null != b[l] ? b[l] : config["layout." + l];
                        "show_titles" == l && f.setClassState("titles", g[l])
                    }
                    a(g)
                })
            })
        },
        getCurrentLayoutConfig: function(a) {
            this.getActiveContent();
            return function(a, c) {
                f.getUserLayoutPreferences(function(a) {
                    var b = a.spacing,
                        d = 4 >= b ? 1.5 * b : 2 * b,
                        f = a["3D"];
                    c({
                        plus: a.plus,
                        MAX_NUM_OF_ROWS: a.num_of_rows,
                        WIDE_NUM_OF_COLS: a.num_of_cols,
                        NARROW_NUM_OF_COLS: 2,
                        min_space: f ? b / 3 : b,
                        min_width: 108,
                        max_width: a.size,
                        propotion: a.prop,
                        show_titles: a.show_titles,
                        margin: 4,
                        vspace: f ? d / 3 : d,
                        perspective: f
                    })
                })
            }
        }
    })
})(jQuery, window.newtab);
window.newtab = window.newtab || {};
(function(a, f) {
    a.extend(f, {
        getUserThemePreferences: function(a) {
            var b = this.getActiveContent().plugin.id;
            window.service("themes", function(c) {
                c.get(b, function(c) {
                    var f = ["illumination", "luminance", "background", "pattern", "cover-image"],
                        g = {},
                        h;
                    for (h in f) {
                        var l = f[h];
                        g[l] = null != c[l] ? c[l] : config["theme." + l]
                    }
                    g.id = b;
                    a(g)
                })
            })
        },
        showTheme: function() {
            f.getUserThemePreferences(function(d) {
                d.illumination ? a("#newtab").addClass("theme_style-illumination") : a("#newtab").removeClass("theme_style-illumination");
                "light" == d.luminance ? a("#newtab").removeClass("theme_style-dark").addClass("theme_style-light") : a("#newtab").removeClass("theme_style-light").addClass("theme_style-dark");
                "black" == d.mono ? a("#newtab").removeClass("theme_style-monowhite").addClass("theme_style-monoblack") : "white" == d.mono ? a("#newtab").removeClass("theme_style-monoblack").addClass("theme_style-monowhite") : a("#newtab").removeClass("theme_style-monoblack").removeClass("theme_style-monowhite");
                null != d["cover-image"] && d["cover-image"] ? (utils.id(), d = utils.getFileURL("general/" + d["cover-image"]), a("#main-zone").css({
                    "background-image": "url(" + d + ")",
                    "background-color": "white",
                    "background-position": "center",
                    "background-size": "cover"
                })) : (a("#main-zone").css("background", ""), f.setClassState("theme", d.background))
            })
        }
    })
})(jQuery, window.newtab);
var SEARCH_ENGINES = {
    google: {
        ShortName: "Google",
        LongName: "Google Search",
        Image: "data:image/png;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADs9Pt8xetPtu9FsfFNtu%2BTzvb2%2B%2Fne4dFJeBw0egA%2FfAJAfAA8ewBBegAAAAD%2B%2FPtft98Mp%2BwWsfAVsvEbs%2FQeqvF8xO7%2F%2F%2F63yqkxdgM7gwE%2FggM%2BfQA%2BegBDeQDe7PIbotgQufcMufEPtfIPsvAbs%2FQvq%2Bfz%2Bf%2F%2B%2B%2FZKhR05hgBBhQI8hgBAgAI9ewD0%2B%2Fg3pswAtO8Cxf4Kw%2FsJvvYAqupKsNv%2B%2Fv7%2F%2FP5VkSU0iQA7jQA9hgBDgQU%2BfQH%2F%2Ff%2FQ6fM4sM4KsN8AteMCruIqqdbZ7PH8%2Fv%2Fg6Nc%2Fhg05kAA8jAM9iQI%2BhQA%2BgQDQu6b97uv%2F%2F%2F7V8Pqw3eiWz97q8%2Ff%2F%2F%2F%2F7%2FPptpkkqjQE4kwA7kAA5iwI8iAA8hQCOSSKdXjiyflbAkG7u2s%2F%2B%2F%2F39%2F%2F7r8utrqEYtjQE8lgA7kwA7kwA9jwA9igA9hACiWSekVRyeSgiYSBHx6N%2F%2B%2Fv7k7OFRmiYtlAA5lwI7lwI4lAA7kgI9jwE9iwI4iQCoVhWcTxCmb0K%2BooT8%2Fv%2F7%2F%2F%2FJ2r8fdwI1mwA3mQA3mgA8lAE8lAE4jwA9iwE%2BhwGfXifWvqz%2B%2Ff%2F58u%2Fev6Dt4tr%2B%2F%2F2ZuIUsggA7mgM6mAM3lgA5lgA6kQE%2FkwBChwHt4dv%2F%2F%2F728ei1bCi7VAC5XQ7kz7n%2F%2F%2F6bsZkgcB03lQA9lgM7kwA2iQktZToPK4r9%2F%2F%2F9%2F%2F%2FSqYK5UwDKZAS9WALIkFn%2B%2F%2F3%2F%2BP8oKccGGcIRJrERILYFEMwAAuEAAdX%2F%2Ff7%2F%2FP%2B%2BfDvGXQLIZgLEWgLOjlf7%2F%2F%2F%2F%2F%2F9QU90EAPQAAf8DAP0AAfMAAOUDAtr%2F%2F%2F%2F7%2B%2Fu2bCTIYwDPZgDBWQDSr4P%2F%2Fv%2F%2F%2FP5GRuABAPkAA%2FwBAfkDAPAAAesAAN%2F%2F%2B%2Fz%2F%2F%2F64g1C5VwDMYwK8Yg7y5tz8%2Fv%2FV1PYKDOcAAP0DAf4AAf0AAfYEAOwAAuAAAAD%2F%2FPvi28ymXyChTATRrIb8%2F%2F3v8fk6P8MAAdUCAvoAAP0CAP0AAfYAAO4AAACAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQAA",
        InputEncoding: "UTF-8",
        SearchUrl: "http://www.google.com/search?sourceid=chrome&ie=utf-8&oe=utf-8&aq=t&hl={lang}&q={searchTerms}",
        SuggestUrl: "http://www.google.com/complete/search?client=firefox&ie=utf-8&oe=utf-8&hl={lang}&gl={country}&q={searchTerms}",
        SearchForm: "https://www.google.com/"
    },
    github: {
        ShortName: "Github",
        LongName: "Git Hub",
        Image: "/skin/newtab/images/github.png",
        InputEncoding: "UTF-8",
        SearchUrl: "http://github.com/search?utf8=%E2%9C%93&q={searchTerms}",
        SuggestUrl: "http://github.com/search?utf8=%E2%9C%93&q={searchTerms}",
        SearchForm: "http://github.com/"
    },
    yahoo: {
        ShortName: "Yahoo",
        LongName: "Yahoo Search",
        Image: "data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbgJqAIoCdgCaAnoAnhKCAKYijgCuLpIAskKeALpSpgC+Yq4AzHy8ANqezgDmvt4A7tLqAPz5+wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKlRFIoABWAKERERE6ADcKMzzu2hOgAAhERK8REWCWBERE36ERMHMEREvo6iEgY6hEn6Pu0mAzqkz/xjMzoDNwpERERDoAMzAKlERIoAAzMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AADAOQAAgBkAAAAPAAAACQAAAAkAAAAIAAAACAAAAAgAAIAYAADAOAAA//8AAP//AAD//wAA",
        InputEncoding: "UTF-8",
        SearchUrl: "http://search.yahoo.com/search/?ei=UTF-8&p={searchTerms}",
        SuggestUrl: "http://ff.search.yahoo.com/gossip?output=fxjson&command={searchTerms}",
        SearchForm: "http://search.yahoo.com/"
    },
    bing: {
        ShortName: "Bing",
        LongName: "Bing. Search by Microsoft!",
        Image: "data:image/x-icon;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAAAABMLAAATCwAAAAAAAAAAAAAVpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8ysf97zf+24//F6f/F6f/F6f+K0/9QvP8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8krP+Z2P/////////w+f/F6f/F6f/i9P/////////T7v9Bt/8Vpv8Vpv8Vpv8Vpv/T7v/////w+f97zf8Vpv8Vpv8Vpv8Vpv9QvP/T7v/////w+f9Bt/8Vpv8Vpv97zf////////9QvP8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8krP/i9P/////i9P8Vpv8Vpv+24//////i9P8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv+K0/////////8Vpv8Vpv/F6f////////8krP8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv+n3v/////w+f8Vpv8Vpv/F6f////////+n3v8krP8Vpv8Vpv8Vpv8Vpv8Vpv9tx/////////+Z2P8Vpv8Vpv/F6f/////////////i9P+K0/9QvP9QvP9tx//F6f////////+n3v8Vpv8Vpv8Vpv/F6f/////T7v+Z2P/i9P////////////////////+24/9QvP8Vpv8Vpv8Vpv8Vpv/F6f/////F6f8Vpv8Vpv8krP9QvP9QvP9Bt/8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv/F6f/////F6f8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv9Bt/9QvP9Bt/8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8AAHBsAABhdAAAbiAAAHJ0AABsaQAAdGkAACBDAABlbgAAUEEAAEVYAAAuQwAAOy4AAEU7AABBVAAAQ00AAC5W",
        InputEncoding: "UTF-8",
        SearchUrl: "http://www.bing.com/search/?q={searchTerms}",
        SuggestUrl: "http://api.bing.com/osjson.aspx?query={searchTerms}&language={lang}",
        SearchForm: "http://www.bing.com/search"
    },
    youtube: {
        ShortName: "Youtube",
        LongName: "Youtube",
        Image: "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgNkQkIDZGiCA2RzAgNkcwIDZH/CA2R/wgNkf8IDZH/CA2R/wgNkf8IDZH/CA2R2AgNkcwIDZHMCA2RhAgNkQYIDpWHCA6V/wgOlf8IDpX/CA6V/wgOlf8IDpX/CA6V/wgOlf8IDpX/CA6V/wgOlf8IDpX/CA6V/wgOlf8IDpWHCQ6ZzAkOmf8JDpn/CQ6Z/wkOmf8JDpb/BQhc/wgMgf8JDpn/CQ6Z/wkOmf8JDpn/CQ6Z/wkOmf8JDpn/CQ6ZzAkOnuoJDp7/CQ6e/wkOnv8JDp7/Exed/8jIy/9RU4j/Bwp0/wkOm/8JDp7/CQ6e/wkOnv8JDp7/CQ6e/wkOnuoJD6T8CQ+k/wkPpP8JD6T/CQ+k/xUbo//V1dX/1dXV/4yNrP8QFG//CA6Y/wkPpP8JD6T/CQ+k/wkPpP8JD6T8CQ+q/wkPqv8JD6r/CQ+q/wkPqv8WG6n/3d3d/93d3f/d3d3/v7/M/y0wjv8JD6r/CQ+q/wkPqv8JD6r/CQ+q/woQr/8KEK//ChCv/woQr/8KEK//Fx2v/+fn5//n5+f/5+fn/+jo6P+YmtP/ChCv/woQr/8KEK//ChCv/woQr/8KELX8ChC1/woQtf8KELX/ChC1/xgdtf/x8fH/8fHx//Ly8v+bndv/Ehi3/woQtf8KELX/ChC1/woQtf8KELX8ChG76goRu/8KEbv/ChG7/woRu/8YH77/+fn5/+/v9/9fY9H/ChG7/woRu/8KEbv/ChG7/woRu/8KEbv/ChG76goRwMwKEcD/ChHA/woRwP8KEcD/EBfB/6Ol5/8tM8n/ChHA/woRwP8KEcD/ChHA/woRwP8KEcD/ChHA/woRwMwLEcSHCxHE/wsRxP8LEcT/CxHE/wsRxP8LEcT/CxHE/wsRxP8LEcT/CxHE/wsRxP8LEcT/CxHE/wsRxP8LEcSHCxLICQsSyKULEsjMCxLI+QsSyP8LEsj/CxLI/wsSyP8LEsj/CxLI/wsSyP8LEsj/CxLI0gsSyMwLEsiiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAD//wAA//8AAA==",
        InputEncoding: "UTF-8",
        SuggestUrl: "http://www.google.com/complete/search?client=firefox&ds=yt&ie=utf-8&oe=utf-8&hl={lang}&gl={country}&q={searchTerms}",
        SearchUrl: "http://www.youtube.com/results?search_query={searchTerms}",
        SearchForm: "http://www.youtube.com"
    },
    wikipedia: {
        ShortName: "Wikipedia (en)",
        LongName: "Wikipedia, the free encyclopedia",
        Image: "data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAEAgQAhIOEAMjHyABIR0gA6ejpAGlqaQCpqKkAKCgoAPz9%2FAAZGBkAmJiYANjZ2ABXWFcAent6ALm6uQA8OjwAiIiIiIiIiIiIiI4oiL6IiIiIgzuIV4iIiIhndo53KIiIiB%2FWvXoYiIiIfEZfWBSIiIEGi%2FfoqoiIgzuL84i9iIjpGIoMiEHoiMkos3FojmiLlUipYliEWIF%2BiDe0GoRa7D6GPbjcu1yIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        InputEncoding: "UTF-8",
        SuggestUrl: "http://en.wikipedia.org/w/api.php/?action=opensearch&search={searchTerms}",
        SearchUrl: "http://en.wikipedia.org/wiki/Special:Search/?search={searchTerms}",
        SearchForm: "http://en.wikipedia.org/wiki/Special:Search"
    },
    twitter: {
        ShortName: "Twitter",
        LongName: "Realtime Twitter Search",
        Image: "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A/v7+D/7+/j/+/v5g/v7+YP7+/mD+/v5I/v7+KP///wD///8A////AP///wD///8A////AP///wD+/v4H/v7+UPbv4pHgx47B1K9Y3tWwWN7Ur1je3sKCx+rbuKj+/v5n/v7+GP///wD///8A////AP///wD+/v4Y+fbweM2ycMe2iB7/vI0f/8STIf/KlyL/zJki/8yZIv/LmCL/0ahK5/Hp1JH+/v4Y////AP///wD///8A7OTTaquHN+CujkXPs5ZTv6N6G/+2iB7/xpUh/8yZIv/MmSL/zJki/8yZIv/Kmy738OjUi////wD///8A////AMKtfY7w6+Ef////AP///wD///8A3sqbp8iWIf/MmSL/zJki/8yZIv/MmSL/y5gi/8mePO7+/v4w////AP///wD///8A////AP///wD+/v4H/v7+V9CtWN3KmCL/zJki/8yZIv/MmSL/zJki/8yZIv/JlyH/5tSqp/7+/mD+/v4/////AP///wD///8A+PXvJtGyZdXNnS/3y5gi/8qYIv/LmCL/zJki/8yZIv/MmSL/y5gi/82iPO7LqVfe0byMmf///wD///8A/v7+D/Do1JHKmy73ypci/8KSIP+/jyD/xpQh/8uYIv/MmSL/zJki/8qYIv+/jyD/rIEd/9nKqH7///8A////APPu4TzAlSz3wZEg/7mLH/+sgR3/uZdGz7mLH//JlyH/zJki/8yZIv/GlSH/to0r9eXbxD/Vx6dg////AP7+/h/p38WhtIsq9al/HP+kfyjuybaKgf///wCzjzjlwJAg/8qYIv/JlyH/u4wf/8CkYrn///8A////AP///wDj2sRMnHUa/7meYa7Vx6dg////AP///wD///8A2MmnYK6DHf++jiD/vo4g/62CHf/k2sQ/////AP///wD///8A8OvhH/f07w////8A////AP///wD///8A////AP///wC/p3Cfpnwc/66GKvPg1LZ8////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////ANXHp2DJtoqByLWKgf///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A//8AAP//AADgPwAAwA8AAIAHAAB4BwAA+AMAAPAAAADgAQAA4AMAAMEDAADPhwAA/48AAP/nAAD//wAA//8AAA==",
        InputEncoding: "UTF-8",
        SearchUrl: "http://twitter.com/search/{searchTerms}",
        SearchForm: "http://twitter.com/search/"
    },
    amazon: {
        ShortName: "Amazon.com",
        LongName: "Amazon.com Search",
        Image: "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHgSURBVHjalFM9TNtQEP4cB7PwM1RITUXIgsRaYEEVEyKZwhiyZAQyd0BhpFOlIjoBqhjSqVQMoVMLLAjEwECCQJkSkBqJYDOAFOMKFSf28d7DTUxiUDnp/Pzeu/vuu7t3ICKF6SLTMv2/lB0fRWKfjwDm4JJisYh0Oo3fpZLYT0SjSCQS8JAFMADNDZ3NZsnf1taiqVTKi4nGASruk5lkkmTmMB6JUKFQqO+DfX1eABWeQoVR6f7HSdM0obqu48Yw8G1tDT82NsRd1TSbU9BbGPCog8PDj+jLzurFoAVgMh4XxoNDQ6SqKi0tL9eBvAB8zZwymYxYY7EYAoEA8vm82BNTg6XUIs0MeGTZoR1mhXSnwNl4pmAbjU7mcjkKhkL1ynMnntZ4OEw3VyrV8utk7s5TdW++0QXz+1i3P7IK36t+PCfVn1OQOoOA0gXr5DPak+cPXbBK+/T3S69AtY3LJ98vZ1or/iLr+pTuvr59/A6s003UdqZFJF/PCKQ3o5CUznoBST2AfbEF/9iqYEDaIfwj73VJPEfgNTe0tWNYR0uwy9uOW0OkrgHI7z5ADo2C7v48nLV3XHKAT+x/1m1sX58xsBxg8rZJrDYD8DHHp4aJj/MK09sXjPOt46PcCzAACXY8/u34wN0AAAAASUVORK5CYII=",
        InputEncoding: "ISO-8859-1",
        SearchUrl: "http://www.amazon.com/exec/obidos/external-search/?field-keywords={searchTerms}",
        SearchForm: "http://www.amazon.com/"
    },
    gtranslate: {
        ShortName: "Google Translate",
        Image: "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALFYAf8AAAAA4KEq/9+bH//fmx//35sf/9+bH//Wlh7/1pYe/9aWHv8AAAAAAAAAAAAAAADDZAL/w2QC/8NkAv+xWAH/sVgB/9GNB//RjQf/5JoJ/+SaCf/kmgn/0Y0H/9GNB//RjQf/0Y0H/wAAAADDZAL/w2QC/8NkAv+xWAH/sVgB/7FYAf+xWAH/zt3e/9KkRf/kmgn/5JoJ/+SaCf/Bysf/wcrH/9GNB/8AAAAAw2QC/9xzBP/DZAL/w2QC/7FYAf+xWAH/9btM/87d3v/Pyq3/0qRF/9KkRf/PuH//ytTP/8+4f//RjQf/AAAAANxzBP/ccwT/3HME/wAAAACxWAH/+qkS//qpEv/K1M//1OLk/87d3v/O3d7/zt3e/8rUz//goSr/0Y0H/9xzBP/ccwT/3HME/9xzBP/ccwT/1eXn//+2MP//tjD/7c2K/9Ti5P/PuH//9btM/87d3v/Pyq3/5JoJ/+SaCf/Y5un/3HME/9xzBP/ccwT/1OLk/9Ti5P//tjD//7Yw//W7TP/V5ef/z8qt/+3Niv/O3d7/9btM/+SaCf/kmgn/2Obp/8rUz//ccwT/wcrH/6+6uv/K1M///8JX//W7TP/1u0z/5Ny9/9jm6f/K1M//zt3e//qpEv/6qRL/5JoJ/9/r7f/f6+3/zt3e/3N8ef9aYl7/WmJe///CV///wlf//8JX/+3Niv/Y5un/1eXn/+3Niv/6qRL/+qkS/+SaCf/f6+3/3+vt/9/r7f+vurr/WmJe/1piXv//ynD//8pw///KcP//wlf/5Ny9/+Tcvf/1u0z/+qkS//qpEv/6qRL/3+vt/9/r7f/f6+3/WmJe/3N8ef+UnZv/7c2K///KcP//ynD//8pw///CV//1u0z//7Yw//qpEv/6qRL/+qkS/+v09v/r9Pb/wcrH/1piXv/K1M//1OLk/4mBaf//ynD//8pw///KcP//wlf/9btM//+2MP/6qRL/+qkS/wAAAADr9Pb/lJ2b/3N8ef9aYl7/c3x5/3N8ef9aYl7/WmJe/3N8ef/U4uT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6/T2/5Sdm/9zfHn/c3x5/1piXv9aYl7/c3x5/3N8ef9zfHn/1OLk/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOv09v/r9Pb/6/T2/+v09v+vurr/lJ2b/9/r7f/f6+3/2Obp/9Xl5/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6/T2/+v09v/r9Pb/6/T2/9/r7f/f6+3/3+vt/9jm6f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+gEAAMAAAACAAAAAgAAAAIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAD8AAAA/AAAAP///gH///w==",
        SearchUrl: "http://translate.google.com/?source=osdd#auto|auto|{searchTerms}"
    }
};
(function(a) {
    function f() {
        var c = document.querySelector("#search-input").value;
        if ("" != c && null != c) {
            a("#search-suggestion-pad").remove();
            var e = utils.locale(),
                e = e.replace("_", "-");
            if (0 < c.trim().length || null == b.SearchForm) {
                var c = encodeURIComponent(c),
                    d, c = {
                        searchTerms: c,
                        lang: e
                    },
                    e = b.SearchUrl;
                for (d in c) {
                    e = e.replace(RegExp("\\{" + d + "\\}", "gi"), c[d])
                }
                d = e
            } else {
                d = b.SearchForm
            }
            c = utils.get("c_sq");
            null == c ? c = 1 : c++;
            utils.set("c_sq", c);
            trackLifeCycleEvent("search-query", user.itag);
            trackStatusEvent("search-query");
            document.location.href = d
        }
    }
    utils.isz() && (user["show.top-search"] = !0);
    var d = function() {
            var a = config.surl;
            try {
                a = "http://www.baidu.com/#ie=UTF-8&wd={searchTerms}"
            } catch (b) {
                console.log(b)
            }
            return {
                ShortName: "Baidu",
                LongName: "Baidu Search",
                Image: "/skin/newtab/images/baidu.png",
                InputEncoding: "UTF-8",
                SearchUrl: a,
                SuggestUrl: "http://www.baidu.com/#ie=UTF-8&wd={searchTerms}"
            }
        }(),
        b = null;
    a(document).ready(function() {
        function c(c) {
            c = SEARCH_ENGINES[c];
            null == c && (c = d);
            var f = c.Image;
            b = c;
            var g = null == c.LongName ? c.ShortName : c.LongName;
            null == g && (g = "");
            a("#search-input").attr("placeholder", g);
            a("#search-engine-item-icon").css("background-image", "url(" + f + ")");
            try {
                null != window.autoSuggest && window.autoSuggest.setSuggestUrl(c.SuggestUrl)
            } catch (h) {}
        }
        a("#search-input").focus();
        utils.isz() ? b = d : (a("#search-suggestion-pad").css("margin-left", "-52px"), a("#search-engine-select").css("display", "inline-block"), a("#search-input").addClass("custom"), c(user.se), a(this).click(function() {
            a("#search-engine-list").empty().hide();
            a("#search-engine-select").removeClass("active")
        }), a("#search-engine-select").click(function() {
            if (0 < a("#search-engine-list").children().length) {
                a("#search-engine-list").empty(), a(this).removeClass("active")
            } else {
                var b = a('<li data-name=""><img src="' + d.Image + '" width="16px" height="16px"><span>' + d.ShortName + "</span></li>");
                a("#search-engine-list").append(b);
                for (var c in SEARCH_ENGINES) {
                    b = SEARCH_ENGINES[c], b = a('<li data-name="' + c + '"><img src="' + b.Image + '" width="16px" height="16px"><span>' + b.ShortName + "</span></li>"), a("#search-engine-list").append(b)
                }
                a("#search-engine-list").show();
                a(this).addClass("active");
                return !1
            }
        }), a("#search-engine-list").on("click", "li", function() {
            var b = a(this).data("name");
            user.se = b;
            c(b)
        }));
        13 < config.sfontsize && a("#search-input").css("font-size", config.sfontsize);
        (function() {
            var b = !1;
            a("#search-button").click(function() {
                b || (b = !0, f(), setTimeout(function() {
                    b = !1
                }, 1000))
            });
            a("#search-input").keyup(function(a) {
                13 != a.keyCode && 13 != a.which || f.call(this)
            })
        })();
        (function() {
            var a = document.getElementById("search-input");
            window.autoSuggest = new AutoSuggest(a, b.SuggestUrl, f)
        })()
    })
})(jQuery);
window.newtab = window.newtab || {};
(function(a, f) {
    a.extend(f, {
        subscribe: function(a) {
            service("favorites", function(b) {
                b.subscribe(a)
            })
        }
    })
})(jQuery, window.newtab);
window.newtab = window.newtab || {};
(function(a, f) {
    function d(b, c, d, e, f) {
        var g = d.id;
        if (a(".plugin-content.list." + g).length) {
            return a(".plugin-content.list." + g).remove(), !0
        }
        a(".plugin-content").remove();
        var k = d.hPos,
            l = d.vPos,
            h = a(b);
        d.items(function(b) {
            for (var p in b) {
                b[p].icon && (b[p].favIconUrl = "/skin/plugins/images/" + d.id + "/" + b[p].icon), b[p].context = b[p][d.context]
            }
            0 == b.length ? b = a("<div><span>Empty</span></div>").addClass("empty") : (p = e ? loadResource("/skin/newtab/resources/" + e + ".html", "text") : loadResource("/skin/newtab/resources/list.html", "text"), b = a(Mustache.render(p, b)), a(".item > span", b).click(function(a) {
                d.onClick(a, this.dataset.context)
            }), d.header && (a(".header", b).css("display", "block"), a(".header > span", b).text(d.header).click(function() {
                d.onHeaderClick(c)
            })));
            b.addClass(l).addClass(k).addClass(g).addClass("plugin-content list");
            "right" == k ? (p = a(window).width() - (h.offset().left + h.innerWidth()), b.css("right", p)) : b.css("left", h.offset().left);
            "header" == l && b.css("top", h.offset().top + 38);
            a("body").append(b);
            f && f()
        })
    }

    function b(b) {
        var f = e[this.dataset.plugin];
        switch (f.purpose) {
            case "link":
                a(".plugin-content").remove();
                openByClick(b, this.dataset.href);
                break;
            case "list":
                d(this, b, f);
                break;
            case "action":
                var g = f.id;
                if (a(".plugin-content.action." + g).length) {
                    a(".plugin-content.action." + g).remove()
                } else {
                    if (a(".plugin-content").remove(), a.isFunction(f.onClick)) {
                        f.onClick(b, f)
                    }
                }
                break;
            case "content":
                user["general.content"] = f.id, c(f.id)
        }
        return !1
    }

    function c(b) {
        if (!r && 0 != k.length) {
            if (n) {
                utils.isFirstRun() || utils.isUpgradeRequired() || (n = !1, c(b))
            } else {
                if (null != g && a.isFunction(g.plugin.onHide)) {
                    try {
                        g.plugin.onHide()
                    } catch (d) {
                        console.log(d)
                    }
                }
                a("#content").empty();
                g = k[k[b]];
                g || (g = null == k["favorites-null"] ? k[0] : k[k["favorites-null"]], b = g.plugin.id);
                a(".plugin-button.content").removeClass("selected");
                a(".plugin-button.content." + b).addClass("selected");
                if (g) {
                    g.handler.init ? (g.handler.init(), g.handler.init = !1) : g.handler.reset();
                    if (a.isFunction(g.plugin.onShow)) {
                        g.plugin.onShow()
                    }
                    f.showTheme()
                }
            }
        }
    }
    var e = {},
        k = [],
        g = null,
        h = null,
        l = null,
        m = null;
    f.listPluginClicked = d;
    var q = {},
        r = 0,
        n = !0;
    a.extend(f, {
        setClassState: function(b, c) {
            a("#newtab").removeClass(function(a, c) {
                var d = c.match(RegExp(b + "-\\S+", "g"));
                return d ? d.join(" ") : !1
            }).addClass(b + "-" + c)
        },
        showMenu: function(b) {
            var c = b.items;
            if (0 != c.length) {
                var d = b.id;
                if (a(".plugin-content.list." + d).length) {
                    return a(".plugin-content.list." + d).remove(), !0
                }
                a(".plugin-content").remove();
                a(this);
                for (var e in c) {
                    c[e].icon && (c[e].favIconUrl = "/skin/plugins/images/" + b.id + "/" + c[e].icon)
                }
                d = loadResource("/skin/newtab/resources/menu.html", "text");
                c = a(Mustache.render(d, c));
                a(".item > span", c).click(function(a) {
                    b.onClick(this.dataset.id)
                });
                c.addClass("plugin-content list");
                c.css("left", event.pageX + "px");
                c.css("top", event.pageY + "px");
                a("body").append(c)
            }
        },
        initCSS: function(b) {
            q[b] || (q[b] = !0, b = "/skin/plugins/css/" + b, a("head").append("<link rel='stylesheet' href='" + b + "''>"))
        },
        getResource: function(b, c) {
            a.ajax({
                url: "/skin/plugins/resources/" + b,
                async: !0,
                dataType: "text"
            }).success(function(a) {
                c(a)
            })
        },
        delayStartup: function() {
            r++
        },
        releaseStartup: function() {
            r--;
            r || a(function() {
                c(user["general.content"])
            })
        },
        showContent: function(a) {
            c(a)
        },
        getActiveContent: function(a) {
            return g
        },
        getContentHandler: function(a) {
            return k[k[a]].handler
        },
        getPlugin: function(a) {
            return e[a]
        },
        registerPlugin: function(c) {
            if (c.type) {
                switch (e[c.id] = c, c.type) {
                    case "invisible":
                        break;
                    case "content":
                        if (null != c.content_model) {
                            var d = c.content_model;
                            switch (d.type) {
                                case "TILES":
                                    d = new TilesContentHandler(c.id, d);
                                    break;
                                case "SIMPLE":
                                    d = new SimpleContentHandler(c.id, d);
                                    break;
                                default:
                                    return
                            }
                        }
                        k[c.id] = k.length;
                        k.push({
                            plugin: c,
                            handler: d
                        });
                        break;
                    default:
                        a(function() {
                            var d = c.type.split("."),
                                e = null,
                                f = null,
                                g = null;
                            d[2] ? (f = d[0], g = d[1], e = d[2]) : d[1] ? (e = d[1], d = d[0], "left" == d || "right" == d ? (f = "header", g = d) : (g = "left", f = d)) : (f = "header", g = "left", e = d[0]);
                            c.vPos = f;
                            c.hPos = g;
                            c.purpose = e;
                            var d = c.id,
                                k = i18n.translate("plugin_" + c.id, c.title),
                                s = c.tag ? c.tag + " " + d : d;
                            switch (f) {
                                case "side":
                                    var n = a('<li data-plugin="' + d + '" class="plugin-button sidebar ' + e + " " + s + '"><span></span></li>');
                                    h.append(n);
                                    break;
                                case "footer":
                                    switch (e) {
                                        case "link":
                                            n = a('<div data-plugin="' + d + '" data-href="' + (c.href ? c.href : config["link." + d]) + '" class="plugin-button footer ' + g + " " + e + " " + s + '"><span>' + k + "</span></div>");
                                            break;
                                        default:
                                            n = a('<div data-plugin="' + d + '" class="plugin-button footer ' + g + " " + e + " " + s + '"><span>' + k + "</span></div>")
                                    }
                                    switch (g) {
                                        case "left":
                                            m.append(n);
                                            break;
                                        case "right":
                                            l.append(n)
                                    }
                            }
                            n && n.click(b)
                        })
                }
            }
        }
    });
    (function() {
        function b() {
            try {
                g && g.handler.resize(!0)
            } catch (a) {
                console.log(a)
            }
            new Date - c < e ? setTimeout(b, e) : d = !1
        }
        var c = new Date,
            d = !1,
            e = 10;
        a(window).resize(function() {
            c = new Date;
            !1 === d && (d = !0, setTimeout(b, e))
        })
    })();
    a(document).ready(function() {
        a(this).bind("contextmenu", function(b) {
            f.showMenu({
                id: "newtab",
                onClick: function(b) {
                    switch (b) {
                        case "THEME":
                            a(".plugin-button.action.theme").trigger("click");
                            break;
                        case "LAYOUT":
                            a(".plugin-button.action.layout").trigger("click");
                            break;
                        case "ADD":
                            a(".plugin-button.action.add").trigger("click")
                    }
                },
                items: [{
                    id: "ADD",
                    title: "Add new Tile"
                }, {
                    separator: !0
                }, {
                    id: "THEME",
                    title: "Theme"
                }, {
                    id: "LAYOUT",
                    title: "Layout"
                }]
            });
            return !1
        });
        a(this).click(function() {
            a(".plugin-content").remove()
        });
        h = a("#side-bar ul:first-child");
        l = a("#footer_right_area");
        m = a("#footer_left_area");
        setTimeout(function() {
            a("#search-area").addClass("delay-animation");
            a("#content-area").addClass("delay-animation");
            a("#main-zone").addClass("delay-animation")
        }, 500);
        user["show.top-search"] ? a("#newtab").removeClass("search-area-close").addClass("search-area-open") : a("#newtab").removeClass("search-area-open").addClass("search-area-close");
        c();
        var b = !1;
        a("#newtab").bind("mousewheel", function(c, d) {
            if (!b) {
                var e = 0 < c.originalEvent.wheelDelta ? "<<" : ">>";
                if (">>" == e && a("#content .paging-arrow.right-arrow").is(":visible") || "<<" == e && a("#content .paging-arrow.left-arrow").is(":visible")) {
                    b = !0, g.handler.gotoPage(e, "sides", function() {
                        b = !1
                    })
                }
            }
            return !1
        })
    })
})(jQuery, window.newtab);
(function(a) {
    try {
        newtab.registerPlugin({
            type: "invisible",
            id: "settings"
        }), a(function() {
            a("#settings-switch").click(function(d) {
                a("#newtab").addClass("settings-mode")
            })
        })
    } catch (f) {}
})(jQuery);
(function(a) {
    newtab.registerPlugin({
        type: "side.right.action",
        id: "close",
        onClick: function(f) {
            utils.set("_uStng", 1);
            a("#newtab").removeClass("settings-mode").removeClass("edit-mode").addClass("work-mode");
            a(".plusHint").remove()
        }
    });
    a(function() {
        null == utils.get("_uStng") && setTimeout(function() {
            a("#settings-switch").click()
        }, 100)
    })
})(jQuery);
(function(a) {
    newtab.registerPlugin({
        type: "side.right.action",
        id: "add",
        onClick: function(f) {
            "webapps" == newtab.getActiveContent().plugin.id ? window.location = "https://chrome.google.com/webstore" : (a(".favorites.balloon").remove(), user["favorites.user-added"] = !0, newtab.getPlugin("fav-add").add(), a(".plusHint").remove())
        }
    })
})(jQuery);
(function(a) {
    function f() {
        newtab.getActiveContent().handler.refresh()
    }

    function d(b, c) {
        a(".layout-setting." + b).each(function() {
            this.dataset[b] == c && a(this).addClass("selected")
        })
    }

    function b(b) {
        a(".layout-setting." + b + ".selected").removeClass("selected");
        a(this).addClass("selected");
        var c = this.dataset[b];
        switch (this.dataset.datatype) {
            case "int":
                c = parseInt(c);
                break;
            case "float":
                c = parseFloat(c)
        }
        service("layouts", function(a) {
            var d = newtab.getActiveContent().plugin.id,
                e = {};
            e[b] = c;
            trackEvent("Layout", b, c);
            a.update(d, e, f)
        });
        return !1
    }

    function c(c) {
        a(".layout-setting." + c).click(function(a) {
            b.call(this, c)
        })
    }

    function e(b, e) {
        newtab.initCSS("layout.css");
        newtab.getResource("layout.html", function(h) {
            newtab.getUserLayoutPreferences(function(l) {
                var m = a(h);
                i18n.template(m);
                m.addClass("plugin-content action " + e.id);
                a("body").append(m);
                a("#layout-box").css("visibility", "visible").hide().fadeIn("fast");
                a("#layout-3D").get(0).checked = l["3D"];
                a("#show-titles").get(0).checked = l.show_titles;
                var m = ["prop", "size", "spacing", "num_of_cols"],
                    q;
                for (q in m) {
                    var r = m[q];
                    d(r, l[r]);
                    c(r)
                }
                a("#layout-box").click(function(b) {
                    "INPUT" == b.target.tagName || "LABEL" == b.target.tagName ? (b.stopPropagation(), service("layouts", function(c) {
                        var d = newtab.getActiveContent().plugin.id;
                        if ("layout-3D" == b.target.id) {
                            var e = a("#layout-3D").get(0).checked;
                            c.update(d, {
                                "3D": e
                            }, f);
                            trackEvent("Layout", "3D", e ? "set" : "unset")
                        } else {
                            "show-titles" == b.target.id && (e = a("#show-titles").get(0).checked, c.update(d, {
                                show_titles: e
                            }, f), trackEvent("Layout", "titles", e ? "set" : "unset"))
                        }
                    })) : b.stopPropagation()
                });
                a(b.target);
                a("#layout-box").css("right", 85);
                a("#newtab").hasClass("search-area-close") ? a("#layout-box").css("top", 10) : a("#layout-box").css("top", 85);
                a("#layout-box .close-button").click(function() {
                    a("#layout-box").fadeOut("fast", function() {
                        a(this).remove()
                    });
                    return !1
                })
            })
        })
    }
    newtab.registerPlugin({
        type: "side.right.action",
        id: "layout",
        onClick: function(a, b) {
            e(a, b)
        }
    })
})(jQuery);
(function(a) {
    function f(b) {
        newtab.getUserThemePreferences(function(c) {
            newtab.initCSS("theme.css");
            newtab.getResource("theme.html", function(e) {
                e = a(e);
                i18n.template(e);
                e.addClass("plugin-content action " + d.id);
                a("body").append(e);
                a("#theme_style-illumination").get(0).checked = c.illumination;
                a(".theme-preview").css("display", "none");
                a(".theme-preview.set-A").addClass("visible").css("display", "");
                a(".background-set.set-A").addClass("selected");
                a(".background-set").click(function() {
                    var b = this.dataset.set;
                    a(".background-set.selected").removeClass("selected");
                    a(".background-set.set-" + b).addClass("selected");
                    a(".theme-preview.visible").hide();
                    a(".theme-preview.set-" + b).addClass("visible").show()
                });
                a("#theme-box").css("visibility", "visible").hide().fadeIn("fast");
                a("#theme-box").click(function(b) {
                    var c = newtab.getActiveContent().plugin.id;
                    if ("INPUT" == b.target.tagName || "LABEL" == b.target.tagName) {
                        if (b.stopPropagation(), "theme_style-illumination" == b.target.id) {
                            var d = a("#theme_style-illumination").get(0).checked;
                            trackUserEvent("Theme-setting", "illumination", d ? "set" : "unset");
                            service("themes", function(a) {
                                a.update(c, {
                                    illumination: d
                                }, function() {
                                    newtab.showTheme()
                                })
                            })
                        }
                    } else {
                        b.stopPropagation()
                    }
                });
                a(b.target);
                a("#theme-box").css("right", 85);
                a("#newtab").hasClass("search-area-close") ? a("#theme-box").css("top", 10) : a("#theme-box").css("top", 85);
                a(".theme-preview").click(function() {
                    var b = this,
                        c = newtab.getActiveContent().plugin.id,
                        d = a(this).hasClass("light") ? "light" : "dark";
                    service("themes", function(a) {
                        a.update(c, {
                            luminance: d,
                            background: b.dataset.theme,
                            "cover-image": !1
                        }, function() {
                            newtab.showTheme();
                            trackEvent("Theme", b.dataset.theme)
                        })
                    });
                    return !1
                });
                a("#theme-box .close-button").click(function() {
                    a("#theme-box").fadeOut("fast", function() {
                        a(this).remove()
                    });
                    return !1
                });
                a("input[type=file]", "#theme-box").click(function(a) {
                    a.stopPropagation()
                });
                a("input[type=file]", "#theme-box").change(function(a) {
                    a = a.target.files;
                    if (0 != a.length && (a = a[0], a.type.match("image.*"))) {
                        var b = newtab.getActiveContent().plugin.id,
                            c = new FileReader;
                        c.onload = function(a) {
                            var c = a.target;
                            2 == c.readyState && (trackUserEvent("Theme-setting", "cover-image"), service("themes", function(a) {
                                a.saveBackground(b, c.result, function() {
                                    a.update(b, {
                                        "cover-image": "cover_image." + b
                                    }, function() {
                                        newtab.showTheme()
                                    })
                                })
                            }))
                        };
                        c.readAsDataURL(a)
                    }
                });
                a("#theme-file").click(function() {
                    a("input[type=file]", "#theme-box").click();
                    return !1
                })
            })
        })
    }
    var d = {
        type: "side.right.action",
        id: "theme",
        onClick: function(a) {
            f(a)
        }
    };
    newtab.registerPlugin(d)
})(jQuery);
(function(a) {
    newtab.registerPlugin({
        type: "side.right.action",
        id: "edit",
        onClick: function(f) {
            a("#newtab").toggleClass("edit-mode").toggleClass("work-mode")
        }
    })
})(jQuery);
(function(a) {
    utils.isz() || newtab.registerPlugin({
        type: "side.right.action",
        id: "search",
        onClick: function(f) {
            a("#newtab").toggleClass("search-area-close").toggleClass("search-area-open");
            a("#newtab").hasClass("search-area-close") ? user["show.top-search"] = !1 : user["show.top-search"] = !0;
            setTimeout(function() {
                newtab.getActiveContent().handler.refresh()
            }, 250);
            return !1
        }
    })
})(jQuery);
(function(a) {
    if (!utils.isz()) {
        try {
            var f = {
                type: "invisible",
                vPos: "header",
                hPos: "left",
                id: "contents",
                title: "Contents",
                items: function(a) {
                    service("favorites", function(c) {
                        c.getGroups(function(c) {
                            var d = newtab.getPlugin("favorites").getActiveGroupId(),
                                f = [];
                            if (1 < c.length) {
                                for (var h = 0; h < c.length; h++) {
                                    var l = c[h],
                                        m = {
                                            title: l.title,
                                            pluginId: l.id
                                        };
                                    l.id == d && (m.selected = !0, 0 < h && (m.removable = !0));
                                    m.group = !0;
                                    f.push(m)
                                }
                                f.push({
                                    separator: !0
                                })
                            }
                            f.push({
                                title: "Add Group",
                                pluginId: "__addgroup",
                                item: !0
                            });
                            a(f)
                        })
                    })
                },
                context: "pluginId",
                onClick: function(a, c) {
                    if ("__addgroup" == c) {
                        newtab.getPlugin("fav-group").add()
                    } else {
                        var d = "favorites-" + c;
                        newtab.showContent(d);
                        user["general.content"] = d
                    }
                }
            };
            newtab.registerPlugin(f);
            a(function() {
                a("#newtab").prepend('<div id="contents-switch"></div>');
                a("#contents-switch").click(function(b) {
                    newtab.listPluginClicked(this, b, f, "groups", function() {
                        var b = a(".plugin-content.list." + f.id + " .btn");
                        b.length && b.click(function() {
                            var b = a(this).closest(".item > span").data("context"),
                                c = this.dataset.type;
                            "edit" == c ? newtab.getPlugin("fav-group").edit(b) : "remove" == c && newtab.getPlugin("fav-group").remove(b);
                            a(".plugin-content.list." + f.id).remove();
                            return !1
                        })
                    });
                    return !1
                })
            })
        } catch (d) {}
    }
})(jQuery);
(function(a) {
    function f() {
        service("extensionUtils", function(a) {
            a.getDetails(function(c) {
                trackLifeCycleEvent("uninstall-dialog", user.itag);
                c = c.name;
                !0 == confirm(c + "\nBy clicking OK, " + c + " will be removed. ") && (trackLifeCycleEvent("uninstall-direct", user.itag), config.uninstall_url && chrome.tabs.create({
                    url: config.uninstall_url
                }), setTimeout(function() {
                    a.uninstallSelf()
                }, 500))
            })
        })
    }
    try {
        newtab.registerPlugin({
            type: "footer.left.list",
            tag: "icon",
            id: "info",
            title: config.brand,
            items: function(a) {
                var c = utils.isz() ? config["info.links-1"] : config["info.links-0"],
                    d = [],
                    f;
                for (f in c) {
                    var g = i18n.translate("info_" + c[f], c[f]),
                        h = "link." + c[f].toLowerCase().replace(" ", ""),
                        l = "link.rateus" == h ? "https://chrome.google.com/webstore/detail/" + utils.id() + "/reviews" : config[h];
                    if (l) {
                        g = {
                            title: g,
                            url: l
                        };
                        switch (h) {
                            case "link.facebook":
                                g.icon = "facebook.ico";
                                break;
                            case "link.twitter":
                                g.icon = "twitter.ico";
                                break;
                            case "link.rateus":
                                g.icon = "rateus.png";
                                break;
                            case "link.contactus":
                                g.icon = "contactus.png"
                        }
                        d.push(g)
                    }
                }
                a(d)
            },
            context: "url",
            onClick: function(a, c) {
                trackUserEvent("list-info", c);
                "newtab://uninstall" == c ? f() : openByClick(a, c)
            }
        })
    } catch (d) {}
})(jQuery);
(function(a) {
    utils.isz() || newtab.registerPlugin({
        type: "footer.right.list",
        id: "recentlyclosed",
        title: "Recently Closed",
        header: "Clear All",
        context: "url",
        items: function(a) {
            service("tabs", function(d) {
                d.getRecentlyClosed(function(b) {
                    a(b)
                })
            })
        },
        onClick: function(a, d) {
            openByClick(a, d, !1)
        },
        onHeaderClick: function(a) {
            service("tabs", function(a) {
                a.clearRecentlyClosed(function(a) {
                    callback(a)
                })
            })
        }
    })
})(jQuery);
(function(a) {
    newtab.registerPlugin({
        type: "footer.left.action",
        id: "apps",
        title: "Apps",
        onClick: function(a) {
            chrome.tabs.update(null, {
                url: "chrome://apps"
            })
        }
    })
})(jQuery);
(function(a) {
    function f(b, c) {
        c = "undefined" !== typeof c ? c : !1;
        var d = a(".fav-link", b);
        if (c) {
            var e = "create",
                d = {
                    state: e,
                    id: d.data("id"),
                    url: d.data("url"),
                    name: d.data("name"),
                    hostname: d.data("hostname")
                }
        } else {
            e = d.data("state"), d = {
                state: e,
                id: d.data("id"),
                url: d.data("url"),
                name: d.data("name"),
                hostname: d.data("hostname"),
                origin: d.data("origin"),
                mode: d.data("mode"),
                color: d.data("color"),
                thumb: d.data("thumb")
            }
        }
        d["state-" + e] = !0;
        return d
    }

    function d(b, c) {
        var d = a(".fav-link", b).data("id");
        c.remove(a(b));
        service("favorites", function(a) {
            a.remove(n, d)
        })
    }

    function b(a, b) {
        newtab.getPlugin("fav-edit").edit(a, b)
    }

    function c(c, e, g) {
        if ("HIDE" == c) {
            d(e, g), service("layouts", function(a) {
                a.update("favorites-" + n, {
                    plus: !1
                })
            }), a("#settings-switch").click(), a(".plugin-button.sidebar.action.add").sdBalloon("Click the + button to add new tiles", {
                clazz: "plusHint",
                arrow: "right",
                absolute: !0,
                top: 80,
                right: 90
            }), setTimeout(function() {
                a(".plusHint").fadeOut("fast", function() {
                    a(this).remove()
                })
            }, 5000)
        } else {
            if (0 <= ["EDIT", "DELETE"].indexOf(c)) {
                switch (c) {
                    case "EDIT":
                        b(e, g);
                        break;
                    case "DELETE":
                        d(e, g)
                }
            } else {
                var k = f(e, !1),
                    l = f(e, !0);
                switch (c) {
                    case "COVER":
                        k.mode = "cover";
                        k["mode-cover"] = !0;
                        g.update(a(e), k);
                        service("favorites", function(a) {
                            a.update(n, l.id, {
                                mode: "cover"
                            })
                        });
                        break;
                    case "CONTAIN":
                        k.mode = "contain";
                        k["mode-contain"] = !0;
                        g.update(a(e), k);
                        service("favorites", function(a) {
                            a.update(n, l.id, {
                                mode: "contain"
                            })
                        });
                        break;
                    case "PAGE":
                        g.update(a(e), l);
                        service("favorites", function(a) {
                            a.update(n, l.id, {
                                method: "page"
                            })
                        });
                        break;
                    case "LOGO":
                        g.update(a(e), l);
                        service("favorites", function(a) {
                            a.update(n, l.id, {
                                method: "logo",
                                altMethod: "icon"
                            })
                        });
                        break;
                    case "FILE":
                        a("input[type=file]", "#menu-input-file").click(), a("input[type=file]", "#menu-input-file").change(function(b) {
                            a("#menu-input-file").remove();
                            b = b.target.files;
                            if (0 != b.length && (b = b[0], b.type.match("image.*"))) {
                                var c = new FileReader;
                                c.onload = function(b) {
                                    var c = b.target;
                                    2 == c.readyState && (g.update(a(e), l), service("favorites", function(a) {
                                        a.update(n, l.id, {
                                            method: "file",
                                            origin: "user",
                                            mode: "contain",
                                            imgSrc: c.result
                                        })
                                    }))
                                };
                                c.readAsDataURL(b)
                            }
                        })
                }
            }
        }
    }

    function e(b, d, e) {
        if (a("#newtab").hasClass("edit-mode")) {
            return a("#newtab").removeClass("edit-mode").addClass("work-mode"), !1
        }
        var f = a(".fav-link", d),
            g = f.data("origin"),
            k = f.data("mode"),
            l = f.data("state");
        if (f.data("plus")) {
            f = [{
                id: "HIDE",
                title: i18n.translate("hide", "Hide")
            }]
        } else {
            if (f = [{
                    id: "EDIT",
                    title: i18n.translate("edit", "Edit")
                }, {
                    id: "DELETE",
                    title: i18n.translate("delete", "Delete")
                }], "ready" != l) {
                f.splice(2, 7)
            } else {
                f.push({
                    separator: !0
                });
                var l = i18n.translate("favadd_tooltip_screenshot", "Take a Screenshot"),
                    h = i18n.translate("favadd_tooltip_makealogo", "Make a logo");
                switch (g) {
                    case "logo":
                        f.push({
                            id: "PAGE",
                            title: l
                        });
                        break;
                    case "page":
                        f.push({
                            id: "PAGE",
                            title: "Reload Screenshot"
                        });
                        f.push({
                            id: "LOGO",
                            title: h
                        });
                        f.push({
                            separator: !0
                        });
                        break;
                    case "icon":
                        f.push({
                            id: "PAGE",
                            title: l
                        });
                        f.push({
                            separator: !0
                        });
                        break;
                    case "user":
                        f.push({
                            id: "LOGO",
                            title: h
                        }), f.push({
                            id: "PAGE",
                            title: l
                        }), f.push({
                            separator: !0
                        })
                }
                f.push({
                    id: "FILE",
                    title: i18n.translate("favadd_tooltip_imagefile", "Set Custom Image")
                });
                if ("user" == g) {
                    switch (k) {
                        case "cover":
                            f.push({
                                id: "CONTAIN",
                                title: i18n.translate("favadd_tooltip_containimage", "Contain Image")
                            });
                            break;
                        case "contain":
                            f.push({
                                id: "COVER",
                                title: i18n.translate("favadd_tooltip_coverimage", "Cover Image")
                            })
                    }
                }
            }
        }
        g = {
            id: "favs",
            onClick: function(a) {
                c(a, d, e)
            },
            items: f
        };
        0 == a("#menu-input-file").length && a("body").append('<form id="menu-input-file" style="display:none"><input style="display:none;" type="file"/></form>');
        newtab.showMenu(g, b);
        return !1
    }

    function k(b, c) {
        var d = a(".fav-link", b).data("mode"),
            e = c ? {
                width: c.width
            } : null;
        "icon" == d && a(".something-else-semantic", b).fitText(0.8, e)
    }

    function g(b, c) {
        function d() {
            var e = 200 + 200 * k;
            l += e;
            120000 < l || 50 <= k || (k++, setTimeout(function() {
                service("favorites", function(e) {
                    try {
                        e.getTile(n, f, function(e) {
                            "create" != e.state ? ("icon" != e.mode && (e.thumb = e.thumb + "?x=" + (new Date).getTime()), c.update(a(b), e)) : d()
                        })
                    } catch (g) {
                        console.log(g), d()
                    }
                })
            }, e))
        }
        var e = a(".fav-link", b);
        e.data("thumb");
        var f = e.data("id"),
            g = e.data("state"),
            k = 0,
            l = 0,
            h = a(".fav-icon", b);
        0 < h.length && setTimeout(function() {
            var a = e.data("hostname");
            h.css("background-image", "url(https://plus.google.com/_/favicon?domain=" + a + ")")
        }, 50);
        "create" == g && d()
    }

    function h(a) {
        m();
        l(a)
    }

    function l(b) {
        function c(a) {
            try {
                var b = /\{uref}/gi;
                a = a.replace(b, config.uref);
                b = /\{aflt}/gi;
                a = a.replace(b, user.aflt);
                b = /\{cd}/gi;
                a = a.replace(b, user.cd);
                b = /\{cr}/gi;
                a = a.replace(b, user.cr);
                b = /\{locale}/gi;
                a = a.replace(b, utils.locale());
                b = /\{lang}/gi;
                a = a.replace(b, utils.language())
            } catch (d) {
                console.log(d)
            }
            return a
        }
        var d = a(".fav-link", b.currentTarget)[0];
        if (a("#newtab").hasClass("edit-mode")) {
            a("#newtab").removeClass("edit-mode").addClass("work-mode")
        } else {
            var e = a(b.target).closest(".dhItem");
            if (!e.hasClass("dragging")) {
                var f = d.dataset.url;
                if ("plus" == d.dataset.state) {
                    newtab.getPlugin("fav-add").add()
                } else {
                    if (1 == howToOpen(b)) {
                        e.unbind().css("cursor", "default");
                        e.css("-webkit-transform", "none");
                        a(document).unbind();
                        d = a('<div style="position:absolute;z-index:10;top:0;left:0;width:100%;height:100%;background:black;opacity:0.65"></div>');
                        a("#newtab").append(d);
                        var d = a(e).offset(),
                            g = 0.33 * a("body").innerHeight(),
                            k = 1.4 * g;
                        a("body").innerWidth();
                        a("body").innerHeight();
                        var l = d.left - (k - e.width()) / 2,
                            h = d.top - (g - e.height()) / 2;
                        0 >= l - 20 ? l = 20 : l + k + 20 > a("body").innerWidth() && (l = a("body").innerWidth() - k - 20);
                        0 >= h - 20 ? h = 20 : h + g + 20 > a("body").innerHeight() && (h = a("body").innerHeight() - g - 20);
                        a(e).appendTo(a("body")).css({
                            "z-index": 1000,
                            left: d.left,
                            top: d.top
                        });
                        setTimeout(function() {
                            e.addClass("iframe");
                            a(e).css({
                                width: k,
                                height: g,
                                left: l,
                                top: h
                            })
                        }, 0);
                        setTimeout(function() {
                            e.css({
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%"
                            })
                        }, 350)
                    }
                    try {
                        var n = urls.getHostName(f, !0);
                        trackUserEvent("favorite-open", n, null, !0);
                        try {
                            var p = utils.get("c_fo");
                            null == p ? p = 1 : p++;
                            utils.set("c_fo", p)
                        } catch (r) {}
                        var m = document.createElement("a");
                        m.href = urls.ensureURL(f);
                        if ("" != m.search || "/" != m.pathname) {
                            setTimeout(function() {
                                openByClick(b, f)
                            }, 300);
                            return
                        }
                        service("storage", function(a) {
                            a.get("redirects", function(a) {
                                var d = f;
                                null != a && (a = a[n], null != a && (trackUserEvent("redirect-link", f, a), d = c(a)));
                                setTimeout(function() {
                                    openByClick(b, d)
                                }, 300)
                            })
                        })
                    } catch (q) {
                        console.log(q)
                    }
                    return !1
                }
            }
        }
    }
    var m = function() {
            var a;
            service("browserUtils", function(b) {
                b.hasSoftPermissions(function(b) {
                    a = b
                })
            });
            return function() {
                a || chrome.permissions.request({
                    permissions: ["webRequest", "webRequestBlocking"]
                })
            }
        }(),
        q = function(a) {
            this.group = a
        };
    q.prototype = function() {
        return {
            type: "TILES",
            style: function() {
                return "favorites"
            },
            template: function(a) {
                return loadResource("/skin/plugins/resources/favorites.html", "text")
            },
            items: function(a) {
                var b = this.group.id;
                service("favorites", function(c) {
                    c.get(b, function(b) {
                        for (var c = [], d = 0; d < b.length; d++) {
                            var e = b[d];
                            e && c.push(e)
                        }
                        a(c)
                    })
                })
            },
            onMove: function(a, b) {
                var c = this.group.id;
                service("favorites", function(d) {
                    d.move(c, a.id, b)
                })
            },
            onReposition: function(a, b) {
                k(a, b)
            },
            onDraw: function(c, f, l) {
                a(c).click(h);
                a(c).bind("contextmenu", function(a) {
                    e(a, c, f);
                    return !1
                });
                a(".fav-remove", c).click(function(a) {
                    d(c, f);
                    return !1
                });
                a(".fav-edit", c).click(function(a) {
                    b(c, f);
                    return !1
                });
                g(c, f);
                k(c, l)
            }
        }
    }();
    var r = function(a) {
        this.group = a
    };
    r.prototype = function() {
        return {
            type: "TILES",
            style: function() {
                return "favorites"
            },
            template: function(a) {
                return loadResource("/skin/plugins/resources/favorites.html", "text")
            },
            items: function(b) {
                var c = this.group.id;
                service("favorites", function(d) {
                    d.get(c, function(c) {
                        if (0 == c.length) {
                            a(".plugin-button.header.action.add").hide(), b([])
                        } else {
                            for (var d = [], e = 0; e < c.length; e++) {
                                var f = c[e];
                                f && d.push(f)
                            }
                            b(d)
                        }
                    })
                })
            },
            onMove: function(a, b) {
                var c = this.group.id;
                service("favorites", function(d) {
                    d.move(c, a.id, b)
                })
            },
            onReposition: function(a, b) {
                k(a, b)
            },
            onDraw: function(c, e, f) {
                a(c).click(h);
                a(".fav-remove", c).click(d);
                a(".fav-edit", c).click(b);
                g(c, e);
                k(c, f)
            }
        }
    }();
    var n = null,
        p = {
            type: "invisible",
            id: "favorites",
            getActiveGroupId: function() {
                return n
            },
            addFavoritesGroupPlugin: function(b) {
                var c = {
                    group: b,
                    id: "favorites-" + b.id,
                    type: "content",
                    title: b.title,
                    color: b.color,
                    onShow: function() {
                        n = this.group.id;
                        if (a("#newtab").hasClass("edit-mode")) {
                            return newtab.getPlugin("group-edit").edit(c.group), !1
                        }
                    },
                    onHide: function() {},
                    content_model: new q(b)
                };
                "" == user["general.content"] && (user["general.content"] = c.id);
                newtab.registerPlugin(c)
            },
            addSubscribedGroupPlugin: function(b) {
                var c = {
                    group: b,
                    id: "favorites-" + b.id,
                    type: "content",
                    title: b.title,
                    color: b.color,
                    onShow: function() {
                        n = this.group.id;
                        if (a("#newtab").hasClass("edit-mode")) {
                            return newtab.getPlugin("group-edit").edit(c.group), !1
                        }
                    },
                    onHide: function() {},
                    content_model: new r(b)
                };
                "" == user["general.content"] && (user["general.content"] = c.id);
                newtab.registerPlugin(c)
            }
        };
    newtab.registerPlugin(p);
    newtab.delayStartup();
    service("favorites", function(a) {
        a.getPubGroups(function(b) {
            for (var c in b) {
                var d = b[c];
                p.addSubscribedGroupPlugin({
                    id: d.id,
                    title: d.title,
                    color: d.color
                })
            }
            a.getGroups(function(a) {
                for (var b in a) {
                    p.addFavoritesGroupPlugin(a[b])
                }
                newtab.releaseStartup()
            })
        })
    })
})(jQuery);
(function(a) {
    function f(a) {
        return CryptoJS.MD5(a + (new Date).getTime()).toString()
    }

    function d(c) {
        0 < a("#modal-fav-add").length ? a.isFunction(c) && c() : (newtab.initCSS("modal-fav-add.css"), setTimeout(function() {
            newtab.getResource("modal-fav-add.html", function(d) {
                d = a(d);
                i18n.template(d);
                a("body").append(d);
                setTimeout(function() {
                    a("#modal-fav-add").sdDialog("init", h, {
                        open: function() {},
                        show: function() {},
                        hide: function() {},
                        close: function() {
                            null != b && service("browserUtils", function(a) {
                                a.cancelCaptureURL(b)
                            });
                            a("#modal-fav-add").remove()
                        }
                    });
                    a("#modal-fav-add .x-button").click(function() {
                        a("#modal-fav-add").sdDialog("close")
                    });
                    a(".nav-form").click(function() {
                        a(this).addClass("active");
                        a(".nav-form").not(this).removeClass("active");
                        var b = a(this).data("form");
                        a("#modal-fav-add").sdDialog("show", b)
                    });
                    a("#make_screenshot").click(function() {
                        a(this).is(":checked") ? (a("#make_crop_label").css({
                            cursor: "pointer",
                            color: ""
                        }), a("#make_crop").removeAttr("disabled")) : (a("#make_crop_label").css({
                            cursor: "default",
                            color: "lightgray"
                        }), a("#make_crop").attr("disabled", "disabled"))
                    });
                    a("#site-url").keyup(function(b) {
                        "" == a(this).val() || a(this).prop("disabled") ? a("#modal-fav-add #submit").addClass("disabled") : a("#modal-fav-add #submit").removeClass("disabled")
                    });
                    a.isFunction(c) && c()
                }, 0)
            })
        }, 0))
    }
    var b = null,
        c = function() {
            var d = !1;
            return {
                onClose: function() {},
                onShow: function() {
                    a(".nav-button.selected").removeClass("selected");
                    a(".goto-address-button").addClass("selected");
                    a("#fav-url-form input").prop("disabled", 0);
                    a("#submit", this.id).css("disabled", 0);
                    a("#site-url", this.id).prop("disabled", 0).val("");
                    a(".loader", this.id).css("display", "none");
                    a("#site-url").focus();
                    a("#make_screenshot").prop("checked", user["favorites.screenshot"]);
                    user["favorites.screenshot"] ? (a("#make_crop_label").css({
                        cursor: "pointer",
                        color: ""
                    }), a("#make_crop").removeAttr("disabled"), a("#make_crop").prop("checked", user["favorites.crop"])) : (a("#make_crop_label").css({
                        cursor: "default",
                        color: "lightgray"
                    }), a("#make_crop").attr("disabled", "disabled"));
                    service("browserUtils", function(a) {
                        a.hasUserPermissions(function(a) {
                            d = a
                        })
                    })
                },
                onHide: function() {},
                onSubmit: function(b) {
                    b.preventDefault();
                    b.stopPropagation();
                    !(user["favorites.screenshot"] = a("#make_screenshot").is(":checked")) || d ? c._onSubmit(b) : chrome.permissions.request({
                        origins: ["<all_urls>"]
                    }, function(a) {
                        a && c._onSubmit(b)
                    })
                },
                _onSubmit: function(c) {
                    function d(b) {
                        var c = f(h);
                        a("#modal-fav-add").sdDialog("close");
                        b.addMany(l, [{
                            type: "website",
                            method: "logo",
                            altMethod: e ? "page" : "icon",
                            id: c,
                            url: h,
                            name: q
                        }]);
                        b.getTile(l, c, function(a) {
                            null == a && (a = document.createElement("a"), a.href = h, a = {
                                id: c,
                                url: h,
                                name: q,
                                hostname: a.hostname,
                                state: "create",
                                "state-create": !0
                            });
                            m.append(a)
                        })
                    }
                    a("#fav-url-form .advance").css("visibility", "hidden");
                    a("#fav-url-form #site-url").attr("disabled", "disabled");
                    a("#modal-fav-add #add-sources").css("visibility", "hidden");
                    var e = user["favorites.screenshot"] = a("#make_screenshot").is(":checked"),
                        k = user["favorites.crop"] = a("#make_crop").is(":checked");
                    if ("" == a("#site-url").val() || a("#fav-url-form #submit").hasClass("disabled")) {
                        return a("#site-url").focus(), !1
                    }
                    c = a("#site-url").val();
                    trackUserEvent("user-add", c, null, !0);
                    var h = urls.hasProtocol(c) ? c : urls.name2host(c),
                        q = urls.url2name(c);
                    service("favorites", function(c) {
                        e && k ? (a("#fav-url-form #fav-loader").show(), c.checkGallery(h, function(e, f) {
                            null != e ? setTimeout(function() {
                                d(c)
                            }, 500) : service("browserUtils", function(c) {
                                var d = urls.hasProtocol(h) ? h : "http://" + h;
                                b = c.captureURL({
                                    force: !0,
                                    url: d
                                }, function(c, d) {
                                    null == d ? (b = null, a("#modal-fav-add").length && a("#modal-fav-add").sdDialog("close")) : service("imagesUtils", function(b) {
                                        b.crop(d, 1.4, function(b) {
                                            g.setDetails({
                                                url: h,
                                                name: q,
                                                rawImage: b
                                            });
                                            a("#modal-fav-add").length && a("#modal-fav-add").sdDialog("show", "screenshot")
                                        })
                                    })
                                })
                            })
                        })) : d(c)
                    });
                    return !1
                }
            }
        }(),
        e = function() {
            return {
                onClose: function() {},
                onShow: function() {
                    a("#tabs-list").on("click", "li", function(b) {
                        a("#modal-fav-add").sdDialog("close");
                        var c = parseInt(b.currentTarget.getAttribute("data-tab-idx"));
                        chrome.tabs.get(c, function(a) {
                            var b = a.title;
                            a = a.url;
                            var d = f(a),
                                e = {
                                    id: d,
                                    name: b,
                                    url: a,
                                    state: "create",
                                    "state-create": !0
                                },
                                g = {
                                    type: "website",
                                    id: d,
                                    url: a,
                                    name: b,
                                    method: "logo",
                                    altMethod: "tab",
                                    tabId: c
                                };
                            service("favorites", function(a) {
                                a.addMany(l, [g])
                            });
                            m.append(e)
                        })
                    });
                    a(".nav-button.selected").removeClass("selected");
                    a(".goto-tabs-button").addClass("selected");
                    chrome.tabs.query({}, function(b) {
                        var c = a("<ul class='xxx4'>");
                        Array.prototype.forEach.call(b, function(b, d) {
                            /http:\/\/|https:\/\//.test(b.url) && a("<li>").attr("data-tab-idx", b.id).css("backgroundImage", "url(" + b.favIconUrl + ")").text(b.title).appendTo(c)
                        });
                        a(".xxx4", "#tabs-list").remove();
                        a("#tabs-list").append(c)
                    })
                },
                onHide: function() {
                    a(".xxx4", "#tabs-list").remove()
                },
                onSubmit: function() {}
            }
        }(),
        k = function() {
            return {
                onClose: function() {},
                onShow: function() {
                    a("dd.nav-form").removeClass("active");
                    a(a("dd.nav-form")[1]).addClass("active");
                    0 < a("iframe", "#fav-gallery-form").length || a("<iframe>", {
                        src: "gallery.html",
                        frameborder: 0
                    }).appendTo("#fav-gallery-form")
                },
                onHide: function() {
                    a("iframe", "#fav-gallery-form").remove()
                }
            }
        }(),
        g = function() {
            var b, c, d;
            return {
                setDetails: function(a) {
                    b = a
                },
                onClose: function() {
                    c = b = null;
                    null != d && d.destroy()
                },
                onShow: function() {
                    a("dl.sub-nav").hide();
                    c = new Image;
                    c.src = b.rawImage;
                    a("#fav-screenshot-form #sc-image-area").empty().append(c);
                    a(c).Jcrop({
                        onSelect: function() {},
                        bgColor: "black",
                        boxWidth: a("#sc-image-area").width(),
                        bgOpacity: 0.8,
                        minSize: [80, 80],
                        setSelect: [200, 200, 450, 450],
                        aspectRatio: config["layout.prop"]
                    }, function() {
                        d = this;
                        setTimeout(function() {
                            d.animateTo([0, 0, 160 / 0.66, 160 / 0.66 / 1.4])
                        }, 500);
                        a(a(".jcrop-holder img", "#fav-screenshot-form")[1]).addClass("grayFilter")
                    })
                },
                onHide: function() {},
                onSubmit: function(e) {
                    e.preventDefault();
                    e = d.tellSelect();
                    e.x = parseInt(e.x);
                    e.y = parseInt(e.y);
                    e.w = parseInt(e.w);
                    e.h = parseInt(e.h);
                    0 > e.y && (e.y = 0);
                    0 > e.x && (e.x = 0);
                    var g = document.createElement("canvas");
                    g.width = e.w;
                    g.height = e.h;
                    g.getContext("2d").drawImage(c, e.x, e.y, e.w, e.h, 0, 0, e.w, e.h);
                    var k = b.name,
                        h = b.url,
                        v = g.toDataURL("image/png"),
                        t = f(h);
                    a("#modal-fav-add").sdDialog("close");
                    service("favorites", function(a) {
                        a.addMany(l, [{
                            type: "website",
                            method: "file",
                            origin: "page",
                            mode: "cover",
                            imgSrc: v,
                            id: t,
                            url: h,
                            name: k
                        }]);
                        a.getTile(l, t, function(a) {
                            null == a && (a = document.createElement("a"), a.href = h, a = {
                                id: t,
                                url: h,
                                name: k,
                                hostname: a.hostname,
                                state: "create",
                                "state-create": !0
                            });
                            m.append(a)
                        })
                    });
                    return !1
                }
            }
        }(),
        h = {
            url: {
                id: "fav-url-form",
                handler: c
            },
            tabs: {
                id: "fav-tabs-form",
                handler: e
            },
            gallery: {
                id: "fav-gallery-form",
                handler: k
            },
            screenshot: {
                id: "fav-screenshot-form",
                handler: g
            }
        };
    a(document).ready(function() {
        window.addEventListener("message", function(b) {
            function c() {
                if (0 != e.length) {
                    var a = e.shift();
                    m.append(a, function() {
                        setTimeout(c, 150)
                    })
                }
            }
            if (b.origin == utils.getOrigin() || b.origin + "/" == utils.getOrigin()) {
                var d = b.data.payload,
                    e = [];
                switch (b.data.type) {
                    case "add":
                        b = JSON.parse(d);
                        for (var d = [], g = [], k = 0; k < b.length; k++) {
                            var h = b[k],
                                v = h.url,
                                t = f(v),
                                x = {
                                    type: "website",
                                    id: t,
                                    url: v,
                                    name: h.name,
                                    method: "file",
                                    mode: "contain",
                                    imgSrc: h.thumb,
                                    color: h.color
                                };
                            d.push({
                                id: t,
                                name: h.name,
                                url: v,
                                thumb: h.thumb,
                                color: h.color,
                                origin: "logo",
                                state: "ready",
                                "state-ready": !0,
                                mode: "contain",
                                "mode-contain": !0
                            });
                            g.push(x)
                        }
                        e = d.slice(0);
                        setTimeout(c, 0);
                        service("favorites", function(a) {
                            a.addMany(l, g)
                        });
                        a("#modal-fav-add").sdDialog("close")
                }
            }
        }, !1)
    });
    var l = null,
        m = null;
    newtab.registerPlugin({
        type: "invisible",
        id: "fav-add",
        getActiveGroupID: function() {
            return l
        },
        add: function() {
            l = newtab.getPlugin("favorites").getActiveGroupId();
            m = newtab.getContentHandler("favorites-" + l);
            d(function() {
                a("#modal-fav-add").sdDialog("show", "url")
            })
        }
    })
})(jQuery);
(function(a) {
    function f(b, c) {
        newtab.initCSS("modal-fav-edit.css");
        newtab.getResource("modal-fav-edit.html", function(d) {
            d = a(d);
            var f = a("<div>", {
                className: ".modal"
            });
            a("body").append(f);
            i18n.template(d);
            f.append(d);
            a(".x-button").click(function() {
                f.sdModal("close")
            });
            a(".fav-input-name", f).val(b.name).focus();
            a(".fav-input-url", f).val(b.url);
            a(f, "form").submit(function(b) {
                b.preventDefault();
                if (!a("input[type=submit]", this).hasClass("disabled")) {
                    b = a(".fav-input-name", this).val();
                    var d = a(".fav-input-url", this).val();
                    c({
                        name: b,
                        url: d
                    });
                    f.sdModal("close")
                }
                return !1
            });
            f.sdModal("open", {
                close: function() {
                    f.remove()
                }
            })
        })
    }

    function d(b, c) {
        var d = a(".fav-link", b).data("id"),
            k = newtab.getPlugin("favorites").getActiveGroupId();
        service("favorites", function(g) {
            g.getTile(k, d, function(h) {
                f(h, function(f) {
                    if (f.url != h.url) {
                        h.name = f.name, h.url = f.url, h.state = "create", h["state-create"] = !0
                    } else {
                        if (f.name != h.name) {
                            h.name = f.name
                        } else {
                            return
                        }
                    }
                    g.update(k, d, f, function() {
                        c.update(a(b), h)
                    })
                })
            })
        })
    }
    newtab.registerPlugin({
        type: "invisible",
        id: "fav-edit",
        edit: function(a, c) {
            d(a, c)
        }
    })
})(jQuery);
(function(a) {
    function f(d) {
        newtab.initCSS("modal-fav-group.css");
        newtab.getResource("modal-fav-group.html", function(b) {
            b = a(b);
            a("body").append(a("<div>", {
                id: "fav-group-dialog"
            }));
            i18n.template(b);
            a("#fav-group-dialog").append(b);
            null != d && a("#fav-group-dialog #save").removeClass("disabled").removeAttr("disabled");
            a("#fav-group-dialog #dialog-close").click(function() {
                a("#fav-group-dialog").sdModal("close")
            });
            a("#fav-group-dialog #group-name").focus().keyup(function(b) {
                "" == a(this).val() || a("#group-name").prop("disabled") ? a("#fav-group-dialog #save").addClass("disabled").attr("disabled", "disabled") : a("#fav-group-dialog #save").removeClass("disabled").removeAttr("disabled")
            });
            null == d ? (a("#fav-group-dialog #group-color > option"), Math.random(), a("#fav-group-dialog #group-color > option").attr("selected", !1).eq(0).attr("selected", !0)) : (a("#fav-group-dialog #group-name").val(d.title), a("#fav-group-dialog #dialog-title").text(i18n.translate("favgrp_editgroup", "Edit Group")), a("#fav-group-dialog #save").text(i18n.translate("favgrp_savegroup", "Save")));
            a("#fav-group-dialog #fav-group-form").submit(function() {
                return !1
            });
            a("#fav-group-dialog #fav-group-form #save").click(function(b) {
                if (!a(this).attr("disabled")) {
                    b.preventDefault();
                    b.stopPropagation();
                    var e = a("#group-name").val();
                    service("favorites", function(b) {
                        a("#fav-group-dialog").sdModal("close");
                        null == d ? (b.createGroup(e, "#000", function(a) {
                            newtab.getPlugin("favorites").addFavoritesGroupPlugin(a);
                            newtab.showContent("favorites-" + a.id)
                        }), b = utils.locale(), trackUserEvent("group-add", b, e)) : (b.updateGroup(d.id, e, "#000", function(b) {
                            a("#fav-group-dialog").sdModal("close")
                        }), b = utils.locale(), trackUserEvent("group-update", b, e))
                    })
                }
            });
            a("#fav-group-dialog").sdModal("open", {
                close: function() {
                    a("#fav-group-dialog").remove()
                }
            })
        })
    }
    newtab.registerPlugin({
        type: "invisible",
        id: "fav-group",
        edit: function(a) {
            service("favorites", function(b) {
                b.getGroups(function(b) {
                    var e = _.indexOf(_.pluck(b, "id"), a);
                    0 <= e && f(b[e])
                })
            })
        },
        add: function() {
            f(null)
        },
        remove: function(d) {
            confirm(i18n.translate("favgrp_delconfirm", "Are you sure you want to delete this group?\n All its dials will be lost")) && service("favorites", function(b) {
                b.deleteGroup(d, function(b) {
                    a("#fav-group-dialog").sdModal("close");
                    newtab.showContent()
                });
                trackUserEvent("group-delete", utils.locale())
            })
        }
    })
})(jQuery);
(function() {
    function a() {
        0 < $("#rvwFrame").length || ($(function() {
            window.addEventListener("message", f, !1)
        }), $reviewFrame = $("<iframe>", {
            id: "rvwFrame",
            src: "review.html",
            style: "margin:0px;padding:0px;border:none;position:fixed;width:100%;height:100%;z-index:333",
            frameborder: 0
        }), $("#newtab").append($reviewFrame))
    }
    if (null == utils.get("rvwRate")) {
        var f = function(a) {
            "close-review" == a.data && $reviewFrame.remove();
            window.removeEventListener("message", f)
        };
        newtab.review = {
            show: function() {
                a()
            }
        };
        try {
            chrome.runtime.getBackgroundPage(function(b) {
                if ((b = b.rateRule) && b.show()) {
                    var c = b.delay;
                    $(function() {
                        setTimeout(a, c)
                    })
                }
            })
        } catch (d) {}
    }
})();
(function() {
    utils.isz() && chrome.runtime.getBackgroundPage(function(a) {
        if ((a = a.adRule) && a.show()) {
            var f = a.url;
            setTimeout(function() {
                try {
                    var a = utils.get("c_adi");
                    null == a ? a = 1 : a++;
                    utils.set("c_adi", a)
                } catch (b) {}
                trackUserEvent("ad-rule");
                $adFrame = $("<iframe>", {
                    id: "dfp",
                    src: f,
                    style: "opacity:0;transition:opacity 600ms linear;float:left;display:inline-block;width:728px;height:90px",
                    frameborder: 0
                });
                $adUnit = $("<div style='display:block;z-index:9999;position:relative;margin:auto;bottom:0px;width:768px;height:90px;top: 6px;'/>");
                $adUnit.append($adFrame);
                $("#bottom-bar").append($adUnit);
                $adFrame.load(function() {
                    trackUserEvent("ad-load");
                    $("#bottom-bar").addClass("ad");
                    setTimeout(function() {
                        $adFrame.css("opacity", "1")
                    }, 400);
                    setTimeout(function() {
                        trackUserEvent("ad-impression")
                    }, 1200)
                })
            }, a.delay || 1000)
        }
    })
})();
