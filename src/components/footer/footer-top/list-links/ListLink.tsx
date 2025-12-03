import { Link } from 'react-router-dom';

interface ListLinkProps {
  title: string;
  link: string;
}

const ListLink = ({ title, link }: ListLinkProps) => {
  return (
    <li className="group/edit">
      <Link to={link} className="group-hover/edit:underline group-hover/edit:text-white duration-300">
        {title}
      </Link>
    </li>
  );
};

export default ListLink;