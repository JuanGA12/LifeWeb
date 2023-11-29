import { Instagram, Twitter, LinkedIn, WhatsApp } from '@mui/icons-material';
const Footer = () => {
  return (
    <footer
      className={`hidden md:flex z-0 justify-evenly w-screen py-5 text-xs md:text-sm xl:text-base self-center`}
    >
      <div>Bienvenido@lifearquitectos.com</div>
      <div>Av. Coronel Andrés Reyes 550 – Piso 02, San Isidro</div>
      <div className="flex">
        <Instagram className="mr-3 cursor-pointer" />
        <Twitter className="mr-3 cursor-pointer" />
        <LinkedIn className="mr-3 cursor-pointer" />
        <WhatsApp className="cursor-pointer" />
      </div>
    </footer>
  );
};
export default Footer;
