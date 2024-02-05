import People from 'statics/Icons/People'
import {
  ADDITIONAL_SERVICE,
  HR_SERVICES,
  PAYROLL_SERVICE,
} from '../../../constatns'
import Offers from '../../../constatns/Offers'
import CreditCard from 'statics/Icons/CreditCard'
import Additional from 'statics/Icons/Additional'

const OfferMap = new Map([
  [
    Offers.HR,
    {
      title: 'Usługi kadrowe',
      Icon: People,
      list: HR_SERVICES,
      bgImageUrl: 'app/statics/images/wave-bg-hr.png',
      modalBgImageUrl: 'app/statics/images/wave-modal-hr.png',
      mainColorRgbValues: '61, 136, 202',
      secondaryColor: '#00528E',
    },
  ],
  [
    Offers.PAYROLL,
    {
      title: 'Usługi płacowe',
      Icon: CreditCard,
      list: PAYROLL_SERVICE,
      bgImageUrl: 'app/statics/images/wave-bg-payroll.png',
      modalBgImageUrl: 'app/statics/images/wave-modal-payroll.png',
      mainColorRgbValues: '0, 108, 171',
      secondaryColor: '#003972',
    },
  ],
  [
    Offers.ADDITIONAL,
    {
      title: 'Usługi dodatkowe',
      Icon: Additional,
      list: ADDITIONAL_SERVICE,
      bgImageUrl: 'app/statics/images/wave-bg-additional.png',
      modalBgImageUrl: 'app/statics/images/wave-modal-additional.png',
      mainColorRgbValues: '55, 143, 173',
      secondaryColor: '#005773',
    },
  ],
])

export default OfferMap
