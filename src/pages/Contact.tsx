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

			<div className="mt-10 grid gap-8 md:grid-cols-2">
				{/* Contact details */}
				<motion.div className="rounded-2xl border border-black/10 bg-[color:var(--brand-surface)] p-6 md:p-7" variants={itemReveal}>
					<h2 className="text-xl font-semibold text-[color:var(--brand-text)]">Contact details</h2>
					<ul className="mt-4 space-y-3 text-sm">
						<li className="flex items-start gap-3">
							<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 border border-black/10">
								<Mail size={16} />
							</span>
							<div>
								<p className="font-medium text-[color:var(--brand-text)]">Email</p>
								<p className="text-[color:var(--brand-muted)]">aitechliving@gmail.com</p>
							</div>
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 border border-black/10">
								<Phone size={16} />
							</span>
							<div>
								<p className="font-medium text-[color:var(--brand-text)]">Phone</p>
								<p className="text-[color:var(--brand-muted)]">Smit Rajani, +91 9033313096</p>
							</div>
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 border border-black/10">
								<MapPin size={16} />
							</span>
							<div>
								<p className="font-medium text-[color:var(--brand-text)]">Office</p>
								<p className="text-[color:var(--brand-muted)]">Rajkot, Gujarat, India</p>
							</div>
						</li>
					</ul>
					<p className="mt-6 text-xs text-[color:var(--brand-muted)]">Business hours: Mon–Fri, 9:00–18:00</p>
				</motion.div>

				{/* Contact form */}
				<motion.form className="rounded-2xl border border-black/10 p-6 md:p-7 space-y-4 bg-white/70" variants={itemReveal}>
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
					<div>
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
