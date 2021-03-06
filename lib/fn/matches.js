"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 正規表現に対する文字列のマッチングの際に、そのマッチ結果を純粋な配列で得る
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param regexp パターン
 */
function default_1(str, regexp) {
  var matches = str.match(regexp);
  return Array.prototype.concat.apply(matches || []);
}
exports.default = default_1;