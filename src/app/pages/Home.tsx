import { Phone, Zap, Shield, Wind, Sun, Battery, Check, Star, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import imgSantito from '../../imports/WhatsApp_Image_2026-06-04_at_4.07.36_PM.jpeg';
import imgSolarFans from '../../imports/WhatsApp_Image_2026-06-04_at_4.07.50_PM.jpeg';
import { JumiaLogo, KongaLogo, JijiLogo, InstagramLogo } from '../components/BrandLogos';
import Layout from '../components/Layout';

export default function Home() {
  const whatsappNumber = "+2348023220859";
  const whatsappMessage = "Hi! I'm interested in your solar fans.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Powered by San Tito Ventures
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Never Let <span className="text-green-600">NEPA</span> Stop You Again
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Solar-powered fans that work when the power doesn't. Stay cool all day, every day with zero electricity bills.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Order via WhatsApp
                </a>
                <button
                  onClick={() => scrollToSection('products')}
                  className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-full transition-all"
                >
                  View Products
                </button>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Sun className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">100% Solar</div>
                    <div className="text-xs text-gray-600">Free Power</div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">3 Months</div>
                    <div className="text-xs text-gray-600">Warranty</div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-green-100 p-2 rounded-full">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">Certified</div>
                    <div className="text-xs text-gray-600">Quality</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-3xl opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img
                  src={imgSantito}
                  alt="SANTITO Solar Fan"
                  className="relative rounded-3xl shadow-2xl w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solar Fan Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our premium range of solar-powered fans. Each model comes with genuine warranty and free delivery in Lagos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* HBC Solar DC Fan */}
          <Link to="/hbc-solar-fan">
            <motion.div
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative">
                <img src={imgSolarFans} alt="HBC Solar DC Fan" className="w-full h-80 object-cover" />
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg">
                  Best Value
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">HBC Solar DC Fan</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-green-600 font-semibold mb-1">Model XM01</p>
                <p className="text-gray-600 mb-6 italic">The Fan That Works When NEPA Doesn't</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm">Solar panel included + works on AC plug</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm">Remote control for convenience</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm">Available in White & Green</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-gray-900">₦70,000</span>
                  </div>
                  <div className="text-center text-green-600 font-semibold">
                    Click to view full details →
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* SANTITO Solar Fan */}
          <Link to="/santito-solar-fan">
            <motion.div
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-green-500 hover:shadow-3xl transition-all relative cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-3 font-bold text-lg">
                ⭐ PREMIUM CHOICE - Most Popular ⭐
              </div>
              <div className="relative">
                <img src={imgSantito} alt="SANTITO Solar Fan" className="w-full h-80 object-cover" />
                <div className="absolute top-4 right-4 bg-white text-green-600 px-4 py-2 rounded-full font-bold shadow-lg">
                  Premium
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">SANTITO Solar Fan</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-green-600 font-semibold mb-1">Premium Model</p>
                <p className="text-gray-600 mb-6 italic">Cool, Smart, Beautiful — Even Off-Grid</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm">Premium modern design with digital controls</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm">USB charging port to charge your phone!</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm">Available in White & Mint Green</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-gray-900">₦95,400</span>
                    {/* <span className="text-xl text-gray-500">- ₦70,000</span> */}
                  </div>
                  <div className="text-center text-green-600 font-semibold">
                    Click to view full details →
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Solar Fans?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Backed by San Tito Ventures quality and reliability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="bg-gradient-to-br from-yellow-100 to-yellow-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Sun className="w-10 h-10 text-yellow-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-center">Free Solar Power</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Runs completely on sunlight. Zero electricity bills for cooling your home.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Battery className="w-10 h-10 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-center">Dual Power Mode</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Works on solar panel AND regular AC plug. Full flexibility for any situation.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Wind className="w-10 h-10 text-green-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-center">Powerful Cooling</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Strong airflow keeps you cool even during the hottest Nigerian weather.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Where to Buy Section */}
      <section id="buy" className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Where to Buy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get your solar fan from any of our trusted online platforms or contact us directly
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <motion.a
            href="https://www.jumia.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <div className="h-16 mb-3">
              <JumiaLogo />
            </div>
            <p className="text-sm text-gray-600 text-center">Shop on Jumia</p>
          </motion.a>

          <motion.a
            href="https://www.konga.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <div className="h-16 mb-3">
              <KongaLogo />
            </div>
            <p className="text-sm text-gray-600 text-center">Shop on Konga</p>
          </motion.a>

          <motion.a
            href="https://jiji.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <div className="h-16 mb-3">
              <JijiLogo />
            </div>
            <p className="text-sm text-gray-600 text-center">Shop on Jiji</p>
          </motion.a>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <div className="h-16 mb-3">
              <InstagramLogo />
            </div>
            <p className="text-sm text-gray-600 text-center">Follow us</p>
          </motion.a>
        </div>

        <motion.div
          className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white rounded-3xl p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Stay Cool?</h3>
            <p className="text-xl mb-8 text-green-100">Chat with us on WhatsApp for instant support and exclusive deals!</p>
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-green-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-7 h-7" />
              Chat on WhatsApp Now
            </motion.a>
            <p className="text-sm text-green-200 mt-4">Response time: Under 5 minutes</p>
          </div>
        </motion.div>
      </section>

      {/* Trust Signals */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-5xl font-bold text-white mb-3">3 Months</div>
              <p className="text-green-100 text-lg">Warranty on All Fans</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-5xl font-bold text-white mb-3">Free Delivery</div>
              <p className="text-green-100 text-lg">Across Lagos</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-5xl font-bold text-white mb-3">100% Genuine</div>
              <p className="text-green-100 text-lg">Certified Quality by San Tito Ventures</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
