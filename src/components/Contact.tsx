import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Using FormSubmit.co to send email
    const form = e.target as HTMLFormElement;
    
    fetch("https://formsubmit.co/prathameshshelar389@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `New Contact from ${formData.name}`,
        _captcha: "false",
      }),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          toast.error("Failed to send message. Please try again.");
        }
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 animate-fade-in">
          <span className="text-primary">Get In</span>
          <span className="text-foreground"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's talk!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:prathameshshelar389@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  prathameshshelar389@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">
                  Karmaveer Bhaurao Patil College of Engineering<br />
                  Satara, Maharashtra
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-foreground mb-2 font-medium text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-all"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-foreground mb-2 font-medium text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-foreground mb-2 font-medium text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2.5 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
