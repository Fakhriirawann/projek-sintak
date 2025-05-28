"use client";

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Plus,
  Minus,
  ShoppingCart,
  Heart,
  Shield,
  Truck,
  Award,
} from "lucide-react";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("original");

  // Mock product data - in real app, this would come from API
  const product = {
    id: Number.parseInt(id),
    name: "Chocolate Chip Classic",
    price: 45000,
    originalPrice: 50000,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    rating: 4.9,
    reviewCount: 127,
    description:
      "Cookies klasik dengan chocolate chip premium yang dibuat dari bahan-bahan berkualitas tinggi. Setiap gigitan memberikan sensasi renyah di luar dan lembut di dalam dengan cita rasa coklat yang autentik.",
    ingredients:
      "Tepung terigu premium, mentega, gula, telur, chocolate chip Belgium, vanilla extract, baking powder",
    variants: [
      { id: "original", name: "Original", price: 45000 },
      { id: "large", name: "Large Pack", price: 80000 },
      { id: "gift-box", name: "Gift Box", price: 95000 },
    ],
    features: [
      "Tanpa pengawet buatan",
      "Halal certified",
      "Bahan premium",
      "Kemasan food grade",
    ],
  };

  const [selectedImage, setSelectedImage] = useState(0);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    const selectedVariantData = product.variants.find(
      (v) => v.id === selectedVariant
    );
    const productToAdd = {
      ...product,
      variant: selectedVariantData,
      quantity: quantity,
      totalPrice: selectedVariantData.price * quantity,
    };
    addToCart(productToAdd);
    alert("Produk berhasil ditambahkan ke keranjang!");
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const selectedVariantData = product.variants.find(
    (v) => v.id === selectedVariant
  );

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-pink-500">
              Beranda
            </Link>
            <span>/</span>
            <Link to="/catalog" className="hover:text-pink-500">
              Katalog
            </Link>
            <span>/</span>
            <span className="text-gray-800">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 ${
                    selectedImage === index
                      ? "border-pink-500"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">
                    ({product.rating}) • {product.reviewCount} ulasan
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-pink-500">
                  {formatPrice(selectedVariantData.price)}
                </span>
                {product.originalPrice > selectedVariantData.price && (
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Variants */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Pilih Varian
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {product.variants.map((variant) => (
                  <label
                    key={variant.id}
                    className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      selectedVariant === variant.id
                        ? "border-pink-500 bg-pink-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="variant"
                        value={variant.id}
                        checked={selectedVariant === variant.id}
                        onChange={(e) => setSelectedVariant(e.target.value)}
                        className="sr-only"
                      />
                      <span className="font-medium text-gray-800">
                        {variant.name}
                      </span>
                    </div>
                    <span className="font-semibold text-pink-500">
                      {formatPrice(variant.price)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Jumlah
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity >= 10}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-gray-600">Maksimal 10 pcs</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors flex items-center justify-center"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Tambah ke Keranjang
              </button>
              <button className="px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-full font-semibold hover:bg-pink-50 transition-colors flex items-center justify-center">
                <Heart className="w-5 h-5 mr-2" />
                Wishlist
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Deskripsi Produk
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Bahan-bahan
              </h3>
              <p className="text-gray-600">{product.ingredients}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Informasi Pengiriman
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">
                    Same day delivery Jakarta
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Garansi fresh 3 hari</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Promo Spesial!</h3>
              <p className="text-pink-100 mb-4">
                Beli 3 gratis 1 untuk semua varian
              </p>
              <Link
                to="/catalog"
                className="bg-white text-pink-500 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Lihat Promo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
