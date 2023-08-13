/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
/** @module Login-Script */
/**
*membuat variabel loginFormElement untuk tampilan form.
* @cinstant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
*membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLEmail}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
*membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLEmail}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
*membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant {String}
*/
const expectedEmail = 'admin@dicoding.com';

/**
*membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant {String}
*/
const expectedPassword = 'superpassword';

/* Comment : Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  *membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
  * @constant {String}
  */
  const email = inputEmailElement.value;

  /**
  *membuat variabel password untuk menyimpan nilai password yang didapatkan saat button ditekan.
  * @constant {String}
  */
  const password = inputPasswordElement.value;

   /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
  } else {
    /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
    showPopUp();
  }
});
