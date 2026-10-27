document.getElementById('hesaplaBtn').addEventListener('click', function() {
    const bugunSis = parseFloat(document.getElementById('bugunSis').value) || 0;
    const duble = parseFloat(document.getElementById('duble').value) || 0;
    const gecenHafta = parseFloat(document.getElementById('gecenHafta').value) || 0;
    const gecenSene = parseFloat(document.getElementById('gecenSene').value) || 0;
    const ciro = parseFloat(document.getElementById('ciro').value) || 0;

    if (bugunSis <= 0) {
        alert("Lütfen geçerli bir bugünkü şiş sayısı girin.");
        return;
    }

    const dubleOrtalamasi = ((duble / bugunSis) * 100).toFixed(2);
    const haftalikFark = (((bugunSis - gecenHafta) * 100) / bugunSis).toFixed(2);
    const senelikFark = (((bugunSis - gecenSene) * 100) / bugunSis).toFixed(2);
    const kisiOrtalamasi = (ciro / bugunSis).toFixed(2);

    document.getElementById('r1').innerText = "% " + dubleOrtalamasi;
    document.getElementById('r2').innerText = "% " + haftalikFark;
    document.getElementById('r3').innerText = "% " + senelikFark;
    document.getElementById('r4').innerText = kisiOrtalamasi + " ₺";
});