import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function PrivacyPolicyPage(){
  return (
    <section className='py-20'>
      <Head>
        <title>Privacy Policy — appdesignsexperts</title>
        <meta name="description" content="Privacy Policy for appdesignsexperts" />
      </Head>

      <main className="min-h-screen text-gray-100 py-12 px-4">
        <div className="mx-auto max-w-4xl">

          <article className="prose prose-invert max-w-none text-gray-100">
            <p>
              At <strong>appdesignsexperts</strong>, we value your privacy and are committed to protecting your personal
              information. This Privacy Policy outlines how we collect, use, and safeguard your data.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect personal information from you, such as:</p>
            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Other information you provide in connection with our services</li>
            </ul>

            <h2>2. Use of Information</h2>
            <p>We use your information solely to:</p>
            <ul>
              <li>Communicate with you</li>
              <li>Provide our services</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Improve our services</li>
            </ul>

            <h2>3. No Sharing With Third Parties</h2>
            <p>
              No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
              All other categories exclude text messaging originator opt-in data and consent; this information will not be
              shared with any third parties. Your information is used exclusively within <strong>appdesignsexperts</strong>
              for the purpose of providing and improving our services.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement strong security measures to protect your data from unauthorized access, disclosure,
              alteration, or destruction. While we strive to use commercially acceptable means to protect your
              information, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information at any time. You may contact us
              directly to make such requests and we will respond in accordance with applicable law.
            </p>

            <h2>6. Changes to This Policy</h2>
            <p>
              <strong>appdesignsexperts</strong> may update this policy periodically. We will notify you of any significant
              changes by posting the revised policy on our website.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us through our{' '}
              <Link href="/contactus">
                <span className="text-indigo-400 hover:text-indigo-300 underline">Contact Page</span>
              </Link>
              .
            </p>

            <p className="mt-6 text-sm text-gray-400">Last updated on: <strong>11/10/2025</strong></p>
          </article>
        </div>
      </main>
    </section>
  )
}
