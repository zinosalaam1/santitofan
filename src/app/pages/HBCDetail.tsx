import { Phone, Check, Star, ArrowLeft, Wind, Zap, Shield, Sun, Gauge, Timer, Weight, Palette } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import imgSolarFans from '../../imports/WhatsApp_Image_2026-06-04_at_4.07.50_PM.jpeg';
import Layout from '../components/Layout';

export default function HBCDetail() {
  const whatsappNumber = "+2348023220859";
  const whatsappMessage = "Hi! I'm interested in the HBC Solar DC Fan (Model XM01).";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        {/* Back Button */}
        <Link to="/">
          <motion.button
            className="flex items-center gap-2 text-gray-600 hover:text-green-600 mb-8 transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </motion.button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={imgSolarFans} alt="HBC Solar DC Fan" className="w-full" />
                <div className="absolute top-6 right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg text-lg">
                  Best Value
                </div>
              </div>
              <div className="flex gap-1 justify-center mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-gray-600">(4.9/5 from 127 reviews)</span>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full inline-block mb-4">
              Model XM01 - HBC Brand
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              HBC Solar DC Fan
            </h1>
            <p className="text-2xl text-gray-600 mb-6 italic">
              The Fan That Works When NEPA Doesn't
            </p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-5xl font-bold text-gray-900">₦70,000</span>
            </div>

            <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                What You Get:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>1 x HBC Solar DC Fan (White or Green)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>1 x Solar Panel with cable</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>1 x Remote Control</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>1 x AC Power Adapter</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>User Manual & 3-Month Warranty Card</span>
                </li>
              </ul>
            </div>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-center py-5 rounded-xl font-bold text-xl transition-all shadow-lg mb-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="inline w-6 h-6 mr-2" />
              Order via WhatsApp
            </motion.a>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-600" />
                Free Lagos Delivery
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-600" />
                3-Month Warranty
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-600" />
                Genuine Product
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Specifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Power</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Solar: 20W Panel</li>
                <li>• AC: 220V/50Hz</li>
                <li>• DC Motor: 12V</li>
                <li>• Energy Class: A++</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                <Gauge className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Performance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 3 Speed Settings</li>
                <li>• Airflow: 650 CFM</li>
                <li>• Coverage: 15-20m²</li>
                <li>• Noise: &lt;35dB</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4">
                <Wind className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Design</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Blade Diameter: 16 inches</li>
                <li>• Weight: 4.9 kg</li>
                <li>• Height: Adjustable</li>
                <li>• Material: ABS Plastic</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose This Fan?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-600 p-3 rounded-xl h-fit">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">100% Solar Powered</h3>
                <p className="text-gray-600">
                  Runs entirely on solar energy during the day. No electricity bills, completely eco-friendly and sustainable.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-600 p-3 rounded-xl h-fit">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Dual Power Mode</h3>
                <p className="text-gray-600">
                  Works on both solar and AC power. Switch seamlessly between solar panel and regular plug for 24/7 operation.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-purple-600 p-3 rounded-xl h-fit">
                <Timer className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Remote Control</h3>
                <p className="text-gray-600">
                  Control from anywhere in the room. Adjust speed, oscillation, and timer without getting up.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-yellow-600 p-3 rounded-xl h-fit">
                <Weight className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Lightweight Design</h3>
                <p className="text-gray-600">
                  Only 4.9kg - easy to move from room to room. Durable ABS plastic construction that lasts for years.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-red-600 p-3 rounded-xl h-fit">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Color Options</h3>
                <p className="text-gray-600">
                  Available in White and Green. Choose the color that matches your home décor perfectly.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-green-600 p-3 rounded-xl h-fit">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Powerful Airflow</h3>
                <p className="text-gray-600">
                  650 CFM airflow covers 15-20m² effectively. Perfect for bedrooms, living rooms, and offices.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Beat the Heat?</h2>
          <p className="text-xl mb-8 text-green-100">
            Get your HBC Solar Fan today with free delivery in Lagos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-2xl inline-flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-6 h-6" />
              Order Now via WhatsApp
            </motion.a>
            <Link to="/">
              <motion.button
                className="bg-green-800 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-green-900 transition-colors inline-flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-6 h-6" />
                View Other Products
              </motion.button>
            </Link>
          </div>
          <p className="text-sm text-green-200 mt-6">
            ✓ 3-Month Warranty • ✓ Free Lagos Delivery • ✓ 100% Genuine
          </p>
        </motion.section>
      </div>
    </Layout>
  );
}
