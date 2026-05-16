import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#ccc] px-6 py-14">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-[#00BFA6] text-center">
          Privacy Policy
        </h1>

        <p className="text-center mt-4 text-gray-400">
          Last Updated: May 15, 2026
        </p>

        <div className="mt-14 space-y-12">

          <section>
            <h2 className="text-3xl font-bold text-[#FFD700]">
              1. Information We Collect
            </h2>

            <ul className="mt-5 space-y-3 list-disc pl-6 leading-8">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Country or region</li>
              <li>Social media profile links</li>
              <li>Device and browser information</li>
              <li>IP address and analytics data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFD700]">
              2. How We Use Information
            </h2>

            <ul className="mt-5 space-y-3 list-disc pl-6 leading-8">
              <li>Verify campaign participation</li>
              <li>Prevent fraud and abuse</li>
              <li>Process rewards and withdrawals</li>
              <li>Improve user experience</li>
              <li>Recommend relevant campaigns</li>
              <li>Communicate platform updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFD700]">
              3. Creator Campaign Data
            </h2>

            <p className="mt-4 leading-8">
              Participation in creator campaigns may involve reviewing engagement
              activity, public content submissions, and campaign interactions
              for verification and fraud prevention purposes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFD700]">
              4. Cookies & Analytics
            </h2>

            <p className="mt-4 leading-8">
              Task2Earn may use cookies and analytics technologies to improve
              platform performance, personalize experiences, and detect suspicious activity.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFD700]">
              5. Data Sharing
            </h2>

            <p className="mt-4 leading-8">
              Task2Earn does not sell personal information.
            </p>

            <p className="mt-4 leading-8">
              Limited information may be shared with trusted service providers,
              payment processors, analytics systems, and fraud prevention partners.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFD700]">
              6. Data Security
            </h2>

            <p className="mt-4 leading-8">
              Task2Earn uses reasonable security measures to protect user data,
              though no internet-based platform can guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFD700]">
              7. User Rights
            </h2>

            <p className="mt-4 leading-8">
              Users may request access, correction, export, or deletion of personal data
              where applicable under local laws.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFD700]">
              8. International Compliance
            </h2>

            <p className="mt-4 leading-8">
              Task2Earn aims to operate in accordance with privacy regulations
              including NDPR and GDPR where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#FFD700]">
              Contact Information
            </h2>

            <p className="mt-4 leading-8">
              For privacy-related questions:
            </p>

            <p className="mt-4 text-[#00BFA6] text-xl font-semibold">
              support@task2earn.app
            </p>
          </section>

        </div>

      </div>

    </div>
  );
}