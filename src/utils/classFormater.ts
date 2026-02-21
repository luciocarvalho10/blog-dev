import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function classFormater(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}