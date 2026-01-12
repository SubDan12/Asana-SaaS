import PageHeader from "../components/PageHeader";
import FinalCTA from "../components/FinalCTA";
import PricingCard from "../components/PricingCard";
import FAQAccordion from "../components/FAQAccordian";
import { useMemo, useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "per user / month",
    desc: "For individuals and small teams getting organized.",
    features: [
      "Unlimited tasks",
      "Basic views (list, board)",
      "1 project template",
      "Email support",
    ],
    cta: "Get started",
  },
  {
    name: "Business",
    price: "$12",
    period: "per user / month",
    desc: "For growing teams that need clarity and consistency.",
    features: [
      "Everything in Starter",
      "Advanced timelines",
      "Portfolios & goals",
      "Automations",
      "Priority support",
    ],
    cta: "Start Business",
    badge: "Most popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact sales",
    desc: "For larger orgs with governance, security, and scale.",
    features: [
      "Everything in Business",
      "SAML SSO",
      "SCIM provisioning",
      "Advanced admin controls",
      "Dedicated success manager",
    ],
    cta: "Contact sales",
  },
];

const included = [
  "Unlimited projects",
  "Real-time collaboration",
  "Task assignments & due dates",
  "Comments and file attachments",
  "Mobile-ready experience",
  "Secure by default",
];

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel whenever you want. Your plan stays active until the end of your billing period.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes. Annual billing usually includes a discount. We can add a billing toggle later if you want.",
  },
  {
    q: "What happens if I exceed my team size?",
    a: "You can add or remove seats anytime. Billing adjusts based on your plan settings.",
  },
  {
    q: "Do you offer invoicing for Enterprise?",
    a: "Yes. Enterprise plans support invoicing and custom procurement needs.",
  },
];

export default function Pricing() {
  const defaultSelected = useMemo(() => plans[1].name, []);
  const [selectedPlan, setSelectedPlan] = useState(defaultSelected);

  return (
    <>
      <PageHeader
        title="Simple, transparent pricing"
        description="Choose a plan that fits your team today and scales with you tomorrow."
        ctaLabel="Get started"
      />

      {/* Plans */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                selected={selectedPlan === plan.name}
                onSelect={() => {
                  setSelectedPlan(plan.name);
                  localStorage.setItem("selectedPlan", plan.name);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <h2 className="text-base font-semibold text-neutral-900">
              All plans include
            </h2>

            <div className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-neutral-700"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-xl font-semibold text-neutral-900 sm:text-2xl">
              Frequently asked questions
            </h2>

            <FAQAccordion items={faqs} defaultOpenIndex={0} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
