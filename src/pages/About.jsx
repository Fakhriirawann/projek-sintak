import { Heart, Users, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 shiny-text pb-6">
            Tentang SweetMelt Cookies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perjalanan kami dimulai dari dapur kecil dengan mimpi besar untuk
            menghadirkan cookies terbaik dengan cita rasa yang tak terlupakan.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Cerita Kami
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                SweetMelt Cookies lahir dari kecintaan mendalam terhadap seni
                membuat kue. Dimulai pada tahun 2020 di dapur rumah sederhana,
                kami berkomitmen untuk menciptakan cookies dengan kualitas
                premium menggunakan bahan-bahan terbaik.
              </p>
              <p>
                Setiap cookies dibuat dengan penuh cinta dan perhatian detail.
                Kami percaya bahwa makanan bukan hanya soal rasa, tetapi juga
                tentang menciptakan momen kebahagiaan dan kenangan indah bersama
                orang-orang terkasih.
              </p>
              <p>
                Dari resep rahasia keluarga yang diwariskan turun-temurun, kami
                terus berinovasi untuk menghadirkan varian rasa yang unik namun
                tetap mempertahankan cita rasa autentik yang menjadi ciri khas
                kami.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/About.jpg"
              alt="Dapur SweetMelt"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white p-4 rounded-xl">
              <p className="font-semibold">Sejak 2020</p>
              <p className="text-sm">Melayani dengan ❤️</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-gradient-to-r from-pink-50 to-cream-50 rounded-3xl p-8 lg:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Heart className="w-6 h-6 text-pink-500 mr-2" />
                Misi Kami
              </h3>
              <p className="text-gray-600">
                Menghadirkan cookies berkualitas premium dengan cita rasa yang
                membahagiakan, dibuat dari bahan-bahan terbaik dan proses yang
                higienis, untuk menciptakan momen kebahagiaan di setiap gigitan.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Award className="w-6 h-6 text-yellow-500 mr-2" />
                Visi Kami
              </h3>
              <p className="text-gray-600">
                Menjadi brand cookies terdepan di Indonesia yang dikenal karena
                kualitas, inovasi, dan pelayanan terbaik, serta menjadi pilihan
                utama untuk setiap momen spesial.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Kualitas
              </h3>
              <p className="text-gray-600">
                Kami tidak pernah berkompromi dengan kualitas. Setiap cookies
                dibuat dengan standar tertinggi dan bahan premium.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Kepuasan Pelanggan
              </h3>
              <p className="text-gray-600">
                Kepuasan pelanggan adalah prioritas utama. Kami selalu
                mendengarkan feedback dan terus berinovasi.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Konsistensi
              </h3>
              <p className="text-gray-600">
                Setiap cookies yang kami produksi memiliki rasa dan kualitas
                yang konsisten, hari demi hari.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Sertifikasi & Penghargaan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Sertifikat Halal
              </h3>
              <p className="text-gray-600">
                Tersertifikasi halal MUI untuk menjamin kehalalan produk
              </p>
            </div>

            <div>
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">PIRT</h3>
              <p className="text-gray-600">
                Nomor PIRT untuk menjamin keamanan dan kualitas produk
              </p>
            </div>

            <div>
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Best UMKM 2023
              </h3>
              <p className="text-gray-600">
                Penghargaan UMKM terbaik kategori makanan ringan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
