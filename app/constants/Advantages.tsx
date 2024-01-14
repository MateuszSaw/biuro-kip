import Experience from 'statics/Icons/Experience'
import Professional from 'statics/Icons/Professional'
import Saving from 'statics/Icons/Saving'
import Computer from 'statics/Icons/Computer'
import Safety from 'statics/Icons/Safety'
import Briefcase from 'statics/Icons/Briefcase'

const ADVANTAGES = [
  {
    title: 'Obniżenie kosztów',
    description:
      'Przeniesienie usług kadrowo-płacowych może być bardziej ekonomiczne niż utrzymanie działu wewnętrznego, eliminujesz koszty związane z zakupem oprogramowania, wynagrodzeniem, szkoleniem i utrzymaniem pracowników.',
    Icon: Saving,
  },
  {
    title: 'Doświadczenie i wiedza',
    description:
      'korzystasz ze specjalistycznej wiedzy i  20- letniego doświadczenia naszych ekspertów i specjalistów, nie ponosząc  ryzyka błędów, zyskując profesjonalną obsługę.',
    Icon: Experience,
  },
  {
    title: 'Technologia',
    description:
      'Korzystamy z nowoczesnych systemów ERP. Pracujemy głownie online, a klienci przekazują dokumenty przez dedykowane dostępy.',
    Icon: Computer,
  },
  {
    title: 'Indywidualne podejście',
    description:
      'Każda Firma jest inna, dlatego dostosowujemy nasze usługi do unikalnych potrzeb klienta.',
    Icon: Professional,
  },
  {
    title: 'Bezpieczeństwo',
    description: (
      <>
        Dbamy o poufność i bezpieczeństwo danych Twojej firmy, stosując
        najwyższe standardy ochrony informacji. Posiadamy również{' '}
        <b>polisę ubezpieczeniową OC</b>, zapewniając bezpieczeństwo i gwarancję
        jakości świadczonych usług.
      </>
    ),
    Icon: Safety,
  },
  {
    title: 'Rzetelnosć',
    description: (
      <>
        Nasza firma współpracuje z:
        <li>
          kancelarią prawną specjalizującą się w prawie pracy. Ewa Rakiel
          dowiedz się więcej <a href="https://rakiel.com.pl/">klikając tutaj</a>
        </li>
        <li>
          firmą zajmującą się obsługą księgowości - Partner Biznesu Iwona
          Krzyżanowska.
        </li>
      </>
    ),
    Icon: Briefcase,
  },
]

export default ADVANTAGES
