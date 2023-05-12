const quiz = [
{
 question: 'やなっちの誕生日はいつ？',
 answers: [
    '6月17日',
    '6月7日',
    '6月19日',
    '6月11日' 
 ],
 correct:'6月19日',
},{
 question: 'やなっちの高校時代のバイト先は？',
 answers: [
    'コーナン',
    'ジャパン',
    'かに道楽',
    '業務スーパー' 
],
 correct:'コーナン',
},{
 question: 'やな家の猫ちゃんの名前ではないものは？',
 answers: [
    'エマ',
    'ナナ',
    'ルナ',
    'ナイ' 
],
 correct:'ナナ',
},{
 question: 'やなっちは秘伝のたれ何倍がお気に入り？',
 answers: [
    '2ば',
    '3分の2ば',
    '3ば',
    'きほん' 
],
 correct:'3ば',
},{
 question: 'やなっちの彼氏の名前は？',
 answers: [
    'たけちゃん',
    'たくちゃん',
    'たきちゃん',
    'たかちゃん' 
],
 correct:'たかちゃん',
}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setUpQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength ){
     $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
     buttonIndex++;
    }
}
setUpQuiz();

const windowAlert = () => {
    if (score === quizIndex){
       window.alert('終了！あなたの正解数は' + score + '/' + quizLength +'です！これであなたもやなっちマスター！');
    } else {
       window.alert('終了！あなたの正解数は' + score + '/' + quizLength +'です！全問正解目指して頑張って！');
    }
   };

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
     }else {
        window.alert('不正解！');
     }

    quizIndex++;
    if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setUpQuiz();
    } else {
    // 問題数がもうなければこちらを実行
    windowAlert();
    // window.alert('終了！あなたの正解数は' + score + '/' + quizLength +'です！')
    }
};



// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
     clickHandler(e);
    });
    handlerIndex++;
};
