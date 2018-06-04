// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({4:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @description Contains string pairs for translation
 */
var translationStringPairs = exports.translationStringPairs = ['3-stelliger Steuercode (oder weiter ohne Eingabe)|3-digit control code (or continue without input)', 'ab Werk WOB-Fallersleben|From factory WOB-Fallersleben', 'ab Werk WOB|From factory WOB', 'Abbrechen|Cancel', 'Abgangsort WOB|Departure location WOB', 'andere|others', 'App zur Erfassung der Fahrzeugeingänge|App for vehicle inbound registration', 'Automatik|Automatic', 'Backend wird aufgerufen|Calling backend system', 'Bahn|Train', 'befindet sich im Fahrzeug ein Beipack?|Is there an accessory pack in the vehicle?', 'Benzin|Gasoline', 'Bitte die Zugnummer erfassen|Please enter the train number', 'Bitte Eingangscode scannen|Please scan entry code', 'Bitte erfassen Sie den Stellplatz des Fahrzeugs|Please enter the parking space of the vehicle', 'Bitte Fahrzeugtyp auswählen|Please select vehicle type', 'Bitte geben Sie das ZP8- oder Protokolldatum ein|Please enter the ZP8 or log date', 'Bitte Vertrag auswählen|Please select contract', 'Bitte wählen Sie den Abgangsort aus|Please select the location of departure', 'Bitte wählen Sie den Fahrzeugtyp aus|Please select the vehicle type', 'Bitte wählen Sie den Geschwindigkeitsindex aus|Please select the speed index', 'Bitte wählen Sie den Grund des Vorbehaltes aus|Please select the reason for the reservation', 'Bitte wählen Sie den Verkehrsträger aus|Please select the vehicle type', 'Bitte wählen Sie die Eingangsblock und -Reihe aus|Please select the input block and series', 'Bitte wählen Sie die Getriebeart aus|Please select the gear type', 'Bitte wählen Sie die Kraftstoffart aus|Please select the fuel type', 'Bitte wählen Sie die Reifenart aus|Please select the tire type', 'Bitte warten...|Please wait...', 'Compound auswählen|Choose compound', 'Datum|Date', 'Details zur Ladung|Load details', 'Drucken|Print', 'Eigene Achse|Own Axis', 'eigene Achse|Own Axis', 'Eingang sichern|Save input', 'Eis (Kontrolle nicht möglich)|Ice (no control possible)', 'Eis und Schnee (Kontrolle nicht möglich)|Ice and snow (cannot be checked)', 'Elektromotor|Electric motor', 'Entlastung Fahrer|Easier for driver', 'Erfasste Fahrzeuge|Registered vehicles', 'ERP Aufruf|ERP Call', 'Error|', 'Fahrzeug wurde an SAP zur Weitervearbeitung übergeben \n|Vehicle was transferred to SAP for further processing.', 'Fahrzeug|Vehicle', 'Fahrzeugeingang|Vehicle Inbound Registration', 'Fehler|Error', 'Feld|Field', 'Folie (Kontrolle nicht möglich)|Foil (cannot be checked)', 'Fremd-LKW|Other Truck', 'Gebrauchtwagen ohne Transportmodus|Used car without transport mode', 'Gebrauchtwagen|Used car', 'Hat das Fahrzeug ein Navi?|Does the vehicle have a navigation device?', 'Hat das Fahrzeug eine Folie?|Does the vehicle have a foil?', 'Herst. / Typ / Vertr.|Manuf / Type / Contr.', 'Ja, beschädigt|Yes, damaged', 'Ja, unbeschädigt|Yes, undamaged', 'Ja|Yes', 'Kanndienstleistungen|Optional services', 'Keine Daten vorhanden|No data available', 'Keine Daten zum Review|No data to review', 'Keine Fahrzeuge erfasst|No vehicles registered', 'Keine Fahrzeuge erfasst|No vehicles registered', 'Keine Kanndienstleistungen verfügbar|No optional services available', 'Keine Touren erfasst|No tours registered', 'Keine Verträge gefunden|No contracts were found', 'Ladung|Load', 'Lager Gebr Eigene Achs- #7260#|Used Vehicle own axis Warehouse Pool - #7260# ', 'Lager Gebr FremdAnl - #7259#|Stock Used Third Party Equipment - #7259#', 'Lager Gebr Shuttle - #7261#|Stock Used Shuttle - #7261#', 'Lager Pool Neufzge - #7269#|New Vehicles Warehouse Pool - #7269#', 'LKW|Truck', 'Manuell|Manual', 'manuelle Eingabe|Manual entry', 'Mosolf LKW (eigene und Subunternehmer)|Mosolf Truck (own and sub contractors)', 'Nein|No', 'Neue Erfassung|New Entry', 'Neuwagen ohne Transportmodus|New car without transport mode', 'Neuwagen|New car', 'nicht bekannt|unknown', 'Nicht gefunden (404)|Not found (404)', 'Ohne Vorbehalt|Without reservatio', 'Paginier Nummer eingeben|Enter Paginier number', 'Paginier Nummer|Paginier number', 'Paginiernummer erfassen|Store Paginier number', 'Paginiernummer|Paginier number', 'Regen (Kontrolle nicht möglich)|Rain (cannot be checked)', 'Review-Schritt|Review Step', 'Schadenserfassung|Record a damage', 'Schiff|Ship', 'Schließen|Close', 'Schnee (Kontrolle nicht möglich)|Snow (cannot be checked)', 'Sixt Einsteuerung - #7289#|Sixt Control - #7289#', 'Sommer|Summer', 'Sorry, die Seite ist nicht verfügbar!|Sorry, this page is not available!', 'Streckenbruch-Prüfung|Check for tour breaks', 'Tour beenden|End tour', 'Touren Übersicht|Tours Overview', 'Übernehmen|Confirm', 'übertragen|Transmit', 'Userdaten und Customizing werden geladen...|Loading user data and customizing...', 'verdeckter Schaden (Kontrolle nicht möglich)|Concealed damage (cannot be checked)', 'Verkehrsträger auswählen|Choose Vehicle Type', 'Vertragsprüfung|Contract review', 'VIN fehlt in Aufruf zur VIN_Prüfung|VIN is missing', 'VIN scannen|Scan VIN', 'VW Zielbahnhof 38 - #4688#|VW destination station 38 - #4688#', 'Warte auf Daten|Waiting for data', 'Weiter|Continue', 'Wert|Value', 'Zeit|Time', 'Zugnummer|Train number', 'Zugnummernprüfung|Checking train number', 'Zum Host ARV_DREC021 konnte kein Compound ermittelt werden! \n|No compound could be determined for host ARV_DREC021!'];
},{}],1:[function(require,module,exports) {
'use strict';

var _translations = require('./translations');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// const possibleTextClasses = [
// 	'sapUiInvisibleText',
// 	'sapMText',
// 	'sapMSLITitleOnly',
// 	'sapMFeedListItemInfoText',
// 	'sapMObjectAttributeText',
// 	'sapMBtnContent'
// ];
// const possibleTextIDs = [
// 	'__label1-bdi',
// 	'__label14-bdi',
// 	'__label15-bdi',
// 	'__label16-bdi',
// 	'__error0-title-inner'
// ];
function main() {
    iterateThroughMostInnerDivs();
    setInterval(function () {
        iterateThroughMostInnerDivs();
    }, 10);
}
function iterateThroughMostInnerDivs() {
    var bodyDivs = document.body.getElementsByTagName('*');
    // @ts-ignore
    var mostInnerDivs = [].concat(_toConsumableArray(bodyDivs)).filter(function (e) {
        return e.childElementCount === 0;
    });
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _translations.translationStringPairs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var pair = _step.value;

            var germanText = pair.split('|')[0];
            for (var i = 0; i < mostInnerDivs.length; i++) {
                var currentNode = mostInnerDivs[i];
                if (currentNode.textContent === germanText) {
                    // console.log(currentNode.textContent);
                    var englishTranslation = pair.split('|')[1];
                    currentNode.textContent = englishTranslation;
                }
                if (currentNode.tagName === 'input') {
                    var inputNode = currentNode;
                    if (inputNode.placeholder === germanText) {
                        var _englishTranslation = pair.split('|')[1];
                        inputNode.placeholder = _englishTranslation;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
console.log('Translation background server started.');
main();
},{"./translations":4}],9:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '61292' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[9,1], null)
//# sourceMappingURL=/translatePage.map