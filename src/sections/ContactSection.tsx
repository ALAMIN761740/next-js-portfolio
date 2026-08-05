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
        <div>ContactSection</div>
    )
}
