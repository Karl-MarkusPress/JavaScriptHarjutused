const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

function otsiNime() {
    const sisestatudNimi = document.getElementById("nimiInput").value.toLowerCase(); // Võta sisestatud nimi ja tee see väiketähtedeks

    const leitudNimed = nimed.filter(nimi => nimi.toLowerCase().includes(sisestatudNimi));

    if (leitudNimed.length > 0) {
        const korrastatudNimed = leitudNimed.map(kordaNimed);
        const tulemusTekst = "Leitud nimed: " + korrastatudNimed.join(", ");
        document.getElementById("tulemus").innerText = tulemusTekst;
    } else {
        document.getElementById("tulemus").innerText = "Nime ei leitud.";
    }
}

function kordaNimed(nimi) {
    const nimeOsad = nimi.split(" ");
    const eesnimi = nimeOsad[0].charAt(0).toUpperCase() + nimeOsad[0].slice(1);
    const perenimi = nimeOsad[1].charAt(0).toLowerCase() + nimeOsad[1].slice(1);
    return eesnimi + " " + perenimi + "@tthk.ee";
}
