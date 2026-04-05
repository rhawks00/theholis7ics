import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const contacts = [
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/theholis7ics/' },
    { name: 'X (Twitter)', icon: FaTwitter, url: 'https://x.com/theholis7ics' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/theholis7ics/' },
    { name: 'Email', icon: MdEmail, url: 'mailto:saxophone4@hotmail.com' },
  ];

  return (
    <footer id="socials" className="border-t border-white/10 backdrop-blur-sm bg-white/5 py-6 px-4 w-full flex justify-center">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="flex items-center justify-center gap-12">
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
        <div className="pt-8 text-center text-gray-400 text-sm flex justify-center">
          <p>&copy; {currentYear} The Holis7ics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}