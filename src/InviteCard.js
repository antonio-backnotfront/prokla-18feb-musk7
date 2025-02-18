/* eslint-disable no-unused-vars */
import React from 'react';
import './InviteCard.css';

import Button from "./Button";

function InviteCard() {
  const queryParameters = new URLSearchParams(window.location.search)
  // const geo = queryParameters.get("geo")

  const link = "tg://join?invite=IGyFIpLDveA1MTli";
  
  return (
    <div className="invite-card">
      <div className="invite-card-content">
        <img src={require("./logo.jpg")} alt="ESCO Agency" className="channel-logo" />
        <h1 className="channel-name">Hanbit Exchange 🇪🇺🇰🇷🇦🇪</h1>
        <p className="channel-handle">1 082 subscribers</p>
        <p className="channel-description">
         💱Обмен криптовалют на наличные в 19 странах мира!
        </p>
        <p className="channel-description">
         Работаем: Сеул, Варшава, Дубай, Барселона, Вена, Братислава, Стамбул и другие города
        </p>
        <p className="channel-description">
          📝Менеджер: <strong>@hanbit_manager</strong>
        </p>
          <Button className="channel-link" text="перейти на канал" link={link} type="msg" />
      </div>
    </div>
  );
}

export default InviteCard;
