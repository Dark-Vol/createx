import CoursesItem from '@/pages/homepage/chunk/courses/CoursesItem';

const CoursesItemImage1 = '/homepage/courses/courses-person-1.png';
const CoursesItemImage2 = '/homepage/courses/courses-person-2.png';
const CoursesItemImage3 = '/homepage/courses/courses-person-3.png';
const CoursesItemImage4 = '/homepage/courses/courses-person-4.png';
const CoursesItemImage5 = '/homepage/courses/courses-person-5.png';
const CoursesItemImage6 = '/homepage/courses/courses-person-6.png';

import './CoursesItems.scss';

const CoursesItems = () => {
  const dataCourses = [
    {
      src: CoursesItemImage1,
      sphere: 'Marketing',
      title: 'The Ultimate Google Ads Training Course',
      price: 100,
      author: 'Jerome Bell',
    },
    {
      src: CoursesItemImage2,
      sphere: 'Management',
      title: 'Prduct Management Fundamentals',
      price: 480,
      author: 'Marvin McKinney',
    },
    {
      src: CoursesItemImage3,
      sphere: 'HR & Recruting',
      title: 'HR  Management and Analytics',
      price: 200,
      author: 'Leslie Alexander Li',
    },
    {
      src: CoursesItemImage4,
      sphere: 'Marketing',
      title: 'Brand Management & PR Communications',
      price: 530,
      author: 'Kristin Watson',
    },
    {
      src: CoursesItemImage5,
      sphere: 'Management',
      title: 'Business Development Management',
      price: 400,
      author: 'Dianne Russell',
    },
    {
      src: CoursesItemImage6,
      sphere: 'Design',
      title: 'Graphic Design Basic',
      price: 500,
      author: 'Guy Hawkins',
    },
  ];

  return (
    <div className="courses-grid-container">
      {dataCourses.map((course, index) => (
        <CoursesItem key={index} course={course} />
      ))}
    </div>
  );
};

export default CoursesItems;