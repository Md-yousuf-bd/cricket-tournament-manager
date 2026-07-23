import type { IconType } from "react-icons";

interface StatCardProps {
    title: string;
    value: number;
    icon: IconType;
    color: string;
}

const  StatCard = (
      {
        title,
        value,
        icon: Icon,
        color,
    }: StatCardProps) =>{
       return(
        <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between">
            <div>
                <p className="text-gray-500">{title}</p>
                <h2 className="text-3xl font-bold mt-2">{value}</h2>
            </div>
            <div className={`${color} p-4 rounded-full text-white`}>
                <Icon size={28} />
            </div>
        </div>
       );
    };

    export default StatCard;