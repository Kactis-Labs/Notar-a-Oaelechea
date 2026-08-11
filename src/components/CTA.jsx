import { Link } from 'react-router-dom';
import ctaImage from '../assets/cta-image.jpg';
import '../pages/ServiceDetail.css'; // Contains the styles for CTA

export default function CTA() {
  return (
    <section className="service-cta">
      <div className="container cta-layout">
        <div className="cta-content">
          <h2>Proteja y Sanee su Patrimonio Inmobiliario.</h2>
          <p>En ATC & Asociados S.A.C. le brindamos la asesoría registral e inmobiliaria que su propiedad o empresa necesita en Huaral. Agende una consulta especializada.</p>
          <Link to="/agendar-cita" className="btn btn-primary">Agendar una cita</Link>
        </div>
        <div className="cta-image-wrapper">
          <img src={ctaImage} alt="Asesoría inmobiliaria y registral en Huaral" />
        </div>
      </div>
    </section>
  );
}
