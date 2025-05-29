import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Maharani",
      location: "Jakarta",
      rating: 5,
      text: "Cookies terenak yang pernah saya coba! Teksturnya sempurna, renyah di luar tapi lembut di dalam. Chocolate chipnya juga premium banget. Pasti akan order lagi!",
      image: "/Sarah.jpg",
      product: "Chocolate Chip Classic",
    },
    {
      id: 2,
      name: "Budi Santoso",
      location: "Bandung",
      rating: 5,
      text: "Packaging cantik banget, cocok buat kado. Rasanya juga lezat, tidak terlalu manis. Anak-anak di rumah suka sekali. Recommended!",
      image: "https://i.pinimg.com/736x/36/1f/11/361f1158bce9909614efcff1bf4bdb93.jpg",
      product: "Red Velvet Delight",
    },
    {
      id: 3,
      name: "Maya Putri",
      location: "Surabaya",
      rating: 5,
      text: "Matcha cookies-nya authentic banget! Tidak terlalu manis dan rasa matchanya pas. Pengiriman juga cepat dan aman. Top deh!",
      image: "https://i.pinimg.com/736x/d5/99/ba/d599ba11c706cec991e3d83b62d6d91d.jpg",
      product: "Matcha Green Tea",
    },
    {
      id: 4,
      name: "Andi Rahman",
      location: "Medan",
      rating: 4,
      text: "Kualitas cookies sangat baik, fresh dan enak. Harga sebanding dengan kualitas. Cuma pengiriman ke Medan agak lama, tapi worth it!",
      image: "https://i.pinimg.com/736x/0d/b7/61/0db7613a8a1aa80afccb4e348f0f3505.jpg",
      product: "Double Chocolate",
    },
    {
      id: 5,
      name: "Lisa Anggraini",
      location: "Yogyakarta",
      rating: 5,
      text: "Strawberry cream cookies-nya unik dan enak! Cream-nya tidak terlalu manis dan strawberry-nya fresh. Inovasi yang bagus!",
      image: "https://i.pinimg.com/736x/0e/60/03/0e6003825ff3ea565a58ffccae863950.jpg",
      product: "Strawberry Cream",
    },
    {
      id: 6,
      name: "Dedi Kurniawan",
      location: "Semarang",
      rating: 5,
      text: "Vanilla butter cookies yang simple tapi enak banget. Butter-nya premium dan tidak berminyak. Cocok untuk cemilan sehari-hari.",
      image: "https://i.pinimg.com/736x/90/28/26/90282621baf3e1e92f58f98134ebece8.jpg",
      product: "Vanilla Butter",
    },
    {
      id: 7,
      name: "Rina Sari",
      location: "Makassar",
      rating: 5,
      text: "Cookies & cream favorit keluarga! Oreo crumbs-nya banyak dan cream-nya lembut. Anak-anak sampai minta dibelikan lagi.",
      image: "https://i.pinimg.com/736x/7f/bd/e7/7fbde72ce2b176f8aab4beaadafa06f6.jpg",
      product: "Cookies & Cream",
    },
    {
      id: 8,
      name: "Agus Wijaya",
      location: "Palembang",
      rating: 4,
      text: "Peanut butter cookies-nya crunchy dan gurih. Rasa kacangnya authentic. Packaging juga rapi dan aman untuk pengiriman jauh.",
      image: "https://i.pinimg.com/736x/8d/98/0b/8d980bca3f11534c39928278c803f660.jpg",
      product: "Peanut Butter",
    },
    {
      id: 9,
      name: "Sinta Dewi",
      location: "Denpasar",
      rating: 5,
      text: "Salted caramel cookies-nya premium banget! Balance antara manis dan asin pas sekali. Ini yang terenak dari semua varian yang pernah saya coba.",
      image: "https://i.pinimg.com/736x/1e/70/9b/1e709b4664cc6f19857350e6f32a2725.jpg",
      product: "Salted Caramel",
    },
  ];

  const stats = [
    { number: "4.9", label: "Rating Rata-rata", suffix: "/5" },
    { number: "1000+", label: "Pelanggan Puas", suffix: "" },
    { number: "500+", label: "Ulasan Positif", suffix: "" },
    { number: "98%", label: "Repeat Order", suffix: "" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 pb-6 shiny-text">
            Testimoni Pelanggan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan langsung dari pelanggan kami yang telah merasakan
            kelezatan SweetMelt Cookies
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-3xl lg:text-4xl font-bold text-pink-500 mb-2">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-pink-200 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                  <p className="text-sm text-pink-500 font-medium">
                    {testimonial.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Bergabunglah dengan Ribuan Pelanggan Puas!
          </h2>
          <p className="text-xl mb-6 text-pink-100">
            Rasakan sendiri kelezatan cookies premium kami dan jadilah bagian
            dari keluarga SweetMelt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/catalog"
              className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Pesan Sekarang
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-500 transition-colors inline-block"
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Review Form */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Bagikan Pengalaman Anda
          </h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kota
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Masukkan kota Anda"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Produk yang Dibeli
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                <option value="">Pilih produk</option>
                <option value="chocolate-chip">Chocolate Chip Classic</option>
                <option value="red-velvet">Red Velvet Delight</option>
                <option value="matcha">Matcha Green Tea</option>
                <option value="double-chocolate">Double Chocolate</option>
                <option value="strawberry">Strawberry Cream</option>
                <option value="vanilla">Vanilla Butter</option>
                <option value="cookies-cream">Cookies & Cream</option>
                <option value="peanut-butter">Peanut Butter</option>
                <option value="salted-caramel">Salted Caramel</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    className="p-1 hover:scale-110 transition-transform"
                  >
                    <Star className="w-8 h-8 text-gray-300 hover:text-yellow-400 transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ulasan Anda
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Ceritakan pengalaman Anda dengan produk kami..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
              >
                Kirim Ulasan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
