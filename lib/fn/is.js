"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 完全マッチ
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 比較する文字列
 * @param target 比較する文字列
 */
function default_1(str, target) {
  return str === target.toString();
}
exports.default = default_1;