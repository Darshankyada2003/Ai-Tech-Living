export default function Services() {
    const services = [
        {
            title: "Smart Home & Living",
            desc: "Automation, IoT devices, and energy-saving solutions.",
        },
        {
            title: "Architecture & Interior Design",
            desc: "Modern, functional, and aesthetic designs tailored to you.",
        },
        {
            title: "Future-Ready Solutions",
            desc: "AI-powered systems for security, comfort, and eco-living.",
        },
    ];

    return (
        <section className="min-h-[60vh] container-narrow py-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[color:var(--brand-text)]">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {services.map((s, idx) => (
                    <div
                        key={idx}
                        className="bg-[color:var(--brand-surface)] border border-black/10 rounded-2xl p-6 hover:border-black/20 transition-colors"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-[color:var(--brand-text)]">{s.title}</h3>
                        <p className="text-[color:var(--brand-muted)]">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
