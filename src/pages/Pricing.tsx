import { Link } from "react-router-dom";

export default function Pricing() {
	return (
		<section className="container-narrow py-14">
			<h1 className="text-3xl md:text-4xl font-semibold text-[color:var(--brand-heading)]">Pricing</h1>
			<p className="mt-3 text-[color:var(--brand-muted)] max-w-2xl">
				Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime.
			</p>

			<div className="grid md:grid-cols-3 gap-6 mt-10">
				<div className="rounded-xl border border-black/10 bg-[color:var(--brand-surface)] p-6">
					<h2 className="text-xl font-semibold text-[color:var(--brand-heading)]">Starter</h2>
					<p className="mt-2 text-[color:var(--brand-muted)]">For individuals exploring AI-assisted living.</p>
					<p className="mt-4 text-3xl font-bold text-[color:var(--brand-text)]">$0<span className="text-base font-normal text-[color:var(--brand-muted)]">/mo</span></p>
					<ul className="mt-4 space-y-2 text-[color:var(--brand-text)]">
						<li>Basic automations</li>
						<li>Community support</li>
					</ul>
					<Link to="/contact" className="btn-primary inline-block mt-6">Get Started</Link>
				</div>

				<div className="rounded-xl border border-black/10 bg-[color:var(--brand-surface)] p-6 ring-2 ring-[color:var(--brand-accent)]/30">
					<h2 className="text-xl font-semibold text-[color:var(--brand-heading)]">Pro</h2>
					<p className="mt-2 text-[color:var(--brand-muted)]">For smart homes and power users.</p>
					<p className="mt-4 text-3xl font-bold text-[color:var(--brand-text)]">$29<span className="text-base font-normal text-[color:var(--brand-muted)]">/mo</span></p>
					<ul className="mt-4 space-y-2 text-[color:var(--brand-text)]">
						<li>Advanced automations</li>
						<li>Priority support</li>
						<li>Integrations</li>
					</ul>
					<Link to="/contact" className="btn-primary inline-block mt-6">Start Free Trial</Link>
				</div>

				<div className="rounded-xl border border-black/10 bg-[color:var(--brand-surface)] p-6">
					<h2 className="text-xl font-semibold text-[color:var(--brand-heading)]">Enterprise</h2>
					<p className="mt-2 text-[color:var(--brand-muted)]">For facilities and custom deployments.</p>
					<p className="mt-4 text-3xl font-bold text-[color:var(--brand-text)]">Custom</p>
					<ul className="mt-4 space-y-2 text-[color:var(--brand-text)]">
						<li>SLA & onboarding</li>
						<li>Custom integrations</li>
						<li>Dedicated support</li>
					</ul>
					<Link to="/contact" className="btn-primary inline-block mt-6">Contact Sales</Link>
				</div>
			</div>
		</section>
	);
}
