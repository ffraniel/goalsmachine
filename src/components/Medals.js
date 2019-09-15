import "./Medals.css";
import React from "react";
import star from '../assets/star-icon.png';

export const Medals = ({ 
  topGoal, topAssist, topMOTM 
  }) => {

  return (
    <section className="medals">
      {topGoal && <img className="medal goal" src={star} alt="top scorer medal" />}
      {topAssist && <img className="medal assist" src={star} alt="top scorer medal" />}
      {topMOTM && <img className="medal motm" src={star} alt="top scorer medal" />}      
    </section>
  );
};
