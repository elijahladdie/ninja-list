import React, { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export const Tickets = (props) => {
  return (
    <main>
      <nav>
        <h2>Tickets</h2>
        <p><small>Currently open tickets</small></p>
      </nav>
      <Suspense fallback={<Loading/> }>
      <TicketList/>
      </Suspense>
    </main>
  );
};
export default Tickets;
