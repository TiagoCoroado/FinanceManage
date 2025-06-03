import React from "react";

export default function Menu() {
    return (
        <>
        <div className="menu">
            <ul>
                <li><a href="/despesas">Registar Despesa</a></li>
                <li><a href="/vencimentos">Registar Vencimento</a></li>
                <li><a href="/lista-despesas">Lista de Despesas</a></li>
            </ul>
        </div>
        </>
    );
}
