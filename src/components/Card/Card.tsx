import './Card.css';

type CardProps = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export const Card = ({ title, subtitle, image, description }: CardProps) => {
  return (
    <div className="card">
      {image &&
        (<div className="card-image">
          <img src={image} alt={title} />
        </div>)
      }
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <h2>{subtitle}</h2>
      </div>

      <div className="card-content"><p>{description}</p></div>
    </div>
  );
};