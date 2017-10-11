import test from 'ava';
import naturalKanaSort from '../lib/fn/naturalKanaSort';

test('五十音順ソート', (t) => {
	const origin = [
		'きたきゅうしゅうし',
		'ふくおかし',
		'おおむたし',
		'くるめし',
		'のおがたし',
		'いいづかし',
		'たがわし',
		'やながわし',
		'やめし',
		'ちくごし',
		'おおかわし',
		'ゆくはしし',
		'ぶぜんし',
		'なかまし',
		'おごおりし',
		'ちくしのし',
		'かすがし',
		'おおのじょうし',
		'むなかたし',
		'だざいふし',
		'こがし',
		'ふくつし',
		'うきはし',
		'みやわかし',
		'かまし',
		'あさくらし',
		'みやまし',
		'いとしまし',
		'ちくしぐん',
		'かすやぐん',
		'おんがぐん',
		'くらてぐん',
		'かほぐん',
		'あさくらぐん',
		'みいぐん',
		'みずまぐん',
		'やめぐん',
		'たがわぐん',
		'みやこぐん',
		'ちくじょうぐん',
	];
	const sorted = naturalKanaSort(origin);
	t.deepEqual(sorted, [
		'あさくらぐん',
		'あさくらし',
		'いいづかし',
		'いとしまし',
		'うきはし',
		'おおかわし',
		'おおのじょうし',
		'おおむたし',
		'おごおりし',
		'おんがぐん',
		'かすがし',
		'かすやぐん',
		'かほぐん',
		'かまし',
		'きたきゅうしゅうし',
		'くらてぐん',
		'くるめし',
		'こがし',
		'たがわぐん',
		'たがわし',
		'だざいふし',
		'ちくごし',
		'ちくしぐん',
		'ちくしのし',
		'ちくじょうぐん',
		'なかまし',
		'のおがたし',
		'ふくおかし',
		'ふくつし',
		'ぶぜんし',
		'みいぐん',
		'みずまぐん',
		'みやこぐん',
		'みやまし',
		'みやわかし',
		'むなかたし',
		'やながわし',
		'やめぐん',
		'やめし',
		'ゆくはしし',
	]);
});
test('五十音順ソート2', (t) => {
	const origin = [
		'あい゛',
		'あい',
	];
	const sorted = naturalKanaSort(origin);
	t.deepEqual(sorted, [
		'あい',
		'あい゛',
	]);
});
test('五十音順ソート3', (t) => {
	const origin = [
		'あい',
		'あー',
	];
	const sorted = naturalKanaSort(origin);
	t.deepEqual(sorted, [
		'あー',
		'あい',
	]);
});
test('五十音順ソート4', (t) => {
	const origin = [
		'かゞくのこ',
		'がゝくのと',
	];
	const sorted = naturalKanaSort(origin);
	t.deepEqual(sorted, [
		'かゞくのこ',
		'がゝくのと',
	]);
});
test('五十音順ソート5', (t) => {
	const origin = [
		'ほぼぼぼ',
		'ほぼほぼ',
		'ぼぼほぼ',
		'ほぼほほ',
	];
	const sorted = naturalKanaSort(origin);
	t.deepEqual(sorted, [
		'ほぼほほ',
		'ほぼほぼ',
		'ほぼぼぼ',
		'ぼぼほぼ',
	]);
});
test('五十音順ソート6', (t) => {
	const origin = [
		'ほぼぼゞ',
		'ほぼゝぼ',
		'ぼぼゝぼ',
		'ほゞほゝ',
	];
	const sorted = naturalKanaSort(origin);
	t.deepEqual(sorted, [
		'ほゞほゝ',
		'ほぼゝぼ',
		'ほぼぼゞ',
		'ぼぼゝぼ',
	]);
});
test('五十音順ソート7', (t) => {
	const origin = [
		'ばああ',
		'ハあぁ',
		'ハああ',
		'パああ',
		'ばあぁ',
		'ばあー',
		'パあぁ',
		'はあゝ',
		'はああ',
		'バあー',
		'はあー',
		'バあぁ',
		'はあぁ',
		'ハあゝ',
		'ばあゝ',
		'バあゝ',
		'ぱああ',
		'ぱあぁ',
		'ハあー',
		'バああ',
		'ぱあー',
		'ぱあゝ',
		'パあー',
		'パあゝ',
	];
	const sorted = naturalKanaSort(origin);
	t.deepEqual(sorted, [
		'はあー',
		'ハあー',
		'はあぁ',
		'ハあぁ',
		'はあゝ',
		'ハあゝ',
		'はああ',
		'ハああ',
		'ばあー',
		'バあー',
		'ばあぁ',
		'バあぁ',
		'ばあゝ',
		'バあゝ',
		'ばああ',
		'バああ',
		'ぱあー',
		'パあー',
		'ぱあぁ',
		'パあぁ',
		'ぱあゝ',
		'パあゝ',
		'ぱああ',
		'パああ',
	]);
});
test('五十音順ソート8', (t) => {
	const origin = [
		'ベンティアドショットヘーゼルナッツバニラアーモンドキャラメルエキストラホイップキャラメルソースモカソースランバチップチョコレートクリームフラペチーノ',
		'キャプテン・ファンタスティック・ファースター・ザン・スーパーマン・スパイダーマン・バットマン・ウルヴァリン・ハルク・アンド・ザ・フラッシュ・コンバインド',
		'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
		'クルンテープマハーナコーン・アモンラッタナコーシン まヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
		'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
		'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
		'クルンテープマハーナコーン・アモンラッタナコォシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
		'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
		'チャーゴグガゴグマンチャウグガゴグチャウバナガンガマウグ',
		'ランヴァイル・プルグウィンギル・ゴゲリフウィルンドロブル・ランティシリオゴゴゴホ',
		'リュウグウノオトヒメノモトユイノキリハズシ',
		'ミツクリエナガチョウチンアンコウ',
		'オガサワラチビヒョウタンヒゲナガゾウムシ',
		'パブロ・ディエゴ・ホセ・フランシスコ・デ・パウラ・ファン・ネポムセノ・マリア・デ・ロス・レメディオス・クリスピン・クリスピニャーノ・デ・ラ・サンテシマ・トリニダー・ルイス・イ・ピカソ',
	];
	const sorted = naturalKanaSort(origin);
	t.deepEqual(sorted, [
		'オガサワラチビヒョウタンヒゲナガゾウムシ',
		'キャプテン・ファンタスティック・ファースター・ザン・スーパーマン・スパイダーマン・バットマン・ウルヴァリン・ハルク・アンド・ザ・フラッシュ・コンバインド',
		'クルンテープマハーナコーン・アモンラッタナコーシン まヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
		'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
		'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
		'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
		'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
		'クルンテープマハーナコーン・アモンラッタナコォシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
		'チャーゴグガゴグマンチャウグガゴグチャウバナガンガマウグ',
		'パブロ・ディエゴ・ホセ・フランシスコ・デ・パウラ・ファン・ネポムセノ・マリア・デ・ロス・レメディオス・クリスピン・クリスピニャーノ・デ・ラ・サンテシマ・トリニダー・ルイス・イ・ピカソ',
		'ベンティアドショットヘーゼルナッツバニラアーモンドキャラメルエキストラホイップキャラメルソースモカソースランバチップチョコレートクリームフラペチーノ',
		'ミツクリエナガチョウチンアンコウ',
		'ランヴァイル・プルグウィンギル・ゴゲリフウィルンドロブル・ランティシリオゴゴゴホ',
		'リュウグウノオトヒメノモトユイノキリハズシ',
	]);
});
test('五十音順ソート9', (t) => {
	const origin = [
		'dパああ',
		'eばあぁ',
		'cハああ',
		'fパあぁ',
		'fバあぁ2',
		'fばあー',
		'bハあぁ',
		'fバあー',
		'７ぱあゝ',
		'aばああ',
		'fはあー1',
		'８パあー',
		'４ハあー',
		'fはああ',
		'fハあゝ4',
		'fはあぁ3',
		'６ぱあー',
		'1バあゝ',
		'2ぱああ',
		'３ぱあぁ',
		'0ばあゝ',
		'５バああ',
		'fはあゝ',
		'９パあゝ',
	];
	const sorted = naturalKanaSort(origin);
	t.deepEqual(sorted, [
		'0ばあゝ',
		'1バあゝ',
		'2ぱああ',
		'３ぱあぁ',
		'４ハあー',
		'５バああ',
		'６ぱあー',
		'７ぱあゝ',
		'８パあー',
		'９パあゝ',
		'aばああ',
		'bハあぁ',
		'cハああ',
		'dパああ',
		'eばあぁ',
		'fはあゝ',
		'fはああ',
		'fばあー',
		'fバあー',
		'fパあぁ',
		'fはあー1',
		'fバあぁ2',
		'fはあぁ3',
		'fハあゝ4',
	]);
});
test('五十音順ソート10', (t) => {
	const origin = [
		'あぁああ',
		'ああぁァ',
		'あかカぁ',
		'ァアァカ',
	];
	const sorted = naturalKanaSort(origin);
	t.deepEqual(sorted, [
		'あぁああ',
		'ああぁァ',
		'ァアァカ',
		'あかカぁ',
	]);
});
test('五十音順ソート11(引数なしでエラー)', (t) => {
	try {
		naturalKanaSort();
	} catch (error) {
		t.pass();
	}
});