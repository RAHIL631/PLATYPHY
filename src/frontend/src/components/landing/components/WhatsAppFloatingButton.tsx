import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../../../config/whatsapp';

export default function WhatsAppFloatingButton() {
    if (!WHATSAPP_URL) return null;

    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 glass-button rounded-full shadow-glass hover:shadow-glass-lg hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            aria-label="Contact us on WhatsApp"
            style={{ bottom: '1.5rem', right: '1.5rem' }}
        >
            <MessageCircle className="w-7 h-7 text-[#25D366]" />
        </a>
    );
}
