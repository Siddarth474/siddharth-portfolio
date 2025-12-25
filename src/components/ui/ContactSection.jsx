import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { socialMedia } from "@/helpers/data";
import { MdOutlineEmail } from "react-icons/md";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const { name, email, subject } = formData;
      if (!name || !email || !subject) {
        setStatus({ ok: false, msg: "Field is empty" });
        return;
      }
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Response: ", data);
      if (data.success) {
        setStatus({ ok: true, msg: "Message sent!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ ok: false, msg: data.error || "Failed to send" });
      }
    } catch (err) {
      setStatus({ ok: false, msg: data.err || "Network error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-10 px-8 mb-10">
      <div className="w-full min-h-screen text-white flex flex-col items-center mt-20 sm:mt-25">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-white">Contact Me</h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's discuss how I can help bring your
            ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          <div className="p-px bg-linear-to-r from-orange-400 to-red-600 h-min rounded-xl">
            <div className="bg-zinc-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Get in Touch
              </h3>
              <p className="text-gray-400 mb-6">
                Fill out the form below and I’ll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-zinc-800 text-gray-200 p-2 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full bg-zinc-800 text-gray-200 p-2 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this regarding?"
                    className="w-full bg-zinc-800 text-gray-200 p-2 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="w-full bg-zinc-800 text-gray-200 p-2 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-orange-500 to-red-600 text-white py-2 rounded-md font-semibold hover:opacity-90 transition-all"
                >
                  <FiSend />
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {status && (
                  <p
                    className={`mt-2 text-sm ${status.ok ? "text-green-400" : "text-red-400"}`}
                  >
                    {status.msg}
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="p-px bg-linear-to-r from-orange-400 to-red-600 h-min rounded-xl">
            <div className="bg-zinc-900 rounded-xl p-6 shadow-lg flex flex-col gap-6">
              <div className="border py-3 px-5 rounded-xl border-gray-600">
                <h4 className="text-xl flex gap-2 items-center font-semibold mb-2">
                  <MdOutlineEmail size={25} /> Email
                </h4>
                <p className="text-gray-400 text-sm mb-2">
                  For project inquiries and collaborations
                </p>
                <a
                  href="mailto:siddh7888@gmail.com"
                  className="text-orange-500 hover:underline"
                >
                  Send me an email
                </a>
              </div>

              <div className="border py-3 px-5 rounded-xl border-gray-600">
                <h4 className="text-xl font-semibold mb-2">Social Media</h4>
                <p className="text-gray-400 text-sm mb-2">
                  Connect with me on these platforms
                </p>
                <div className="flex items-center gap-5 text-orange-500 text-xl">
                  {socialMedia.map((media, ind) => (
                    <a
                      key={ind}
                      href={media.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                      aria-label={media.name}
                    >
                      {media.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border py-3 px-5 rounded-xl border-gray-600 mt-4">
                <h4 className="text-xl font-semibold mb-2">Location</h4>
                <p className="text-gray-400 text-sm flex items-start gap-2">
                  <FaMapMarkerAlt
                    size={19}
                    className="text-orange-500 shrink-0"
                  />
                  Based in New Delhi, India — Available for remote work
                  worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
