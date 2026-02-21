import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function Contact() {
  const contacts = [
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/theholis7ics/' },
    { name: 'X (Twitter)', icon: FaTwitter, url: 'https://x.com/theholis7ics' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/theholis7ics/' },
    { name: 'Email', icon: MdEmail, url: 'mailto:contact@holis7ics.com' },
  ];

  return (
    <section id="socials" className="px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4">Socials</h2>
          <p className="text-gray-300 text-sm">Follow us or reach out directly</p>
        </div>

        <div className="flex items-center justify-center gap-12 py-4">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-white hover:text-orange-400 transition-transform hover:scale-110"
                title={contact.name}
              >
                <Icon className="w-8 h-8" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}