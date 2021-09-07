import React from "react";

function TicketBody() {
  return (
    <div>
      <div className="overflow-x-auto">
        <div className=" min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <p className="text-3xl">Ticket Body</p>
            <div className="bg-white shadow-md rounded my-6">
              <div className="container  pl-6">
                {/* body={nm.body} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketBody;
