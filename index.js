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
    //     window.Date.prototype.getDate = window.Date.prototype.getUTCDate;
    //     window.Date.prototype.getDay = window.Date.prototype.getUTCDay;
    //     window.Date.prototype.getFullYear = window.Date.prototype.getUTCFullYear;
    //     window.Date.prototype.getHours = window.Date.prototype.getUTCHours;
    //     window.Date.prototype.getMilliseconds = window.Date.prototype.getUTCMilliseconds;
    //     window.Date.prototype.getMinutes = window.Date.prototype.getUTCMinutes;
    //     window.Date.prototype.getMonth = window.Date.prototype.getUTCMonth;
    //     window.Date.prototype.getSeconds = window.Date.prototype.getUTCSeconds;
    //     window.Date.prototype.getTimezoneOffset = function() { return 0; };
    //     window.Date.prototype.getYear = function() { return this.getFullYear - 1900; };
    //     window.Date.prototype.setDate = window.Date.prototype.setUTCDate;
    //     window.Date.prototype.setFullYear = window.Date.prototype.setUTCFullYear;
    //     window.Date.prototype.setHours = window.Date.prototype.setUTCHours;
    //     window.Date.prototype.setMilliseconds = window.Date.prototype.setUTCMilliseconds;
    //     window.Date.prototype.setMinutes = window.Date.prototype.setUTCMinutes;
    //     window.Date.prototype.setMonth = window.Date.prototype.setUTCMonth;
    //     window.Date.prototype.setSeconds = window.Date.prototype.setUTCSeconds;
    //     window.Date.prototype.setYear = function(n) { return this.setFullYear(n + 1900); };
    //     window.Date.prototype.toLocaleDateString = function() { return ""; };
    //     window.Date.prototype.toLocaleString = function() { return ""; };
    //     window.Date.prototype.toLocaleTimeString = function() { return ""; };
    //     window.Date.prototype.toString = function() { return ""; };
    //     window.Date.prototype.toTimeString = function() { return ""; };
    // })();





    (function() { // navigator
        // let a;
        let fakeNavigator = {};
        //	fakeNavigator.appCodeName						=
        //	fakeNavigator.appName							=
        //	fakeNavigator.appVersion						=
        //	fakeNavigator.platform							=
        // fakeNavigator.product =
        //     fakeNavigator.productSub =
        //     //	fakeNavigator.userAgent							=
        //     fakeNavigator.vendor =
        //     fakeNavigator.vendorSub =
        //     a = "";
        // fakeNavigator.deviceMemory =
        //     fakeNavigator.hardwareConcurrency =
        //     fakeNavigator.maxTouchPoints =
        //     a = 0;
        fakeNavigator.bluetooth =
            fakeNavigator.clipboard =
            // fakeNavigator.connection =
            //	fakeNavigator.cookieEnabled	=
            fakeNavigator.credentials =
            // fakeNavigator.doNotTrack =
            fakeNavigator.geolocation =
            // fakeNavigator.keyboard =
            // fakeNavigator.language =
            // fakeNavigator.languages =
            // fakeNavigator.locks =
            // fakeNavigator.mediaCapabilities =
            // fakeNavigator.mediaDevices =
            fakeNavigator.mediaSession =
            // fakeNavigator.mimeTypes =
            // fakeNavigator.onLine =
            fakeNavigator.permissions =
            fakeNavigator.presentation =
            fakeNavigator.scheduling =
            fakeNavigator.serviceWorker =
            //fakeNavigator.storage =
            // fakeNavigator.usb =
            // fakeNavigator.userActivation =
            // fakeNavigator.userAgentData =
            fakeNavigator.wakeLock =
            fakeNavigator.webkitPersistentStorage =
            fakeNavigator.webkitTemporaryStorage =
            // fakeNavigator.xr =
            // a = {};
            //fakeNavigator.hardwareConcurrency = 4;
            //fakeNavigator.deviceMemory = "undefined";
            //fakeNavigator.platform 							= "Win32";
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

        changeProperty('navigator', 'maxTouchPoints', () => {
            const Touch = [1, 2, 3, 4, 5, 7];
            return Touch[Math.floor(Math.random() * Touch.length)];
        })

        changeProperty('navigator', 'deviceMemory', () => {
            const sizeMem = [4, 6, 8, 16];
            return sizeMem[Math.floor(Math.random() * sizeMem.length)];
        })

        changeProperty('navigator', 'hardwareConcurrency', () => {
            const hardware = [2, 4, 8];
            return hardware[Math.floor(Math.random() * hardware.length)];
        })

        // Ví dụ:  hardware = 2 thì set sizeMem = 4; Touch = 3
        //         hardware = 4,6 thì set sizeMem = 8; Touch = 4,5,6



        changeProperty('navigator', 'languages', () => {
            const lang = ['["vi-VN", "vi", "fr-FR","fr", "en-US", "en"]', '["vi-VN", "fr-FR", "en-US"]', '["en", "en-US"]', '["vi", "vi-VN"]'];
            return lang[Math.floor(Math.random() * lang.length)];
        })


        const mapWidth = new Map();

        mapWidth.set(1400, {
            width: 1400,
            height: 900,
            availHeight: 820,
            availWidth: 1400,
        })
        mapWidth.set(1536, {
            width: 1536,
            height: 864,
            availHeight: 720,
            availWidth: 1520
        });
        mapWidth.set(1366, {
            width: 1366,
            height: 768,
            availHeight: 660,
            availWidth: 1350
        });
        mapWidth.set(1120, {
            width: 1920,
            height: 1200,
            availHeight: 1120,
            availWidth: 1920
        });
        mapWidth.set(1630, {
            width: 1920,
            height: 1080,
            availHeight: 820,
            availWidth: 1630
        });
        mapWidth.set(690, {
            width: 1440,
            height: 900,
            availHeight: 690,
            availWidth: 1400
        });
        mapWidth.set(920, {
            width: 1920,
            height: 1080,
            availHeight: 920,
            availWidth: 1900
        });
        mapWidth.set(1740, {
            width: 1920,
            height: 1200,
            availHeight: 910,
            availWidth: 1740
        });
        mapWidth.set(1350, {
            width: 1366,
            height: 768,
            availHeight: 650,
            availWidth: 1350
        });
        mapWidth.set(1536, {
            width: 1536,
            height: 864,
            availHeight: 720,
            availWidth: 1520
        });
        mapWidth.set(1280, {
            width: 1280,
            height: 960,
            availHeight: 945,
            availWidth: 1260
        });
        mapWidth.set(1024, {
            width: 1024,
            height: 768,
            availHeight: 758,
            availWidth: 910
        });
        mapWidth.set(1830, {
            width: 1920,
            height: 1080,
            availHeight: 1010,
            availWidth: 1830
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
        let n = Math.round(71.5 + (Math.random() * 15)),
            wChanged = false,
            wValue, hChanged = false,
            hValue;
        Object.defineProperty(window, "outerWidth", {
            get: function() {
                if (!wChanged) {
                    return window.innerWidth;
                }
                return wValue;
            },
            set: function(value) {
                wChanged = true;
                wValue = value;
            }
        });
        Object.defineProperty(window, "outerHeight", {
            get: function() {
                if (!hChanged) {
                    return window.innerHeight + n;
                }
                return hValue;
            },
            set: function(value) {
                hChanged = true;
                hValue = value;
            }
        });
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
        let origGetContext = HTMLCanvasElement.prototype.getContext;
        let origGetImageData = CanvasRenderingContext2D.prototype.getImageData;
        let origReadPixels1 = WebGLRenderingContext.prototype.readPixels;
        let origReadPixels2 = WebGL2RenderingContext.prototype.readPixels;
        let origToDataURL = HTMLCanvasElement.prototype.toDataURL;
        let origToBlob = HTMLCanvasElement.prototype.toBlob;
        let getImageData = function getImageData() {
            let imageData = origGetImageData.apply(this, arguments);
            for (let i = 0; i < imageData.data.length; i++) {
                imageData.data[i] += Math.round((Math.random() - 0.5) * 4.9);
            }
            return imageData;
        };
        CanvasRenderingContext2D.prototype.getImageData = getImageData;
        CanvasRenderingContext2D.prototype.getImageData.toString = origGetImageData.toString.bind(origGetImageData);
        let origIsPointInPath = CanvasRenderingContext2D.prototype.isPointInPath;
        CanvasRenderingContext2D.prototype.isPointInPath = function isPointInPath() {
            return false;
        };
        CanvasRenderingContext2D.prototype.isPointInPath.toString = origIsPointInPath.toString.bind(origIsPointInPath);
        let readPixels1 = function readPixels() {
            origReadPixels1.apply(this, arguments);
            let pixels = arguments[6];
            for (let i = 0; i < pixels.length; i++) {
                pixels[i] += Math.round((Math.random() - 0.5) * 4.9);
            }
        };
        WebGLRenderingContext.prototype.readPixels = readPixels1;
        WebGLRenderingContext.prototype.readPixels.toString = origReadPixels1.toString.bind(origReadPixels1);
        let readPixels2 = function readPixels() {
            origReadPixels2.apply(this, arguments);
            let pixels = arguments[6];
            for (let i = 0; i < pixels.length; i++) {
                pixels[i] += Math.round((Math.random() - 0.5) * 4.9);
            }
        };
        WebGL2RenderingContext.prototype.readPixels = readPixels2;
        WebGL2RenderingContext.prototype.readPixels.toString = origReadPixels2.toString.bind(origReadPixels2);
        let toDataURL = function toDataURL() {
            let context = origGetContext.apply(this, ["2d"]);
            let imageData = origGetImageData.apply(context, [0, 0, this.height, this.width]),
                origImageData = origGetImageData.apply(context, [0, 0, this.height, this.width]),
                ret;
            for (let i = 0; i < imageData.data.length; i++) {
                imageData.data[i] += Math.round((Math.random() - 0.5) * 4.9);
            }
            context.putImageData(imageData, 0, 0);
            ret = origToDataURL.apply(this, arguments);
            context.putImageData(origImageData, 0, 0);
            return ret;
        };


        let hookWebGLGetParameter = function(target) {
            let random = {
                "item": function(e) {
                    let rand = e.length * Math.random();
                    return e[Math.floor(rand)];
                },
                "number": function(power) {
                    let tmp = [];
                    for (let i = 0; i < power.length; i++) {
                        tmp.push(Math.pow(2, power[i]));
                    }
                    return random.item(tmp);
                },
                "int": function(power) {
                    let tmp = [];
                    for (let i = 0; i < power.length; i++) {
                        let n = Math.pow(2, power[i]);
                        tmp.push(new Int32Array([n, n]));
                    }
                    return random.item(tmp);
                },
                "float": function(power) {
                    let tmp = [];
                    for (let i = 0; i < power.length; i++) {
                        let n = Math.pow(2, power[i]);
                        tmp.push(new Float32Array([1, n]));
                    }
                    return random.item(tmp);
                }
            };
            let origGetParameter = target.getParameter;
            target.getParameter = function(a1) {
                if (a1 === this.STENCIL_BITS) { return 0; }
                if (a1 === this.DEPTH_BITS) { return 24; }
                if (a1 === this.MAX_VARYING_VECTORS) { return 30; }
                if (a1 === this.VENDOR) { return "WebKit"; }
                if (a1 === 37445) { return "Google Inc."; }
                if (a1 === this.RENDERER) { return "WebKit WebGL"; }
                if (a1 === this.MAX_TEXTURE_SIZE) { return random.number([14, 15]); }
                if (a1 === this.MAX_VERTEX_UNIFORM_VECTORS) { return random.number([12, 13]); }
                if (a1 === this.MAX_CUBE_MAP_TEXTURE_SIZE) { return random.number([14, 15]); }
                if (a1 === this.MAX_RENDERBUFFER_SIZE) { return random.number([14, 15]); }
                if (a1 === this.MAX_VIEWPORT_DIMS) { return random.int([13, 14, 15]); }
                if (a1 === this.ALPHA_BITS) { return random.number([1, 2, 3, 4]); }
                if (a1 === this.BLUE_BITS) { return random.number([1, 2, 3, 4]); }
                if (a1 === this.GREEN_BITS) { return random.number([1, 2, 3, 4]); }
                if (a1 === this.RED_BITS) { return random.number([1, 2, 3, 4]); }
                if (a1 === 34047) { return random.number([1, 2, 3, 4]); }
                if (a1 === this.MAX_TEXTURE_IMAGE_UNITS) { return random.number([1, 2, 3, 4]); }
                if (a1 === this.MAX_VERTEX_ATTRIBS) { return random.number([1, 2, 3, 4]); }
                if (a1 === this.MAX_VERTEX_TEXTURE_IMAGE_UNITS) { return random.number([1, 2, 3, 4]); }
                if (a1 === this.MAX_COMBINED_TEXTURE_IMAGE_UNITS) { return random.number([4, 5, 6, 7, 8]); }
                if (a1 === this.MAX_FRAGMENT_UNIFORM_VECTORS) { return random.number([10, 11, 12, 13]); }
                if (a1 === this.ALIASED_LINE_WIDTH_RANGE) { return random.float([0, 10, 11, 12, 13]); }
                if (a1 === this.ALIASED_POINT_SIZE_RANGE) { return random.float([0, 10, 11, 12, 13]); }
                if (a1 === 37446) {
                    return random.item([
                        "ANGLE (Intel, Intel(R) HD Graphics Family Direct3D9Ex vs_3_0 ps_3_0, igdumd64.dll-8.15.10.2462",
                        "ANGLE (NVIDIA, NVIDIA GRID K200 Direct3D11 vs_5_0 ps_5_0, D3D11-23.21.13.7041)",
                        "AMD Radeon Pro 5500M OpenGL Engine",
                        "ANGLE (NVIDIA GeForce GTX 960 Direct3D11 vs_5_0 ps_5_0)",
                        "AMD Radeon Pro 560X OpenGL Engine",
                        "ANGLE (Intel(R) HD Graphics Family Direct3D11 vs_5_0 ps_5_0)",
                        "ANGLE (Intel, Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11-24.20.100.6286)",
                        "Intel(R) Iris(TM) Graphics 550",
                        "ANGLE (Intel, Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11-26.20.100.8141)",
                        "ANGLE (Intel(R) UHD Graphics 610 Direct3D11 vs_5_0 ps_5_0)",
                        "ANGLE (Intel, Intel(R) HD Graphics 520 Direct3D11 vs_5_0 ps_5_0, D3D11-26.20.100.8142)",
                        "ANGLE (Intel(R) HD Graphics 400 Direct3D11 vs_5_0 ps_5_0)",
                        "ANGLE (Intel, Intel(R) UHD Graphics 630 Direct3D11 vs_5_0 ps_5_0, D3D11-27.20.100.9168)",
                        "AMD Radeon Pro 555X OpenGL Engine",
                        "ANGLE (Intel, Intel(R) Iris(R) Xe Graphics Direct3D11 vs_5_0 ps_5_0, D3D11-27.20.100.9664)",
                        "ANGLE (AMD, AMD Radeon(TM) RX Vega 10 Graphics Direct3D11 vs_5_0 ps_5_0, D3D11-26.20.11030.22001)",
                        "ANGLE (Intel, Intel(R) HD Graphics Direct3D11 vs_5_0 ps_5_0, D3D11-10.18.10.4252)",
                        "Intel(R) Iris(TM) Plus Graphics 655",
                        "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11-26.20.100.7925)",
                        "Intel(R) Iris(TM) Plus Graphics 645",
                        "ANGLE (Intel, Mesa Intel(R) UHD Graphics 630 (CFL GT2), OpenGL 4.6 (Core Profile) Mesa 21.1.4)",
                        "NVIDIA GeForce GT 650M OpenGL Engine",
                        "ANGLE (Intel, Intel(R) UHD Graphics 630 Direct3D11 vs_5_0 ps_5_0, D3D11-27.20.100.9126)",
                        "ANGLE (Intel, Intel(R) HD Graphics 630 Direct3D11 vs_5_0 ps_5_0, D3D11-26.20.100.7263)",
                        "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11-22.20.16.4749)",
                        "ANGLE (Intel, Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11-26.20.100.6888)",
                        "ANGLE (Intel, Intel(R) HD Graphics Direct3D9Ex vs_3_0 ps_3_0, igdumd64.dll-9.17.10.4459)",
                        "ANGLE (Intel, Intel(R) HD Graphics Family Direct3D11 vs_5_0 ps_5_0, D3D11-20.19.15.4352)",
                        "Intel(R) Iris(TM) Plus Graphics 640",
                        "ANGLE (Intel(R) HD Graphics Direct3D11 vs_5_0 ps_5_0)",
                        "Intel(R) Iris(TM) Plus Graphics OpenGL Engine",
                        "ANGLE (NVIDIA, NVIDIA GeForce GTX 1650 Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.6280)",
                        "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)",
                        "NGLE (AMD, AMD Radeon(TM) Graphics Direct3D11 vs_5_0 ps_5_0, D3D11-27.20.11028.10001)",
                        "ANGLE (NVIDIA, NVIDIA GeForce RTX 2060 SUPER Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.6677)",
                        "ANGLE (NVIDIA, NVIDIA GeForce GTX 1660 SUPER Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.6192)",
                        "ANGLE (AMD, Radeon RX550/550 Series Direct3D11 vs_5_0 ps_5_0, D3D11-27.20.22023.1004)",
                        "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Direct3D11 vs_5_0 ps_5_0, D3D11-30.0.14.7111)",
                        "ANGLE (AMD, AMD Radeon(TM) Graphics Direct3D11 vs_5_0 ps_5_0, D3D11-27.20.1028.1)",
                        "ANGLE (NVIDIA GeForce MX250 Direct3D11 vs_5_0 ps_5_0)",
                        "AMD Radeon Pro Vega 16 OpenGL Engine",
                        "Intel(R) UHD Graphics 617",
                        "ANGLE (Intel, Intel(R) HD Graphics 530 Direct3D11 vs_5_0 ps_5_0, D3D11-27.20.100.8681",
                        "Intel(R) HD Graphics 400",
                        "ANGLE (AMD, Radeon RX Vega M GL Graphics Direct3D11 vs_5_0 ps_5_0, D3D11-26.20.15019.19000",
                        "ANGLE (NVIDIA, NVIDIA GeForce RTX 2080 Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.6079)",
                        "ANGLE (NVIDIA, NVIDIA GeForce RTX 2070 Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5709)",
                        "ANGLE (Intel, Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0, D3D11-10.18.10.4358)",
                        "ANGLE (AMD, AMD Radeon(TM) Vega 8 Graphics (RAVEN), OpenGL 4.6 (Core Profile) Mesa 21.0.3)",
                        "ANGLE (AMD, AMD Radeon(TM) RX Vega 11 Graphics Direct3D11 vs_5_0 ps_5_0, D3D11-27.20.1034.6)",
                        "Radeon R9 200 Series",
                        "NVIDIA GeForce GTX 675MX OpenGL Engine",
                        "ANGLE (Intel, Intel(R) HD Graphics 3000 Direct3D9Ex vs_3_0 ps_3_0, igdumd64.dll-9.17.10.4229)",
                        "ANGLE (NVIDIA, NVIDIA GeForce GTX 745 Direct3D11 vs_5_0 ps_5_0, D3D11-23.21.13.9125)",
                        "ANGLE (Intel Open Source Technology Center, Mesa DRI Intel(R) HD Graphics 3000 (SNB GT2), OpenGL 3.3 (Core Profile) Mesa 21.0.3)",
                        "Intel(R) HD Graphics 400",
                        "NGLE (AMD, AMD Radeon R7 200 Series Direct3D11 vs_5_0 ps_5_0, D3D11-27.20.20903.1001)",
                        "AMD Radeon Pro Vega 20 OpenGL Engine",
                        "Intel(R) HD Graphics",
                        "AMD Radeon Pro 555 OpenGL Engine",
                        "GeForce GTX 980/PCIe/SSE2",
                        "ANGLE (Intel, Intel(R) HD Graphics 530 Direct3D11 vs_5_0 ps_5_0, D3D11-27.20.100.9316)",
                        "ANGLE (Intel, Intel(R) HD Graphics 4600 Direct3D11 vs_5_0 ps_5_0, D3D11-20.19.15.5126)",
                        "ANGLE (Intel Open Source Technology Center, Mesa DRI Intel(R) Iris(R) Plus Graphics 655 (CFL GT3), OpenGL 4.6 (Core Profile) Mesa 20.0.8)",
                        "GeForce GTX 980",
                        "AMD Radeon Pro 455 OpenGL Engine",
                        "Intel(R) Iris(TM) Graphics 6100",
                        "GeForce 8800 GTX",
                        "ANGLE (Intel Open Source Technology Center, Mesa DRI Intel(R) HD Graphics 4000 (IVB GT2), OpenGL 4.2 (Core Profile) Mesa 20.3.5)",
                        "Intel(R) HD Graphics 530",
                        "Intel(R) Iris(TM) Plus Graphics 650",
                        "AMD Radeon R9 M380 OpenGL Engine",
                        "Intel(R) Iris(TM) Graphics 540",
                        "Mesa Intel(R) UHD Graphics (CML GT2)",
                        "Intel(R) HD Graphics",
                        "Intel(R) Iris(TM) Plus Graphics OpenGL Engine (1x6x8 (fused) LP",
                        "AMD Radeon Pro Vega 48 OpenGL Engine",
                        "GeForce 8800 GTX/PCIe/SSE2",
                        "AMD Radeon RX 580 OpenGL Engine",
                        "GeForce GTX 480",
                        "Intel(R) Iris(TM) Graphics 650",
                        "Intel(R) HD Graphics 515",
                        "ATI Radeon HD 4670 OpenGL Engine",
                        "NVIDIA GeForce GT 710/PCIe/SSE2",
                        "GeForce GTX 760/PCIe/SSE2"


                    ]);
                }
                if (a1 === this.VERSION) { return random.item(["WebGL 1.0", "WebGL 1.0 (OpenGL)", "WebGL 1.0 (OpenGL Chromium)", "WebGL 2.0 (OpenGL ES 3.0 Chromium)"]); }
                if (a1 === this.SHADING_LANGUAGE_VERSION) { return random.item(["WebGL", "WebGL GLSL", "WebGL GLSL ES", "WebGL GLSL ES (OpenGL Chromium)", "WebGL GLSL ES 3.00 (OpenGL ES 3.0 Chromium)"]); }
                return origGetParameter.apply(this, arguments);
            };
            target.getParameter.toString = origGetParameter.toString.bind(origGetParameter);
        };
        hookWebGLGetParameter(WebGLRenderingContext.prototype);
        hookWebGLGetParameter(WebGL2RenderingContext.prototype);
        HTMLCanvasElement.prototype.toDataURL = toDataURL;
        HTMLCanvasElement.prototype.toDataURL.toString = origToDataURL.toString.bind(origToDataURL);
        let toBlob = function toBlob(callback, type, encoderOptions) {
            let context = origGetContext.apply(this, ["2d"]);
            let imageData = origGetImageData.apply(context, [0, 0, this.height, this.width]),
                imageDataOrig = origGetImageData.apply(context, [0, 0, this.height, this.width]);
            for (let i = 0; i < imageData.data.length; i++) {
                imageData.data[i] += Math.round((Math.random() - 0.5) * 4.9);
            }
            context.putImageData(imageData, 0, 0);
            return origToBlob.apply(this, [function(blob) {
                context.putImageData(imageDataOrig, 0, 0);
                callback(blob);
            }, type, encoderOptions]);
        };
        HTMLCanvasElement.prototype.toBlob = toBlob;
        HTMLCanvasElement.prototype.toBlob.toString = origToBlob.toString.bind(origToBlob);
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
