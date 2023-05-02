import { Fragment } from "react";
import './card-component.css';

export default function Card({ monster }) {
    return (
        <div className="monster-card" key={monster.id}>
            <h1 className="monster-title">{monster.name}</h1>
            <p className="monster-email">{monster.email}</p>
        </div>
    )
}