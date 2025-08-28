---
sidebar_position: 1
---

# Deploy Laravel di Shared Hosting cPanel? Ini Tutorialnya!

Apakah Anda seorang developer yang ingin meluncurkan aplikasi Laravel ke dunia nyata? Menggunakan cPanel adalah salah satu cara termudah untuk mendeploy aplikasi Laravel Anda, terutama jika Anda menggunakan shared hosting. Tutorial ini akan memandu Anda langkah demi langkah, dari persiapan awal hingga aplikasi Anda berhasil diakses secara online.

Tidak perlu khawatir jika Anda masih pemula, karena panduan ini dibuat sesederhana mungkin. Mari kita mulai!

---

## 1. Persiapan Awal (Requirements)

Sebelum kita masuk ke proses deployment, ada beberapa hal penting yang perlu Anda siapkan. Memastikan semua prasyarat ini terpenuhi akan membuat prosesnya berjalan lebih lancar.

### 1.1 File Aplikasi Laravel Anda
Pastikan Anda sudah memiliki proyek **Laravel** yang siap di-deploy. Ini termasuk semua kode, konfigurasi, dan database.

### 1.2 Akun Hosting cPanel
Anda memerlukan akses ke akun **cPanel** dari penyedia hosting Anda. Pastikan Anda memiliki kredensial login (username dan password) untuk masuk ke dashboard cPanel.

### 1.3 Konfigurasi Domain
Pastikan domain atau subdomain yang akan Anda gunakan sudah terhubung dengan server hosting Anda dan di cek kembali untuk **document root atau path lokasi penyimpanan data-data**. Anda bisa memeriksanya di bagian **Domains** di cPanel Anda.

> NOTES :    
> Document Root cPanel ke namadomain/public karena direktori public adalah satu-satunya bagian dari aplikasi Laravel yang boleh diakses oleh publik. Ini adalah praktik keamanan standar.


### 1.4 Versi PHP
Laravel membutuhkan versi PHP yang spesifik. Sebagian besar versi Laravel modern membutuhkan **PHP 8.x** atau yang lebih tinggi. Pastikan versi PHP di cPanel Anda sudah sesuai. Anda bisa mengubahnya melalui menu **PHP Selector** di dashboard cPanel.

Berikut ini adalah tampilan user interface cPanel untuk requirement setup domain & php version.

![2.1 Persiapan Server](/img/laravel/2.1-persiapan-server.png)

## 2. Persiapan Data-data Aplikasi / Proyek
Untuk mempermudah proses upload, kompres seluruh folder proyek Laravel Anda ke dalam format **`.zip`**. Pastikan Anda mengkompres isi folder **utama** proyek (dan pastikan untuk hidden file ikut terkompres). ada berbagai cara untuk melakukan kompress folder atau file sepeti gambar di bawah ini.

![2.1 Persiapan Server](/img/laravel/1.1-compress-file.png)

## 3. Export Database
Untuk mengekspor database, Anda bisa menggunakan perintah **mysqldump** di terminal. Perintah ini akan menghasilkan file SQL yang berisi semua skema (struktur tabel) dan data dari database Anda.

![2.1 Persiapan Server](/img/laravel/1.2-export-database.png)

Perintah yang terlihat pada gambar adalah:
```
mysqldump -u root -p laravel12 > laravel12 | gzip > laravel12.sql.gz
```

Setelah Anda menjalankan perintah ini dan memasukkan password dengan benar, sebuah file bernama laravel12.sql.gz akan dibuat di direktori tempat Anda menjalankan perintah tersebut. File ini siap untuk diimpor ke server cPanel Anda.

## 4. Preview Local
Sebelum memulai proses deployment ke cPanel, sangat penting untuk memastikan bahwa aplikasi Laravel Anda sudah berjalan dengan sempurna di lingkungan lokal. Seperti yang terlihat pada gambar, aplikasi Laravel sudah berhasil diakses melalui browser dengan URL http://127.0.0.1:8000 atau localhost.

![2.1 Persiapan Server](/img/laravel/1.1-local-preview.png)

Ini menunjukkan bahwa:
1. Semua route dan controller berfungsi dengan baik.
2. Koneksi ke database (jika ada) sudah berhasil.
3. Tampilan (view) aplikasi sudah sesuai dengan yang diharapkan.

Jika aplikasi Anda sudah berfungsi dengan baik di lokal, Anda bisa melanjutkan ke langkah berikutnya dengan keyakinan bahwa masalah yang mungkin muncul setelah deployment bukanlah berasal dari kode inti aplikasi, melainkan dari konfigurasi server.

## 5. Upload Data
Unggah File Aplikasi ke cPanel, Setelah Anda mengkompresi proyek Laravel menjadi file .zip atau .tar.gz, langkah selanjutnya adalah mengunggahnya ke server cPanel.

![2.1 Upload Data](/img/laravel/2.2-upload-data.png)

Pada gambar ini data-data aplikasi di upload pada direktory nama domain / subdomain tidak di dalam folder **/public** dikarenakan dari awal struktur data-data aplikasi laravel sudah terdapat folder **/public** sehingga nantinya akan di timpa isi untuk folder **/public** yang saat ini sudah ada pada di server.

## 6. Setup Struktur Folder

![2.2 Setup Folder](/img/laravel/2.3-setup-struktur-folder.png)

Ekstrak dan Pindahkan data-data Aplikasi

1. Di File Manager, klik kanan pada file arsip (misalnya, example-app.tar.gz) dan pilih Extract, Setelah proses ekstraksi selesai, sebuah folder baru (misalnya, example-app) akan muncul di direktori yang sama.
2. Masuk ke dalam folder example-app.
3. Pilih semua file dan folder yang ada di dalamnya, lalu klik Move di bagian atas menu.
4. Pada dialog Move, ubah jalur destinasi menjadi direktori root domain Anda, yaitu nama folder domain / subdomain. **Klik Move Files.**

> NOTES :    
> Untuk yang menggunakan domain utama dan document rootnya **public_html** pindahkan ke nama folder tersebut. Namun pada praktek ini adalah menggunakan subdomain dan nama folder direktory / Document root sudah di sesuaikan.

## 7. Struktur Folder

Berikut ini adalah tampilan dari struktur folder data aplikasi.

![2.3 Struktur Folder](/img/laravel/2.4-struktur-folder.png)

## 8. Create Database di cPanel

Untuk setup database ini semua berada di halaman ***cPanel > Manage My Databases*** seperti gambar berikut : 

![2.4 Create Database](/img/laravel/2.5-create-database-cPanel.png)

**Membuat Database dan Pengguna (User)**
Setelah file aplikasi Anda terunggah, langkah selanjutnya adalah menyiapkan database yang akan digunakan oleh Laravel.

1. Di menu utama cPanel, cari dan klik Manage My Databases. Pada bagian Create New Database, masukkan nama database yang Anda inginkan (misalnya, laravel12), lalu klik Create Database.
2. Gulir ke bawah ke bagian Add New User. Masukkan nama pengguna (misalnya, laravel12) dan password yang kuat. Pastikan untuk mencatat nama database, nama pengguna, dan password karena Anda akan membutuhkannya untuk konfigurasi file **.env Laravel.**
3. Setelah membuat pengguna, gulir ke bagian Add User to Database. Pilih pengguna yang baru saja Anda buat dari menu User dan database yang juga baru Anda buat dari menu Database, lalu klik Add.
4. Pada halaman Manage User Privileges, centang kotak ALL PRIVILEGES untuk memberikan semua hak akses kepada pengguna tersebut. Setelah itu, klik Make Changes.

Database Anda kini sudah siap dan memiliki pengguna dengan hak akses penuh yang dapat digunakan oleh aplikasi Laravel Anda.

## 9. Konfigurasi File .env

File .env berisi semua konfigurasi penting untuk aplikasi Laravel Anda, seperti pengaturan database dan URL aplikasi.

![2.5 Konfigurasi File .env](/img/laravel/2.6-konfigurasi-file-.env.png)

1. Di File Manager, buka folder utama proyek Laravel Anda (misalnya, example-app).
2. Cari file .env dan klik dua kali untuk membukanya di editor cPanel.
3. Konfigurasi Aplikasi:
    - Pastikan APP_ENV disetel ke production.
    - Pastikan APP_URL disetel ke URL domain atau subdomain Anda, misalnya http://laravel.sumberweb.com.
4. Konfigurasi Database:
    - Masukkan detail database yang telah Anda buat sebelumnya.
    - Isi DB_DATABASE dengan nama database Anda.
    - Isi DB_USERNAME dengan nama pengguna database Anda.
    - Isi DB_PASSWORD dengan kata sandi database Anda.
5. Setelah semua perubahan selesai, klik **Save Changes** di pojok kanan atas untuk menyimpan file.

Setelah file **.env** dikonfigurasi dengan benar, aplikasi Anda akan tahu cara terhubung ke database dan beroperasi di lingkungan live.

## 10. Import Database

Setelah database dan pengguna berhasil dibuat, langkah selanjutnya adalah mengimpor data dari database lokal Anda ke server cPanel. Ada dua cara yang bisa Anda gunakan:

### Metode 1: Impor Melalui phpMyAdmin

![2.5 Konfigurasi File .env](/img/laravel/2.9-import-database-via-cpanel.png)

1.  Di cPanel, cari dan klik **phpMyAdmin**.
2.  Di sisi kiri, pilih nama database yang telah Anda buat sebelumnya (misalnya, `laravel12`).
3.  Klik tab **Import** di bagian atas menu.
4.  Klik **Choose File**, lalu cari dan pilih file `.sql` yang telah Anda ekspor dari database lokal.
5.  Setelah file terpilih, klik **Import** di bagian bawah halaman.

### Metode 2: Impor Melalui SSH (Terminal)

![2.5 Konfigurasi File .env](/img/laravel/2.7-import-database-via-terminal.png)

1.  Buka **Terminal** di cPanel Anda.
2.  Unggah file `.sql` Anda ke direktori yang mudah diakses di server.
3.  Jalankan perintah berikut: `gunzip < [nama_database.sql.gz] | mysql -u [username] -p [nama_database]`
4.  Tekan **Enter** dan masukkan *password* database Anda saat diminta. Jika tidak ada pesan error, berarti impor berhasil.


## 11. Aplikasi Berhasil di-Deploy! 🎉

Selamat! Aplikasi Laravel Anda kini telah berhasil di-*deploy* dan dapat diakses secara *online*. Seperti yang terlihat pada gambar, URL aplikasi sudah mengarah ke subdomain Anda (`https://laravel.sumberweb.com`), dan halaman yang tadinya hanya bisa diakses di lokal sekarang sudah tampil di internet.

---

### Langkah Opsional: Konfigurasi Lanjutan

Meskipun aplikasi sudah berhasil *online*, ada beberapa perintah Laravel yang mungkin perlu Anda jalankan di *server* untuk menyelesaikan konfigurasi. Anda bisa melakukannya melalui **Terminal** di cPanel (SSH) dan pastikan sudah berada di direktory data-data aplikasi berada.

* **Generate APP_KEY:**
    Jika Anda tidak menyalin `APP_KEY` dari file `.env` lokal, Anda bisa membuatnya di *server* dengan perintah ini:

    ```php artisan key:generate```

* **Migrasi Database:**
    Jika Anda memiliki perubahan pada skema database, Anda dapat menjalankan migrasi dari terminal:

    ```php artisan migrate```

* **Jalankan Seeder (jika ada):**
    Untuk mengisi database dengan data awal, jalankan seeder:

    ```php artisan db:seed```

Dengan langkah-langkah tambahan ini, aplikasi Laravel Anda akan benar-benar siap beroperasi secara penuh di lingkungan *production*.

Selamat berkarya!


---