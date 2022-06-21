const txtElement = ["Abian Ayatullah Fikri"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(ngetik, 400);
})();

function tampilData() {
  var nama = document.getElementById("name").value;
  alert("Terima kasih " + nama + " ,Pesan Anda Telah terkirim😊");
}
