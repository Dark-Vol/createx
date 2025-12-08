import CoursesItems from '@/pages/homepage/chunk/courses/CoursesItems';
import UILink from '@/UI/link/UILink';

import './Courses.scss';

const Courses = () => {
  return (
    <div className="courses-section">
      <div className="container">
        <div>
          <div className="courses-header">
            <div>
              <h4 className="subtitle">Ready to learn?</h4>
              <h2 className="title">Featured Courses</h2>
            </div>
            <div>
              <UILink isBg={false} whoElem="large" link="courses" title="View all courses" />
            </div>
          </div>
          <CoursesItems />
        </div>
      </div>
    </div>
  );
};

export default Courses;