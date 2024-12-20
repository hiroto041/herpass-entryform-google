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

    window.scrollTo(0, 0);
    document.body.style.zoom = "100%";
}



// 名前と生まれ年が入力されたときに次へボタンを光らせる関数
function checkInputCompletion() {
    const name = document.getElementById('name').value;
    const birthYear = document.getElementById('birthYear').value;
    const nextButton = document.querySelector('.step-4-next');

    // 生まれ年が半角数字4桁かどうかを確認する正規表現
    const birthYearIsValid = /^\d{4}$/.test(birthYear);

    // 名前が空でなく、生まれ年が4桁の半角数字である場合に光らせる
    if (name.trim() !== '' && birthYearIsValid) {
        // 両方が記入完了したタイミングでアニメーションを追加
        if (!nextButton.classList.contains('button-glow')) {
            nextButton.classList.add('button-glow');
        }
    } else {
        // 片方でも条件を満たさないならアニメーションを除去
        nextButton.classList.remove('button-glow');
    }
}

// 名前と生まれ年の入力にリアルタイムで反応するイベントリスナーを追加
document.getElementById('name').addEventListener('input', checkInputCompletion);
document.getElementById('birthYear').addEventListener('input', checkInputCompletion);


// 携帯番号とメールアドレスが入力されたときに次へボタンを光らせる関数
function checkPhoneEmailCompletion() {
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const nextButton = document.querySelector('.step-5-con');

    // 携帯番号が半角数字11桁かどうかを確認する正規表現
    const phoneIsValid = /^\d{11}$/.test(phone);
    
    // メールアドレスが有効かどうかを確認する正規表現
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // 両方が記入完了したタイミングでアニメーションを追加
    if (phoneIsValid && emailIsValid) {
        if (!nextButton.classList.contains('button-glow')) {
            nextButton.classList.add('button-glow');
        }
    } else {
        // 片方でも条件を満たさない場合はアニメーションを除去
        nextButton.classList.remove('button-glow');
    }
}

// 携帯番号とメールアドレスの入力にリアルタイムで反応するイベントリスナーを追加
document.getElementById('phone').addEventListener('input', checkPhoneEmailCompletion);
document.getElementById('email').addEventListener('input', checkPhoneEmailCompletion);

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
        window.scrollTo({ top: 0, behavior: 'smooth' });
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




// フォーム送信処理
document.getElementById('multiStepForm').addEventListener('submit', function (e) {
    e.preventDefault(); // デフォルトのフォーム送信を防止

    // フォームで入力された名前を取得
    const name = document.getElementById('name').value;

    // サンクスページに名前を反映
    const userNameElement = document.getElementById('user-name');
    userNameElement.textContent = `${name} 様`;

    // UIの変更（サンクスページを表示）
    document.querySelector('.progress-bar-container').style.display = 'none';
    document.querySelectorAll('.step').forEach(step => (step.style.display = 'none'));
    document.querySelector('.update').style.display = 'none';
    document.getElementById('thanks-page').style.display = 'block';
    document.querySelector('.header-text-foot').style.display = 'none';
    document.querySelector('.header-text-top').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // フォームデータをバックグラウンドで送信
    const formData = {
        experience: selectedOptions.experience,
        timing: selectedOptions.timing,
        salary: selectedOptions.salary,
        name: name,
        birthYear: document.getElementById('birthYear').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value
    };

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwU6NoWFi2KbokeCCrLsbmR5r9U9e6u5dLIzNWD3Xc4W2JN-nUAuxrdHNIMop-7MvzMww/exec';
    fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData)
    })
        .then(() => {
            console.log('データ送信が完了しました');
        })
        .catch(error => {
            console.error('データ送信中にエラーが発生しました:', error);
        });
});






// ページの読み込み後、ポップアップ用のイベントを設定
window.onload = function() {
    history.pushState(null, null, location.href);  // 戻る操作の初期設定
};
