"use client";

import { useParams } from "next/navigation";

export default function Show(){

    const {id} = useParams();
    return (
        <div>
            Bienvenue dans la page de l'application {id}
        </div>
    )
}