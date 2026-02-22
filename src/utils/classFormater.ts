import {type ClassValue, clsx} from 'clsx';
import { ClassNameValue, twMerge } from 'tailwind-merge';

export function classFormater(...inputs: ClassValue[] & ClassNameValue) {
    // return twMerge(clsx(inputs));
    return clsx(twMerge(inputs));
    // return clsx(inputs);
}