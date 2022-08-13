import React from "react";

export default function ResultingData({ data }) {
  return (
    <div className="resulting-data">
      <section className="data-item">
        <h2 className="secondary-heading">IP Address</h2>
        <p className="data">{data.ip}</p>
      </section>
      <hr />
      <section className="data-item">
        <h2 className="secondary-heading">Location</h2>
        <p className="data">
          {`${data.region}, ${data.city} ${data.postalCode}`}
        </p>
      </section>
      <hr />
      <section className="data-item">
        <h2 className="secondary-heading">Timezone</h2>
        <p className="data">{`UTC${data.timezone}`}</p>
      </section>
      <hr />
      <section className="data-item">
        <h2 className="secondary-heading">ISP</h2>
        <p className="data">{data.isp}</p>
      </section>
    </div>
  );
}
