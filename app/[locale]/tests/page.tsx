import Header from 'components/header/Header';
import initTranslations from 'configs/i18n/i18n';
import { ParamsLocale } from 'types/commonTypes';


export default async function Tests( { params: { locale } }: ParamsLocale){
  const { t } = await initTranslations(locale);
  return (
    <div>
      <Header t={t} locale={locale} />
    </div>
  );
}
