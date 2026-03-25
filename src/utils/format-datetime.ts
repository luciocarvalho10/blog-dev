import {format} from "date-fns";
import {ptBR as locale} from "date-fns/locale";
import { formatDistanceToNow as dateFnsFormatDistanceToNow } from "date-fns/formatDistanceToNow";

export function formatDateTime(rawDate: string): string {
    const date = new Date(rawDate);

    return format(date, "dd/MM/yyyy 'às' HH'h'mm", { locale })
}

export function formatDistanceToNow(rawDate: string): string {
    const date = new Date(rawDate);

    return dateFnsFormatDistanceToNow(date, { locale, addSuffix: true })
}