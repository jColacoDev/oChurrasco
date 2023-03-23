import './TopNotes.scss'
import React from 'react'
import { appData } from '../../Apps/app/App'
import { crossOutOChurrasco, stringRemoveSpaces } from '../../utils/utils'
import { useTranslation } from 'react-i18next';

export default function TopNotes() {
  const { t } = useTranslation();
  const greetings = t("greetings", { returnObjects: true });

  return (
    <section className='TopNotes'>
    <article>
        <p dangerouslySetInnerHTML={{ __html: crossOutOChurrasco(greetings.welcomeToChurrasco) }} />
        <a href={`tel:+351${stringRemoveSpaces(appData.contactsData.mobile)}`}><figure className='mobile'/>{appData.contactsData.mobile}</a>
    </article>
    <article>
        <a href={`tel:+351${stringRemoveSpaces(appData.contactsData.phone)}`}><figure className='phone'/>{appData.contactsData.phone}</a>
        <a href={`mailto:${appData.contactsData.email}?subject = webMail&body = Message`}><figure className='email'/>{appData.contactsData.email}
        </a>
    </article>
</section>
  )
}
