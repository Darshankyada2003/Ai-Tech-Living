import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
	const containerReveal = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.3, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1 },
		},
	};

	const itemReveal = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
	};

	return (
		<motion.section
			className="container-narrow py-16"
			variants={containerReveal}
			initial="hidden"
			animate="visible"
		>
			<motion.div className="max-w-3xl" variants={itemReveal}>
				<h1 className="gradient-text text-3xl md:text-4xl font-semibold tracking-tight">Get in touch</h1>
				<p className="mt-3 text-[color:var(--brand-muted)]">
					We’d love to hear about your project or question. Fill out the form and our team will get back to you within 1–2 business days.
				</p>
			</motion.div>

			<div className="mt-10 grid gap-8 md:grid-cols-2 items-stretch">
				{/* Contact details */}
				<motion.div
					className="h-full rounded-3xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)]/95 p-6 md:p-8 shadow-lg shadow-[rgba(37,99,235,0.12)] flex flex-col"
					variants={itemReveal}
				>
					<h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--brand-heading)] tracking-tight">
						Contact details
					</h2>
					<p className="mt-2 text-sm md:text-base text-[color:var(--brand-muted)]">
						Reach us directly for projects, support, or partnership enquiries.
					</p>
					<ul className="mt-5 space-y-4 text-sm md:text-base">
						<li className="flex items-start gap-3">
							<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-black/10 shadow-sm">
								<Mail size={18} />
							</span>
							<div>
								<p className="font-semibold text-[color:var(--brand-text)]">Email</p>
								<p className="text-[color:var(--brand-muted)] break-words">
									ai.tech.living@gmail.com
								</p>
							</div>
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-black/10 shadow-sm">
								<Phone size={18} />
							</span>
							<div>
								<p className="font-semibold text-[color:var(--brand-text)]">Phone</p>
								<p className="text-[color:var(--brand-muted)]">+91 9099909518</p>
							</div>
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-black/10 shadow-sm">
								<MapPin size={18} />
							</span>
							<div>
								<p className="font-semibold text-[color:var(--brand-text)]">Office</p>
								<p className="text-[color:var(--brand-muted)] text-sm md:text-base leading-relaxed">
									205, Second Floor, Kalptaru Complex, Nr. Indira Circle, University Road 360005
								</p>
							</div>
						</li>
					</ul>
					<p className="mt-6 text-xs md:text-sm text-[color:var(--brand-muted)]">
						Business hours: <span className="font-medium text-[color:var(--brand-text)]">Mon–Sun, 9:00–18:00</span>
					</p>
				</motion.div>

				{/* Contact form */}
				<motion.form className="h-full rounded-2xl border border-black/10 p-6 md:p-7 space-y-4 bg-white/70 flex flex-col" variants={itemReveal}>
					<div>
						<label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[color:var(--brand-text)]">Full name</label>
						<input id="name" name="name" required type="text" placeholder="Your name" className="w-full p-3 rounded-xl bg-[color:var(--brand-surface)] border border-black/10 text-[color:var(--brand-text)] placeholder-[color:var(--brand-muted)] focus:outline-none focus:ring-2 focus:ring-black/20" />
					</div>
					<div>
						<label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[color:var(--brand-text)]">Email</label>
						<input id="email" name="email" required type="email" placeholder="you@example.com" className="w-full p-3 rounded-xl bg-[color:var(--brand-surface)] border border-black/10 text-[color:var(--brand-text)] placeholder-[color:var(--brand-muted)] focus:outline-none focus:ring-2 focus:ring-black/20" />
					</div>
					<div className="grid gap-4 sm:grid-cols-2">
						<div>
							<label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-[color:var(--brand-text)]">Subject</label>
							<input id="subject" name="subject" type="text" placeholder="How can we help?" className="w-full p-3 rounded-xl bg-[color:var(--brand-surface)] border border-black/10 text-[color:var(--brand-text)] placeholder-[color:var(--brand-muted)] focus:outline-none focus:ring-2 focus:ring-black/20" />
						</div>
						<div>
							<label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[color:var(--brand-text)]">Phone (optional)</label>
							<input id="phone" name="phone" type="tel" placeholder="+1 555 000 0000" className="w-full p-3 rounded-xl bg-[color:var(--brand-surface)] border border-black/10 text-[color:var(--brand-text)] placeholder-[color:var(--brand-muted)] focus:outline-none focus:ring-2 focus:ring-black/20" />
						</div>
					</div>
					<div className="flex-1">
						<label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[color:var(--brand-text)]">Message</label>
						<textarea id="message" name="message" required rows={5} placeholder="Tell us a bit about your needs" className="w-full p-3 rounded-xl bg-[color:var(--brand-surface)] border border-black/10 text-[color:var(--brand-text)] placeholder-[color:var(--brand-muted)] focus:outline-none focus:ring-2 focus:ring-black/20"></textarea>
					</div>
					<div className="flex items-center justify-between gap-4 pt-2">
						<p className="text-xs text-[color:var(--brand-muted)]">By submitting, you agree to be contacted about your inquiry.</p>
						<button type="submit" className="btn-primary">Send message</button>
					</div>
				</motion.form>
			</div>
		</motion.section>
	);
}
