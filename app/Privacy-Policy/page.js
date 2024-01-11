import React from 'react';
import PrivacyPolicyintro from '../componet/IntroImages/PrivacyPolicyintro';

const page = () => {
  return (
    <main>
      <PrivacyPolicyintro />
      <section>
        <div className=" container mx-auto">
          <p className=" my-5">
            Thank you for visiting our website and for your interest in our
            products/services. We are committed to protecting your privacy and
            want you to feel comfortable while browsing our site. This Privacy
            Policy outlines how we collect, use, and safeguard your personal
            information when you visit our website and interact with our
            advertising campaigns on LinkedIn.
          </p>
          <ul>
            {' '}
            <h3 className="font-[700] text-[25px] mb-[20px]">
              1. Information We Collect:
            </h3>{' '}
            <li className=" my-5">
              {' '}
              <b className=" text-[#e6202d]"> 1.1 Personal Information:</b>
              <br></br>
              When you visit our website or interact with our LinkedIn ads, we
              may collect personal information that you voluntarily provide to
              us. This may include your name, email address, phone number, job
              title, company name, and any other information you choose to
              provide. 1.2 Automatically Collected Information: We may also
              collect certain information automatically when you visit our
              website or interact with our ads This information may include your
              IP address, device type, browser type, operating system, referring
              URLs, pages visited, and other usage details.
            </li>{' '}
          </ul>
          <ul>
            {' '}
            <h3 className="font-[700] text-[25px] mb-[20px]">
              2. Use of Information:
            </h3>{' '}
            <li className=" my-5">
              {' '}
              <b className=" text-[#e6202d]">
                {' '}
                2.1 Providing and Improving Our Services:
              </b>
              <br></br>
              We may use the collected information to provide you with the
              requested information about our products/services, respond to your
              inquiries, and fulfill your requests. We may also use the
              information to improve our website, ads, and overall customer
              experience.
            </li>
            <li className=" my-5">
              {' '}
              <b className=" text-[#e6202d] "> 2.2 Marketing Communications:</b>
              <br></br>
              With your consent, we may use your contact information to send you
              promotional materials, newsletters, and other marketing
              communications about our products/services that may be of interest
              to you. You have the right to opt-out of receiving these
              communications at any time.
            </li>
            <li className=" my-5">
              {' '}
              <b className=" text-[#e6202d] "> 2.3 Analytics and Tracking:</b>
              <br></br>
              We may use the collected information for analytics purposes, such
              as analyzing website traffic, ad performance, and user behavior.
              This helps us understand how our website and ads are performing
              and make improvements accordingly.
            </li>
          </ul>
          <ul>
            {' '}
            <h3 className="font-[700] text-[25px] mb-[20px]">
              3. Data Sharing and Disclosure:
            </h3>{' '}
            <li className=" mb-3">
              {' '}
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties without your consent, except in the
              following circumstances:
            </li>
            <li className=" mb-3">
              Service Providers: We may share your personal information with
              third-party service providers who assist us in operating our
              website, conducting our business, or serving you. These service
              providers are contractually obligated to keep your information
              confidential and secure
            </li>
            <li className=" mb-3">
              Legal Requirements: We may disclose your personal information if
              required by law, regulation, legal process, or governmental
              request.
            </li>
          </ul>
          <ul>
            {' '}
            <h3 className="font-[700] text-[25px] mb-[20px]">
              4. Data Security:
            </h3>{' '}
            <li className=" my-5">
              {' '}
              We take reasonable measures to protect the security and integrity
              of your personal information. However, please note that no method
              of transmission or storage over the internet is completely secure,
              and we cannot guarantee the absolute security of your data.
            </li>{' '}
          </ul>
          <ul>
            {' '}
            <h3 className="font-[700] text-[25px] mb-[20px]">
              5. Your Rights and Choices:
            </h3>{' '}
            <li className=" my-5">
              {' '}
              You have certain rights regarding your personal information,
              including the right to access, correct, or delete your data. If
              you wish to exercise any of these rights or have any questions or
              concerns about our privacy practices, please contact us using the
              information provided at the end of this Privacy Policy.
            </li>{' '}
          </ul>{' '}
          <ul>
            {' '}
            <h3 className="font-[700] text-[25px] mb-[20px]">
              6. Third-Party Links:
            </h3>{' '}
            <li className=" my-5">
              {' '}
              Our website and ads may contain links to third-party websites. We
              are not responsible for the privacy practices or content of these
              websites. We encourage you to review the privacy policies of those
              third- party websites before providing any personal information.
            </li>{' '}
          </ul>
          <ul>
            {' '}
            <h3 className="font-[700] text-[25px] mb-[20px]">
              7. Change to this Privacy Policy:
            </h3>{' '}
            <li className=" my-5">
              {' '}
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes made will be effective immediately upon
              posting the revised version on our website. We encourage you to
              review this Privacy Policy periodically for any updates.
            </li>{' '}
          </ul>
          <ul>
            {' '}
            <h3 className="font-[700] text-[25px] mb-[20px]">
              8. Contact Us:
            </h3>{' '}
            <li className=" my-5">
              {' '}
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or the handling of your personal information,
              please contact us at [Insert contact information]. By using our
              website and interacting with our LinkedIn ads, you consent to the
              collection, use, and disclosure of your personal information as
              described in this Privacy Policy. Please note that this Privacy
              Policy only applies to our website and interactions on LinkedIn
              and does not govern information collected offline or through other
              channels. Thank you for your trust in our commitment to protecting
              your privacy.
            </li>{' '}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default page;
