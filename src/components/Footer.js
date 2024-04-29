function Footer() {
  return (
    <footer className=" text-center text-lg-start text-muted py-5 mt-auto border p-6  pt-6">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-4 md:mb-0">
            <a href={"quisommesnous"}>
              <h6 className="text-uppercase font-bold mb-4">
                Qui sommes nous ?
              </h6>
            </a>
          </div>
          <div className="mb-4 md:mb-0">
            <a href={"quisommesnous"}>
              <h6 className="text-uppercase font-bold mb-4">Nos engagements</h6>
            </a>
          </div>
          <div className="mb-4 md:mb-0">
            <a href={"quisommesnous"}>
              <h6 className="text-uppercase font-bold mb-4">Espace presse</h6>
            </a>
          </div>
          <div className="mb-4 md:mb-0">
            <a href={"quisommesnous"}>
              <h6 className="text-uppercase font-bold mb-4">
                Développement durable
              </h6>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p>Get connected with us on social networks</p>
      </div>

      <div className="container px-4 mt-5">
        <p className="text-sm">
          © {new Date().getFullYear()} myApp.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
