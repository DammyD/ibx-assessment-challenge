import React from 'react'
import Image from 'next/image';

export interface SubCoursesCardProps{
    id: number;
    image: string;
    name: string;
    title: string;
}

const SubCoursesCard: React.FC<SubCoursesCardProps> = ({ id, image, name, title }) => (
    <div>
      <Image src={image} alt={name} width={100} height={100} />
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );

const SubCourse = () => {

     const subCourses = [
        {id: 1,
            image: '/assets/unsplash_qnt9iigV444.png',
            name: 'Googe Ads Training 2021: Profit With Pay',
            title: 'Lesson',
          },
        // {id: 2,
        //     image: '/assets/unsplash_qnt9iigV444.png',
        //     name: 'Googe Ads Training 2021: Profit With Pay',
        //     title: 'Lesson',
        //   },
        // {id: 3,
        //     image: '/assets/unsplash_qnt9iigV444.png',
        //     name: 'Googe Ads Training 2021: Profit With Pay',
        //     title: 'Lesson',
        //   },
        // {id: 4,
        //     image: '/assets/unsplash_qnt9iigV444.png',
        //     name: 'Googe Ads Training 2021: Profit With Pay',
        //     title: 'Lesson',
        //   },
      ];
      return (
        <div>
          {subCourses.map((course) => (
            <SubCoursesCard {...course} />
          ))}
        </div>
      );
    };
export default SubCourse