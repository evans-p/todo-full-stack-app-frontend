import logo from "../assets/images/logo.png";

const Logo = () => {
  return (
    <section className="fixed left-8 h-16 flex justify-center items-center">
      <img src={logo} alt="TaskForge" className="w-10 h-auto" />
    </section>
  );
};

export default Logo;
