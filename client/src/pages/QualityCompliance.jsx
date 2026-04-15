import React, { useEffect } from 'react';

const QualityCompliance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-48 font-sans text-gray-900 bg-white selection:bg-brand-100 selection:text-brand-900">
      
      {/* Page Content Container */}
      <div className="px-6 mx-auto space-y-64 max-w-7xl">
        
        {/* ISO 9001:2015 IAF SECTION */}
        <section className="relative">
          <div className="pb-12 mb-20 text-center border-b border-gray-100">
            <h1 className="mb-4 text-3xl font-medium tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              ISO 9001:2015 IAF
            </h1>
            <div className="w-16 h-1 mx-auto bg-gray-900"></div>
          </div>

          <div className="flex flex-col items-start gap-20 lg:flex-row">
            {/* Left Side: Sticky Image Column */}
            <div className="w-full lg:w-2/5 lg:sticky lg:top-32 h-fit">
              <div className="relative p-0 overflow-hidden rounded-lg">
                <div className="aspect-[3/4] rounded-md overflow-hidden bg-white border border-gray-100 relative">
                  <img 
                    src="/ISO-9001-2015.jpeg" 
                    alt="ISO 9001-2015" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Scrollable Content Column */}
            <div className="w-full space-y-16 lg:w-3/5">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-[1.2] tracking-tight">
                  ISO 9001 IAF Certification for LabelzAI – Ensuring Global Quality Excellence
                </h2>
                <div className="space-y-8 text-base font-normal leading-snug text-gray-700 md:text-lg">
                  <p>
                    At LabelzAI, we are committed to delivering high-precision data annotation services powered by internationally recognized quality standards. Our adherence to ISO 9001:2015 with IAF accreditation reflects our dedication to operational excellence, process consistency, and customer satisfaction across AI training datasets.
                  </p>
                  <div className="pt-8">
                    <h3 className="flex items-center gap-4 mb-8 text-xl font-medium text-gray-900 md:text-2xl">
                      What is ISO 9001?
                    </h3>
                    <div className="space-y-6 ">
                      <p>
                        ISO 9001:2015 is the world’s leading Quality Management System (QMS) standard, designed to help organizations consistently deliver reliable products and services while improving efficiency and customer trust.
                      </p>
                      <p>
                        For a data annotation company like LabelzAI, ISO 9001 ensures that every dataset—whether for computer vision, NLP, or autonomous systems—is processed with structured workflows, quality control checkpoints, and continuous improvement mechanisms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div className="pb-6 space-y-2 text-left border-b border-gray-100">
                  <h2 className="text-xl font-medium text-gray-900 md:text-2xl">Why ISO 9001 IAF Matters for LabelzAI</h2>
                
                </div>
                
                <div className="space-y-14 ">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">1. Global Credibility in AI Data Annotation</h3>
                    <p className="text-base font-normal leading-snug text-gray-700 md:text-lg">
                      With IAF-accredited ISO 9001 certification, LabelzAI demonstrates compliance with international quality benchmarks, making us a reliable partner for global AI companies, startups, and enterprises.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-gray-900">2. Consistent Annotation Quality</h3>
                    <div className="space-y-6 text-base font-normal leading-snug text-gray-700 md:text-lg">
                      <p>Our QMS ensures:</p>
                      <ul className="pl-6 space-y-3 list-disc">
                        <li>Standardized annotation guidelines</li>
                        <li>Multi-level quality checks (QA/QC)</li>
                        <li>Reduced error rates in labeled datasets</li>
                        <li>Scalable workflows for large AI projects</li>
                      </ul>
                      <p className="block mt-8 italic font-normal text-gray-500 lg:pl-0">
                        This is especially critical in applications like autonomous driving, healthcare AI, and machine learning pipelines, where accuracy directly impacts model performance.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">3. Process-Driven Data Operations</h3>
                    <div className="space-y-4 text-base font-normal leading-snug text-gray-700 md:text-lg">
                      <p>ISO 9001 emphasizes a process-based approach and risk-based thinking, ensuring that LabelzAI:</p>
                      <ul className="pl-6 space-y-3 list-disc">
                        <li>Identifies inefficiencies early</li>
                        <li>Maintains structured documentation</li>
                        <li>Continuously monitors performance metrics</li>
                        <li>Improves annotation workflows over time</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">4. Enhanced Client Trust & Compliance</h3>
                    <div className="space-y-4 text-base font-normal leading-snug text-gray-700 md:text-lg">
                      <p>IAF-backed certification assures clients that:</p>
                      <ul className="pl-6 space-y-3 list-disc">
                        <li>Our processes are audited by accredited bodies</li>
                        <li>Quality standards are independently verified</li>
                        <li>Deliverables meet regulatory and enterprise requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pb-20 space-y-12">
                <div className="pb-6 space-y-2 text-left border-b border-gray-100">
                  <h2 className="text-xl font-medium text-gray-900 md:text-2xl">How LabelzAI Implements ISO 9001:2015 IAF Standards</h2>
                 
                </div>
                <div className="grid grid-cols-1 gap-14 ">
                  {[
                    { t: "Data Collection & Pre-processing", d: "Structured intake processes ensure clean and usable raw data." },
                    { t: "Annotation Execution", d: "Expert annotators follow standardized labeling protocols for bounding boxes, segmentation, and NLP tagging." },
                    { t: "Quality Assurance", d: "Multi-layer QA systems ensure high accuracy and consistency across datasets." },
                    { t: "Performance Monitoring", d: "We track KPIs such as annotation accuracy, turnaround time, and client satisfaction." },
                    { t: "Continuous Improvement", d: "Feedback loops and audits help refine workflows and enhance productivity." }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="flex items-center gap-4 text-lg font-medium text-gray-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
                        {item.t}
                      </h4>
                      <p className="text-base font-normal leading-snug text-gray-700 md:text-lg">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ISO 27001:2022- IAF SECTION */}
        <section className="relative mt-10">
          <div className="pb-12 mb-20 text-center border-b border-gray-100">
            <h1 className="mb-4 text-3xl font-medium tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              ISO 27001:2022-IAF
            </h1>
            <div className="w-16 h-1 mx-auto bg-gray-900"></div>
          </div>

          <div className="flex flex-col items-start gap-20 lg:flex-row">
            {/* Left Side: Sticky Image Column */}
            <div className="w-full lg:w-2/5 lg:sticky lg:top-32 h-fit">
              <div className="relative p-0 overflow-hidden rounded-lg">
                <div className="aspect-[3/4] rounded-md overflow-hidden bg-white border border-gray-100 relative">
                  <img 
                    src="/ISO-27001-2022.jpeg" 
                    alt="ISO 27001 Security" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Scrollable Content Column */}
            <div className="w-full space-y-16 lg:w-3/5">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-[1.2] tracking-tight">
                  ISO 27001 IAF Certification for LabelzAI – Securing AI Data with Global Standards
                </h2>
                <div className="space-y-8 text-base font-normal leading-snug text-gray-700 md:text-lg">
                  <p>
                    At LabelzAI, data security is foundational to everything we do. As a trusted data annotation partner for AI and machine learning projects, we align our operations with ISO 27001:2022 Information Security Management System (ISMS) standards, supported by International Accreditation Forum (IAF) accreditation. This ensures that your sensitive data is handled with the highest level of security, confidentiality, and compliance.
                  </p>
                  <div className="pt-8">
                    <h3 className="flex items-center gap-4 mb-8 text-xl font-medium text-gray-900 md:text-2xl">
                      What is ISO 27001?
                    </h3>
                    <div className="space-y-6 ">
                      <p>
                        ISO 27001:2022 is the globally recognized standard for Information Security Management Systems (ISMS). It provides a structured framework for managing sensitive data, mitigating risks, and protecting information assets against unauthorized access, breaches, and cyber threats.
                      </p>
                      <div className="p-0 mt-8 border-0">
                        <p className="mb-6 text-xl font-medium text-gray-900 underline md:text-2xl decoration-gray-200 underline-offset-8">For a data annotation company like LabelzAI, ISO 27001 ensures:</p>
                        <ul className="pl-6 space-y-3 text-gray-700 list-disc">
                          <li>Secure handling of client datasets (images, videos, text, LiDAR, etc.)</li>
                          <li>Controlled access to annotation platforms and tools</li>
                          <li>Strong data encryption and storage policies</li>
                          <li>Risk assessment and incident response mechanisms</li>
                          <li>Compliance with global data protection regulations</li>
                        </ul>
                      </div>
                      <p className="mt-8 text-lg italic font-normal leading-snug text-gray-500">
                        This is particularly critical when working with industries such as autonomous vehicles, healthcare AI, fintech, and surveillance systems, where data sensitivity is extremely high.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div className="pb-6 space-y-2 text-left border-b border-gray-100">
                  <h2 className="text-xl font-medium text-gray-900 md:text-2xl">Why ISO 27001:2022 IAF Matters for LabelzAI</h2>
                  
                </div>
                
                <div className="space-y-14 ">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">1. End-to-End Data Security for AI Projects</h3>
                    <div className="space-y-4 text-base font-normal leading-snug text-gray-700 md:text-lg">
                      <p>LabelzAI processes large volumes of sensitive training data. ISO 27001 ensures:</p>
                      <ul className="pl-6 space-y-3 list-disc">
                        <li>Protection against data leaks and breaches</li>
                        <li>Secure annotation environments</li>
                        <li>Strict access control and user authentication</li>
                        <li>Safe data transfer protocols</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">2. Trusted Partner for Global Clients</h3>
                    <div className="space-y-4 text-base font-normal leading-snug text-gray-700 md:text-lg">
                      <p>IAF-accredited ISO 27001 certification builds trust with:</p>
                      <ul className="pl-6 space-y-3 list-disc">
                        <li>AI startups and enterprises</li>
                        <li>Autonomous vehicle companies</li>
                        <li>Healthcare and medical imaging firms</li>
                        <li>Fintech and surveillance solution providers</li>
                      </ul>
                      <p>Clients can confidently outsource data annotation knowing their data is protected by internationally verified security frameworks.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">3. Risk-Based Security Management</h3>
                    <div className="space-y-4 text-base font-normal leading-snug text-gray-700 md:text-lg">
                      <p>ISO 27001 emphasizes a risk assessment and mitigation approach, enabling LabelzAI to:</p>
                      <ul className="pl-6 space-y-3 list-disc">
                        <li>Identify vulnerabilities in workflows</li>
                        <li>Implement preventive controls</li>
                        <li>Continuously monitor threats</li>
                        <li>Respond effectively to incidents</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">4. Compliance with Global Data Regulations</h3>
                    <div className="space-y-4 text-base font-normal leading-snug text-gray-700 md:text-lg">
                      <p>Our ISMS framework aligns with international compliance requirements, helping clients meet:</p>
                      <ul className="pl-6 space-y-3 list-disc">
                        <li>GDPR (General Data Protection Regulation)</li>
                        <li>Data privacy laws across regions</li>
                        <li>Enterprise-level security expectations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pb-20 space-y-12">
                <div className="pb-6 space-y-2 text-left border-b border-gray-100">
                  <h2 className="text-xl font-medium text-gray-900 md:text-2xl">How LabelzAI Implements ISO 27001:2022 Standards</h2>
                 
                </div>
                <div className="grid grid-cols-1 gap-10 ">
                  {[
                    { t: "Secure Data Intake", d: "Encrypted data transfer protocols and secure onboarding systems." },
                    { t: "Controlled Access Management", d: "Role-based access control (RBAC) ensures only authorized personnel can access sensitive datasets." },
                    { t: "Annotation in Secure Environments", d: "Isolated work environments with restricted data exposure." },
                    { t: "Multi-Layer Security Controls", d: "Includes encryption, firewalls, monitoring systems, and endpoint protection." },
                    { t: "Continuous Monitoring & Auditing", d: "Regular internal audits and vulnerability assessments to maintain compliance." },
                    { t: "Incident Response Framework", d: "Rapid detection, reporting, and mitigation of security incidents." }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="flex items-center gap-4 text-lg font-medium text-gray-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
                        {item.t}
                      </h4>
                      <p className="text-base font-normal leading-snug text-gray-700 md:text-lg">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default QualityCompliance;
