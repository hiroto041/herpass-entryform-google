// モーダルを表示
window.onload = function() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');  // モーダルをフェードインで表示
    pushHistoryState();  // 履歴に初期状態を追加
};

// モーダルを閉じてSTEP1に移行
function selectIntent(intent) {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');  // モーダルをフェードアウト
    setTimeout(() => {
        modal.style.display = 'none';  // フェードアウト後にモーダルを完全に非表示
        showStep(0);  // STEP1を表示
    }, 500);  // 500msでフェードアウトアニメーションが完了
}

// 戻るボタン用モーダルの表示
window.onpopstate = function(event) {
    const backModal = document.getElementById('backModal');
    if (backModal) {  // backModalが存在するか確認
        backModal.classList.add('show');  // 「質問回答に戻る」モーダルを表示
    }
};

// 質問回答に戻るボタンが押されたときにSTEP1に戻る処理
function returnToStep1() {
    const backModal = document.getElementById('backModal');
    if (backModal) {
        backModal.classList.remove('show');  // モーダルを閉じる
    }
    showStep(0);  // STEP1に戻る
}

// 選択されたオプションを保存するオブジェクト
let selectedOptions = {
    experience: null,
    timing: null,
    salary: null
};

// 選択肢が選ばれたときに次のステップに進む＋選択状態を保存
function selectOption(option, category) {
    selectedOptions[category] = option;  // 選択されたオプションを保存
    highlightSelectedOption(category);   // 選択肢にハイライトを適用
    console.log('選択されたオプション:', selectedOptions); // デバッグ用
    nextStep();  // 自動で次のステップへ進む
}

// 選択されたオプションにハイライトを適用する関数
function highlightSelectedOption(category) {
    // 現在のステップ内で該当するオプションをハイライト
    const options = document.querySelectorAll(`.step.active .option-button`);
    
    options.forEach((button) => {
        const buttonText = button.textContent.trim();
        if (buttonText === selectedOptions[category]) {
            button.classList.add('selected');  // 選択されたボタンにクラスを追加
        } else {
            button.classList.remove('selected');  // 他のボタンからクラスを削除
        }
    });
}


// ステップ表示を制御する関数
let currentStep = 0;

function showStep(stepIndex) {
    const steps = document.querySelectorAll('.step');
    const mainVisual = document.querySelector('.main-visual'); 
    steps.forEach((step, index) => {
        step.style.display = (index === stepIndex) ? 'block' : 'none';
    });


    // 各ステップに戻った時に選択内容をハイライト
    if (stepIndex === 0) highlightSelectedOption('experience');
    if (stepIndex === 1) highlightSelectedOption('timing');
    if (stepIndex === 2) highlightSelectedOption('salary');

    // STEP2, 3, 4, 5の時のみメインビジュアルを非表示
    if (stepIndex >= 1 && stepIndex <= 4) {
        mainVisual.style.display = 'none';  // メインビジュアルを非表示
    } else {
        mainVisual.style.display = 'block';  // それ以外のステップでは表示
    }

    updateProgressBar(stepIndex);
    currentStep = stepIndex;  // 現在のステップを更新
}


// 次のステップに進む
// 次のステップに進む
function nextStep() {
    const steps = document.querySelectorAll('.step');

    // 現在のステップに関連する選択がされているか確認
    if (currentStep === 0 && !selectedOptions.experience) {
        alert('経験年数を選択してください');
        return;
    }
    if (currentStep === 1 && !selectedOptions.timing) {
        alert('転職希望時期を選択してください');
        return;
    }
    if (currentStep === 2 && !selectedOptions.salary) {
        alert('現在の年収を選択してください');
        return;
    }
    
    // STEP4で名前と生まれ年をチェックする
    if (currentStep === 3) {
        const name = document.getElementById('name').value;
        const birthYear = document.getElementById('birthYear').value;

        if (!name) {
            alert('名前を入力してください');
            return;
        }
        if (!birthYear) {
            alert('生まれ年を入力してください');
            return;
        }
    }

    // 次のステップがまだ存在する場合に進む
    if (currentStep < steps.length - 1) {
        showStep(currentStep + 1);  // 次のステップを表示
    }
}


// 前のステップに戻る
function prevStep() {
    if (currentStep > 0) {
        showStep(currentStep - 1);  // 前のステップを表示
    }
}



// プログレスバーを更新する関数
function updateProgressBar(stepIndex) {
    const progressItems = document.querySelectorAll('.progress-bar li');
    progressItems.forEach((item, index) => {
        item.classList.toggle('active', index <= stepIndex);
    });
}

// ブラウザの履歴に状態を追加
function pushHistoryState() {
    history.pushState(null, null, window.location.pathname);  // 履歴に状態を追加
}


// 現在の日付をフォーマットして表示
window.onload = function() {
    const updateDate = document.getElementById('update-date');
    const today = new Date();
    const formattedDate =  (today.getMonth() + 1) + '月' + today.getDate() + '日';
    updateDate.textContent = formattedDate;  // 日付を挿入
};

// フォーム送信処理
document.getElementById('multiStepForm').addEventListener('submit', function(e) {
    e.preventDefault(); // デフォルトのフォーム送信を防止

    // フォームデータを手動で取得
    const formData = {
        experience: selectedOptions.experience, // 選択された経験年数
        timing: selectedOptions.timing,        // 転職希望時期
        salary: selectedOptions.salary,        // 現在の年収
        name: document.getElementById('name').value,  // 名前
        birthYear: document.getElementById('birthYear').value,  // 生まれ年
        phone: document.getElementById('phone').value,  // 電話番号
        email: document.getElementById('email').value   // メールアドレス
    };

    // ------------　ここから下媒体ごとでコード異なる ------------　

    // Google Apps ScriptのURL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxy9OrbHG-p27uRcMkoVYhc9DcW87z-SOUZW_3ltnS9JecvZVTpTkpJ7mh-fOw82efPrA/exec'; // GASのウェブアプリURL
    // const scriptURL = 'https://script.google.com/macros/s/AKfycbzr7TloD3KXj8A75T9JIvl5R6bFLGXl0Vxk6e1L_cH42T0I1ZaAbO-czFCiIV4BRmS2/exec'; // Yahoo!用
    // const scriptURL = 'https://script.google.com/macros/s/AKfycbzJlJLtPoUo-5gVHb9ZHEZ8Os9oIjt4rd7zXeJtQVpfVloEOpTC_iCd5PLCLNGQFvVo7Q/exec'; // Meta用

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',  // CORSエラーを一時的に回避
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData)
    })
    .then(response => {
        console.log('Request completed');  // レスポンスはチェックできません
        alert('会員登録ありがとうございま。「閉じる」を');
        window.location.href = 'https://timerex.net/s/nishikawa-taichi_6ee2/fc7e2342';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('エラーが発生しました');
    });
    
});

 // ------------------------------------------------------

