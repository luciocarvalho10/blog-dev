import {classFormater} from "@/utils/classFormater";


export default function Home() {
    return (
        <div >
            <h1 className={classFormater(
                "text-6xl font-bold " +
                "text-blue-500 " +
                "hover:text-blue-50 " +
                "hover:bg-blue-50 transition" +
                " durantion-1000")}
            >
                Texto h1
            </h1 >
        </div >
    );
}
