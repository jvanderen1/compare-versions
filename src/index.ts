// function forceType(a, b) {
//   return typeof a !== typeof b ? [String(a), String(b)] : [a, b];
// }

// function compareStrings(a, b) {
//   const [ap, bp] = forceType(tryParse(a), tryParse(b));
//   if (ap > bp) return 1;
//   if (ap < bp) return -1;
//   return 0;
// }
//
// function compareSegments(a, b) {
//   for (let i = 0; i < Math.max(a.length, b.length); i += 1) {
//     const r = compareStrings(a[i] || 0, b[i] || 0);
//     if (r !== 0) return r;
//   }
//   return 0;
// }

// const allowedOperators = ['>', '>=', '=', '<', '<='];

// const operatorResMap = {
//   '>': [1],
//   '>=': [0, 1],
//   '=': [0],
//   '<=': [-1, 0],
//   '<': [-1],
// };
//
// function validateOperator(op) {
//   if (typeof op !== 'string') {
//     throw new TypeError(
//       'Invalid operator type, expected string but got ' + typeof op
//     );
//   }
//   if (allowedOperators.indexOf(op) === -1) {
//     throw new TypeError(
//       'Invalid operator, expected one of ' + allowedOperators.join('|')
//     );
//   }
// }

// compareVersions.validate = function (version) {
//   return typeof version === 'string' && semver.test(version);
// };
//
// compareVersions.compare = function (v1, v2, operator) {
//   // Validate operator
//   validateOperator(operator);
//
//   // since result of compareVersions can only be -1 or 0 or 1
//   // a simple map can be used to replace switch
//   const res = compareVersions(v1, v2);
//   return operatorResMap[operator].indexOf(res) > -1;
// };
//
// compareVersions.satisfies = function (v, r) {
//   // if no range operator then "="
//   const match = r.match(/^([<>=~^]+)/);
//   const op = match ? match[1] : '=';
//
//   // if gt/lt/eq then operator compare
//   if (op !== '^' && op !== '~') return compareVersions.compare(v, r, op);
//
//   // else range of either "~" or "^" is assumed
//   const [v1, v2, v3] = validateAndParse(v);
//   const [m1, m2, m3] = validateAndParse(r);
//   if (compareStrings(v1, m1) !== 0) return false;
//   if (op === '^') {
//     return compareSegments([v2, v3], [m2, m3]) >= 0;
//   }
//   if (compareStrings(v2, m2) !== 0) return false;
//   return compareStrings(v3, m3) >= 0;
// };

export { compareVersions as default } from './compareVersions'
