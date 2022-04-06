import * as S from './styles';

export default function Image({ src, alt }) {
  return (
    <S.StyledFigure>
      <S.StyledImage src={src} alt={alt} />
    </S.StyledFigure>
  );
}
