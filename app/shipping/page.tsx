import Link from "next/link"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"

export const metadata = {
  title: "Shipping Policy | Pavitra Sarees",
  description: "Shipping policy for Pavitra Sarees products.",
}

export default function ShippingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold">Shipping Policy</h1>
            <p className="mb-4 text-gray-600 dark:text-gray-300">Last Updated: April 29, 2023</p>

            <div className="prose max-w-none dark:prose-invert">
              <p>
                At Pavitra Sarees, we strive to provide reliable and efficient shipping services to ensure your products
                reach you in perfect condition. This Shipping Policy outlines our shipping procedures, delivery
                timeframes, and other important information.
              </p>

              <h2>1. Processing Time</h2>
              <p>
                All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your
                order confirmation email. If there is a delay in processing your order, we will notify you via email.
              </p>

              <h2>2. Shipping Methods and Delivery Times</h2>
              <h3>Domestic Shipping (Within India)</h3>
              <ul>
                <li>
                  <strong>Standard Shipping:</strong> 5-7 business days (Free for orders above ₹999)
                </li>
                <li>
                  <strong>Express Shipping:</strong> 2-3 business days (₹199 additional charge)
                </li>
                <li>
                  <strong>Same-Day Delivery:</strong> Available in select cities for orders placed before 12 PM (₹299
                  additional charge)
                </li>
              </ul>

              <h3>International Shipping</h3>
              <ul>
                <li>
                  <strong>Standard International:</strong> 10-15 business days (Rates vary by country)
                </li>
                <li>
                  <strong>Express International:</strong> 5-7 business days (Rates vary by country)
                </li>
              </ul>

              <p>
                Please note that these are estimated delivery times and may vary depending on factors such as customs
                clearance, weather conditions, and local postal service efficiency.
              </p>

              <h2>3. Shipping Costs</h2>
              <h3>Domestic Shipping (Within India)</h3>
              <ul>
                <li>Orders below ₹999: ₹99 for Standard Shipping</li>
                <li>Orders above ₹999: Free Standard Shipping</li>
                <li>Express Shipping: Additional ₹199</li>
                <li>Same-Day Delivery: Additional ₹299 (select cities only)</li>
              </ul>

              <h3>International Shipping</h3>
              <p>
                International shipping costs are calculated based on the destination country, package weight, and
                dimensions. The exact shipping cost will be displayed at checkout before payment.
              </p>

              <h2>4. Order Tracking</h2>
              <p>
                Once your order is shipped, you will receive a shipping confirmation email with a tracking number and
                instructions on how to track your package. You can also track your order by logging into your account on
                our website or by visiting the{" "}
                <Link href="/track-order" className="text-rose-600 hover:underline">
                  Track Your Order
                </Link>{" "}
                page.
              </p>

              <h2>5. Shipping Restrictions</h2>
              <p>
                We currently ship to most countries worldwide. However, there may be restrictions on shipping to certain
                countries or regions due to customs regulations or other limitations. If we are unable to ship to your
                location, we will notify you and provide a full refund.
              </p>

              <h2>6. Customs and Import Duties</h2>
              <p>
                For international orders, customers are responsible for any customs fees, import duties, taxes, or other
                charges that may be levied by the destination country. These fees are not included in the purchase price
                or shipping cost and are collected by the relevant authorities in your country. Please contact your
                local customs office for more information.
              </p>

              <h2>7. Shipping Address</h2>
              <p>
                It is the customer's responsibility to provide accurate shipping information. We are not responsible for
                orders shipped to incorrect addresses provided by the customer. If you need to change your shipping
                address after placing an order, please contact us immediately, and we will try our best to accommodate
                your request if the order has not been shipped yet.
              </p>

              <h2>8. Delivery Issues</h2>
              <p>
                If your package is marked as delivered but you have not received it, please check with neighbors or
                others at your address who may have accepted the delivery. If you still cannot locate your package,
                please contact the shipping carrier directly with your tracking number. If the issue persists, contact
                our customer service team, and we will assist you in resolving the matter.
              </p>

              <h2>9. Lost or Damaged Packages</h2>
              <p>
                In the rare event that your package is lost or damaged during transit, please contact us within 48 hours
                of the expected delivery date. We will work with the shipping carrier to locate your package or process
                a replacement or refund as appropriate.
              </p>

              <h2>10. Contact Information</h2>
              <p>
                If you have any questions or concerns about our Shipping Policy, please contact our customer service
                team:
              </p>
              <p>
                Email:{" "}
                <a href="mailto:shipping@pavitrasarees.com" className="text-rose-600 hover:underline">
                  shipping@pavitrasarees.com
                </a>
                <br />
                Phone: +91 98765 43210
                <br />
                Customer Service Hours: Monday to Saturday, 10:00 AM to 6:00 PM IST
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}
