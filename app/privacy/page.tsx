import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"

export const metadata = {
  title: "Privacy Policy | Pavitra Sarees",
  description: "Privacy policy for Pavitra Sarees website and services.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
            <p className="mb-4 text-gray-600 dark:text-gray-300">Last Updated: April 29, 2023</p>

            <div className="prose max-w-none dark:prose-invert">
              <p>
                At Pavitra Sarees, we are committed to protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
                Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that you
                have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.
              </p>

              <h2>1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, shipping address, billing
                  address, payment information, and other information you provide when creating an account, making a
                  purchase, or contacting us.
                </li>
                <li>
                  <strong>Transaction Information:</strong> Details about purchases or transactions made on our website,
                  including product information, price, date, and payment method.
                </li>
                <li>
                  <strong>Technical Information:</strong> IP address, browser type, operating system, device
                  information, browsing patterns, and other technical data collected through cookies and similar
                  technologies.
                </li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including:</p>
              <ul>
                <li>Processing and fulfilling your orders</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Sending order confirmations, shipping updates, and other transactional emails</li>
                <li>Personalizing your shopping experience</li>
                <li>Improving our website, products, and services</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Detecting and preventing fraud and unauthorized access</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as
                  payment processing, shipping, customer support, and marketing.
                </li>
                <li>
                  <strong>Business Partners:</strong> Companies we partner with to offer products, services, or
                  promotions.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law, court order, or governmental regulation, or
                  to protect our rights, property, or safety, or the rights, property, or safety of others.
                </li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes
                without your explicit consent.
              </p>

              <h2>4. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities
                on our website. Cookies help us provide a better user experience by enabling features like remembering
                your preferences, analyzing website traffic, and personalizing content. You can manage your cookie
                preferences through your browser settings.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law. When determining the
                retention period, we consider the nature of the information, the potential risk of harm from
                unauthorized use or disclosure, and legal requirements.
              </p>

              <h2>7. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Restrict or object to certain processing of your information</li>
                <li>Receive your information in a structured, commonly used format</li>
                <li>Withdraw consent at any time (where processing is based on consent)</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section
                below.
              </p>

              <h2>8. Children's Privacy</h2>
              <p>
                Our website is not intended for children under the age of 13. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe that your child has
                provided us with personal information, please contact us, and we will delete such information from our
                records.
              </p>

              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. The updated version will be indicated by an updated "Last
                Updated" date, and the updated version will be effective as soon as it is posted. We encourage you to
                review this Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact
                us at:
              </p>
              <p>
                Email:{" "}
                <a href="mailto:privacy@pavitrasarees.com" className="text-rose-600 hover:underline">
                  privacy@pavitrasarees.com
                </a>
                <br />
                Phone: +91 98765 43210
                <br />
                Address: 123 Fashion Street, Textile Market, Surat, Gujarat 395003, India
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
