"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 半角カタカナ
 *
 * 濁点／半濁点は分解されているのでそれを含む
 * ヰヱの半角は存在しないので対象外
 *
 * [ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ]
 *
 * @unused
 * @deprecated
 *
 */
exports.NARROW_KATAKANA_CHARS = "\uFF66-\uFF9F";