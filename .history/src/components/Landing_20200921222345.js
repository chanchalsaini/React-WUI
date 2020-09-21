import React, { Fragment } from "react";
import { AllData } from "./AllData";

function Landing() {
  return (
    <Fragment>
      <section className='landing'>
        <div className='cards'>
          <div className='card'>
            <h1>{data.head}</h1>
            <img src={data.imgCard} alt='' />
            <p>{data.bottom}</p>
          </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default Landing;
