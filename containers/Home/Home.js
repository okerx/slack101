import { useTranslation } from 'next-i18next';

import slightlySmilingEmoji from '../../assets/slightly-smiling-emoji-meme.jpg';
import greatPower from '../../assets/with-great-power-comes-great-responsibility.gif';
import slackThreads from '../../assets/slack-reply-in-thread-meme.jpg';
import Image from '../../components/Image';

import * as S from './styles';

export default function Home() {
  const { t } = useTranslation();

  return (
    <S.Container>
      <main>
        <h1>{t('title')}</h1>
        <h2>{t('description')}</h2>

        <S.StyledOl>
          <S.StyledLi>
            <div>{t('ruleOne')}</div>
            <Image
              alt="Slightly smiling emoji meme"
              src={slightlySmilingEmoji.src}
            />
          </S.StyledLi>

          <S.StyledLi>
            <div>{t('ruleTwo')}</div>

            <Image
              alt="with great power comes great responsibility gif"
              src={greatPower.src}
            />
          </S.StyledLi>

          <S.StyledLi>
            <div>{t('ruleThree')}</div>

            <Image alt="slack reply in thread meme" src={slackThreads.src} />
          </S.StyledLi>

          <S.StyledLi>
            <div>
              {t('ruleFour') + ' '}
              <a target="_blank" href="https://nohello.net/" rel="noreferrer">
                nohello.net
              </a>
            </div>
          </S.StyledLi>
        </S.StyledOl>
      </main>
      <S.StyledFooter>
        <p>
          *{t('isOpenSource') + ' '}
          <a
            target="_blank"
            href="https://github.com/ammar-oker/slack101"
            rel="noreferrer"
          >
            {t('githubLink')}
          </a>
        </p>
      </S.StyledFooter>
    </S.Container>
  );
}
