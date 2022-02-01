// type PR = (value: string | number, opts: object, routing: boolean) => boolean
function parse(value: string | number, opts: object, useRounding: boolean = true) {
  let v = 0
    , { decimal, errorOnInvalid, precision: decimals } = opts
    , precision = pow(decimals)
    , isNumber = typeof value === 'number';

  if (isNumber || value instanceof currency) {
    v = ((isNumber ? value : value.value) * precision);
  } else if (typeof value === 'string') {
    let regex = new RegExp('[^-\\d' + decimal + ']', 'g')
      , decimalString = new RegExp('\\' + decimal, 'g');
    v = value
          .replace(/\((.*)\)/, '-$1')   // allow negative e.g. (1.99)
          .replace(regex, '')           // replace any non numeric values
          .replace(decimalString, '.')  // convert any decimal values
          * precision;                  // scale number to integer value
    v = v || 0;
  } else {
    if(errorOnInvalid) {
      throw Error('Invalid Input');
    }
    v = 0;
  }

  // Handle additional decimal for proper rounding.
  v = v.toFixed(4);

  return useRounding ? round(v) : v;
}