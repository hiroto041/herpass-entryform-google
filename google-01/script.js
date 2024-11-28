body {
    font-family: "YuGothic", "Yu Gothic", "Hiragino Kaku Gothic Pro", "Helvetica Neue", Arial, sans-serif;
    padding: 0px;
    margin: 0 auto;
    background-color: #EAEFF2;
    min-height: 100vh;     
    max-width: 600px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}



/* ヘッダーのスタイル */
.header {
    background-color: #ffffff;
    padding: 10px 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
}

.header-content {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
}

.logo {
    height: 25px;
}

.header-text {
    text-align: left;
    margin-left: 14px;
}



.header-text p {
    margin: 0;
    font-size: 10px;
}

.header-text-top {
    color: #2E5A7C;
    font-weight: bold;
}

.header-text-foot {
    color: #333333;
    font-weight: bold;
}

.highlight-text {
    color: #D53335; /* 赤い強調表示の部分 */
    font-weight: bold;
}



/* メインビジュアルのスタイル */
.main-visual {
    width: 100vw;
    max-width: 600px;
    aspect-ratio: 2214 / 994;
    background-image: url('https://github.com/hiroto041/herpass-entryform-google/blob/main/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%92%E3%82%99%E3%82%B7%E3%82%99%E3%83%A5%E3%82%A2%E3%83%ABaa.png?raw=true');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}



/* テキストを中央に配置 */
.main-visual-text {
    text-align: left;
    padding-left: 7%;
    padding-top: 7%;
}

/* h1とh2のスタイル */
.main-visual-text h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 6vw; /* 大きなフォントサイズ */
    font-weight: bold;
    color: white;
    background-color: #2E5A7C;
    background: linear-gradient(to right, #274B77, #274B77, #396A98, #396A98, #274B77);
    width: 48vw;
    max-width: 288px;
    text-align: center;
    margin-bottom: 2vw;
    letter-spacing: 0.4vw;
}

.main-visual-text h2 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 4vw;
    width: 58vw;
    max-width: 348px;
    color: #176086;
    background-color: white;
    text-align: center;
    letter-spacing: 0.6vw;
}

/* 画面幅が600px以上の場合のフォントサイズ */
@media (min-width: 600px) {
    .main-visual-text h1 {
        font-size: 36px; /* 横幅600px以上ではフォントサイズを24pxに固定 */
        margin-bottom: 12px;
        letter-spacing: 2.396px;
    }

    .main-visual-text h2 {
        font-size: 24px; /* 横幅600px以上ではフォントサイズを24pxに固定 */
        letter-spacing: 3.594px;
    }


}


.main-visual img {

    width: 50%;
    padding-left: 7%;
    padding-top: 4.5%;
}







/* プログレスバー全体のコンテナ */
.progress-bar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 20px;
    background-color: #2E5A7C;
    background: linear-gradient(to right, #274B77, #396A98, #274B77);
    color: white;
}

/* 左側の「STEP」テキスト */
.step-text {
    font-size: 18px;
    margin-left: 14px;
    margin-right: -11px;
    margin-top: 2.5px;
    font-family: "Avenir", "Helvetica Neue", Arial, sans-serif;
}

/* プログレスバー本体 */
.progress-bar {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    margin: 0 20px;
    padding: 0;
    list-style: none;
    counter-reset: step; /* ステップのカウンターをリセット */
    position: relative;
}

/* プログレスバーのステップスタイル */
.progress-bar li {
    position: relative;
    text-align: center;
    align-items: center;
    flex: 1.5;
    font-size: 16px;
    color: white;
    counter-increment: step; /* ステップをカウント */
    font-family: "Avenir", "Helvetica Neue", Arial, sans-serif;

}

/* ステップの番号部分と間の線を `::before` で表現 */
.progress-bar li::before {
    content: counter(step); /* ステップ番号を表示 */
    position: absolute;
    width: 25px;
    height: 25px;
    line-height: 25px;
    background-color: #628BA4; /* 非アクティブなステップの背景色 */
    border-radius: 50%;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    color: white;
    font-weight: bold;
}

/* ステップ間の線を同じく `::before` で管理 */
.progress-bar li::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1.5px;
    background-color: #628BA4; /* 非アクティブなステップ間の線 */
    top: 50%;
    left: 50%; /* ステップ中央から始まる */
    z-index: 0;
    transform: translateX(-108%); /* ステップ番号の真ん中まで線を伸ばす */
}

/* 最初のステップには線を描かない */
.progress-bar li:first-child::after {
    content: none;
}

/* アクティブなステップ */
.progress-bar li.active::before {
    background-color: white;
    color: #2E5A7C;
}

/* アクティブなステップの前のステップの線を白くする */
.progress-bar li.active::after {
    background-color: white;
}

/* 縦棒のスタイル */
.vertical-line {
    width: 1px;
    height: 30px;
    background-color: white;
    margin-left: 0px;
    margin-right: 20px;
}

/* 右側の「簡単60秒」テキスト */
.easy-text {
    font-size: 16px;
    margin-right: 4px;
    font-weight: bold;
}








/* フェードイン・フェードアウトのスタイル */
.step {
    display: none;
    text-align: center;
    /* opacity: 0;
    transition: opacity 0.5s ease; */
}



.step.active {
    display: block;
    /* opacity: 1; */
}

/* フォームのスタイル */
form {
    background: #EAEFF2;
    padding: 20px 20px 20px 20px;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
}

.label {
    color: #333333;
    font-size: 18px;
    font-weight: bold;
    display: block;
    margin-bottom: 30px;
    margin-top: 10px;
}

.step-4 {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.label-lock {
    margin-top: 8px;
    margin-bottom: 14px;
}

.label-lock span {
    font-size: 12px;
    font-weight: bold;
    color: #333333;
}

.label-lock img {
    width: 10px;
    margin-right: 4px;
}

.step-4-label {
    font-weight: bold;
    font-size: 16px;
    color: #333333;
    margin-bottom: 5px;
    align-self: flex-start;
    padding-left: 7%;
}

.step-4-under {
    font-size: 14px;
    color: #333333;
    letter-spacing: 1px;
    margin-top: 10px;
    margin-bottom: 36px;
    font-weight: bold;
}

input[type="text"], input[type="number"], input[type="email"], input[type="tel"] {
    width: 80%;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 10px;
    padding-left: 10px;
    margin-bottom: 20px;
    border-radius: 4px;
    border: 2px solid #2E5A7C;
    font-size: 15px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1); 
}


.next-button-1 {
    color: #2E5A7C;
    border: none;
    background-color: #EAEFF2;
    text-decoration: underline;
    font-size: 3vw;
    margin-left: 60vw;
    font-weight: bold;
}

.button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.button-container-5 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 26px;
}

.next-button {
    color: #2E5A7C;
    border: none;
    background-color: #EAEFF2;
    text-decoration: underline;
    font-size: 3vw;
    font-weight: bold;
}

.back-button {
    color: #2E5A7C;
    border: none;
    background-color: #EAEFF2;
    text-decoration: underline;
    font-size: 3vw;
    font-weight: bold;
}

/* 画面幅が600px以上の場合のフォントサイズ */
@media (min-width: 600px) {
    .next-button-1 {
        font-size: 18px;
        margin-left: 360px;
    }
    .next-button {
        font-size: 18px; /* 横幅600px以上ではフォントサイズを24pxに固定 */
    }
    .back-button {
        font-size: 18px;
    }
}



.step-4-next {
    background-color: #5EBF89;
    color: white;
    width: 58%;
    height: 12vw;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
    border: none; /* ボーダーなし */
    border-radius: 8px; /* 角を丸める */
    position: relative; 
    text-align: center;
}

.next4{
    font-weight: bold;
    font-size: 4vw;
}

@media (min-width: 450px) {
    .step-4-next {
        width: 226px;
        height: 52px;
    }

    .next4 {
        font-size: 18px;
    }
}

.mark4 {
    font-weight: bold;
    margin-left: 10px;
    position: absolute; /* 絶対配置で右寄せ */
    right: 15px; /* 右端から15pxの位置に配置 */
    top: 30%; 
    font-size: 14px;
}

@media (min-width: 390px) {
    .mark4 {
        top: 27%;
        font-size: 18px;
    }
}

.step-5-links {
    margin-bottom: 36px;
}

.step-5-links span {
    color: #5C5C5C;
    margin: 20px 0px;
    font-size: 2vw;
    font-weight: bold;
}

.step-5-links a {
    color: #5C5C5C;
    margin: 20px 0px;
    font-size: 2.3vw;
    font-weight: bold;
}

.step-5-con {
    background-color: #5EBF89;
    color: white;
    width: 60%;
    padding: 10px 0px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
    border: none; /* ボーダーなし */
    border-radius: 8px; /* 角を丸める */
    position: relative; 
    text-align: center;
}

.step-5-con p {
    margin-top: 0px;
    margin-bottom: 0px;
}


.consensus {
    font-size: 2.5vw;
    font-weight: bold;
    letter-spacing: 0.5vw;
}


.sign {
    font-size: 4vw;
    font-weight: bold;
    letter-spacing: 1vw;
}

.mark5 {
    font-weight: bold;
    position: absolute; /* 絶対配置で右寄せ */
    right: 15px; /* 右端から15pxの位置に配置 */
    top: 32%; 
    font-size: 16px;
}

@media (min-width: 450px) {
    .step-5-links a {
        font-size: 10.35px;
    }
    .step-5-links span {
        font-size: 9px;
    }
    .step-5-con {
        width: 246px;
    }
    .consensus {
        font-size: 11.25px;
        letter-spacing: 3px;
    }
    .sign {
        font-size: 18px;
        letter-spacing: 6px;
    }
}

.mark5 {
    font-weight: bold;
    position: absolute; /* 絶対配置で右寄せ */
    right: 15px; /* 右端から15pxの位置に配置 */
    top: 32%; 
    font-size: 14px;
}

@media (min-width: 390px) {
    .mark5 {
        top: 30%;
        font-size: 18px;
    }
}




/* 選択肢ボタンのスタイル */
.options {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    justify-content: center;  /* 中央揃え */
    margin-bottom: 40px;
}

.option-button {
    flex: 1 1 calc(40% - 20px); /* 45%の幅で、間に20pxの余白 */
    background-color: #ffffff;
    color: #2E5A7C;
    border: 2px solid #2E5A7C; /* ボーダーを少し太くして目立たせる */
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    font-size: 20px;  /* フォントサイズを少し大きく */
    cursor: pointer;
    transition: background-color 0.3s;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1); /* 軽いシャドウ */
    font-weight: bold;
}

.option-button:hover {
    background-color: #ddd;
}

.option-button.selected {
    background-color: #2E5A7C;
    color: white;
    border-color: #2E5A7C;  /* 緑のボーダーで選択されたことを強調 */
}

.options-3 {
    display: flex;
    flex-direction: column; /* 縦に並べる */
    gap: 10px;
    align-items: center;  /* ボタンを中央揃え */
    margin-bottom: 40px;
}

.option-button-3 {
    width: 80%;  /* ボタン幅を80%に設定 */
    background-color: #ffffff;
    color: #2E5A7C;
    border: 2px solid #2E5A7C; /* ボーダーを少し太くして目立たせる */
    border-radius: 4px;
    padding: 5px 20px;
    text-align: center;
    font-size: 20px;  /* フォントサイズを少し大きく */
    cursor: pointer;
    transition: background-color 0.3s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 軽いシャドウ */
    font-weight: bold;
}

@media (min-width: 500px) {
    .option-button-3 {
        width: 368px;
    }
}

.option-button-3 span {
    font-weight: bold;
    font-size: 14px;
}

.option-button-3:hover {
    background-color: #ddd;
}

.option-button-3.selected {
    background-color: #2E5A7C;
    color: white;
    border-color: #2E5A7C;  /* 緑のボーダーで選択されたことを強調 */
}



.modal.hidden {
    opacity: 0;
    transition: opacity 0.5s ease;
}


.modal[style*="display: none"] {
    display: none !important;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 90%;
    max-width: 400px;
}

.modal button {
    margin-top: 20px;
    cursor: pointer;
}

.update {
    text-align: right;  /* コンテンツを右寄せ */
    font-size: 14px;
    font-weight: bold;
    color: #5C5C5C; 
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 30px;
    background-color: white;
}

.privacy-mark {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    padding: 10px 20px 10px 20px;
}

.privacy-mark img {
    max-width: 40px;
    margin-right: 20px;
}

.privacy-mark p {
    font-size: 10px;
    color: #333;
    line-height: 1.6;
}

.footer {
    background-color: #4d4d4d; /* ダークグレー背景 */
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 12px;
}

.footer-links a {
    color: white;
    margin: 0 10px;
}

.footer-links a:hover {
    text-decoration: none; /* ホバー時の下線 */
}

.footer-copyright {
    margin-top: 10px;
    font-size: 8px;
    color: #ccc;
}



/* モーダルのスタイル */
/* .modal {
    display: flex;
    opacity: 1;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s ease;  
} */

/* モーダル全体のスタイル */
.modal {
    display: flex;
    opacity: 1;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal.hidden {
    opacity: 0;
    transition: opacity 0.5s ease;
}

.modal[style*="display: none"] {
    display: none !important;
}

/* モーダルのコンテンツスタイル */
.modal-content {
    background-color: #EAEFF2;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
    width: 80%; /* 幅を80%に設定 */
    max-width: 400px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.modal h2 {
    color: #333333;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

/* 区切り線のスタイル */
.modal-divider {
    width: 50px;
    margin: 10px auto;
    border: 0;
    border-top: 1px solid #666;
}

/* モーダル内のボタンスタイル */
.modal-button {
    background-color: white;
    color: #2E5A7C;
    font-size: 18px;
    font-weight: bold;
    padding: 15px 20px;
    border: 2px solid #2E5A7C;
    border-radius: 4px;
    width: 80%;
    max-width: 350px;
    margin: 0 auto 15px; /* 中央揃え */
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.modal-button:hover {
    background-color: #F2F4F4;
    border-color: #2E5A7C;
}

.modal-button-arrow {
    font-size: 16px;
    color: #2E5A7C;
}

/* モバイル対応: 横幅が600px以下の場合 */
@media (max-width: 600px) {
    .modal-content {
        width: 80%; /* モバイル時は80%の幅に設定 */
    }
}


/* 光るアニメーション */
@keyframes shine {
    0% {
        box-shadow: 0 0 2px #F39C12;
    }
    50% {
        box-shadow: 0 0 10px #F39C12, 0 0 20px #F39C12;
    }
    100% {
        box-shadow: 0 0 2px #F39C12;
    }
}

.button-glow {
    animation: shine 1s infinite;
}

/* 離脱確認モーダルのスタイル（既存のモーダルスタイルに準拠） */
.modal-back {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-back-content {
    background-color: #EAEFF2;
    border-radius: 8px;
    padding: 0px;
    max-width: 500px;
    width: 90%;
    text-align: center;
    position: relative;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.close-button {
    position: absolute;
    top: 6px;
    right: 2px;
    background: none;
    border: none;
    font-size: 26px;
    cursor: pointer;
    color: #333333;
}

.modal-back-content h2 {
    color: #2E5A7C;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 20px;
    line-height: 1.5;
}

.hikoukai {
    font-size: 18px;
    color: #333333;
}

.job-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.job-item {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 10px;
    width: calc(40% - 10px);
    text-align: center;
}

.job-item img {
    width: 100%;
    border-radius: 0px;
}

.salary {
    color: #2E5A7C;
    margin: 0px;
}

.salary-nensyu {
    font-size: 10px;
} 

.salary-num {
    font-size: 20px;
    font-weight: bold;
}

.salary-tani{
    font-size: 14px;
    font-weight: bold;
}

.company {
    font-size: 10px;
    color: #333333;
    font-weight: bold;
    margin: 0px;
}

.tags {
    margin: 0px;
}

.tag {
    font-size: 10px;
    color: #333333;
    font-weight: bold;
    margin-top: 5px;
    background-color: #EEECEB;
    padding: 4px;
    border-radius: 2px;
}

.disclaimer {
    font-size: 10px;
    color: #333333;
    margin: 0px;
}

.description {
    padding-top: 20px;
    font-size: 18px;
    color: #333333;
    margin-top: 20px;
    font-weight: bold;
}

.content-under {
    background-color: white;
    border-radius: 0 0 8px 8px; 
}

.continue-button {
    background-color: #5EBF89;
    color: white;
    font-size: 18px;
    padding: 14px 60px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;
}

.continue-button:hover {
    background-color: #4da874;
}

/* サンクスページ全体のスタイル */
#thanks-page {
    display: none;
    text-align: center;
    border-radius: 8px;
}

/* ユーザー名のスタイル */
#user-name {
    color: #176086;
    font-size: 20px;
    font-weight: bold;
    margin: 0px 0;
}

.thanks-txt {
    font-size: 20px;
    font-weight: bold;
    color: #333333;
    margin-top: 10px;
    letter-spacing: 0.2vh;
}

/* メインのメッセージスタイル */


.contact-detail {
    font-size: 16px;
    font-weight: bold;
    color: white;
    margin: 0px;
    padding-top: 10px;
    letter-spacing: 0.2vh;
}

.contact-phone {
    font-size: 10px;
    color: white;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 10px;
    padding-bottom: 20px;
}

/* サンクスページの画像スタイル */
.thanks-mv-img {
    display: block;
    width: 100%;
    max-width: 600px;
    margin-bottom: 0;
    padding-bottom: 0;
}

.thanks-icon-img {
    width: 12%;
    padding-top: 20px;
}

.contact-txt {
    padding-top: 0;
    margin-top: 0;
    background-color: #176086;
}

.herpass {
    color: #176086;
    font-size: 10px;
    font-weight: bold;
}

.thanks-link-space {
    height: 35px;
}

.thanks-link {
    height: 100px;
}

.button-container-2 {
    display: flex; /* 子要素をフレックスボックスとして扱う */
    justify-content: center; /* 水平方向に中央揃え */
    align-items: center; /* 垂直方向に中央揃え */
    margin: 0; /* 上下の余白 */
    padding: 6px 6px;
    height: auto; /* コンテナの高さを自動調整 */
    background-color: white;
}

.custom-button-2 {
    display: inline-block;
    width: 80%; /* ボタン幅を画面幅の80%に設定 */
    background-color: #f0a500;
    color: white;
    text-decoration: none;
    font-size: 4.5vw; /* 画面幅に応じた文字サイズ (viewport widthの3%) */
    font-weight: bold;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.15); /* 影を追加 */
    text-align: center; /* テキストを中央揃え */
    transition: transform 0.2s, box-shadow 0.2s; /* ホバー時のアニメーション */
}

.custom-button-2:hover {
    background-color: #d98800;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.2); /* ホバー時の影を強調 */
    transform: translateY(-2px); /* ホバー時の浮き上がり効果 */
}

@media (min-width: 768px) {
    .custom-button-2 {
        font-size: 18px; /* タブレット以上の画面では固定文字サイズ */
    }
}

@media (min-width: 1024px) {
    .custom-button-2 {
        font-size: 24px; /* デスクトップ以上の画面ではさらに大きな文字サイズ */
    }
}




