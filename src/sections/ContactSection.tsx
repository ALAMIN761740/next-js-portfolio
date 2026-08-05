import SectionHeader from "@/components/ui/SectionHeader";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";

const contactInfo = [
    {
        icon: LuMail,
        label: "Email",
        value: "abdullahalamin761740@gmail.com",
        href: "mailto:abdullahalamin761740@gmail.com",
    },
    {
        icon: LuPhone,
        label: "Phone",
        value: "+880 1712-345678",
        href: "tel:+8801712345678",
    },
    {
        icon: LuMapPin,
        label: "Location",
        value: "Dhaka, Bangladesh",
        href: "https://maps.google.com/?q=Dhaka,Bangladesh",
    },
];

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/3 right-1/4 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10 " />

            <SectionHeader title="Les's build" highlight="something great" badge="Contact" description="Have a project in mind? I'd love to hear about it! Let's connect." />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                {/* left - from */}
                <form>

                </form>

                {/* right - contact info */}
            </div>
        </section>
    )
}
