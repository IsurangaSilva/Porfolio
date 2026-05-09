export default function ContactPage() {
  return (
    <main className="min-h-screen bg-light dark:bg-dark py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get In Touch</h1>
        <p className="mt-3 text-lg text-slate-600">Let's connect and explore opportunities to collaborate.</p>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl text-secondary">📧</div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">Email</p>
                  <a href="mailto:oushadhee0209@gmail.com" className="text-secondary hover:text-accent transition">
                    oushadhee0209@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl text-secondary">📞</div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">Phone</p>
                  <a href="tel:+94740699786" className="text-secondary hover:text-accent transition">
                    +94 740 699 786
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl text-secondary">📍</div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">Location</p>
                  <p className="text-slate-600">Malabe, Colombo, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl text-accent">🔗</div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">Social Links</p>
                  <div className="flex gap-4 mt-2">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent transition font-medium">
                      LinkedIn
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent transition font-medium">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                <input 
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-secondary focus:outline-none" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input 
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-secondary focus:outline-none" 
                  placeholder="you@example.com" 
                  type="email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input 
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-secondary focus:outline-none" 
                  placeholder="How can I help?" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-secondary focus:outline-none" 
                  placeholder="Your message..." 
                  rows={5}
                />
              </div>
              <button 
                type="submit" 
                className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary text-white py-3 font-semibold hover:shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Contact - Oushadhee Wickramasinghe'
};

