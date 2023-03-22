import './Reservation.scss'
import React from 'react'
import ReservationFormVintage from '../../../../components/ReservationFormVintage/ReservationFormVintage'
import { useTranslation } from 'react-i18next';

export default function Reservation() {
  const { t } = useTranslation();
  const routesData = t("routesData", { returnObjects: true });

  return (
    <div className='Reservation backgroundFixed'>
        <h2>{routesData.reservation}</h2>
        <ReservationFormVintage />
    </div>
  )
}
