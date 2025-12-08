import useCheckSphere from '@/hooks/useCheckSphere';
import { CourseTypes } from '@/types/homepage/course/course.types';

import './CoursesItem.scss';

interface CoursesItemProps {
  course: CourseTypes;
}

const CoursesItem = ({ course }: CoursesItemProps) => {
  const { src, price, title, sphere, author } = course;
  const colorSphere = useCheckSphere(sphere);

  return (
    <div className="course-card">
      <div>
        <img className="course-card-image" src={src} alt={title} />
      </div>
      <div className="course-card-content">
        <div>
          <h5 className={`course-card-sphere ${colorSphere}`}>{sphere}</h5>
        </div>
        <p className="course-card-title">{title}</p>
        <div className="course-card-info">
          <span className="course-card-price">${price}</span>
          <span className="course-card-separator">|</span>
          <span className="course-card-author">by {author}</span>
        </div>
      </div>
    </div>
  );
};

export default CoursesItem;