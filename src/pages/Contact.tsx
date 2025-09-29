export default function Contact() {
    return (
        <section className="min-h-[60vh] container-narrow py-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[color:var(--brand-text)]">Contact Us</h2>
            <form className="space-y-4 max-w-2xl">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-xl bg-[color:var(--brand-surface)] border border-black/10 text-[color:var(--brand-text)] placeholder-[color:var(--brand-muted)]"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-xl bg-[color:var(--brand-surface)] border border-black/10 text-[color:var(--brand-text)] placeholder-[color:var(--brand-muted)]"
                />
                <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 rounded-xl bg-[color:var(--brand-surface)] border border-black/10 text-[color:var(--brand-text)] placeholder-[color:var(--brand-muted)]"
                ></textarea>
                <button className="btn-primary">
                    Send Message
                </button>
            </form>
        </section>
    );
}
