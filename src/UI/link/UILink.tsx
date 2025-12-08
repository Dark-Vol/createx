import { Link } from 'react-router-dom';

import './UILink.scss';

interface UILinkProps {
  isBg: boolean;
  whoElem: string;
  link: string;
  title: string;
  otherProperties?: string;
}

const UILink = ({ isBg, whoElem, link, title, otherProperties }: UILinkProps) => {
  const sizeClass = whoElem === 'large' ? 'ui-link-large' : whoElem === 'regular' ? 'ui-link-regular' : 'ui-link-small';
  const variantClass = isBg ? 'ui-link-primary' : 'ui-link-outline';

  return (
    <Link to={link} className={`ui-link ${sizeClass} ${variantClass} ${otherProperties || ''}`}>
      {title}
    </Link>
  );
};

export default UILink;