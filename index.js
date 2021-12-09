let script = document.createElement("script");
script.textContent = "(" + (function() {
    "use strict";
    let debug = function(topOnly) {
        if (!topOnly || window === window.top) {
            // debugger;
        }
    };
    (function() {
        document.documentElement.dataset.fbscriptallow = true;
    })();
    // let randomChange = function(n, m) {
    //     if (!m) {
    //         m = 0.1;
    //     }
    //     return Math.round(n + ((Math.random() - 0.5) * 2 * n * 0.3));
    // };
    let setValue = function(object, propertyName, value, writable) {
        if (!writable) {
            writable = false;
        }
        Object.defineProperty(object, propertyName, {
            value: value,
            writable: writable,
            enumerable: true
        });
    };
    // (function() { // Date
    //Demo delete Data
    // })();





    (function() { // navigator

        //Demo delete Data
        fakeNavigator.plugins = [];
        setValue(fakeNavigator.plugins, "item", function item() { return null; }, false);
        setValue(fakeNavigator.plugins, "namedItem", function namedItem() { return null; }, false);
        setValue(fakeNavigator.plugins, "refresh", function refresh() { return null; }, false);
        for (let i in window.navigator) {
            if (fakeNavigator[i] !== undefined) {
                try {
                    Object.defineProperty(window.navigator, i, {
                        get: function() {
                            if (fakeNavigator[i] === "undefined") {
                                return undefined;
                            }
                            return fakeNavigator[i];
                        }
                    });
                } catch (e) {}
            }
        }
    })();
    (function() { // Screen size
        const NOOP = x => {};

        function changeProperty(parent, attribute, cb) {
            Object.defineProperty(window.navigator, attribute, {
                get: function() {
                    return cb();
                },
                set: NOOP,
                configurable: true
            });
        }

        //Demo delete Data navigator', 'deviceMemory'
        //Demo delete Data navigator', 'hardwareConcurrency'
        //Demo delete Data navigator', 'languages'


        const mapWidth = new Map();

        //Demo delete Data

        mapWidth.set(1830, {
            width: 1920,
            height: 1080
                //Demo delete Data
        });
        const allWidth = Array.from(mapWidth.keys());

        Object.entries(mapWidth.get(allWidth[Math.floor(Math.random() * allWidth.length)]))
            .forEach(([key, value]) => {
                Object.defineProperty(window.screen, key, {
                    get: function() {
                        return value;
                    },
                    set: NOOP,
                    configurable: true
                });

            })



    })();
    (function() { // Debugger panel size
        //Demo delete Data
    })();
    (function() { // AudioContext
        let origGetFloatFrequencyData = window.AnalyserNode.prototype.getFloatFrequencyData;
        window.AnalyserNode.prototype.getFloatFrequencyData = function getFloatFrequencyData(array) {
            let ret = origGetFloatFrequencyData.apply(this, arguments);
            for (let i = 0; i < array.length; i++) {
                array[i] = array[i] + Math.random() * 0.2;
            }
            return ret;
        };
        window.AnalyserNode.prototype.getFloatFrequencyData.toString = origGetFloatFrequencyData.toString.bind(origGetFloatFrequencyData);
        let origGetChannelData = window.AudioBuffer.prototype.getChannelData;
        window.AudioBuffer.prototype.getChannelData = function getChannelData() {
            let ret = origGetChannelData.apply(this, arguments);
            for (let i = 0; i < ret.length; i++) {
                ret[i] = ret[i] + Math.random() * 0.0001;
            }
            return ret;
        };
        window.AudioBuffer.prototype.getChannelData.toString = origGetChannelData.toString.bind(origGetChannelData);
    })();
    (function() { // Canvas
        //Demo delete Data
    })();

    (function() { // Intl
        window.Intl = undefined;
    })();
    (function() { // Fonts
        let offsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "offsetWidth");
        let origOffsetWidthGetter = offsetWidth.get;
        offsetWidth.get = function offsetWidth() {
            let ret = origOffsetWidthGetter.apply(this, arguments);
            if (ret != 0) {
                if (Math.random() >= 0.9) {
                    ret += Math.floor((Math.random() >= 0.5 ? -1 : 1) * Math.random() + Math.random());
                }
            }
            return ret;
        };
        offsetWidth.get.toString = origOffsetWidthGetter.toString.bind(origOffsetWidthGetter);
        Object.defineProperty(HTMLElement.prototype, "offsetWidth", offsetWidth);
        let offsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "offsetHeight");
        let origOffsetHeightGetter = offsetHeight.get;
        offsetHeight.get = function offsetHeight() {
            let ret = origOffsetWidthGetter.apply(this, arguments);
            if (ret != 0) {
                if (Math.random() >= 0.9) {
                    ret += Math.floor((Math.random() >= 0.5 ? -1 : 1) * Math.random() + Math.random());
                }
            }
            return ret;
        };
        offsetHeight.get.toString = origOffsetHeightGetter.toString.bind(origOffsetHeightGetter);
        Object.defineProperty(HTMLElement.prototype, "offsetHeight", offsetHeight);
    })();
    let debuggerHook = function(n, m) {
        try {
            let orig = window[n].prototype[m];
            let hook = function() {
                debug();
                try {
                    return orig.apply(this, arguments);
                } catch (e) {}
            };
            Object.defineProperty(hook, "name", { value: orig.name, writable: false, enumerable: false, configurable: true });
            window[n].prototype[m] = hook;
            window[n].prototype[m].toString = orig.toString.bind(orig);
        } catch (e) {}
    };
    let debuggerHookAll = function(n) {
        try {
            for (let i in window[n].prototype) {
                try {
                    if (window[n].prototype[i] instanceof Function) {
                        debuggerHook(n, i);
                    }
                } catch (e) {}
            }
        } catch (e) {}
    };
    debug(1);
    try {
        debuggerHookAll("AudioContext");
        debuggerHookAll("BaseAudioContext");
        debuggerHookAll("OfflineAudioCompletionEvent");
        debuggerHookAll("OfflineAudioContext");
        debuggerHookAll("AudioBuffer");
        debuggerHookAll("AnalyserNode");
        debuggerHookAll("HTMLCanvasElement");
        debuggerHookAll("CanvasRenderingContext2D");
        debuggerHookAll("WebGLRenderingContext");
        debuggerHookAll("WebGL2RenderingContext");
    } catch (e) {}
}) + ")()";
document.documentElement.prepend(script);