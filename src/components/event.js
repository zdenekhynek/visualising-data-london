import React from "react";

import { format } from 'date-fns';

export const Event = ({ data }) => {
  const [month, year] = data.title.split(" ");
  const monthDate = format(new Date(data.date), 'dd.MM')
  const yearDate = format(new Date(data.date), 'yyyy')
  
  return (
    <div
      className="col-12 border-top border-bottom py-5 aos-init aos-animate"
      data-aos="fade"
      data-aos-delay="200"
    >
      <div className="row align-items-stretch">
        <div className="col-md-3 text-white mb-3 mb-md-0">
          <span className="h4">{monthDate}</span>.<span>{yearDate}</span>
        </div>
        <div className="col-md-9">
          <h2 className="text-white">
            {data.title}
          </h2>
          <a href={data.meetupPage} target="_blank">Meetup page</a>
        </div>
      </div>
    </div>
  )
};

export default Event;