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
          rel="noopener norefer"
        >
          <Instagram className="mr-3 cursor-pointer" />
        </a>
        <a
          href="https://x.com/LifeArquitectos"
          target="_blank"
          rel="noopener norefer"
        >
          <Twitter className="mr-3 cursor-pointer" />
        </a>
        <a
          href="http://www.linkedin.com/in/life-arquitectos-a817ab2a4"
          target="_blank"
          rel="noopener norefer"
        >
          <LinkedIn className="mr-3 cursor-pointer" />
        </a>
        <a
          href="https://wa.me/51981301126?text=¡Hola! Quisiera más información sobre Life Arquitectos."
          target="_blank"
          rel="noopener norefer"
        >
          <WhatsApp className="cursor-pointer" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
