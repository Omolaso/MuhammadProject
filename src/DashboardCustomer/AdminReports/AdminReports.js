import React from "react";
import Charts from "../../components/Charts";

const AdminReports = () => {
  return (
    <section className="main-container flex flex-col gap-4 w-full">
      <div className="flex flex-row items-center justify-between gap-3 flex-wrap">
        <h3>Reports</h3>
      </div>

      <Charts />
    </section>
  );
};

export default AdminReports;
