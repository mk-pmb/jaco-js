import Jaco from '../lib/jaco.js';

describe('Jaco Class', () => {

	// constructor
	it('newされたインスタンスは別のオブジェクト', () => {
		const a = new Jaco('あ');
		const b = new Jaco('あ');
		a.should.not.equal(b);
	});

	// charAt()
	it('抜き出し', () => {
		const a = new Jaco('𩸽のひらき');
		a.charAt().should.equal('𩸽');
	});

	// charAt()
	it('抜き出し2', () => {
		const a = new Jaco('𩸽のひらき');
		a.charAt(0).should.equal('𩸽');
	});

	// charAt()
	it('抜き出し3', () => {
		const a = new Jaco('𩸽のひらき');
		a.charAt(1).should.equal('の');
	});

	// charAt()
	it('抜き出し4', () => {
		const a = new Jaco('𩸽のひらき');
		a.charAt(99).should.equal('');
	});

	// charCodeAt()
	it('コード抜き出し', () => {
		const a = new Jaco('𩸽のひらき');
		a.charCodeAt().should.equal(0x29E3D);
	});

	// charCodeAt()
	it('コード抜き出し2', () => {
		const a = new Jaco('𩸽のひらき');
		a.charCodeAt(0).should.equal(0x29E3D);
	});

	// charCodeAt()
	it('コード抜き出し3', () => {
		const a = new Jaco('𩸽のひらき');
		a.charCodeAt(1).should.equal(0x306e);
	});

	// charCodeAt()
	it('コード抜き出し4', () => {
		const a = new Jaco('𩸽のひらき');
		a.charCodeAt(99).should.be.eql(NaN);
	});

	// toString()
	it('暗黙の型変換 文字列に変換', () => {
		const a = new Jaco('あ');
		`${a}い`.should.equal('あい');
	});

	// valueOf()
	it('暗黙の型変換 文字列に変換後さらに数値に変換される', () => {
		const a = new Jaco('1');
		(+a).should.equal(1);
	});

	// concat()
	it('連結', () => {
		const a = new Jaco('あ');
		a.concat('い', new Jaco('う'), 'え', new Jaco('お'));
		a.toString().should.equal('あいうえお');
	});

	// replace()
	it('置換', () => {
		const a = new Jaco('abcdeABCDE');
		a.replace(/abc/ig, 'z');
		a.toString().should.equal('zdezDE');
	});

	// slice()
	it('抽出', () => {
		const a = new Jaco('いろはにほへと');
		const b = a._str.slice(1, 5);
		b.toString().should.equal('ろはにほ');
	});
	it('抽出2', () => {
		const a = new Jaco('いろはにほへと');
		const b = a._str.slice(1);
		b.toString().should.equal('ろはにほへと');
	});

	// substr()
	it('抽出3', () => {
		const a = new Jaco('いろはにほへと');
		const b = a._str.substr(1, 2);
		b.toString().should.equal('ろは');
	});
	it('抽出4', () => {
		const a = new Jaco('いろはにほへと');
		const b = a._str.substr(1);
		b.toString().should.equal('ろはにほへと');
	});

	// substring()
	it('抽出5', () => {
		const a = new Jaco('いろはにほへと');
		const b = a._str.substring(0, 2);
		b.toString().should.equal('いろ');
	});
	it('抽出6', () => {
		const a = new Jaco('いろはにほへと');
		const b = a._str.substring(1, 3);
		b.toString().should.equal('ろは');
	});

	// toLowerCase()
	it('小文字に変換', () => {
		const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.toLowerCase().toString().should.equal('abcdefghijklmnopqrstuvwxyz');
	});

	// toUpperCase()
	it('大文字に変換', () => {
		const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.toUpperCase().toString().should.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
	});

	// remove()
	it('削除', () => {
		const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.remove('aBc');
		a.toString().should.equal('DeFgHiJkLmNoPqRsTuVwXyZ');
	});
	it('削除2', () => {
		const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.remove(/[a-z]/);
		a.toString().should.equal('BcDeFgHiJkLmNoPqRsTuVwXyZ');
	});
	it('削除3', () => {
		const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.remove(/[a-z]/g);
		a.toString().should.equal('BDFHJLNPRTVXZ');
	});

	// trim()
	it('前後の空白を削除', () => {
		const a = new Jaco('a b');
		a.trim();
		a.toString().should.equal('a b');
	});
	it('前後の空白を削除2', () => {
		const a = new Jaco(' a b');
		a.trim();
		a.toString().should.equal('a b');
	});
	it('前後の空白を削除3', () => {
		const a = new Jaco('a b  　');
		a.trim();
		a.toString().should.equal('a b');
	});
	it('前後の空白を削除4', () => {
		const a = new Jaco('　a 　b\n');
		a.trim();
		a.toString().should.equal('a 　b');
	});

	// size()
	it('文字数', () => {
		const a = new Jaco('あいうえおabc');
		a.size().should.equal(8);
	});
	it('文字数2', () => {
		const a = new Jaco('あ い う え\nお a b c');
		a.size().should.equal(15);
	});

	// byteSize()
	it('バイト数', () => {
		const a = new Jaco('あいうえおabc');
		a.byteSize().should.equal(18);
	});
	it('バイト数2', () => {
		const a = new Jaco('あ い う え\nお a b c');
		a.byteSize().should.equal(25);
	});

	// isEmpty()
	it('空', () => {
		const a = new Jaco('');
		a.isEmpty().should.ok;
	});
	it('空2', () => {
		const a = new Jaco(' ');
		a.isEmpty().should.not.ok;
	});

	// clone()
	it('コピー', () => {
		const a = new Jaco('あ');
		const b = a.clone();
		a.should.not.equal(b);
	});
	it('コピー', () => {
		const a = new Jaco('あ');
		const b = a.clone();
		a.toString().should.equal(b.toString());
	});

	// test()
	it('テスト', () => {
		const a = new Jaco('あいう');
		a.test('あいう').should.ok;
	});
	it('テスト2', () => {
		const a = new Jaco('あいう');
		a.test(/^あ/).should.ok;
	});
	it('テスト', () => {
		const a = new Jaco('あいう');
		a.test('あいうえ').should.not.ok;
	});
	it('テスト2', () => {
		const a = new Jaco('あいう');
		a.test(/あ$/).should.not.ok;
	});

	// prepend()
	it('前方結合', () => {
		const a = new Jaco('うえお');
		a.prepend('あい').toString().should.equal('あいうえお');
	});
	it('前方結合2', () => {
		const a = new Jaco('にほへと');
		a.prepend(new Jaco('いろは')).toString().should.equal('いろはにほへと');
	});
	// append()
	it('後方結合', () => {
		const a = new Jaco('あい');
		a.append('うえお').toString().should.equal('あいうえお');
	});
	it('後方結合2', () => {
		const a = new Jaco('いろは');
		a.append(new Jaco('にほへと')).toString().should.equal('いろはにほへと');
	});

	// is()
	it('完全マッチ', () => {
		const a = new Jaco('いろは');
		a.is('いろは').should.ok;
	});
	it('完全マッチ2', () => {
		const a = new Jaco('いろは');
		a.is(new Jaco('いろは')).should.ok;
	});
	it('完全マッチ3', () => {
		const a = new Jaco('いろは');
		a.is('いろはに').should.not.ok;
	});
	it('完全マッチ4', () => {
		const a = new Jaco('いろは');
		a.is(new Jaco('いろはに')).should.not.ok;
	});

	// has()
	it('含むかどうか', () => {
		const a = new Jaco('いろは');
		a.has('い').should.ok;
	});
	it('含むかどうか2', () => {
		const a = new Jaco('いろは');
		a.has(new Jaco('い')).should.ok;
	});
	it('含むかどうか3', () => {
		const a = new Jaco('いろは');
		a.has(new Jaco('あ')).should.not.ok;
	});
	it('含むかどうか4', () => {
		const a = new Jaco('いろは');
		a.has('いろ').should.ok;
	});
	it('含むかどうか5', () => {
		const a = new Jaco('いろは');
		a.has('いは').should.not.ok;
	});
	it('含むかどうか6', () => {
		const a = new Jaco('いろは');
		a.has('ろは').should.ok;
	});

	// isOnly()
	it('該当の文字のみ', () => {
		const a = new Jaco('いろは');
		a.isOnly('いろはにほへと').should.ok;
	});
	it('該当の文字のみ2', () => {
		const a = new Jaco('いろは');
		a.isOnly('いはにほへと').should.not.ok;
	});
	it('該当の文字のみ3', () => {
		const a = new Jaco('abcいろは');
		a.isOnly('いろはにほへと').should.not.ok;
	});
	it('該当の文字のみ4', () => {
		const a = new Jaco('いろは');
		a.isOnly('いろは').should.ok;
	});
	it('該当の文字のみ5', () => {
		const a = new Jaco('いろは');
		a.isOnly('いろ').should.not.ok;
	});
	it('該当の文字のみ6', () => {
		const a = new Jaco('いろは');
		a.isOnly('いろろろろははははにににに').should.ok;
	});
	it('該当の文字のみ7', () => {
		const a = new Jaco('いろはち');
		a.isOnly('いろはにほへと').should.not.ok;
	});

	// toNumber()
	it('数値変換', () => {
		const a = new Jaco('123');
		a.toNumber().should.equal(123);
	});
	it('数値変換2', () => {
		const a = new Jaco('123.45');
		a.toNumber().should.equal(123.45);
	});
	it('数値変換3', () => {
		const a = new Jaco('-123');
		a.toNumber().should.equal(-123);
	});
	it('数値変換4', () => {
		const a = new Jaco('0123');
		a.toNumber().should.equal(123);
	});
	it('数値変換5', () => {
		const a = new Jaco('0.123');
		a.toNumber().should.equal(0.123);
	});
	it('数値変換6', () => {
		const a = new Jaco('.123');
		a.toNumber().should.equal(0.123);
	});
	it('数値変換7', () => {
		const a = new Jaco('あ');
		a.toNumber().should.be.NaN;
	});

	// isOnlyHiragana()
	it('ひらがなのみ', () => {
		const test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join('');
		const a = new Jaco(test);
		a.isOnlyHiragana().should.ok;
	});
	it('ひらがなのみ2', () => {
		const test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		const a = new Jaco(test);
		a.isOnlyHiragana().should.not.ok;
	});
	it('ひらがなのみ3', () => {
		const test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛漢字',
		].join('');
		const a = new Jaco(test);
		a.isOnlyHiragana().should.not.ok;
	});
	it('ひらがなのみ4', () => {
		const test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛123',
		].join('');
		const a = new Jaco(test);
		a.isOnlyHiragana().should.not.ok;
	});
	it('ひらがなのみ5', () => {
		const test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛abc',
		].join('');
		const a = new Jaco(test);
		a.isOnlyHiragana().should.not.ok;
	});

	// isOnlyKatakana()
	it('カタカナのみ', () => {
		const test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜',
		].join('');
		const a = new Jaco(test);
		a.isOnlyKatakana().should.ok;
	});
	it('カタカナのみ2', () => {
		const test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join('');
		const a = new Jaco(test);
		a.isOnlyKatakana().should.not.ok;
	});
	it('カタカナのみ3', () => {
		const test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜漢字',
		].join('');
		const a = new Jaco(test);
		a.isOnlyKatakana().should.not.ok;
	});
	it('カタカナのみ4', () => {
		const test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜123',
		].join('');
		const a = new Jaco(test);
		a.isOnlyKatakana().should.not.ok;
	});
	it('カタカナのみ5', () => {
		const test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜abc',
		].join('');
		const a = new Jaco(test);
		a.isOnlyKatakana().should.not.ok;
	});

	// combinate()
	it('濁点の結合文字化', () => {
		const a = new Jaco('か゛き゛く゛け゛こ゛');
		a.combinate().toString().should.equal('がぎぐげご');
	});
	it('半濁点の結合文字化', () => {
		const a = new Jaco('は゜ひ゜ふ゜へ゜ほ゜');
		a.combinate().toString().should.equal('ぱぴぷぺぽ');
	});

	// combinateSoundMarks(true)
	it('濁点の結合文字化2', () => {
		const a = new Jaco('か゛き゛く゛け゛こ゛');
		a.combinateSoundMarks(true).toString().should.equal('がぎぐげご');
	});
	it('半濁点の結合文字化2', () => {
		const a = new Jaco('は゜ひ゜ふ゜へ゜ほ゜');
		a.combinateSoundMarks(true).toString().should.equal('ぱぴぷぺぽ');
	});

	// combinateSoundMarks()
	it('濁点・半濁点の結合', () => {
		const a = new Jaco('か゛き゛く゛け゛こ゛');
		a.combinateSoundMarks().toString().should.equal('がぎぐげご');
	});
	it('濁点・半濁点の結合2', () => {
		const a = new Jaco('は゜ひ゜ふ゜へ゜ほ゜');
		a.combinateSoundMarks().toString().should.equal('ぱぴぷぺぽ');
	});
	it('濁点・半濁点の結合3', () => {
		const a = new Jaco('がぎぐげご');
		a.combinateSoundMarks().toString().should.equal('がぎぐげご');
	});
	it('濁点・半濁点の結合4', () => {
		const a = new Jaco('ぱぴぷぺぽ');
		a.combinateSoundMarks().toString().should.equal('ぱぴぷぺぽ');
	});

	// toHiragana()
	it('ひらがなに変換', () => {
		const a = new Jaco([
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
			'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
			'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
			'ボパピプペポヷヸヴヹヺ',
		].join(''));
		const b = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛をぁぃぅぇぉゃゅょっーあ',
			'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
			'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
			'ぽわ゛ゐ゛ゔゑ゛を゛',
		].join('');
		a.toHiragana().toString().should.equal(b);
	});
	it('ひらがなに変換2', () => {
		const a = new Jaco([
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
			'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
			'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
			'ボパピプペポヷヸヴヹヺ',
		].join(''));
		const b = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙をぁぃぅぇぉゃゅょっーあ',
			'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
			'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
			'ぽわ゙ゐ゙ゔゑ゙を゙',
		].join('');
		a.toHiragana(true).toString().should.equal(b);
	});
	it('ひらがなに変換3', () => {
		const a = new Jaco([
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
			'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
			'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
			'ボパピプペポヷヸヴヹヺ',
		].join(''));
		const b = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛をぁぃぅぇぉゃゅょっーあ',
			'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
			'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
			'ぽわ゛ゐ゛ゔゑ゛を゛',
		].join('');
		a.toHiragana(false).toString().should.equal(b);
	});
	it('ひらがな以外は変換しない', () => {
		const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）');
		const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）';
		a.toHiragana().toString().should.equal(b);
	});
	it('ひらがな以外は変換しない2', () => {
		const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）');
		const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）';
		a.toHiragana(true).toString().should.equal(b);
	});

	// toKatakana()
	it('カタカナに変換', () => {
		const a = new Jaco([
			'。「」、・',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		a.toKatakana().toString().should.equal(b);
	});
	it('カタカナに変換2', () => {
		const a = new Jaco([
			'。「」、・',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙', // 結合文字濁点・半濁点
		].join(''));
		const b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		a.toKatakana().toString().should.equal(b);
	});
	it('カタカナに変換3', () => {
		const a = new Jaco([
			'。「」、・',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		a.toKatakana(true).toString().should.equal(b);
	});
	it('カタカナに変換4', () => {
		const a = new Jaco([
			'。「」、・',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙', // 結合文字濁点・半濁点
		].join(''));
		const b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		a.toKatakana(true).toString().should.equal(b);
	});
	it('カタカナに変換5', () => {
		const a = new Jaco([
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		a.toKatakana(true).toString().should.equal(b);
	});
	it('カタカナに変換6', () => {
		const a = new Jaco([
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙', // 結合文字濁点・半濁点
		].join(''));
		const b = [
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		a.toKatakana(false).toString().should.equal(b);
	});
	it('カタカナに変換 パフォーマンステスト(目標 1000ms以下)', () => {
		const a = new Jaco([
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙', // 結合文字濁点・半濁点
		].join(''));
		const b = [
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		let i = 100000;
		while (i--) {
			a.toKatakana(false).toString().should.equal(b);
		}
	});
	it('カタカナ以外は変換しない', () => {
		const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・');
		const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
		a.toKatakana().toString().should.equal(b);
	});
	it('カタカナ以外は変換しない2', () => {
		const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・');
		const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
		a.toKatakana(true).toString().should.equal(b);
	});

	// toNarrowKatakana()
	it('半角カタカナに変換', () => {
		const a = new Jaco([
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
			'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞ',
		].join('');
		a.toNarrowKatakana().toString().should.equal(b);
	});
	it('半角カタカナに変換2', () => {
		const a = new Jaco([
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
		].join('');
		a.toNarrowKatakana(true).toString().should.equal(b);
	});
	it('カタカナとひらがな以外は変換しない', () => {
		const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・');
		const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
		a.toNarrowKatakana().toString().should.equal(b);
	});
	it('カタカナとひらがな以外は変換しない2', () => {
		const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・');
		const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
		a.toNarrowKatakana(true).toString().should.equal(b);
	});

	// toWideKatakana()
	it('全角カタカナに変換', () => {
		const a = new Jaco([
			'｡｢｣､･',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'｡｢｣､･',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join('');
		a.toWideKatakana().toString().should.equal(b);
	});

	// toNarrowJapneseSymbol()
	it('日本語記号の半角化', () => {
		const a = new Jaco('。「」、・');
		const b = '｡｢｣､･';
		a.toNarrowJapneseSymbol().toString().should.equal(b);
	});

	// toWideJapneseSymbol()
	it('日本語記号の全角化', () => {
		const a = new Jaco('｡｢｣､･');
		const b = '。「」、・';
		a.toWideJapneseSymbol().toString().should.equal(b);
	});

	// toNarrowJapnese()
	it('日本語半角化', () => {
		const a = new Jaco([
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'｡｢｣､･',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
			'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞ',
		].join('');
		a.toNarrowJapnese().toString().should.equal(b);
	});

	// toWideJapnese()
	it('日本語全角化', () => {
		const a = new Jaco([
			'｡｢｣､･',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join('');
		a.toWideJapnese().toString().should.equal(b);
	});

	// toNarrow()
	it('半角化', () => {
		const a = new Jaco([
			'　！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
			'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
			'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜ガギグゲゴザジズゼゾ',
			'ダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛わ゙ゐ゙ゔゑ゙を゙',
			'。「」、・',
		].join(''));
		const b = [
			' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
			'abcdefghijklmnopqrstuvwxyz{|}~',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜ガギグゲゴザジズゼゾ',
			'ダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛わ゙ゐ゙ゔゑ゙を゙',
			'。「」、・',
		].join('');
		a.toNarrow().toString().should.equal(b);
	});
	it('半角化2', () => {
		const a = new Jaco([
			'　！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
			'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
			'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜ガギグゲゴザジズゼゾ',
			'ダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛わ゙ゐ゙ゔゑ゙を゙',
			'。「」、・',
		].join(''));
		const b = [
			' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
			'abcdefghijklmnopqrstuvwxyz{|}~',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞわﾞゐﾞゔゑﾞをﾞ',
			'｡｢｣､･',
		].join('');
		a.toNarrow(true).toString().should.equal(b);
	});

	// toWide()
	it('全角化', () => {
		const a = new Jaco([
			' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
			'abcdefghijklmnopqrstuvwxyz{|}~',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞわﾞゐﾞゔゑﾞをﾞ',
			'｡｢｣､･',
		].join(''));
		const b = [
			'　！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
			'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
			'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜ガギグゲゴザジズゼゾ',
			'ダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛わ゛ゐ゛ゔゑ゛を゛',
			'。「」、・',
		].join('');
		a.toWide().toString().should.equal(b);
	});

	// toNumeric() v0.5.0で追加
	it('数字化', () => {
		const a = new Jaco(' ２３ｓ０３ｓｄｋふぁえ');
		const b = '2303';
		a.toNumeric().toString().should.equal(b);
	});
	it('数字化2', () => {
		const a = new Jaco(' ー-.。２.３ｓ０。３.ｓｄｋふぁえ');
		const b = '2303';
		a.toNumeric().toString().should.equal(b);
	});
	it('数字化3', () => {
		const a = new Jaco(' ２-３ｓ０３ｓｄｋふぁえ');
		const b = '2303';
		a.toNumeric(true).toString().should.equal(b);
	});
	it('数字化4', () => {
		const a = new Jaco('- ２３ｓ０３ｓｄｋふぁえ');
		const b = '-2303';
		a.toNumeric(true).toString().should.equal(b);
	});
	it('数字化5', () => {
		const a = new Jaco(' -２-３-.ｓ０.３ｓｄｋふぁえ');
		const b = '-23.03';
		a.toNumeric(true, true).toString().should.equal(b);
	});
	it('数字化6', () => {
		const a = new Jaco(' ２３.-.-ｓ０３.ｓｄｋふぁえ');
		const b = '23.03';
		a.toNumeric(true, true).toString().should.equal(b);
	});
	it('数字化7', () => {
		const a = new Jaco('- ２３ｓ０３ｓｄｋふぁえ...');
		const b = '2303';
		a.toNumeric(false, true).toString().should.equal(b);
	});

	// isNumeric() v0.5.0で追加
	it('数字かどうか1', () => {
		const a = new Jaco(' ２３ｓ０３ｓｄｋふぁえ');
		a.isNumeric().should.not.ok;
	});
	it('数字かどうか2', () => {
		const a = new Jaco('２３０３');
		a.isNumeric().should.not.ok;
	});
	it('数字かどうか3', () => {
		const a = new Jaco('000012303234');
		a.isNumeric().should.ok;
	});
	it('数字かどうか4', () => {
		const a = new Jaco('-123.3234');
		a.isNumeric().should.ok;
	});
	it('数字かどうか5', () => {
		const a = new Jaco('-123.3234.');
		a.isNumeric().should.not.ok;
	});
	it('数字かどうか6', () => {
		const a = new Jaco('12-3.3234.');
		a.isNumeric().should.not.ok;
	});
	it('数字かどうか7', () => {
		const a = new Jaco('.3234');
		a.isNumeric().should.ok;
	});
	it('数字かどうか8', () => {
		const a = new Jaco('-.3234');
		a.isNumeric().should.ok;
	});
	it('数字かどうか9', () => {
		const a = new Jaco('.3234');
		a.isNumeric(false).should.ok;
	});
	it('数字かどうか10', () => {
		const a = new Jaco('-.3234');
		a.isNumeric(true).should.ok;
	});
	it('数字かどうか11', () => {
		const a = new Jaco('.3234');
		a.isNumeric(true, true).should.ok;
	});
	it('数字かどうか12', () => {
		const a = new Jaco('-.3234');
		a.isNumeric(true, false).should.not.ok;
	});
	it('数字かどうか13', () => {
		const a = new Jaco('.3234');
		a.isNumeric(false, false).should.not.ok;
	});
	it('数字かどうか14', () => {
		const a = new Jaco('-.3234');
		a.isNumeric(false, true).should.not.ok;
	});
	it('濁点・半濁点除去', () => {
		const a = [
			'がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ',
			'ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		const a2 = new Jaco(a);
		const b = [
			'かきくけこさしすせそたちつてとはひふへほはひふへほ',
			'カキクケコサシスセソタチツテトハヒフヘホハヒフヘホワイウエヲ',
		].join('');
		a2.removeVoicedMarks().toString().should.equal(b);
	});
	it('長音符変換', () => {
		const a = [
			'あーぁーかーゕーがーさーざーたーだーなーはーばーぱーまーやーゃーらー',
			'わーゎーいーぃーきーぎーしーじーちーぢーにーひーびーぴーみーりーゐー',
			'うーぅーゔーくーぐーすーずーつーづーぬーふーぶーぷーむーゆーゅーるー',
			'えーぇーけーゖーげーせーぜーてーでーねーへーべーぺーめーれーゑーおー',
			'ぉーこーごーそーぞーとーどーのーほーぼーぽーもーよーょーろーをー',
			'アーァーカーヵーガーサーザーターダーナーハーバーパーマーヤーャーラー',
			'ワーヮーイーィーキーギーシージーチーヂーニーヒービーピーミーリーヰー',
			'ウーゥーヴークーグースーズーツーヅーヌーフーブープームーユーュールー',
			'エーェーケーヶーゲーセーゼーテーデーネーヘーベーペーメーレーヱーオー',
			'ォーコーゴーソーゾートードーノーホーボーポーモーヨーョーローヲー',
			'ヷーヸーヹーヺー',
			'んーっーンーッー',
		].join('');
		const a2 = new Jaco(a);
		const b = [
			'ああぁあかあゕあがあさあざあたあだあなあはあばあぱあまあやあゃあらあ',
			'わあゎあいいぃいきいぎいしいじいちいぢいにいひいびいぴいみいりいゐい',
			'ううぅうゔうくうぐうすうずうつうづうぬうふうぶうぷうむうゆうゅうるう',
			'ええぇえけえゖえげえせえぜえてえでえねえへえべえぺえめえれえゑえおお',
			'ぉおこおごおそおぞおとおどおのおほおぼおぽおもおよおょおろおをお',
			'アアァアカアヵアガアサアザアタアダアナアハアバアパアマアヤアャアラア',
			'ワアヮアイイィイキイギイシイジイチイヂイニイヒイビイピイミイリイヰイ',
			'ウウゥウヴウクウグウスウズウツウヅウヌウフウブウプウムウユウュウルウ',
			'エエェエケエヶエゲエセエゼエテエデエネエヘエベエペエメエレエヱエオオ',
			'ォオコオゴオソオゾオトオドオノオホオボオポオモオヨオョオロオヲオ',
			'ヷアヸイヹエヺオ',
			'んんっっンンッッ',
		].join('');
		a2.convertProlongedSoundMarks().toString().should.equal(b);
	});
	it('長音符変換2', () => {
		new Jaco('ウバッシャアーーーーーーーーー').convertProlongedSoundMarks().toString().should.equal('ウバッシャアアアアアアアアアア');
	});
	it('繰り返し記号変換', () => {
		new Jaco('がくもんのすゝめ').convertIterationMarks().toString().should.equal('がくもんのすすめ');
	});
	it('繰り返し記号変換2', () => {
		new Jaco('がくもんのすゝゝゝゝゝゝゝゝゝゝゝゝめ').convertIterationMarks().toString().should.equal('がくもんのすすすすすすすすすすすすすめ');
	});
	it('繰り返し記号変換3', () => {
		new Jaco('がくもんのすゝゝゝゞゝゝゝゝゝゝゝゝゝめ').convertIterationMarks().toString().should.equal('がくもんのすすすすずすすすすすすすすすめ');
	});
	it('繰り返し記号変換4', () => {
		new Jaco('ゝゞあゝゞかゞゝがゝゞゝ').convertIterationMarks().toString().should.equal('ゝゞあああかがかがかがか');
	});

	it('よみ変換', () => {
		new Jaco('あーぁあゝアア').toPhoeticKana().toString().should.equal('あああああああ');
	});

});
