import { Phone, Check, Star, ArrowLeft, Wind, Zap, Shield, Sun, Gauge, Timer, Usb, Palette, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import imgSantito from '../../imports/WhatsApp_Image_2026-06-04_at_4.07.36_PM.jpeg';
import Layout from '../components/Layout';

export default function SantitoDetail() {
  const whatsappNumber = "+2348023220859";
  const whatsappMessage = "Hi! I'm interested in the SANTITO Premium Solar Fan.";
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-green-500">
                <img src={imgSantito} alt="SANTITO Solar Fan" className="w-full" />
                <div className="absolute top-6 left-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg text-lg">
                  ⭐ PREMIUM
                </div>
                <div className="absolute top-6 right-6 bg-white text-green-600 px-6 py-3 rounded-full font-bold shadow-lg">
                  Most Popular
                </div>
              </div>
              <div className="flex gap-1 justify-center mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-gray-600">(4.95/5 from 243 reviews)</span>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full inline-block mb-4">
              Premium Model - SANTITO Brand
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              SANTITO Solar Fan
            </h1>
            <p className="text-2xl text-gray-600 mb-6 italic">
              Cool, Smart, Beautiful — Even Off-Grid
            </p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-5xl font-bold text-gray-900">₦95,400</span>
              {/* <span className="text-2xl text-gray-500">- ₦70,000</span> */}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-500 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Premium Package Includes:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>1 x SANTITO Solar Fan (White or Mint Green)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>1 x Detachable Solar Panel with 3m cable</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>1 x Digital Remote Control</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>1 x AC Power Adapter (220V)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>USB Charging Port (Built-in)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>User Manual & 3-Month Premium Warranty</span>
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

            <div className="flex items-center justify-center gap-4 text-sm text-gray-600 flex-wrap">
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
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-600" />
                USB Charging
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Specifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-full w-fit mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Power System</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Solar: 30W High-Efficiency Panel</li>
                <li>• AC Input: 220V/50Hz</li>
                <li>• DC Motor: 12V Brushless</li>
                <li>• USB Output: 5V/2A</li>
                <li>• Energy Rating: A+++</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-full w-fit mb-4">
                <Gauge className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Performance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 4 Speed Settings + Turbo</li>
                <li>• Airflow: 750 CFM</li>
                <li>• Coverage Area: 20-25m²</li>
                <li>• Noise Level: &lt;30dB</li>
                <li>• Oscillation: 90° Auto</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-3 rounded-full w-fit mb-4">
                <Wind className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Design & Build</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Blade: 16" Premium Composite</li>
                <li>• Weight: 5.2 kg</li>
                <li>• Height: 120-140cm Adjustable</li>
                <li>• Base: Heavy-duty Anti-tip</li>
                <li>• Material: Premium ABS</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Premium Features */}
        <section className="mb-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Premium Features That Set It Apart</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            SANTITO combines cutting-edge solar technology with smart features to deliver the ultimate cooling experience
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="flex gap-4 bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-3 rounded-xl h-fit">
                <Usb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">USB Phone Charging</h3>
                <p className="text-gray-600">
                  Built-in 5V/2A USB port lets you charge your phone while staying cool. Never worry about low battery again!
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl h-fit">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Digital Control Panel</h3>
                <p className="text-gray-600">
                  Modern LED display shows speed, timer, and battery status. Touch-sensitive controls for easy operation.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 p-3 rounded-xl h-fit">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Detachable Solar Panel</h3>
                <p className="text-gray-600">
                  30W high-efficiency panel with 3-meter cable. Place it in direct sunlight while the fan stays in shade.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 rounded-xl h-fit">
                <Timer className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Smart Timer & Remote</h3>
                <p className="text-gray-600">
                  Set 1-12 hour timer via digital remote. Auto shut-off saves power and ensures peaceful sleep.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-xl h-fit">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Premium Color Options</h3>
                <p className="text-gray-600">
                  Choose between classic White or stunning Mint Green. Modern aesthetic that complements any interior.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-3 rounded-xl h-fit">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Turbo Mode</h3>
                <p className="text-gray-600">
                  750 CFM maximum airflow instantly cools 20-25m². Ultra-quiet operation at just 30dB - quieter than a whisper.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Banner */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Why Customers Choose SANTITO</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">243</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.95★</div>
                <div className="text-blue-100">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">30W</div>
                <div className="text-blue-100">Solar Panel Power</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">₦0</div>
                <div className="text-blue-100">Monthly Bills</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Premium Cooling Today</h2>
          <p className="text-xl mb-8 text-green-100">
            Join 200+ happy customers enjoying cool, sustainable comfort with SANTITO!
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
            ✓ 3-Month Premium Warranty • ✓ Free Lagos Delivery • ✓ 100% Genuine • ✓ USB Charging Port
          </p>
        </motion.section>
      </div>
    </Layout>
  );
}
