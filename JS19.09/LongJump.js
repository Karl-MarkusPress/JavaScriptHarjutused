const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
];

function kuvaNimekiri() {
    const nimekiriElement = document.getElementById("opilasteNimekiri");
    nimekiriElement.innerHTML = ""; // Tühjendame nimekirja enne uuesti kuvamist

    opilased.forEach(opilane => {
        const nimi = opilane.nimi;
        const tulemused = opilane.tulemused.join(", ");
        const parim = Math.max(...opilane.tulemused);
        const keskmine = arvutaKeskmine(opilane.tulemused).toFixed(2);

        const opilaneHTML = `<p>${nimi} - Tulemused: ${tulemused}, Parim: ${parim}, Keskmine: ${keskmine}</p>`;
        nimekiriElement.innerHTML += opilaneHTML;
    });
}

function lisatulemus() {
    const nimi = prompt("Sisesta õpilase nimi:");
    const tulemusedStr = prompt("Sisesta õpilase tulemused kujul number1,number2,number3");
    const tulemused = tulemusedStr.split(",").map(Number);

    opilased.push({ nimi: nimi, tulemused: tulemused });
    kuvaNimekiri();
    arvutaParimKeskmine();
}

function arvutaKeskmine(tulemused) {
    const summa = tulemused.reduce((acc, tulemus) => acc + tulemus, 0);
    return summa / tulemused.length;
}

function arvutaParimKeskmine() {
    const keskmised = opilased.map(opilane => arvutaKeskmine(opilane.tulemused));
    const parimKeskmine = Math.max(...keskmised).toFixed(2);

    const parimKeskmineElement = document.getElementById("parimKeskmine");
    parimKeskmineElement.innerHTML = `<p>Parim keskmine tulemus: ${parimKeskmine}</p>`;
}

kuvaNimekiri();
arvutaParimKeskmine();
