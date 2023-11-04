import './WhatsAppButton.css'
import wa from '../img/wa.png'
const Whatsapp = () => {
    const handleWhatsAppClick = () => {
       
        window.open('https://api.whatsapp.com/send?phone=51930428602', '_blank');
    };
    return (
        <button className="whatsapp-button" onClick={handleWhatsAppClick}>
            <img src={wa} alt="WhatsApp" />
        </button>
    )
}

export default Whatsapp