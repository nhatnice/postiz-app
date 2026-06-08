import Link from 'next/link';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white">
      <div className="max-w-[800px] mx-auto px-[20px] py-[40px]">
        <div className="mb-[40px]">
          <Link
            href="/"
            className="text-[#FC69FF] hover:underline text-[14px]"
          >
            &larr; Back to JEMMIA POSTIZ
          </Link>
        </div>

        <h1 className="text-[36px] font-[600] mb-[8px]">
          Terms of Service
        </h1>
        <p className="text-[14px] text-white/60 mb-[40px]">
          Last updated: June 8, 2026
        </p>

        <div className="flex flex-col gap-[24px] text-[15px] leading-[1.8] text-white/80">
          <p>
            Welcome to JEMMIA POSTIZ (the &ldquo;Service&rdquo;), a social media
            scheduling, publishing, analytics and team-collaboration platform
            available at{' '}
            <a href="https://jemmia.vn" className="underline hover:text-white">
              jemmia.vn
            </a>{' '}
            and related sub-domains (collectively, the &ldquo;Site&rdquo;), and
            through the JEMMIA POSTIZ mobile applications for iOS and Android
            (the &ldquo;App&rdquo;). References in these Terms to the
            &ldquo;Service&rdquo; include the Site and the App. These Terms of
            Service (&ldquo;Terms&rdquo;) govern your access to and use of the
            Site and the Service. By creating an account, accessing, or using
            the Service you agree to be bound by these Terms. If you do not
            agree, do not use the Service.
          </p>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              1. The Company Behind JEMMIA POSTIZ
            </h2>
            <p>
              JEMMIA POSTIZ is operated by{' '}
              <strong>JEMMIA JOINT STOCK COMPANY</strong>, a company
              incorporated in Viet Nam with its registered office at 244/29
              Huynh Van Banh, Phu Nhuan, Ho Chi Minh City, Viet Nam. References
              in these Terms to &ldquo;JEMMIA POSTIZ&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo; or &ldquo;our&rdquo; mean JEMMIA JOINT STOCK
              COMPANY.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              2. Eligibility and Accounts
            </h2>
            <p>
              You must be at least 18 years old, or the age of majority in your
              jurisdiction, and capable of entering into a binding contract to
              use the Service. If you use the Service on behalf of an
              organisation, you represent that you have authority to bind that
              organisation, and &ldquo;you&rdquo; in these Terms refers to both
              you individually and that organisation.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials, for all activity that occurs under your
              account, and for keeping your account information accurate and
              current. You must notify us promptly at{' '}
              <a
                href="mailto:support@jemmia.vn"
                className="underline hover:text-white"
              >
                support@jemmia.vn
              </a>{' '}
              of any unauthorised use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              3. The Service
            </h2>
            <p>
              JEMMIA POSTIZ provides tools to schedule, publish, analyse, manage
              and collaborate on content distributed to 28+ social-media and
              chat channels, including without limitation: a calendar and
              scheduling engine, a media library, analytics, AI-assisted content
              generation, team and workspace management, and integrations with
              third-party platforms. Specific features, channels and limits
              depend on the plan you subscribe to and may change from time to
              time.
            </p>
            <p>
              We may add, remove, modify, suspend or discontinue any feature,
              integration or channel at any time, including where a third-party
              platform changes or revokes API access. We will use commercially
              reasonable efforts to give notice of material changes that
              adversely affect paid subscribers.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              4. Subscriptions, Fees and Billing
            </h2>
            <p>
              By purchasing a subscription you authorise JEMMIA JOINT STOCK
              COMPANY (and its third-party payment processors) to charge the
              applicable fees to your chosen payment method on the recurring
              billing cycle you selected (monthly, annual or other).
              Subscriptions automatically renew at the end of each billing
              period at the then-current rate unless cancelled before renewal.
            </p>
            <p>
              Except where required by applicable law or expressly stated
              otherwise in a written refund policy on the Site, all fees are
              non-refundable, including for partially used periods. Cancelling
              your subscription stops future renewals; it does not entitle you
              to a pro-rata refund of the current period.
            </p>
            <p>
              Fees are exclusive of taxes, duties and similar government
              charges, all of which are your responsibility. We may use
              third-party payment processors (for example Stripe, Paddle or
              similar). Your payment information is handled in accordance with
              the processor&rsquo;s terms and privacy policy.
            </p>
            <p>
              We may change pricing for new billing periods on at least 30
              days&rsquo; notice by email or in-product notice. Continued use of
              the paid Service after a price change takes effect constitutes
              acceptance of the new price.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              5. Free Plans, Trials and Beta Features
            </h2>
            <p>
              We may offer free plans, free trials, or features marked as
              &ldquo;beta&rdquo;, &ldquo;preview&rdquo; or similar. Such
              offerings are provided &ldquo;as is&rdquo;, may be subject to
              additional limits, and may be modified or discontinued at any time
              without notice. We make no warranties of any kind in respect of
              free or beta features.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              6. Your Content
            </h2>
            <p>
              &ldquo;Your Content&rdquo; means any text, images, video, audio,
              links, metadata, schedules, prompts, configurations and other
              materials you upload to, generate within, or transmit through the
              Service. As between you and JEMMIA POSTIZ, you retain all
              ownership and intellectual-property rights in Your Content.
            </p>
            <p>
              You grant JEMMIA POSTIZ a worldwide, non-exclusive, royalty-free
              licence to host, store, reproduce, transmit, display, adapt and
              distribute Your Content solely for the purposes of operating,
              providing, securing and improving the Service, including
              transmitting Your Content to the third-party social-media
              platforms you have connected, and generating analytics, previews
              and related outputs.
            </p>
            <p>
              You represent and warrant that you own, or have all necessary
              rights, licences and permissions in, Your Content; that Your
              Content and its publication via the connected platforms do not
              infringe any third-party right; and that Your Content complies
              with these Terms, applicable law and the terms of every
              third-party platform to which it is published.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              7. Acceptable Use
            </h2>
            <p>You agree not to use the Service to, and not to allow any third party to:</p>
            <ul className="list-disc ps-[24px] flex flex-col gap-[8px]">
              <li>
                publish, distribute or store content that is unlawful,
                defamatory, harassing, hateful, threatening, sexually
                exploitative of minors, or that infringes intellectual-property,
                privacy or publicity rights;
              </li>
              <li>
                send spam, engage in coordinated inauthentic behaviour, run
                undisclosed bots, mass-create fake engagement, or otherwise
                violate the platform rules of any connected third-party network;
              </li>
              <li>
                circumvent rate limits, technical restrictions or access
                controls of the Service or of any connected third-party
                platform;
              </li>
              <li>
                reverse engineer, decompile, scrape, or attempt to derive the
                source code of the Service except to the extent expressly
                permitted by applicable law or by an open-source licence
                covering specific components;
              </li>
              <li>
                resell, sublicense, white-label or otherwise commercialise the
                Service except under a written agreement with JEMMIA JOINT
                STOCK COMPANY;
              </li>
              <li>
                upload malware, attempt to gain unauthorised access to the
                Service, or interfere with the integrity or performance of the
                Service or its underlying infrastructure.
              </li>
            </ul>
            <p>
              We may suspend or terminate accounts that violate this section,
              with or without notice, and may remove offending content. We may
              also be required to disclose violations to affected third-party
              platforms.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              8. Third-Party Platforms and Integrations
            </h2>
            <p>
              The Service&rsquo;s core function is to publish Your Content to
              third-party platforms (including, without limitation, X / Twitter,
              Meta Platforms (Facebook, Instagram, Threads), LinkedIn, YouTube,
              TikTok, Pinterest, Reddit, Bluesky, Mastodon, Discord, Slack,
              Telegram and others). To do so, you authenticate your accounts on
              those platforms and authorise JEMMIA POSTIZ to act on your behalf.
            </p>
            <p>
              Your use of any third-party platform through the Service is also
              governed by that platform&rsquo;s terms and privacy policy,
              including, by way of example:
            </p>
            <ul className="list-disc ps-[24px] flex flex-col gap-[8px]">
              <li>
                YouTube &mdash; by connecting a YouTube account you agree to the{' '}
                <a
                  href="https://www.youtube.com/t/terms"
                  className="underline hover:text-white"
                >
                  YouTube Terms of Service
                </a>
                , and acknowledge{' '}
                <a
                  href="https://policies.google.com/privacy"
                  className="underline hover:text-white"
                >
                  Google&rsquo;s Privacy Policy
                </a>
                . JEMMIA POSTIZ uses YouTube API Services.
              </li>
              <li>
                X / Twitter &mdash; the{' '}
                <a
                  href="https://x.com/en/tos"
                  className="underline hover:text-white"
                >
                  X Terms
                </a>
                .
              </li>
              <li>
                Meta Platforms &mdash; the{' '}
                <a
                  href="https://www.facebook.com/legal/terms"
                  className="underline hover:text-white"
                >
                  Meta Terms of Service
                </a>{' '}
                and Platform Terms.
              </li>
              <li>
                LinkedIn &mdash; the{' '}
                <a
                  href="https://www.linkedin.com/legal/user-agreement"
                  className="underline hover:text-white"
                >
                  LinkedIn User Agreement
                </a>
                .
              </li>
              <li>
                TikTok &mdash; the{' '}
                <a
                  href="https://www.tiktok.com/legal/terms-of-service"
                  className="underline hover:text-white"
                >
                  TikTok Terms of Service
                </a>
                .
              </li>
            </ul>
            <p>
              You can revoke JEMMIA POSTIZ&rsquo;s access to any connected
              platform at any time from your account settings or directly from
              that platform&rsquo;s app/permissions page. Revoking access will
              stop future scheduled posts to that platform.
            </p>
            <p>
              JEMMIA POSTIZ is not responsible for the availability, behaviour,
              policies, fees, content moderation decisions, account suspensions,
              rate-limit changes or removal of features of any third-party
              platform. Where a third-party platform changes its API, terminates
              its developer programme, or modifies its terms in a way that
              affects the Service, we may modify or discontinue the affected
              integration without liability.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              9. AI Features
            </h2>
            <p>
              The Service may offer AI-assisted features that generate text,
              images, video, captions, hashtags, summaries or analytics
              (&ldquo;AI Output&rdquo;). AI Output is generated probabilistically
              and may be inaccurate, incomplete or unsuitable for your purpose.
              You are solely responsible for reviewing AI Output before
              publishing it, ensuring that it complies with applicable law,
              third-party platform rules and the rights of any persons depicted,
              and disclosing AI involvement where required.
            </p>
            <p>
              To provide AI features we may transmit your prompts and selected
              inputs to third-party model providers. We do not authorise such
              providers to train their models on your inputs except where you opt
              in or where the provider&rsquo;s default policy requires it (and we
              will document such cases in the Privacy Policy).
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              10. Intellectual Property of JEMMIA POSTIZ
            </h2>
            <p>
              The Service, the Site and all software, designs, text, graphics,
              logos, trademarks and other materials made available by JEMMIA
              POSTIZ (excluding Your Content and excluding components made
              available under their own open-source licences) are the property of
              JEMMIA JOINT STOCK COMPANY or its licensors and are protected by
              intellectual-property laws. Subject to your compliance with these
              Terms, we grant you a limited, non-exclusive, non-transferable,
              revocable licence to access and use the Service for its intended
              purpose during your subscription.
            </p>
            <p>
              JEMMIA POSTIZ&rsquo;s open-source components are governed by the
              licences distributed with them; nothing in these Terms restricts
              your rights under those licences in respect of the relevant
              components.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              11. Feedback
            </h2>
            <p>
              If you provide feedback, suggestions or ideas about the Service,
              you grant JEMMIA POSTIZ a perpetual, irrevocable, worldwide,
              royalty-free licence to use them for any purpose, without
              obligation or compensation to you.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              12. Privacy and Data Protection
            </h2>
            <p>
              Our processing of personal data in connection with the Service is
              described in our{' '}
              <Link
                href="/privacy-policy"
                className="underline hover:text-white"
              >
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference. Where we
              process personal data on your behalf in respect of your end-users
              (for example, audience analytics), we do so as a processor and the
              terms of our Data Processing Addendum apply.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              13. Suspension and Termination
            </h2>
            <p>
              You may terminate your account at any time from your account
              settings. We may suspend or terminate your access to the Service
              immediately if you breach these Terms, fail to pay fees when due,
              use the Service in a way that exposes JEMMIA POSTIZ or any
              third-party platform to legal, security or reputational risk, or
              where required by law.
            </p>
            <p>
              On termination your right to access the Service ends. We may
              delete Your Content and account data after a reasonable retention
              period as described in the Privacy Policy. Provisions that by
              their nature should survive termination (including sections on Your
              Content licence, intellectual property, fees already accrued,
              disclaimers, limitation of liability, indemnification, governing
              law and dispute resolution) survive.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              14. Disclaimers
            </h2>
            <p>
              To the maximum extent permitted by law, the Service and the Site
              are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;,
              without warranties of any kind, whether express, implied or
              statutory, including warranties of merchantability, fitness for a
              particular purpose, non-infringement, accuracy and uninterrupted
              or error-free operation. We do not warrant that scheduled posts
              will always be delivered on time, that connected platforms will
              accept them, or that analytics returned by third-party platforms
              will be accurate or complete.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              15. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, in no event shall JEMMIA
              POSTIZ, its affiliates, officers, directors, employees, agents or
              licensors be liable for any indirect, incidental, special,
              consequential, exemplary or punitive damages, or for any loss of
              profits, revenue, data, goodwill, business opportunity or
              anticipated savings, arising out of or in connection with these
              Terms, the Site or the Service, whether based in contract, tort
              (including negligence), strict liability or otherwise, even if
              advised of the possibility of such damages.
            </p>
            <p>
              The aggregate liability of JEMMIA POSTIZ arising out of or in
              connection with these Terms, the Site or the Service shall not
              exceed the greater of (a) the total fees actually paid by you to
              JEMMIA JOINT STOCK COMPANY for the Service in the twelve (12)
              months immediately preceding the event giving rise to the claim,
              and (b) USD 100.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              16. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend and hold harmless JEMMIA JOINT
              STOCK COMPANY and its respective affiliates, officers, directors,
              employees, agents and licensors from and against any claims,
              liabilities, damages, losses and expenses (including reasonable
              legal fees) arising out of or in connection with: (a) Your Content;
              (b) your use of the Service; (c) your breach of these Terms; (d)
              your violation of any applicable law or any third-party right
              (including any third-party platform&rsquo;s terms); or (e) any
              dispute between you and a third party related to content you
              published through the Service.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              17. Newsletter and Marketing Communications
            </h2>
            <p>
              If you subscribe to our newsletter or opt in to marketing
              communications, you agree to receive product, promotional and
              educational emails from JEMMIA POSTIZ. You can unsubscribe at any
              time using the &ldquo;unsubscribe&rdquo; link in any such email.
              Transactional and account-related emails (for example billing
              receipts, security alerts and service notices) are not optional
              while your account is active.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              18. Cookies
            </h2>
            <p>
              We use cookies and similar technologies on the Site for
              authentication, preferences, security, analytics and marketing, as
              described in our Privacy Policy. By using the Site you consent to
              our use of cookies in accordance with that policy and any cookie
              preferences you have set.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              19. Changes to the Terms
            </h2>
            <p>
              We may update these Terms from time to time. If a change is
              material we will give reasonable advance notice by email or
              in-product notice. Changes are effective on the date stated at the
              top of the updated Terms; your continued use of the Service after
              that date constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              20. Governing Law and Dispute Resolution
            </h2>
            <p>
              These Terms and any non-contractual obligations arising out of or
              in connection with them are governed by the laws of the Socialist
              Republic of Viet Nam, without regard to its conflict-of-laws
              principles. The courts of Ho Chi Minh City, Viet Nam have
              exclusive jurisdiction over any dispute arising out of or in
              connection with these Terms or the Service, save that JEMMIA
              POSTIZ may bring proceedings in any jurisdiction where you are
              located or where infringement of its intellectual property is
              occurring.
            </p>
            <p>
              Nothing in this section limits any non-waivable consumer rights
              you may have under the mandatory law of your country of residence.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              21. General
            </h2>
            <p>
              These Terms, together with the Privacy Policy, the Data Processing
              Addendum (where applicable) and any order form or plan-specific
              terms you accept, constitute the entire agreement between you and
              JEMMIA POSTIZ in respect of the Service. If any provision is held
              invalid or unenforceable, the remaining provisions remain in full
              force. Our failure to enforce any right or provision is not a
              waiver of that right or provision. You may not assign these Terms
              without our prior written consent; we may assign these Terms to an
              affiliate or in connection with a merger, acquisition or sale of
              assets.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              22. Contact
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at{' '}
              <a
                href="mailto:support@jemmia.vn"
                className="underline hover:text-white"
              >
                support@jemmia.vn
              </a>
              , or by post at:
            </p>
            <p>
              <strong>JEMMIA JOINT STOCK COMPANY</strong> &mdash; 244/29 Huynh
              Van Banh, Phu Nhuan, Ho Chi Minh City, Viet Nam.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
