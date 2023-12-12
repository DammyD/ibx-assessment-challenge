import { MouseEventHandler } from "react";

export interface CustomButtonProps{
title: string;
containerStyles?: string;
handleClick?: MouseEventHandler<HTMLButtonElement>;
btnType?: "button" | "submit";
}

export interface SearchCollectionProps {
    collection: string;
    setCollection: (collection: string) => void;
}

export interface BookProps{
    id: number;
    title: string;
    author?: string;
    publication_year?: number;
    genre?: string[];
    description?: string;
    cover_image: string;
}

export interface CardProps{
    id: number;
    image: string;
    name: string;
    title: string;
}
export interface CoursesCardProps{
    id: number;
    image: string;
    name: string;
    title: string;
    student: string;
    award: string;
    subtitle: string;
    subImage: string;
    substudent: string;
    subname: string;
}
export interface TopCoursesCardProps{
    id: number;
    image: string;
    name: string;
    title: string;
    student: string;
    award: string;
}



