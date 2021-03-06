"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var arrayize_1 = require("../util/arrayize");
/**
 * 文字位置による抽出
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str 対象の文字列
 * @param start 開始インデックス
 * @param end 終了インデックス 省略すると最後まで
 */
function default_1(str, start, end) {
  var array = arrayize_1.default(str);
  var res = array.slice(start, end);
  return res.join('');
}
exports.default = default_1;