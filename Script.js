function hitungUmur() {
    var dob = document.getElementById('dob').value;
    if (dob === "") {
        alert("Mohon pilih tanggal lahir!");
        return;
    }
    var dobDate = new Date(dob);
    var today = new Date();
    var tahun = today.getFullYear() - dobDate.getFullYear();
    var bulan = today.getMonth() - dobDate.getMonth();
    var hari = today.getDate() - dobDate.getDate();
    if (hari < 0) {
        bulan--;
        hari += 30;
    }
    if (bulan < 0) {
        tahun--;
        bulan += 12;
    }
    var hasilUmur = "Umurmu " + tahun + " tahun, " + bulan + " bulan, " + hari + " hari, ";
    document.getElementById('hasilUmur').innerHTML = hasilUmur;
}