import Cardstatus from "../../ui/Cardstatus/Cardstatus";

function Status() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row g-4">

          <div className="col-12 col-md-3">
            <Cardstatus
              counter="120"
              title="Projects"
              icon="fa-solid fa-building"
            />
          </div>

          <div className="col-12 col-md-3">
            <Cardstatus
              counter="110"
              title="Users"
              icon="fa-solid fa-users"
            />
          </div>

          <div className="col-12 col-md-3">
            <Cardstatus
              counter="200"
              title="Developers"
              icon="fa-solid fa-code"
            />
          </div>

          <div className="col-12 col-md-3">
            <Cardstatus
              counter="100"
              title="Blogs"
              icon="fa-solid fa-blog"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Status;