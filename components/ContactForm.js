// app/contact/ContactForm.js
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = () => {
    const phoneNumber = "60109640097"; 
    if (!name.trim() || !subject.trim()) {
      alert("Please fill in your name and the subject of your enquiry.");
      return;
    }
    const text = `*Hi Sampan House! I have an enquiry:*\n\n` +
                 `*Name:* ${name}\n` +
                 `*Subject:* ${subject}\n` +
                 `*Message:* ${message || 'No special instructions provided.'}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <form id="whatsappForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" required placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="subject">Subject</label>
      <input type="text" id="subject" required placeholder="Inquiry about the event space" value={subject} onChange={(e) => setSubject(e.target.value)} />

      <label htmlFor="message">Message</label>
      <textarea id="message" rows="4" placeholder="I'd like to check on availability for 20pax on this Sunday evening." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

      <button type="button" onClick={sendToWhatsApp}>WhatsApp Now</button>
    </form>
  );
}
