import "./NoPage.css";

const NoPage = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="four_zero_four_bg">
            </div>

            <div className="contant_box_404">
              <h3 className="h2">Look like you're lost</h3>
              <p>The page you are looking for is not available!</p>
              <a href="/home" className="link_404">
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoPage;
