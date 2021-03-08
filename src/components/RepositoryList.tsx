import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useState, useEffect } from "react";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}


export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, [])  // se o segundo parâmetro de useEffect for um array vazio
    // a função vai executar uma única vez qdo o componente for carregado na tela
    // chamadas de api geralmente são feitas aqui

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {/* como iterar em registros json */}
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}

            </ul>
        </section>
    );
}