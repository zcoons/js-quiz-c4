var qaContrEl = $('.qaContr');
var startBtn = $('#startBtn');
var qstnEl = $('#qstn');
var ansContr = $('.ansContr');
var ans1El = $('#ans1');
var ans2El = $('#ans2');
var ans3El = $('#ans3');
var ans4El = $('#ans4');
var timerEl = $('.timer');
var secondsLeft = 180

timerEl.attr("style", "display: flex; justify-content: right; align-items: right; font-size: 16px; font-weight: bold; color: #ff0000; padding:  0.5em 0.5em 0.5em; border: 0.5em solid");
qaContrEl.attr("style", "display: flex; justify-content: center; align-items: center; margin: 0 600px; padding: 15px 32px; text-align: center; background-color: #0000ff; border: 5px solid");
startBtn.attr("style", "font-size: 25px; font-weight: bold; color: white; padding: 15px 32px; text-align: center; border-radius: 16px; background-color: #ff0000; border: 5px solid");
startBtn.text("Start Quiz");


startBtn.on("click", function quiz() {
    console.log("start")
    var timerInterval = setInterval(function () {
        secondsLeft --;
        timerEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);

    }


});
});
