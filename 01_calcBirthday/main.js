function getDateDiff(previous, latest) {
    const calc = latest.getTime() - previous.getTime();
    const days = Math.floor(calc / (1000 * 60 * 60 * 24));

    return days;
}

function calcBirthday() {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const birth = new Date(year, month - 1, day);
    const now = new Date();
    const diff = getDateDiff(birth, now);

    let message = "あなたが生まれてから" + diff + "日経ちました";

    if (diff < 0) {
        message = "あなたが生まれるまであと" + -diff + "日あります";
    }

    const result = document.getElementById("result");
    result.textContent = message;
}