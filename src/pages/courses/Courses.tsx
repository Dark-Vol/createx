import CoursesItem from '@/pages/homepage/chunk/courses/CoursesItem';
import UILink from '@/UI/link/UILink';

import './Courses.scss';

const Courses = () => {
  const allCourses = [
    {
      src: '/homepage/courses/courses-person-1.png',
      sphere: 'Marketing',
      title: 'The Ultimate Google Ads Training Course',
      price: 100,
      author: 'Jerome Bell',
    },
    {
      src: '/homepage/courses/courses-person-2.png',
      sphere: 'Management',
      title: 'Prduct Management Fundamentals',
      price: 480,
      author: 'Marvin McKinney',
    },
    {
      src: '/homepage/courses/courses-person-3.png',
      sphere: 'HR & Recruting',
      title: 'HR  Management and Analytics',
      price: 200,
      author: 'Leslie Alexander Li',
    },
    {
      src: '/homepage/courses/courses-person-4.png',
      sphere: 'Marketing',
      title: 'Brand Management & PR Communications',
      price: 530,
      author: 'Kristin Watson',
    },
    {
      src: '/homepage/courses/courses-person-5.png',
      sphere: 'Management',
      title: 'Business Development Management',
      price: 400,
      author: 'Dianne Russell',
    },
    {
      src: '/homepage/courses/courses-person-6.png',
      sphere: 'Design',
      title: 'Graphic Design Basic',
      price: 500,
      author: 'Guy Hawkins',
    },
    {
      src: '/homepage/courses/courses-person-1.png',
      sphere: 'Development',
      title: 'Full-Stack Web Development',
      price: 600,
      author: 'John Doe',
    },
    {
      src: '/homepage/courses/courses-person-2.png',
      sphere: 'Marketing',
      title: 'Social Media Marketing Mastery',
      price: 350,
      author: 'Jane Smith',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="courses-page-hero">
        <div className="container">
          <div className="courses-breadcrumb">
            <UILink isBg={false} whoElem="regular" link="/" title="Home" />
            <span className="courses-breadcrumb-separator">/</span>
            <span className="courses-breadcrumb-text">Courses</span>
          </div>
          <h1 className="courses-page-title">Our Courses</h1>
          <p className="courses-page-description">
            Discover our comprehensive range of online courses designed to help you achieve your learning goals.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="courses-page-grid">
        <div className="container">
          <div className="courses-grid-container">
            {allCourses.map((course, index) => (
              <CoursesItem key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
