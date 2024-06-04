// // マウスストーカー関連の要素（任意で変更してください）
// const mouseStalker = "#stkr";           // マウスストーカーになる要素を指定
// const mouseTarget = ".stkr-target";     // リンクなどアクションを付けたい要素を指定
// const mouseStalkerArea = "#stkr-area";  // マウスストーカーが機能する要素を指定

// // 処理で使う変数たち

// //&()一致するHTML要素を選択
// //.css(width)で幅の値を取得.100pxなど
// //.replace(/px/,"")で取得した値からpxを取り除く
// const stkrSize = parseInt($(mouseStalker).css("width").replace(/px/, ""));
// const stkrPosX = parseInt($(mouseStalker).css("left").replace(/px/, ""));
// const stkrPosY = parseInt($(mouseStalker).css("top").replace(/px/, ""));
// //マウスストーカーの座標を取得する

// const cssPosAjust = stkrPosX + (stkrSize / 2);
// let stkrFix = false;
// let scale = 1;
// let scroll = 0;

// // 追従用の処理
// $(mouseStalkerArea).hover(function () {

//     console.log("test");

//     //マウスがマウスストーカーエリアに入った時の処理
//     $(mouseStalkerArea).mousemove(function (e) {

//         //マウスストーカーが固定されていない場合のみ追従する
//         if (stkrFix == false) {
//             //マウスのX座標から位置調整を引いた値を計算
//             let x = e.clientX - cssPosAjust;
//             //マウスのY座標にスクロール量を足し、位置調整を引いた値を計算
//             let y = e.clientY + scroll - cssPosAjust;

//             //マウスストーカーの位置とスケールをCSSで設定
//             $(mouseStalker).css({
//                 "transform": "translate(" + x + "px," + y + "px) scale(" + scale + ")",
//             });
//         }
//     });
// }, 

// function () {
//     //マウスがマウスストーカーエリアから出た時の処理
//     $(mouseStalker).css({
//         "transform": "translate(" + x + "px," + y + "px) scale(" + scale + ")",
//     });  //元の状態に戻す
// }
// );

// // // リンクホバーの処理
// // $(mouseTarget).hover(function () {

// //     //リンクにホバーしたときにマウスストーカーを固定
// //     stkrFix = true;
// //     //スケールを2に変更して拡大
// //     scale = 2;
// //     //リンクの幅をピクセル単位で取得して整数に変換
// //     let _width = parseInt($(this).css("width").replace(/px/, ""));
// //     //リンクの上位置を取得
// //     let _top = $(this).position().top;
// //     //リンクの左位置を取得
// //     let _left = $(this).position().left;
// //     //マウスストーカーの新しいX座標を計算
// //     let x = _left - stkrPosX - (stkrSize / 2) + (_width / 2);
// //     //マウスストーカーの新しいY座標を計算
// //     let y = _top - stkrPosX;

// //     //マウスストーカーの位置とスケールをCSSで設定し、リンクの色クラスを追加
// //     $(mouseStalker).css({
// //         "transform": "translate(" + x + "px," + y + "px) scale(" + scale + ")",
// //     }).addClass($(this).data("color"));
// // }, function () {
// //     //リンクからホバーが外れた時にマウスストーカーを解放
// //     stkrFix = false;
// //     //スケールを元に戻す
// //     scale = 1;
// //     //リンクの色クラスを削除
// //     $(mouseStalker).removeClass($(this).data("color"));
// // });

// //ウィンドウのスクロールイベント処理
// $(window).scroll(function () {
//     //現在のスクロール位置を取得
//     scroll = $(window).scrollTop();
// });