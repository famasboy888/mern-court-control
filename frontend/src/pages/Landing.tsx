import { Link } from "react-router-dom";
import { Footer, Header, PageContentWrapper } from "../components";
import { badminton_smash } from "../assets/images";

const Landing = () => {
  return (
    <div>
      <Header />
      <PageContentWrapper>
        <section className="text-center grid grid-cols-1 md:text-left md:grid-cols-2">
          <div className="flex items-center justify-center md:col-start-2 md:col-end-3">
            <img
              src={badminton_smash}
              alt="badminton-smash"
              className=" w-[90%]"
            />
          </div>
          <article className="flex flex-col justify-center gap-2 max-sm:-mt-20 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
            <div>
              <h1 className=" font-bold py-2">Take charge of your matches</h1>
              <p className="mt-1 py-2">
                Manage queueing, sequencing and tournaments all in one web app!
              </p>
            </div>
            <div className="flex flex-col gap-1 md:flex-row md:text-nowrap">
              <Link to="/login" className="btn btn-primary">
                Start Queueing
              </Link>
              <Link to="/" className="btn btn-secondary">
                Join an existing group
              </Link>
            </div>
          </article>
        </section>
      </PageContentWrapper>
      <Footer />
    </div>
  );
};

export default Landing;
