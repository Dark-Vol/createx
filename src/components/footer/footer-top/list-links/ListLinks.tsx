import { ReactNode } from 'react';

interface ListLinksProps {
  title: string;
  children: ReactNode;
}

const ListLinks = ({ title, children }: ListLinksProps) => {
  return (
    <div>
      <h4 className="font-bold text-base tracking-wider uppercase mb-3">{title}</h4>
      <ul className="flex flex-col gap-2 text-sublink text-base">{children}</ul>
    </div>
  );
};

export default ListLinks;