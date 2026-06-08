import Link from 'next/link';

export function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-[14px] text-white/60 mb-[40px]">
          Last updated: June 8, 2026
        </p>

        <div className="flex flex-col gap-[24px] text-[15px] leading-[1.8] text-white/80">
          <p>
            This Privacy Policy explains how JEMMIA POSTIZ (&ldquo;JEMMIA
            POSTIZ&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
            &ldquo;our&rdquo;) collects, uses, shares and protects personal data
            in connection with the JEMMIA POSTIZ social-media scheduling,
            publishing, analytics and team-collaboration platform (the
            &ldquo;Service&rdquo;), the website at{' '}
            <a href="https://jemmia.vn" className="underline hover:text-white">
              jemmia.vn
            </a>{' '}
            and related sub-domains (the &ldquo;Site&rdquo;), and the JEMMIA
            POSTIZ mobile applications for iOS and Android (the
            &ldquo;App&rdquo;). It applies to visitors to the Site, account
            holders, members of customer workspaces, prospects, event attendees,
            and anyone else who interacts with us. By using the Site or the
            Service you acknowledge this Policy. For our contractual terms, see
            our{' '}
            <Link
              href="/terms-of-service"
              className="underline hover:text-white"
            >
              Terms of Service
            </Link>
            .
          </p>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              1. Who We Are (Data Controller)
            </h2>
            <p>
              JEMMIA POSTIZ is operated by{' '}
              <strong>JEMMIA JOINT STOCK COMPANY</strong>, a company
              incorporated in Viet Nam with its registered office at 244/29
              Huynh Van Banh, Phu Nhuan, Ho Chi Minh City, Viet Nam. JEMMIA
              JOINT STOCK COMPANY is the data controller for all personal data
              processed in connection with the Service.
            </p>
            <p>
              For all privacy questions, requests and complaints you can reach us
              at{' '}
              <a
                href="mailto:support@jemmia.vn"
                className="underline hover:text-white"
              >
                support@jemmia.vn
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              2. The Service in Brief
            </h2>
            <p>
              JEMMIA POSTIZ lets you connect 28+ social-media and chat channels
              and centrally schedule, publish, analyse and collaborate on
              content. The platform includes a calendar and scheduling engine, a
              media library, a publishing queue, analytics, AI-assisted content
              generation, team and workspace management, and integrations with
              third-party platforms. Some features depend on your plan and on the
              platforms you choose to connect.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              3. The Data We Collect
            </h2>

            <h3 className="text-[17px] font-[500] text-white mt-[16px] mb-[8px]">
              3.1 Account &amp; identity data
            </h3>
            <ul className="list-disc ps-[24px] flex flex-col gap-[8px]">
              <li>
                Name, email address, password (stored as a salted hash), profile
                picture, organisation name, role, language and timezone
                preferences.
              </li>
              <li>
                If you sign in via a social-login provider (e.g. Google), the
                basic profile fields and email returned by that provider.
              </li>
              <li>
                Workspace and team membership, invitations sent and accepted,
                and the permissions granted within a workspace.
              </li>
            </ul>

            <h3 className="text-[17px] font-[500] text-white mt-[16px] mb-[8px]">
              3.2 Connected platform data
            </h3>
            <p>
              When you connect a third-party social or messaging account to
              JEMMIA POSTIZ we receive and store, via that platform&rsquo;s API:
            </p>
            <ul className="list-disc ps-[24px] flex flex-col gap-[8px]">
              <li>
                OAuth access &amp; refresh tokens (encrypted at rest), the
                scopes you granted, the platform username and identifier, and
                account-level metadata (e.g. profile picture, follower counts,
                page IDs, channel IDs).
              </li>
              <li>
                Content and engagement data needed to provide the Service: posts
                you create or schedule, posts already published, comments,
                replies, direct messages where you have explicitly enabled that
                feature, post-level analytics (impressions, clicks, reach, video
                retention, etc.), and audience-level aggregates the platform
                exposes.
              </li>
              <li>
                For YouTube specifically, the Service uses YouTube API Services.
                Your use of those features is also subject to the{' '}
                <a
                  href="https://www.youtube.com/t/terms"
                  className="underline hover:text-white"
                >
                  YouTube Terms of Service
                </a>{' '}
                and the{' '}
                <a
                  href="https://policies.google.com/privacy"
                  className="underline hover:text-white"
                >
                  Google Privacy Policy
                </a>
                . You can revoke JEMMIA POSTIZ&rsquo;s access to your Google
                data at any time at{' '}
                <a
                  href="https://security.google.com/settings/security/permissions"
                  className="underline hover:text-white"
                >
                  https://security.google.com/settings/security/permissions
                </a>
                .
              </li>
            </ul>

            <h3 className="text-[17px] font-[500] text-white mt-[16px] mb-[8px]">
              3.3 Content you upload
            </h3>
            <p>
              Text, images, video, audio, captions, links, hashtags, schedules,
              prompts, comments, approval notes, calendar metadata and any other
              content you upload to or generate within the Service.
            </p>

            <h3 className="text-[17px] font-[500] text-white mt-[16px] mb-[8px]">
              3.4 Billing data
            </h3>
            <p>
              Plan, subscription status, invoice history, billing email, billing
              address and tax identifiers. Card details and bank-account details
              are collected and stored directly by our payment processors (e.g.
              Stripe, Paddle); JEMMIA POSTIZ only receives a tokenised
              reference, the last four digits, the brand, and the expiry
              month/year.
            </p>

            <h3 className="text-[17px] font-[500] text-white mt-[16px] mb-[8px]">
              3.5 Logs, usage &amp; device data
            </h3>
            <ul className="list-disc ps-[24px] flex flex-col gap-[8px]">
              <li>
                IP address, user-agent, browser type and version, operating
                system, device identifiers, referrer URL, language preference,
                approximate location derived from IP (country/region).
              </li>
              <li>
                Application telemetry: pages visited, features used, posts
                created/published/failed, API calls made, error reports,
                performance metrics, and crash data.
              </li>
              <li>
                Session and authentication data, including login timestamps,
                session tokens and security events (e.g. password changes, MFA
                enrolment).
              </li>
            </ul>

            <h3 className="text-[17px] font-[500] text-white mt-[16px] mb-[8px]">
              3.6 Communications &amp; support data
            </h3>
            <p>
              Messages you send to us by email, in-app chat, via support tickets
              or via our community channels; surveys, NPS responses, feedback
              and feature requests; engagement metrics for the marketing emails
              you receive (open rate, click rate, link clicked).
            </p>

            <h3 className="text-[17px] font-[500] text-white mt-[16px] mb-[8px]">
              3.7 Cookies &amp; similar technologies
            </h3>
            <p>
              We use cookies, local storage, pixels and SDKs for authentication,
              security, preferences, analytics and (on the Site) marketing
              attribution. Categories include strictly-necessary, functional,
              analytics and marketing cookies. You can manage non-essential
              cookies through the in-page consent banner or your browser
              settings; disabling strictly-necessary cookies will break parts of
              the Service.
            </p>

            <h3 className="text-[17px] font-[500] text-white mt-[16px] mb-[8px]">
              3.8 Mobile Application Data
            </h3>
            <p>
              When you use the JEMMIA POSTIZ mobile App, we additionally collect
              technical information necessary to deliver the App, including
              device model, operating-system version, app version, language,
              time zone, crash diagnostics, performance metrics, and approximate
              location derived from your IP address. The App requests access to
              your device&rsquo;s photo library only when you choose to attach
              media to a post; media you do not attach is not transmitted to
              JEMMIA POSTIZ. The App does <strong>not</strong> use the Apple
              Advertising Identifier (IDFA), does <strong>not</strong> include
              third-party advertising SDKs, and does <strong>not</strong> perform
              tracking across other companies&rsquo; apps or websites within the
              meaning of Apple&rsquo;s App Tracking Transparency framework.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              4. How We Use the Data &amp; Legal Bases
            </h2>
            <p>
              We process the data described above for the purposes below. Where
              the GDPR (or UK GDPR) applies, the legal basis for each purpose
              is shown in brackets. Where Viet Nam&rsquo;s Decree
              13/2023/ND-CP on Personal Data Protection applies, we process data
              in accordance with its requirements.
            </p>
            <ul className="list-disc ps-[24px] flex flex-col gap-[8px]">
              <li>
                <strong>Provide the Service</strong> &mdash; authenticate users,
                create and manage your account and workspaces, store and publish
                your content to connected platforms, return analytics, and
                provide customer support.{' '}
                <em>(Performance of contract.)</em>
              </li>
              <li>
                <strong>Bill and collect payment</strong> &mdash; issue
                invoices, manage subscriptions, prevent payment fraud, comply
                with tax law.{' '}
                <em>(Performance of contract; legal obligation.)</em>
              </li>
              <li>
                <strong>Secure the Service</strong> &mdash; detect and prevent
                abuse, fraud, account takeover, brute-force attacks, spam and
                infrastructure attacks; investigate incidents; enforce the
                Terms.{' '}
                <em>
                  (Legitimate interests in keeping the Service safe; legal
                  obligation.)
                </em>
              </li>
              <li>
                <strong>Operate, maintain and improve the Service</strong>
                &mdash; debug, monitor uptime, measure performance, A/B-test
                features, build aggregated usage analytics.{' '}
                <em>
                  (Legitimate interests in running and improving a reliable
                  Service.)
                </em>
              </li>
              <li>
                <strong>Communicate with you</strong> &mdash; send
                service-related messages (receipts, security alerts,
                post-failure notices, scheduled-post confirmations) and, where
                you have opted in or where permitted, marketing communications.{' '}
                <em>
                  (Performance of contract; consent or legitimate interests,
                  depending on the message and your jurisdiction.)
                </em>
              </li>
              <li>
                <strong>Comply with law</strong> &mdash; respond to lawful
                requests, enforce our rights, defend claims.{' '}
                <em>(Legal obligation; legitimate interests.)</em>
              </li>
            </ul>
            <p>
              We do not use the content of your scheduled posts, your
              connected-platform content, or your private messages to send you
              advertising, and we do not sell that data.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              5. AI-Assisted Features
            </h2>
            <p>
              The Service offers optional AI features that generate or rewrite
              captions, hashtags, image prompts, video scripts and analytics
              summaries. To provide them we transmit your prompts and the inputs
              you choose to include to third-party model providers (for example
              Anthropic, OpenAI and similar) acting as our sub-processors. We
              instruct those providers not to use your inputs or outputs to
              train their models. AI outputs are generated probabilistically and
              may be inaccurate; you remain responsible for reviewing them
              before publishing.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              6. JEMMIA POSTIZ as Controller vs Processor
            </h2>
            <p>
              For account, billing, Site analytics, marketing and security
              data, JEMMIA POSTIZ acts as a <strong>data controller</strong>.
            </p>
            <p>
              For the content you publish through the Service and the personal
              data of your audience, followers, customers and message contacts
              that flows through JEMMIA POSTIZ on your instructions, JEMMIA
              POSTIZ acts as a <strong>data processor</strong> on your behalf,
              and you are the controller. You are responsible for having a
              lawful basis for that processing, for providing notices and
              obtaining consents from your end-users, and for honouring their
              rights. On request we will sign our standard Data Processing
              Addendum (DPA), which incorporates the EU Standard Contractual
              Clauses (and the UK Addendum) where relevant; email{' '}
              <a
                href="mailto:support@jemmia.vn"
                className="underline hover:text-white"
              >
                support@jemmia.vn
              </a>{' '}
              to request it.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              7. Who We Share Data With
            </h2>
            <p>
              We do not sell personal data and we do not rent it to third
              parties. We share data only with:
            </p>
            <ul className="list-disc ps-[24px] flex flex-col gap-[8px]">
              <li>
                <strong>Sub-processors and infrastructure providers</strong>
                &mdash; including cloud hosting and storage, content delivery
                networks, database providers, error-monitoring and observability
                vendors, customer-support platforms, transactional email
                providers, analytics platforms, payment processors and AI-model
                providers. We require these vendors to provide adequate security
                and to process data only on our instructions and for the agreed
                purposes.
              </li>
              <li>
                <strong>Connected third-party platforms</strong> &mdash; when
                you schedule or publish content, we transmit it to the platform
                you selected; when you request analytics, we receive it from
                that platform. Each platform&rsquo;s own privacy policy governs
                what it does next.
              </li>
              <li>
                <strong>Other members of your workspace</strong> &mdash;
                content, schedules, comments and approval activity are visible
                to the other people in the workspaces you join, according to the
                role and permissions assigned to them.
              </li>
              <li>
                <strong>Professional advisors</strong> &mdash; accountants,
                auditors, lawyers, insurers and similar advisors, under
                confidentiality.
              </li>
              <li>
                <strong>Authorities</strong> &mdash; when we are legally
                required to disclose data (court order, valid law-enforcement
                request, regulatory request) or when disclosure is necessary to
                investigate or prevent fraud, abuse, security threats or harm to
                people. Where lawful we will attempt to redirect the request to
                you first.
              </li>
              <li>
                <strong>Successor entities</strong> &mdash; in the event of a
                merger, acquisition, financing, reorganisation or sale of
                assets, in which case we will require the recipient to honour
                this Policy or provide notice of any new policy.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              8. International Data Transfers
            </h2>
            <p>
              JEMMIA POSTIZ operates from Viet Nam, and we use sub-processors in
              the United States, the European Union, the United Kingdom and
              other jurisdictions. As a result, personal data we process may be
              transferred to and stored in countries outside your own, including
              countries that may not have been recognised as providing an
              &ldquo;adequate level of protection&rdquo; by the European
              Commission, the UK ICO or other regulators.
            </p>
            <p>
              Where personal data subject to the GDPR or UK GDPR is transferred
              to a country without an adequacy decision, we rely on the European
              Commission Standard Contractual Clauses (and the UK International
              Data Transfer Addendum where applicable), supplemented by
              additional technical and organisational measures (encryption in
              transit and at rest, access controls, contractual restrictions on
              sub-processor use of the data). You may request a copy of the
              relevant safeguards by emailing{' '}
              <a
                href="mailto:support@jemmia.vn"
                className="underline hover:text-white"
              >
                support@jemmia.vn
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              9. Data Retention
            </h2>
            <ul className="list-disc ps-[24px] flex flex-col gap-[8px]">
              <li>
                <strong>Account data</strong> &mdash; kept for as long as your
                account is active. After account closure, retained for up to 90
                days to allow recovery, then deleted or anonymised, except where
                longer retention is required (see below).
              </li>
              <li>
                <strong>Scheduled content not yet published</strong> &mdash;
                kept until published or until you delete it.
              </li>
              <li>
                <strong>Published-post records and analytics</strong> &mdash;
                kept while your account is active, so historical analytics
                remain available.
              </li>
              <li>
                <strong>OAuth tokens</strong> &mdash; kept while the connection
                is active; revoked tokens are deleted promptly. You can
                disconnect a platform at any time from your account settings.
              </li>
              <li>
                <strong>Billing records</strong> &mdash; retained for the
                period required by tax and accounting law in the relevant
                jurisdictions (typically 7 years).
              </li>
              <li>
                <strong>Logs</strong> &mdash; operational and security logs are
                typically retained for up to 12 months.
              </li>
              <li>
                <strong>Backups</strong> &mdash; encrypted backups roll off on
                their normal schedule (typically within 30&ndash;90 days) after
                deletion from the live system.
              </li>
            </ul>
            <p>
              Where retention is required for legal, regulatory,
              dispute-resolution or fraud-prevention reasons, we may keep data
              longer than the periods above.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              10. Security
            </h2>
            <p>
              We maintain administrative, technical and physical safeguards
              designed to protect personal data against accidental or unlawful
              destruction, loss, alteration, unauthorised disclosure or access.
              These include: encryption of data in transit (TLS) and of
              sensitive data at rest; encryption of OAuth tokens; password
              hashing with a modern algorithm; role-based access controls and
              least-privilege provisioning; audit logging; multi-factor
              authentication for staff access to production systems; vendor
              security reviews and contractual data-protection commitments; and
              incident-response procedures. No system is fully secure, and we
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              11. Your Rights
            </h2>
            <p>Depending on where you live, you may have the right to:</p>
            <ul className="list-disc ps-[24px] flex flex-col gap-[8px]">
              <li>
                access the personal data we hold about you and receive a copy in
                a portable format;
              </li>
              <li>
                request correction of inaccurate or incomplete data;
              </li>
              <li>
                request deletion of your data, subject to retention obligations;
              </li>
              <li>
                object to or restrict certain processing, including direct
                marketing;
              </li>
              <li>
                withdraw consent where processing is based on consent (without
                affecting the lawfulness of processing already carried out);
              </li>
              <li>
                opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of
                personal information for cross-context behavioural advertising
                &mdash; JEMMIA POSTIZ does not sell personal data and does not
                share it for cross-context behavioural advertising as those
                terms are defined under the California Privacy Laws;
              </li>
              <li>
                lodge a complaint with your supervisory authority (in the EU/UK)
                or with the relevant authority in your jurisdiction.
              </li>
            </ul>
            <p>
              Most account changes can be made by signing in to your account and
              editing your profile, billing or workspace settings, or by
              disconnecting a platform from the integrations page. To exercise
              rights that cannot be handled in-product, email{' '}
              <a
                href="mailto:support@jemmia.vn"
                className="underline hover:text-white"
              >
                support@jemmia.vn
              </a>
              . We will respond within the timeframe required by applicable law
              (typically 30 days, extendable for complex requests). We may need
              to verify your identity before acting on a request. We will not
              discriminate against you for exercising your rights.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              12. California Privacy Rights
            </h2>
            <p>
              If you are a California resident, the California Consumer Privacy
              Act as amended by the California Privacy Rights Act (together, the
              &ldquo;California Privacy Laws&rdquo;) gives you the rights
              summarised in Section 11, including the right to know what
              categories of personal information we collect about you and the
              purposes for which we use them (described in Sections 3 and 4),
              the right to delete, the right to correct, the right to limit the
              use of sensitive personal information, and the right not to be
              discriminated against for exercising your rights. JEMMIA POSTIZ
              does not sell personal information and does not share it for
              cross-context behavioural advertising. To exercise your California
              rights, email{' '}
              <a
                href="mailto:support@jemmia.vn"
                className="underline hover:text-white"
              >
                support@jemmia.vn
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              13. Viet Nam Personal Data Protection
            </h2>
            <p>
              Where Viet Nam&rsquo;s Decree 13/2023/ND-CP on Personal Data
              Protection (&ldquo;PDPD&rdquo;) applies, JEMMIA JOINT STOCK
              COMPANY handles personal data in accordance with the requirements
              set out in the PDPD. You have the right to request access to,
              correction of, and deletion of personal data we hold about you, as
              well as the right to withdraw consent where processing is based on
              consent. Requests should be sent to{' '}
              <a
                href="mailto:support@jemmia.vn"
                className="underline hover:text-white"
              >
                support@jemmia.vn
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              14. Children
            </h2>
            <p>
              The Service, the Site and the App are intended for business use
              and are not directed to children. We do not knowingly collect
              personal data from children under the age of 18. The App is not
              designed for, marketed to, or directed at children under 13 within
              the meaning of the U.S. Children&rsquo;s Online Privacy Protection
              Act (&ldquo;COPPA&rdquo;), the EU GDPR&rsquo;s
              children&rsquo;s-data protections, or comparable laws in other
              jurisdictions. If you are a parent or guardian and believe a child
              has provided us with personal data, please contact us at{' '}
              <a
                href="mailto:support@jemmia.vn"
                className="underline hover:text-white"
              >
                support@jemmia.vn
              </a>{' '}
              and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              15. Marketing &amp; Cookies Choices
            </h2>
            <p>
              You can unsubscribe from marketing emails at any time using the
              unsubscribe link in any such email. Unsubscribing from marketing
              does not stop transactional and account-related emails, which are
              necessary while your account is active. You can manage cookie
              preferences via the consent banner on the Site (where displayed)
              or your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              16. Third-Party Sites and Services
            </h2>
            <p>
              The Site and the Service link to and integrate with third-party
              services. Their handling of your data is governed by their own
              privacy policies, not this one. We encourage you to review the
              privacy policy of any platform you connect to JEMMIA POSTIZ,
              including the{' '}
              <a
                href="https://www.google.com/policies/privacy"
                className="underline hover:text-white"
              >
                Google Privacy Policy
              </a>{' '}
              for YouTube integrations.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              17. Changes to this Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. If a change
              is material we will provide reasonable notice (for example by
              email or in-product notice) before it takes effect. The date the
              Policy was last updated is shown at the top of this page; we
              encourage you to review it periodically.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-[600] text-white mb-[12px]">
              18. Contact Us
            </h2>
            <p>
              For privacy questions, requests, or complaints, email{' '}
              <a
                href="mailto:support@jemmia.vn"
                className="underline hover:text-white"
              >
                support@jemmia.vn
              </a>
              , or write to us at:
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
