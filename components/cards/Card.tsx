import { CardProps } from "@/types";
import Image from "next/image";

interface InstructorCardProps {
    card: CardProps;
}

const Card = ({ card }: InstructorCardProps) => {
    const {image, name, title, id} = card;
    return (
      <div key={id} className="card border p-3 bg-white rounded-md max-w-xs mx-auto sm:max-w-none sm:w-full">
        <div>
        <Image src={image} width={300} height={200} alt={name} className="card-image rounded-md" />
        </div>
        <div className="card-content flex items-center justify-between gap-2 mt-4 sm:mt-8">
          <h2 className="card-name whitespace-nowrap text-sm font-semibold text-[#615858]">{name}</h2>
          <p className="card-title whitespace-nowrap text-sm text-[#908a8a]">{title}</p>
        </div>
      </div>
    );
  };
  
  export default Card;