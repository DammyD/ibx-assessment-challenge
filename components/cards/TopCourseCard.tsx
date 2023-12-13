import { TopCoursesCardProps } from "@/types";
import Image from "next/image";
import { FaBookBookmark } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { CustomButton } from '..';

interface YourTopCoursesCardProps {
    course: TopCoursesCardProps;
}


const TopCourseCard = ({course}: YourTopCoursesCardProps) => {
    const {image, name, title, student, award, id} = course;
  return (
    <div className="card border px-3 py-3 bg-white rounded-md sm:gap-4">
         <div>
        <Image src={image} width={300} height={200} alt={name} className="card-image rounded-md" />
        </div>
        <div className="pt-4 capitalize">
            <h3 className="font-bold text-dark-25 capitalize whitespace-nowrap">{name}</h3>
            <div className="flex text-sm gap-2 mt-2">
            <p className="flex items-center gap-2 font-semibold text-[#737373]"><FaBookBookmark size="18" fill="#bdbdbd"/>{title}</p>
            <p className="flex items-center gap-2 whitespace-nowrap font-semibold text-[#737373]"><BsFillPersonFill size="18" fill="#bdbdbd"/>{student}</p>
            <p className="flex items-center gap-2 font-semibold text-[#737373]"><GiTrophyCup size="18" fill="#bdbdbd"/>{award}</p>
            </div>
        </div>
        <div>
        <CustomButton
        title="Start Course"
        containerStyles="bg-dark-100
        text-white rounded-2xl mt-4 sm:mt-10"/>
    </div>
    </div>
  )
}

export default TopCourseCard