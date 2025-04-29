import Link from "next/link"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"

export const metadata = {
  title: "Terms & Conditions | Pavitra Sarees",
  description: "Terms and conditions for using Pavitra Sarees website and services.",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold">Terms & Conditions</h1>
            <p className="mb-4 text-gray-600 dark:text-gray-300">Last Updated: April 29, 2023</p>

            <div className="prose max-w-none dark:prose-invert">
              <p>
                Welcome to Pavitra Sarees. These Terms & Conditions govern your use of our website and services. By
                accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of
                the terms, you may not access the website.
              </p>

              <h2>1. Use of Website</h2>
              <p>
                By using our website, you confirm that you are at least 18 years of age or are accessing the website
                under the supervision of a parent or legal guardian. We grant you a non-transferable, non-exclusive
                right to use the website for personal, non-commercial purposes.
              </p>

              <h2>2. Products and Services</h2>
              <p>
                All products and services displayed on our website are subject to availability. We reserve the right to
                discontinue any product or service at any time. Prices for our products are subject to change without
                notice. We reserve the right to refuse service to anyone for any reason at any time.
              </p>

              <h2>3. Accuracy of Information</h2>
              <p>
                We strive to provide accurate product descriptions, pricing, and availability information. However, we
                do not warrant that product descriptions or other content on the website is accurate, complete,
                reliable, current, or error-free. If a product offered by us is not as described, your sole remedy is to
                return it in unused condition.
              </p>

              <h2>4. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and current information. You
                are responsible for safeguarding the password and for all activities that occur under your account. You
                agree to notify us immediately of any unauthorized use of your account or any other breach of security.
              </p>

              <h2>5. Orders and Payments</h2>
              <p>
                When you place an order, you offer to purchase the product at the price stated. We reserve the right to
                accept or decline your order for any reason. Once we accept your order, we will send you an order
                confirmation email. Payment must be received prior to the acceptance of an order.
              </p>

              <h2>6. Shipping and Delivery</h2>
              <p>
                We will make every effort to deliver products within the estimated timeframes. However, delays may occur
                due to unforeseen circumstances. We are not responsible for delays caused by shipping carriers or other
                third parties.
              </p>

              <h2>7. Returns and Refunds</h2>
              <p>
                Please refer to our{" "}
                <Link href="/returns" className="text-rose-600 hover:underline">
                  Return & Refund Policy
                </Link>{" "}
                for detailed information on returns, exchanges, and refunds.
              </p>

              <h2>8. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of
                Pavitra Sarees and is protected by copyright, trademark, and other intellectual property laws. You may
                not reproduce, distribute, display, or create derivative works from any content without our express
                written permission.
              </p>

              <h2>9. User Content</h2>
              <p>
                By posting, uploading, or submitting any content to our website (including product reviews), you grant
                us a non-exclusive, royalty-free, perpetual, irrevocable right to use, reproduce, modify, adapt,
                publish, translate, distribute, and display such content worldwide.
              </p>

              <h2>10. Limitation of Liability</h2>
              <p>
                In no event shall Pavitra Sarees, its officers, directors, employees, or agents, be liable for any
                indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use
                of the website or products purchased through the website.
              </p>

              <h2>11. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Pavitra Sarees, its officers, directors, employees,
                and agents, from and against any claims, liabilities, damages, losses, and expenses, including
                reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the
                website or your violation of these Terms.
              </p>

              <h2>12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to
                its conflict of law provisions. Any dispute arising under or relating to these Terms shall be subject to
                the exclusive jurisdiction of the courts located in Surat, Gujarat, India.
              </p>

              <h2>13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                posting on the website. Your continued use of the website after any changes indicates your acceptance of
                the modified Terms.
              </p>

              <h2>14. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:info@pavitrasarees.com" className="text-rose-600 hover:underline">
                  info@pavitrasarees.com
                </a>
                .
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
