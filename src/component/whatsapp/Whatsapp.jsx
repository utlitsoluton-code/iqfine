import React from 'react'
import { useEffect, useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Whatsapp() {
    const [showWhatsAppIcon, setShowWhatsAppIcon] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    // function toggleWhatsAppIcon() {
    //     setShowWhatsAppIcon((prev) => !prev);
    // }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowWhatsAppIcon(true);
            } else {
                setShowWhatsAppIcon(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const openWhatsAppChat = () => {
        const whatsappNumber = '+918527009243';
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };
    return (
        <>
            {showWhatsAppIcon && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: 16,
                        right: 16,
                        cursor: 'pointer',
                        padding: "10px",
                        backgroundColor: "#25D366",
                        borderRadius: "50%",
                        zIndex: 50,
                        transform: isHovered ? 'rotate(-90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                    }}
                    onClick={openWhatsAppChat}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <WhatsAppIcon fontSize="large" style={{ color: "#fff" }} />
                </div>
            )}
        </>
    )
}
