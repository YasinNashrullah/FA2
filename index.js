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


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCeBs2D06b-ADhA8tsrA7QovhW3pvOfiTE",
    authDomain: "web-kelas-a2.firebaseapp.com",
    projectId: "web-kelas-a2",
    storageBucket: "web-kelas-a2.appspot.com",
    messagingSenderId: "1005715044035",
    appId: "1:1005715044035:web:2eac7f2de5a910dfb6d476"
  };
firebase.initializeApp(firebaseConfig);

function uploadImage() {
    const input = document.getElementById("inputImg");
    const selectedFile = input.files[0];

    if (!selectedFile) {
      console.error("Please select an image first.");
      return;
    }

    const storage = firebase.storage();
    const storageRef = storage.ref();
    const imagesRef = storageRef.child("images/" + selectedFile.name);

    imagesRef
      .put(selectedFile)
      .then((snapshot) => {
        console.log("Image uploaded successfully to Firebase Storage");
        // Any further logic after image upload
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  }

    // Menambahkan event listener ke input file untuk memanggil fungsi uploadImage()
    const inputImg = document.getElementById("inputImg");
    inputImg.addEventListener("change", uploadImage);

    // Menambahkan event listener ke label untuk memanggil fungsi uploadImage()
    const uploadLabel = document.getElementById("uploadLabel");
    uploadLabel.addEventListener("click", uploadImage);

