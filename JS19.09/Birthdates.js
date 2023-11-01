const inimesteAndmed = [
  { nimi: "Mari Maasikas", isikukood: "38705123568" },
  { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
  { nimi: "Kristiina Kukk", isikukood: "39203029876" },
  { nimi: "Margus Mustikas", isikukood: "49807010346" },
  { nimi: "Jaak Järve", isikukood: "39504234985" },
  { nimi: "Kadi Kask", isikukood: "39811136789" },
  { nimi: "Karl-Markus Press", isikukood: "50412200228"},
];

function leiaAndmed() {
  const isikukood = document.getElementById("isikukoodInput").value;

  const leitudInimene = inimesteAndmed.find(inimene => inimene.isikukood === isikukood);

  if (leitudInimene) {
      const { nimi, isikukood } = leitudInimene;
      const sünniaeg = leiaSünniaeg(isikukood);
      const vanus = leiaVanus(isikukood);

      const tulemusTekst = `${nimi} - Sünniaeg: ${sünniaeg}, Vanus: ${vanus} aastat`;
      document.getElementById("tulemus").innerText = tulemusTekst;
  } else {
      document.getElementById("tulemus").innerText = "Inimest ei leitud.";
  }
}

function leiaSünniaeg(isikukood) {
  const sünniaasta = parseInt(isikukood.substring(1, 3));
  const sünnikuu = parseInt(isikukood.substring(3, 5));
  const sünnipäev = parseInt(isikukood.substring(5, 7));

  return `${sünnipäev}.${sünnikuu}.${sünniaasta}`;
}

function leiaVanus(isikukood) {
  const täna = new Date();
  const praeguneAasta = täna.getFullYear();
  const sünniaasta = parseInt(isikukood.substring(1, 3));
  const sajand = parseInt(isikukood.charAt(0));

  let täielikSünniaasta;

  if (sajand === 1 || sajand === 2) {
      täielikSünniaasta = 1900 + sünniaasta;
  } else if (sajand === 3 || sajand === 4 || sajand === 5 || sajand === 6) {
      täielikSünniaasta = 2000 + sünniaasta;
  } else if (sajand === 7 || sajand === 8) {
      täielikSünniaasta = 2100 + sünniaasta;
  } else {
      return "Vigane isikukood";
  }

  return praeguneAasta - täielikSünniaasta;
}



function lisaInimene() {
  const nimi = document.getElementById("nimiInput").value;
  const isikukood = document.getElementById("isikukoodLisa").value;

  if (nimi && isikukood) {
      const uusInimene = { nimi: nimi, isikukood: isikukood };
      inimesteAndmed.push(uusInimene);

      // Lisa uue inimese andmed HTML-i
      const tulemusTekst = `${nimi} lisatud - Sünniaeg: ${leiaSünniaeg(isikukood)}, Vanus: ${leiaVanus(isikukood)} aastat`;
      document.getElementById("tulemus").innerText = tulemusTekst;
  } else {
      document.getElementById("tulemus").innerText = "Palun täida nimi ja isikukood.";
  }
}
