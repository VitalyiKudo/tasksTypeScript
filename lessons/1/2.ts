
/**
 * Create a new instance of currency.js
 * @param {number|string|currency} value
 * @param {object} [opts]
 */
type INI = (this: INI, value: number | string | INI, opts: object) => void 
// type INI = number | string | 
<INI>function currency(value, opts) {
  let that = this;

  if(!(that instanceof currency)) {
    return new currency(value, opts);
  }

  let settings = Object.assign({}, defaults, opts)
    , precision = pow(settings.precision)
    , v = parse(value, settings);

  that.intValue = v;
  that.value = v / precision;

  // Set default incremental value
  settings.increment = settings.increment || (1 / precision);

  // Support vedic numbering systems
  // see: https://en.wikipedia.org/wiki/Indian_numbering_system
  if(settings.useVedic) {
    settings.groups = vedicRegex;
  } else {
    settings.groups = groupRegex;
  }

  // Intended for internal usage only - subject to change
  this._settings = settings;
  this._precision = precision;
}