import React, { useEffect } from "react";

const EMAIL = "claudio@galide.com.ar";
const DSAR_URL = "https://app.termly.io/dsar/bea31f83-f19c-4ded-ac3d-65c1ed6d8034";

const styles = `
  .pp { font-family: Arial, Helvetica, sans-serif; color: #3f3f46; background: #fff; line-height: 1.6; font-size: 15px; }
  .pp main { max-width: 820px; margin: 0 auto; padding: 48px 24px 64px; }
  .pp h1 { font-size: 30px; color: #0a0a0a; margin: 0 0 4px; }
  .pp h2 { font-size: 19px; color: #0a0a0a; margin: 40px 0 8px; padding-top: 8px; border-top: 1px solid #e4e4e7; }
  .pp h3 { font-size: 16px; color: #0a0a0a; margin: 24px 0 6px; }
  .pp .updated { color: #71717a; font-weight: bold; margin: 0 0 32px; }
  .pp a { color: #2f3ff1; word-break: break-word; }
  .pp ul { list-style-type: square; padding-left: 22px; }
  .pp li { margin: 4px 0; }
  .pp .short { font-style: italic; }
  .pp .toc a { display: block; margin: 4px 0; text-decoration: none; }
  .pp .toc a:hover { text-decoration: underline; }
  .pp address { font-style: normal; margin-top: 8px; }
  .pp footer { margin-top: 48px; padding-top: 16px; border-top: 1px solid #e4e4e7; color: #71717a; font-size: 13px; }
`;

const Ext = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Mail = () => <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;

export default function PoliticasYPrivacidad() {
  useEffect(() => {
    document.title = "Privacy Policy | Galide";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pp">
      <style>{styles}</style>
      <main>
        <h1>PRIVACY POLICY</h1>
        <p className="updated">Last updated September 22, 2026</p>

        <p>
          This Privacy Notice for Galide (“<strong>we</strong>,” “<strong>us</strong>,” or “<strong>our</strong>”), describes how and why we might access, collect, store, use, and/or share (“<strong>process</strong>”) your personal information when you use our services (“<strong>Services</strong>”), including when you:
        </p>
        <ul>
          <li>Download and use our Facebook application (chatwoot), or any other application of ours that links to this Privacy Notice</li>
          <li>Engage with us in other related ways, including any marketing or events</li>
        </ul>

        <p>
          <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <Mail />.
        </p>

        <h2>SUMMARY OF KEY POINTS</h2>
        <p>
          <strong><em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <a href="#toc">table of contents</a> below to find the section you are looking for.</em></strong>
        </p>

        <p>
          <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a href="#personalinfo">personal information you disclose to us</a>.
        </p>

        <p>
          <strong>Do we process any sensitive personal information?</strong> Some of the information may be considered “special” or “sensitive” in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.
        </p>

        <p>
          <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
        </p>

        <p>
          <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <a href="#infouse">how we process your information</a>.
        </p>

        <p>
          <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about <a href="#whoshare">when and with whom we share your personal information</a>.
        </p>

        <p>
          <strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <a href="#infosafe">how we keep your information safe</a>.
        </p>

        <p>
          <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a href="#privacyrights">your privacy rights</a>.
        </p>

        <p>
          <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a <Ext href={DSAR_URL}>data subject access request</Ext>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
        </p>

        <p>
          Want to learn more about what we do with any information we collect? <a href="#toc">Review the Privacy Notice in full</a>.
        </p>

        <h2 id="toc">TABLE OF CONTENTS</h2>
        <nav className="toc">
          <a href="#infocollect">1. WHAT INFORMATION DO WE COLLECT?</a>
          <a href="#infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</a>
          <a href="#whoshare">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>
          <a href="#cookies">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a>
          <a href="#inforetain">5. HOW LONG DO WE KEEP YOUR INFORMATION?</a>
          <a href="#infosafe">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
          <a href="#privacyrights">7. WHAT ARE YOUR PRIVACY RIGHTS?</a>
          <a href="#DNT">8. CONTROLS FOR DO-NOT-TRACK FEATURES</a>
          <a href="#policyupdates">9. DO WE MAKE UPDATES TO THIS NOTICE?</a>
          <a href="#contact">10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
          <a href="#request">11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a>
        </nav>

        <h2 id="infocollect">1. WHAT INFORMATION DO WE COLLECT?</h2>
        <h3 id="personalinfo">Personal information you disclose to us</h3>
        <p className="short"><strong>In Short:</strong> We collect personal information that you provide to us.</p>
        <p>
          We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
        </p>
        <p>
          <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
        </p>
        <ul>
          <li>names</li>
        </ul>
        <p id="sensitiveinfo"><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
        <p>
          All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
        </p>
        <p>
          <strong>Information collected when you use our Facebook application(s).</strong> We by default access your Facebook basic account information, including your name, email, gender, birthday, current city, and profile picture URL, as well as other information that you choose to make public. We may also request access to other permissions related to your account, such as friends, check-ins, and likes, and you may choose to grant or deny us access to each individual permission. For more information regarding Facebook permissions, refer to the <Ext href="https://developers.facebook.com/docs/facebook-login/permissions">Facebook Permissions Reference</Ext> page.
        </p>

        <h2 id="infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p className="short">
          <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
        </p>
        <p><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></p>
        <ul>
          <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
          <li><strong>To fulfill and manage your orders.</strong> We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li>
          <li><strong>To comply with our legal obligations.</strong> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.</li>
        </ul>

        <h2 id="whoshare">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <p className="short">
          <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.
        </p>
        <p>We may need to share your personal information in the following situations:</p>
        <ul>
          <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
        </ul>

        <h2 id="cookies">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p className="short"><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>
        <p>
          We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
        </p>
        <p>
          We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements or to tailor advertisements to your interests. The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
        </p>
        <p>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
        <h3>Google Analytics</h3>
        <p>
          We may share your information with Google Analytics to track and analyze the use of the Services. The Google Analytics Advertising Features that we may use include: Google Analytics Demographics and Interests Reporting. To opt out of being tracked by Google Analytics across the Services, visit <Ext href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</Ext>. You can opt out of Google Analytics Advertising Features through <Ext href="https://adssettings.google.com/">Ads Settings</Ext> and Ad Settings for mobile apps. Other opt out means include <Ext href="http://optout.networkadvertising.org/">http://optout.networkadvertising.org/</Ext> and <Ext href="http://www.networkadvertising.org/mobile-choice">http://www.networkadvertising.org/mobile-choice</Ext>. For more information on the privacy practices of Google, please visit the <Ext href="https://policies.google.com/privacy">Google Privacy &amp; Terms page</Ext>.
        </p>

        <h2 id="inforetain">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p className="short">
          <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
        </p>
        <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
        </p>
        <p>
          When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
        </p>

        <h2 id="infosafe">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p className="short">
          <strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
        </p>
        <p>
          We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
        </p>

        <h2 id="privacyrights">7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p className="short">
          <strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
        </p>
        <p id="withdrawconsent">
          <strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section “<a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>” below.
        </p>
        <p>
          However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
        </p>
        <p>
          <strong><u>Cookies and similar technologies:</u></strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
        </p>
        <p>If you have questions or comments about your privacy rights, you may email us at <Mail />.</p>

        <h2 id="DNT">8. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p>
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
        </p>

        <h2 id="policyupdates">9. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p className="short"><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
        <p>
          We may update this Privacy Notice from time to time. The updated version will be indicated by an updated “Revised” date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
        </p>

        <h2 id="contact">10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>If you have questions or comments about this notice, you may email us at <Mail /> or contact us by post at:</p>
        <address>
          Galide<br />
          Zuviria 888<br />
          Temperley 1834<br />
          Argentina
        </address>

        <h2 id="request">11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
        <p>
          Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a <Ext href={DSAR_URL}>data subject access request</Ext>.
        </p>

        <footer>
          This Privacy Policy was created using Termly’s{" "}
          <a href="https://termly.io/products/privacy-policy-generator/" target="_blank" rel="noopener noreferrer">
            Privacy Policy Generator
          </a>.
        </footer>
      </main>
    </div>
  );
}