import type { Photo } from "../../data/types";

type Props = {
  photo: Photo;
  onClick: () => void;
};

function ArchiveCard({ photo, onClick }: Props) {
  return (
    <article
      className="archive-card"
      onClick={onClick}
    >
      <img
        src={photo.image}
        alt={photo.title}
      />

<h3>{photo.title}</h3>

<span>{photo.location}</span>
    </article>
  );
}

export default ArchiveCard;