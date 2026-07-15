


const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t bg-background px-6 py-4">
      <a className="flex items-center gap-2" href="/">
        <span className="font-bold text-2xl">Nico le <span className="text-primary">Dev</span></span>
      </a>

      <p className="font-medium text-muted-foreground text-sm">
        Copyright &copy; {new Date().getFullYear()}. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
