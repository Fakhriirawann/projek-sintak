import { Link } from "react-router-dom";
import { Star, Award, Truck, Shield } from "lucide-react";

const Homepage = () => {
  const bestSellers = [
    {
      id: 1,
      name: "Chocolate Chip Classic",
      price: "Rp 45.000",
      image: "/ChocolateChipClassic.jpg",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Red Velvet Delight",
      price: "Rp 50.000",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Matcha Green Tea",
      price: "Rp 55.000",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Cookies terenak yang pernah saya coba! Teksturnya sempurna dan rasanya autentik.",
      rating: 5,
    },
    {
      name: "Budi S.",
      text: "Packaging cantik, rasa lezat. Cocok banget buat kado atau cemilan sehari-hari.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-cream-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
                Cookies Manis,
                <span className="text-pink-500 block">Cita Rasa Elegan</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Nikmati kelezatan cookies premium yang dibuat dengan bahan
                berkualitas tinggi dan resep rahasia keluarga.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/catalog"
                  className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors text-center"
                >
                  Pesan Sekarang
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors text-center"
                >
                  Tentang Kami
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/cookies.jpg"
                alt="SweetMelt Cookies"
                className=" w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-800 px-4 py-2 rounded-full font-bold transform rotate-12">
                Promo Spesial!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 bg-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            🎉 Promo Spesial Hari Ini!
          </h2>
          <p className="text-xl text-pink-100 mb-6">
            Beli 3 Gratis 1 untuk semua varian cookies
          </p>
          <Link
            to="/catalog"
            className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Ambil Promo Sekarang
          </Link>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Produk Best Seller
            </h2>
            <p className="text-xl text-gray-600">
              Cookies favorit pelanggan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      ({product.rating})
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-pink-500">
                      {product.price}
                    </span>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Mengapa Pilih SweetMelt?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Kualitas Premium
              </h3>
              <p className="text-gray-600">
                Bahan berkualitas tinggi dan resep rahasia keluarga
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Halal & Aman
              </h3>
              <p className="text-gray-600">
                Tersertifikasi halal dan tanpa pengawet berbahaya
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Pengiriman Cepat
              </h3>
              <p className="text-gray-600">
                Same day delivery untuk area Jakarta
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Rating Tinggi
              </h3>
              <p className="text-gray-600">
                4.9/5 rating dari ribuan pelanggan puas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Kata Pelanggan Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-800">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/testimonials"
              className="text-pink-500 hover:text-pink-600 font-semibold"
            >
              Lihat Semua Testimoni →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
