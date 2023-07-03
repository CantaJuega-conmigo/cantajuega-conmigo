import styles from "../styles/Membresias.module.css";
import firstbackground from "../../public/img/Untitled_Artwork 3.png";
import secondbackground from "../../public/img/Untitled_Artwork 5.png";
import { Membership } from "@/types/membership.type";
import { useEffect, useState } from "react";
import { getAllMebreships } from "@/functions/memership.query";
import MembershipCard from "@/components/membership/MembershipCard";
export default function Membresias() {
  const [memberships, setMemberships] = useState<Membership[]>([
    {
      id: '',
      name: 'Anual',
      description: 'string',
      price: 5,
      duration: 5,
      therapeuticTools: true,
      music: true,
      videos: true,
      recurrenteId: 'string',
      status: 'string'
    }
  ]);
  useEffect(() => {
    getAllMebreships(setMemberships);
  }, []);
  const color: string[] = ["#f08d0d", "#39a1bb", "#5e139c", "#eb2f06"];
  const image: any[] = [
    firstbackground,
    secondbackground,
    firstbackground,
    secondbackground,
  ];

  return (
    <main className="flex flex-col gap-5">

      <header>
        <div className="h-60 bg-[#fada4d]">
          <div
            className="w-full h-full bg-cover sm:bg-center flex justify-center items-center"
            style={{
              backgroundImage:
                "url('img/Untitled_Artwork 1.png'), url('img/Untitled_Artwork 5.png')",
            }}
          >
            <h1 className="font-[Kidz] text-6xl text-white">MEMBRESÍAS</h1>
          </div>
        </div>
      </header>

      <main className="flex justify-around">
        <MembershipCard image={firstbackground} color="#fada4d" membership={memberships[0]} />
        <MembershipCard image={firstbackground} color="#fada4d" membership={memberships[0]} />
      </main>



      <section>
        <div className="container mx-auto px-4 lg:px-2 ">
          <header className="my-6">
            <h1 className="font-[Kidz] text-center text-5xl text-blue">
              Membresías Canta Juega Conmigo
            </h1>
          </header>

          
        </div>
      </section>

    </main>
  );
}
