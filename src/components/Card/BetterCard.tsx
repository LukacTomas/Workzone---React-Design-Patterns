import { PropsWithChildren } from 'react';

export const BetterCard = ({ children, className }: BetterCardChildrenProps) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};

BetterCard.Header = CardHeader;
BetterCard.Image = CardImage;
BetterCard.Content = CardContent;

interface BetterCardChildrenProps extends PropsWithChildren {
  className?: string;
}


function CardHeader({ children, className }: BetterCardChildrenProps) {
  return (
    <div className={`card-header ${className}`}>
      {children}
    </div>
  );
}

type CardImageProps = Pick<BetterCardChildrenProps, 'className'> & {
  src: string;
  alt: string;
}

function CardImage({ src, alt, className }: CardImageProps) {
  return (
    <div className={`"card-image ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

function CardContent({ children, className }: BetterCardChildrenProps) {
  return (
    <div className={`"card-content ${className}`}>
      {children}
    </div>
  );
}