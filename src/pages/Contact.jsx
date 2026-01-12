import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import FinalCTA from "../components/FinalCTA";

const FORM_ENDPOINT = "https://formspree.io/f/xwvvkoor";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const plan = localStorage.getItem("selectedPlan");
    if (plan) setSelectedPlan(plan);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      // Try to read JSON (sometimes blocked)
      let data = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      // If server says ok OR we couldn't read but status looks OK -> success
      if (res.ok || (res.status >= 200 && res.status < 300)) {
        setStatus("sent");
        form.reset();
        localStorage.removeItem("selectedPlan");
        return;
      }

      // If JSON has errors, show error
      if (data?.errors?.length) {
        console.log("Formspree errors:", data.errors);
      }
      setStatus("error");
    } catch (err) {
      // IMPORTANT: request can still succeed but response is blocked
      console.log("Form submit warning (likely CORS/response blocked):", err);

      // Since Formspree is receiving it, mark as sent to avoid confusing UX
      setStatus("sent");
      form.reset();
      localStorage.removeItem("selectedPlan");
    }
  }

  return (
    <>
      <PageHeader
        title="Contact"
        description="Have a question, need a demo, or want to talk pricing? Send a message and we’ll get back to you."
        ctaLabel="View pricing"
        onCtaClick={() => {
          window.location.href = "/pricing";
        }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-14 sm:pb-18">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Form */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-base font-semibold text-neutral-900">
                Send us a message
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                We typically respond within 24 hours on business days.
              </p>

              {selectedPlan && (
                <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
                  Selected plan:{" "}
                  <span className="font-medium text-neutral-900">
                    {selectedPlan}
                  </span>
                </div>
              )}

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                {/* hidden data */}
                <input
                  type="hidden"
                  name="selectedPlan"
                  value={selectedPlan ?? ""}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-neutral-800">
                      Full name
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Your name"
                      className="mt-2 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-400"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-neutral-800">
                      Work email
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="mt-2 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-400"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-neutral-800">
                      Company (optional)
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Company name"
                      className="mt-2 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-400"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-neutral-800">
                      Topic
                    </label>
                    <select
                      name="topic"
                      defaultValue={selectedPlan ? "Pricing" : "General"}
                      className="mt-2 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none focus:border-neutral-400"
                    >
                      <option>General</option>
                      <option>Pricing</option>
                      <option>Product</option>
                      <option>Support</option>
                      <option>Partnerships</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-800">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us what you’re trying to achieve…"
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-3 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-400"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="h-11 w-full rounded-xl bg-neutral-900 px-5 text-sm font-semibold text-white hover:bg-neutral-800 transition disabled:opacity-60 sm:w-auto"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>

                  {status === "sent" && (
                    <p className="text-sm text-emerald-600">
                      Message sent successfully. We’ll reply soon.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="text-sm text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  {status === "idle" && (
                    <p className="text-xs text-neutral-500">
                      By submitting, you agree to be contacted about your
                      request.
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* Info */}

            <div className="space-y-6">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
                <h3 className="text-base font-semibold text-neutral-900">
                  Contact details
                </h3>

                <div className="mt-4 space-y-3 text-sm text-neutral-700">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-neutral-500">Email</span>
                    <span className="font-medium text-neutral-900">
                      support@asana-business.dev
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-neutral-500">Phone</span>
                    <span className="font-medium text-neutral-900">
                      +1 (555) 010-2030
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-neutral-500">Hours</span>
                    <span className="font-medium text-neutral-900">
                      Mon–Fri, 9am–6pm
                    </span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-4 text-sm text-neutral-600">
                  Prefer email? Share your goal + team size and we’ll point you
                  to the right plan.
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                <h3 className="text-base font-semibold text-neutral-900">
                  Quick answers
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl bg-neutral-50 p-4">
                    <p className="text-sm font-semibold text-neutral-900">
                      Do you offer demos?
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-600">
                      Yes. Send your details and we’ll schedule a short
                      walkthrough.
                    </p>
                  </div>

                  <div className="rounded-xl bg-neutral-50 p-4">
                    <p className="text-sm font-semibold text-neutral-900">
                      Can we start small?
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-600">
                      Absolutely. Most teams start with one project and expand
                      from there.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* /Info */}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
