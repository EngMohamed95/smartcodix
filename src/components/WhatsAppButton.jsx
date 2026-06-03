import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const phoneNumber = "201094040671"; // Mohamed Abd Elfattah's number
  const message = encodeURIComponent("Hello Smart Codix! I'd like to ask about web development services.");

  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      title={t('whatsappBtn')}
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">{t('whatsappBtn')}</span>
    </a>
  );
};

export default WhatsAppButton;
