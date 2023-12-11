// Import AOS library
import AOS from "aos";
import "aos/dist/aos.css";

// Data untuk gambar
const IMAGES = [
  //bunch of data
];

// Fungsi untuk membuat elemen carousel
function createCarousel(images) {
  // Buat elemen div dengan kelas carousel
  let div = document.createElement("div");
  div.className = "carousel";
  // Buat elemen slider dengan kelas slider
  let slider = document.createElement("div");
  slider.className = "slider";
  // Untuk setiap gambar dalam array images
  for (let image of images) {
    // Buat elemen img dengan src gambar
    let img = document.createElement("img");
    img.src = image;
    // Tambahkan event listener untuk membuka modal saat diklik
    img.addEventListener("click", function () {
      // Buat elemen modal dengan kelas modal
      let modal = document.createElement("div");
      modal.className = "modal";
      // Buat elemen img dengan src gambar
      let modalImg = document.createElement("img");
      modalImg.src = image;
      // Buat elemen button dengan kelas close
      let close = document.createElement("button");
      close.className = "close";
      // Tambahkan event listener untuk menutup modal saat diklik
      close.addEventListener("click", function () {
        // Hapus elemen modal dari body
        document.body.removeChild(modal);
      });
      // Tambahkan elemen img dan button ke dalam modal
      modal.appendChild(modalImg);
      modal.appendChild(close);
      // Tambahkan elemen modal ke dalam body
      document.body.appendChild(modal);
    });
    // Tambahkan elemen img ke dalam slider
    slider.appendChild(img);
  }
  // Tambahkan elemen slider ke dalam div
  div.appendChild(slider);
  // Kembalikan elemen div
  return div;
}

// Fungsi untuk membuat elemen button send
function createButtonSend() {
  // Buat elemen button dengan kelas button-send
  let button = document.createElement("button");
  button.className = "button-send";
  // Tambahkan teks "Send Image" ke dalam button
  button.textContent = "Send Image";
  // Tambahkan event listener untuk mengirim gambar ke Firebase Storage saat diklik
  button.addEventListener("click", function () {
    // Dapatkan elemen input dengan id file-input
    let input = document.getElementById("file-input");
    // Jika input tidak kosong
    if (input.files.length > 0) {
      // Dapatkan file pertama dari input
      let file = input.files[0];
      // Dapatkan referensi Firebase Storage
      let storage = getStorage();
      // Buat referensi untuk file dengan nama file
      let storageRef = ref(storage, "GambarAman/" + file.name);
      // Unggah file ke Firebase Storage
      uploadBytes(storageRef, file)
        .then((snapshot) => {
          // Tampilkan pesan sukses
          alert("Image uploaded successfully!");
        })
        .catch((error) => {
          // Tampilkan pesan error
          alert("Error uploading image: " + error.message);
        });
    } else {
      // Tampilkan pesan peringatan
      alert("Please select an image to upload.");
    }
  });
  // Kembalikan elemen button
  return button;
}

// Fungsi untuk membuat elemen button request
function createButtonRequest() {
  // Buat elemen button dengan kelas button-request
  let button = document.createElement("button");
  button.className = "button-request";
  // Tambahkan teks "Request Image" ke dalam button
  button.textContent = "Request Image";
  // Tambahkan event listener untuk meminta gambar dari Firebase Storage saat diklik
  button.addEventListener("click", function () {
    // Dapatkan referensi Firebase Storage
    let storage = getStorage();
    // Buat referensi untuk folder GambarAman
    let storageRef = ref(storage, "GambarAman/");
    // Dapatkan daftar gambar dari Firebase Storage
    listAll(storageRef)
      .then((res) => {
        // Jika ada gambar
        if (res.items.length > 0) {
          // Pilih gambar secara acak dari daftar
          let randomIndex = Math.floor(Math.random() * res.items.length);
          let randomImage = res.items[randomIndex];
          // Dapatkan URL gambar
          getDownloadURL(randomImage)
            .then((url) => {
              // Tampilkan gambar di modal
              // Buat elemen modal dengan kelas modal
              let modal = document.createElement("div");
              modal.className = "modal";
              // Buat elemen img dengan src gambar
              let modalImg = document.createElement("img");
              modalImg.src = url;
              // Buat elemen button dengan kelas close
              let close = document.createElement("button");
              close.className = "close";
              // Tambahkan event listener untuk menutup modal saat diklik
              close.addEventListener("click", function () {
                // Hapus elemen modal dari body
                document.body.removeChild(modal);
              });
              // Tambahkan elemen img dan button ke dalam modal
              modal.appendChild(modalImg);
              modal.appendChild(close);
              // Tambahkan elemen modal ke dalam body
              document.body.appendChild(modal);
            })
            .catch((error) => {
              // Tampilkan pesan error
              alert("Error getting image URL: " + error.message);
            });
        } else {
          // Tampilkan pesan tidak ada gambar
          alert("There are no images in Firebase Storage.");
        }
      })
      .catch((error) => {
        // Tampilkan pesan error
        alert("Error getting images from Firebase Storage: " + error.message);
      });
  });
  // Kembalikan elemen button
  return button;
}

// Dapatkan elemen root dari HTML
let root = document.getElementById("root");

// Buat elemen carousel dan tambahkan ke dalam root
let carousel = createCarousel(IMAGES);
root.appendChild(carousel);

// Buat elemen input dengan id file-input
let input = document.createElement("input");
input.id = "file-input";
input.type = "file";
input.accept = "image/*";
input.hidden = true;
// Tambahkan elemen input ke dalam root
root.appendChild(input);

// Buat elemen button send dan tambahkan ke dalam root
let buttonSend = createButtonSend();
root.appendChild(buttonSend);

// Buat elemen button request dan tambahkan ke dalam root
let buttonRequest = createButtonRequest();
root.appendChild(buttonRequest);
