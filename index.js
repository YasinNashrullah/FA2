const openMenfess = document.getElementById("openMenfess");
const textMenfess = document.getElementById("textMenfess");
const closeMenfess = document.getElementById("closeMenfess");

function openTextMenfess() {
  textMenfess.style.display = "block";
}

function closeTextMenfess() {
  textMenfess.style.display = "none";
}

openMenfess.addEventListener("click", openTextMenfess);
closeMenfess.addEventListener("click", closeTextMenfess);

// gallery
const sendButton = document.querySelector(".send");
const imageDiv = document.getElementById("imageDiv");
const closeButton = document.getElementById("closeButton");

// Tambahkan event listener untuk toggle .img saat tombol "Send" diklik
sendButton.addEventListener("click", () => {
  imageDiv.style.display =
    imageDiv.style.display === "none" || imageDiv.style.display === ""
      ? "block"
      : "none";
});

// Tambahkan event listener untuk menutup .img saat tombol "Close" diklik
closeButton.addEventListener("click", () => {
  imageDiv.style.display = "none";
});

document.getElementById("upload").addEventListener("change", function (e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  var previewImage = document.getElementById("preview-image");
  var uploadText = document.getElementById("upload-text");

  reader.onload = function (event) {
    previewImage.src = event.target.result;
    previewImage.style.display = "block";
    uploadText.style.display = "none";
  };

  reader.readAsDataURL(file);
});

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCeBs2D06b-ADhA8tsrA7QovhW3pvOfiTE",
  authDomain: "web-kelas-a2.firebaseapp.com",
  projectId: "web-kelas-a2",
  storageBucket: "web-kelas-a2.appspot.com",
  messagingSenderId: "1005715044035",
  appId: "1:1005715044035:web:2eac7f2de5a910dfb6d476",
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
var firestore = firebase.firestore();

document.getElementById("upload").addEventListener("change", function (e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  var previewImage = document.getElementById("preview-image");
  var uploadText = document.getElementById("upload-text");

  reader.onload = function (event) {
    previewImage.src = event.target.result;
    previewImage.style.display = "block";
    uploadText.style.display = "none";
  };

  reader.readAsDataURL(file);
});

document.getElementById("upload-button").addEventListener("click", function () {
  var file = document.getElementById("upload").files[0];
  var storageRef = storage.ref("images/" + file.name);
  var uploadTask = storageRef.put(file);

  uploadTask.on(
    "state_changed",
    function (snapshot) {
      // Mengikuti status unggahan
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING:
          console.log("Upload is running");
          break;
      }
    },
    function (error) {
      // Tangani kesalahan unggahan
      console.error("Error uploading: ", error);
    },
    function () {
      // Unggahan selesai, dapatkan URL gambar
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log("File available at", downloadURL);
        // Simpan URL gambar ke Firestore
        firestore
          .collection("images")
          .add({ imageURL: downloadURL })
          .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      });
    }
  );
});

// jadawl
AOS.init(); // Inisialisasi AOS

// Definisikan jadwal untuk setiap hari
function tampilkanJadwal(hari) {
  const jadwal = {
    senin: `
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div class="pelajaran">Fikih</div>
      <div class="jam">07.00-07.50</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div class="pelajaran">Fisika</div>
      <div class="jam">07.50-09.10</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <div class="pelajaran">Pkn</div>
      <div class="jam">09.10-09.50</div>
    </div>

    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div class="pelajaran">Istirahat</div>
      <div class="jam">09.50-10.10</div>
    </div>

    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div class="pelajaran">Pkn</div>
      <div class="jam">10.10-10.45</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Kimia</div>
      <div class="jam">10.45-11.25</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Ishoma</div>
      <div class="jam">11.25-12.15</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Kimia</div>
      <div class="jam">12.15-12.50</div>
    </div>
    <div
    class="divJadwalLast"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Matematika Lanjut</div>
      <div class="jam">12.50-14.00</div>
    </div>
  
  `,
    selasa: `
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div class="pelajaran">Matematika Lanjut</div>
      <div class="jam">07.00-08.30</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div class="pelajaran">Bahasa Indonesia</div>
      <div class="jam">08.30-09.50</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <div class="pelajaran">Istirahat</div>
      <div class="jam">09.50-10.10</div>
    </div>

    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div class="pelajaran">Seni</div>
      <div class="jam">10.10-10.45</div>
    </div>

    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div class="pelajaran">Bahasa Jawa</div>
      <div class="jam">10.45-11.25</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Ishoma</div>
      <div class="jam">11.25-12.15</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Bahasa Jawa</div>
      <div class="jam">12.15-12.50</div>
    </div>
    <div
    class="divJadwalLast"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Akidah Akhlak</div>
      <div class="jam">12.50-14.00</div>
    </div>
  
  `,
    rabu: `
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div class="pelajaran">Bk</div>
      <div class="jam">07.00-07.50</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div class="pelajaran">Sejarah</div>
      <div class="jam">07.50-09.10</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <div class="pelajaran">Bahasa Inggris</div>
      <div class="jam">09.10-09.50</div>
    </div>

    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div class="pelajaran">Istirahat</div>
      <div class="jam">09.50-10.10</div>
    </div>

    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div class="pelajaran">Bahasa Inggris</div>
      <div class="jam">10.10-10.45</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Biologi</div>
      <div class="jam">10.45-11.25</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Ishoma</div>
      <div class="jam">11.25-12.15</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Matematika Wajib</div>
      <div class="jam">12.15-12.50</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Kemuhammadiyahan</div>
      <div class="jam">12.50-13.25</div>
    </div>
    <div
    class="divJadwalLast"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Fisika</div>
      <div class="jam">13.25-14.00</div>
    </div>
  `,
    kamis: `
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div class="pelajaran">Bahasa Arab</div>
      <div class="jam">07.00-07.50</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div class="pelajaran">Tarikh</div>
      <div class="jam">07.50-08.30</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <div class="pelajaran">Fisika</div>
      <div class="jam">08.30-09.50</div>
    </div>

    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div class="pelajaran">Istirahat</div>
      <div class="jam">09.50-10.10</div>
    </div>

    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div class="pelajaran">Kimia</div>
      <div class="jam">10.10-10.45</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Matematika Wajib</div>
      <div class="jam">10.45-11.25</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Ishoma</div>
      <div class="jam">11.25-12.15</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Matematika Wajib</div>
      <div class="jam">12.15-12.50</div>
    </div>
    <div
    class="divJadwalLast"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="pelajaran">Biologi</div>
      <div class="jam">12.50-14.00</div>
    </div>
  `,
    jumat: `
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div class="pelajaran">Olahraga</div>
      <div class="jam">07.00-08.30</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div class="pelajaran">Bahasa Indonesia</div>
      <div class="jam">08.30-09.10</div>
    </div>
    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <div class="pelajaran">AlQuran Hadist</div>
      <div class="jam">09.10-09.50</div>
    </div>

    <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div class="pelajaran">Istirahat</div>
      <div class="jam">09.50-10.10</div>
    </div>

    <div
    class="divJadwalLast"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div class="pelajaran">Biologi</div>
      <div class="jam">10.10-11.25</div>
    </div>
  
  `,
    sabtu: `
  <div
      class="divJadwal"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div class="pelajaran">Pkwu</div>
      <div class="jam">07.00-08.30</div>
    </div>
    <div
      class="divJadwalLast"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div class="pelajaran">Kimia</div>
      <div class="jam">08.30-09.50</div>
    </div>
  `,
  };

  const scheduleDiv = document.getElementById("scheduleContent");

  // Periksa apakah hari tersebut ada dalam jadwal
  if (jadwal.hasOwnProperty(hari)) {
    // Tampilkan jadwal sesuai dengan hari
    scheduleDiv.innerHTML = jadwal[hari];
  } else {
    scheduleDiv.innerHTML = "<p>Jadwal untuk hari ini tidak tersedia.</p>";
  }
}

// Fungsi untuk menampilkan piket berdasarkan hari
function tampilkanPiket(hari) {
  const piket = {
    senin: ["Alfarel", "Alfi", "Rivan", "Ihsan"],
    selasa: ["Alifah", "Zalfa", "Satria", "Afif"],
    rabu: ["Alvito", "Zahra", "FarelD", "Fatih"],
    kamis: ["Anya", "Tiara", "Kevin", "Defa"],
    jumat: ["Aulia", "Yahya", "Juanova", "Syauqi"],
    sabtu: ["Caesar", "Yasin", "Tara"],
    // ... (piket untuk hari lainnya) ...
  };

  const piketDiv = document.getElementById("piketContent");

  // Periksa apakah hari tersebut ada dalam piket
  if (piket.hasOwnProperty(hari)) {
    // Tampilkan piket sesuai dengan hari
    const namaPiket = piket[hari];
    const ul = document.createElement("ul");

    // Tambahkan nama-nama piket ke dalam daftar
    namaPiket.forEach((nama) => {
      const li = document.createElement("li");
      li.textContent = nama;
      ul.appendChild(li);
    });

    piketDiv.appendChild(ul);
  } else {
    piketDiv.innerHTML =
      "<p>Informasi piket untuk hari ini tidak tersedia.</p>";
  }
}

// Fungsi untuk mendapatkan waktu saat ini di Asia Tengah
function updateJadwal() {
  const asiaTengah = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });
  const waktu = new Date(asiaTengah);
  const hari = waktu.getDay(); // Mendapatkan hari saat ini (0 untuk Minggu, 1 untuk Senin, dst.)
  let hariSekarang;

  // Tentukan hari berdasarkan angka yang didapat dari getDay()
  switch (hari) {
    case 0:
      hariSekarang = "minggu";
      break;
    case 1:
      hariSekarang = "senin";
      break;
    case 2:
      hariSekarang = "selasa";
      break;
    case 3:
      hariSekarang = "rabu";
      break;
    case 4:
      hariSekarang = "kamis";
      break;
    case 5:
      hariSekarang = "jumat";
      break;
    case 6:
      hariSekarang = "sabtu";
      break;
    default:
      break;
  }

  // Tampilkan jadwal dan piket sesuai dengan hari saat ini
  tampilkanJadwal(hariSekarang);
  tampilkanPiket(hariSekarang);
}

// Pertama kali, panggil fungsi updateJadwal agar jadwal dan piket yang sesuai ditampilkan saat halaman dimuat
updateJadwal();

//jadwal link
// Ambil elemen dengan ID yang diperlukan
// Ambil elemen dengan ID yang diperlukan
// JavaScript untuk mengatur perilaku elemen-elemen HTML

// Mendapatkan elemen-elemen yang dibutuhkan
// Ambil elemen dengan ID yang diperlukan
const linkStruktur = document.getElementById('linkStruktur');
const linkJadwal = document.getElementById('linkJadwal');
const strukturKelas = document.getElementById('strukturKelas');
const scheduleContent = document.getElementById('schedule');

// Tampilkan strukturKelas dan sembunyikan scheduleContent saat halaman dimuat
window.onload = function() {
  strukturKelas.style.display = 'block';
};

// Tambahkan event listener untuk linkStruktur
linkStruktur.addEventListener('click', function() {
  strukturKelas.style.display = 'block';
  scheduleContent.style.display = 'none';
});

// Tambahkan event listener untuk linkJadwal
linkJadwal.addEventListener('click', function() {
  strukturKelas.style.display = 'none';
  scheduleContent.style.display = 'block';
});

