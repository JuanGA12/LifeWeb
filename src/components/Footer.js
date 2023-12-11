import { Instagram, Twitter, LinkedIn, WhatsApp } from '@mui/icons-material';
const Footer = () => {
  return (
    <footer
      className={`hidden md:flex z-0 justify-evenly w-screen py-5 text-xs md:text-sm self-center`}
    >
      <div>contacto@lifearquitectos.com</div>
      <div>Av. Coronel Andrés Reyes 550 – Piso 02, San Isidro</div>
      <div className="flex">
        <a
          href="https://www.instagram.com/lifearquitectos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="mr-3 cursor-pointer" />
        </a>
        <Twitter className="mr-3 cursor-pointer" />
        <LinkedIn className="mr-3 cursor-pointer" />
        <WhatsApp className="cursor-pointer" />
      </div>
    </footer>
  );
};
export default Footer;
