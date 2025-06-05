const currentTimeDisplay = document.getElementById("currentTime");

function updateTime() {
  const now = new Date(); // 現在の日時を取得
  const hours = String(now.getHours()).padStart(2, "0"); // 時を2桁表示 (例: 09)
  const minutes = String(now.getMinutes()).padStart(2, "0"); // 分を2桁表示
  const seconds = String(now.getSeconds()).padStart(2, "0"); // 秒を2桁表示

  currentTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// ページがロードされたときに一度実行し、その後1秒ごとに実行
updateTime(); // 初期表示
setInterval(updateTime, 1000); // 1000ミリ秒（1秒）ごとにupdateTime関数を実行
