"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-transparent py-20 px-6 md:px-20 text-white overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] blur-[120px]" />

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <p className="text-gray-400 text-sm tracking-widest">CONTACT ME</p>
        <h2 className="text-4xl font-bold mt-2">Get In Touch</h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-purple-600/10 to-purple-600/20 mx-auto mt-4" />
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-14 relative z-10">
        <InfoCard
          icon={<MapPin size={22} />}
          title="Address"
          value="Kurunegala, Sri Lanka"
        />
        <InfoCard
          icon={<Phone size={22} />}
          title="Phone"
          value="+94 723670355"
        />
        <InfoCard
          icon={<Mail size={22} />}
          title="Email"
          value="kavindisaubhagya2001off@gmail.com"
        />
      </div>

      {/* Form */}
      <form className="grid md:grid-cols-2 gap-6 relative z-10">
        <Input placeholder="Your name" />
        <Input placeholder="Email address" type="email" />

        <Textarea placeholder="Write your message here..." />

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="relative px-6 py-2 rounded-lg bg-purple-600/20 font-medium overflow-hidden group"
          >
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-white/10 opacity-0" />
          </button>
        </div>
      </form>
    </section>
  );
}

/* ------------------ CARD ------------------ */

const InfoCard = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition" />

    <div className="relative bg-[#0B0E1A] border border-white/10 rounded-xl p-6 text-center transition transform group-hover:-translate-y-2 group-hover:border-purple-500">
      <div className="flex justify-center mb-3 text-purple-400">{icon}</div>

      <h3 className="text-xs text-gray-400 tracking-widest mb-2">{title}</h3>

      <p className="text-sm text-white break-words">{value}</p>
    </div>
  </div>
);

/* ------------------ INPUTS ------------------ */

const Input = ({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className="bg-[#0B0E1A] border border-white/10 rounded-lg p-3 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition"
  />
);

const Textarea = ({ placeholder }: { placeholder: string }) => (
  <textarea
    placeholder={placeholder}
    rows={6}
    className="md:col-span-2 bg-[#0B0E1A] border border-white/10 rounded-lg p-3 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition"
  />
);
